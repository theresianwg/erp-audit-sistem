'use strict';

const ScheduleService = require('../services/scheduleService');
const PTKPService = require('../services/ptkpService');
const SalarySlipService = require('../services/SalarySlipService');
const EmployeeService = require('../../../main/app/services/employeeService');
const BukpotRepository = require('../repositories/BukpotRepository');
const sumIncomeBasedOnType =  require('../utils/sumIncomeBasedOnType');
const sumReductionBasedOnType =  require('../utils/sumReductionBasedOnType');

class BukpotService {
    getAllBukpots() {
        return BukpotRepository.getAllBukpots();
    }

    getBukpotById(id) {
        return BukpotRepository.getBukpotById(id);
    }

    async getIncome(salary_slips) {
        return sumIncomeBasedOnType(salary_slips);
    }

    async getReduction(salary_slips) {
        const reduction = sumReductionBasedOnType(salary_slips)
        
        return {
            pajakTelahDipotong: reduction.pajakTelahDipotong,
            iuranPensiun: reduction.pensiun + reduction.asuransi
        }
    }

    getPenghasilanBruto(data) {
        const { gaji, tunjanganPPh, tunjanganLain, honorariumImbalan, premiAsuransi, natura, gratifikasiTHR } = data;

        let sum = 0;

        if (gaji) sum += gaji;
        if (tunjanganPPh) sum += tunjanganPPh;
        if (tunjanganLain) sum += tunjanganLain;
        if (honorariumImbalan) sum += honorariumImbalan;
        if (premiAsuransi) sum += premiAsuransi;
        if (natura) sum += natura;
        if (gratifikasiTHR) sum += gratifikasiTHR;

        return sum;
    }

    getBiayaJabatan(data) {
        let biaya_jabatan;

        if (!data.biayaJabatanPensiun) {
            const penghasilan_bruto = this.getPenghasilanBruto(data);

            biaya_jabatan = penghasilan_bruto * 5 / 100;
            if (biaya_jabatan > 6000000) biaya_jabatan = 6000000;
        }
        else biaya_jabatan = data.biayaJabatanPensiun;

        return biaya_jabatan;
    }

    getPengurangan(data) {
        const { biayaJabatanPensiun, iuranPensiun } = data;

        return biayaJabatanPensiun + iuranPensiun;
    }

    getPenghasilanNeto(data) {
        return this.getPenghasilanBruto(data) - this.getPengurangan(data);
    }

    getNetoSebelumnya(data) {
        let netoSebelum;

        if (!data.netoSebelum) {
            // logic pengambilan bisa ditambah di sini
            netoSebelum = 0; // sementara
        }
        else netoSebelum = data.netoSebelum;

        return netoSebelum;
    }

    getTotalNeto(data) {
        return this.getNetoSebelumnya(data) + this.getPenghasilanNeto(data);
    }

    async getPTKPAmount(data) {
        let amount;

        if (!data.ptkp) {
            const ptkp = await PTKPService.getPTKPById(data.ptkpId);
            amount = ptkp.amount;
        }
        else amount = data.ptkp.amount;

        return amount;
    }

    async getPenghasilanKenaPajak(data) {
        const ptkpAmount = await this.getPTKPAmount(data);
        const total_neto = this.getTotalNeto(data);

        const penghasilan_kena_pajak = total_neto - ptkpAmount;

        if(penghasilan_kena_pajak > 0)
            return penghasilan_kena_pajak;
        else return 0;
    }

    async getPajak(data) {
        const penghasilan_kena_pajak = await this.getPenghasilanKenaPajak(data);

        let pajak;
        if (penghasilan_kena_pajak > 0){
            const pajak_percentage = [5 / 100, 15 / 100, 25 / 100, 30 / 100, 35 / 100];

            if (penghasilan_kena_pajak <= 60000000) 
            {
                pajak = penghasilan_kena_pajak * pajak_percentage[0];
            }
            else if (penghasilan_kena_pajak <= 250000000)
            { 
                pajak = 60000000 * pajak_percentage[0] 
                        + (penghasilan_kena_pajak - 60000000) * pajak_percentage[1];
            }
            else if (penghasilan_kena_pajak <= 500000000)
            {
                pajak = 250000000 * pajak_percentage[1] 
                        + (penghasilan_kena_pajak - 250000000) * pajak_percentage[2];
            }
            else if (penghasilan_kena_pajak <= 1000000000)
            {
                pajak = 500000000 * pajak_percentage[2] 
                        + (penghasilan_kena_pajak - 500000000) * pajak_percentage[3];
            }
            else
            {
                pajak = 1000000000 * pajak_percentage[3] 
                        + (penghasilan_kena_pajak - 1000000000) * pajak_percentage[4];
            }


        }
        else pajak = 0;

        return pajak;
    }

    async getPajakTerutang(data) {
        let pajak;

        if (!data.pajak) pajak = await this.getPajak(data);
        else pajak = data.pajak;

        const pajakTelahDipotong = this.getPajakTelahDipotong;

        return (pajakTelahDipotong > 0) ?  pajak - pajakTelahDipotong : pajak;
    }

    async createBukpot(data) {
        const { employeeId, pemotongId, year } = data;

        const employee = await EmployeeService.getEmployeeById(employeeId);

        const ptkpId = employee.ptkpId;
        data = {...data, ptkpId};

        const salary_slips = await SalarySlipService.getSalarySlipByYear(data);

        const income = await this.getIncome(salary_slips);
        data = {...data, ...income};

        const reduction = await this.getReduction(salary_slips);
        data = {...data, ...reduction};

        const biayaJabatanPensiun = await this.getBiayaJabatan(data);
        data = {...data, biayaJabatanPensiun};
    

        const netoSebelum = await this.getNetoSebelumnya(data);
        data = {...data, netoSebelum};

        const pajak = await this.getPajak(data);
        data = {...data, pajak};

        const pajakLunas = (data.pajakLunas > 0) ? data.pajakLunas : await this.getPajakTerutang(data);
        data = {...data, pajakLunas};

        return BukpotRepository.createBukpot(data);
    }

    updateBukpot(id, data) {
        return BukpotRepository.updateBukpot(id, data);
    }

    deleteBukpot(id) {
        return BukpotRepository.deleteBukpot(id);
    }

    async perhitunganBukpot(data) {
        const penghasilan_bruto = this.getPenghasilanBruto(data);
        const pengurangan = this.getPengurangan(data);
        const penghasilan_neto = this.getPenghasilanNeto(data);
        const total_neto = this.getTotalNeto(data);
        const penghasilan_kena_pajak = await this.getPenghasilanKenaPajak(data);
        const pajak_terutang = await this.getPajakTerutang(data);

        return {
            id: data.id,
            employee_id: data.employeeId,
            pemotong_id: data.pemotongId,
            tanggal_dibuat: data.createdAt,
            no1: data.gaji,
            no2: data.tunjanganPPh,
            no3: data.tunjanganLain,
            no4: data.honorariumImbalan,
            no5: data.premiAsuransi,
            no6: data.natura,
            no7: data.gratifikasiTHR,
            no8: penghasilan_bruto,
            no9: data.biayaJabatanPensiun,
            no10: data.iuranPensiun,
            no11: pengurangan,
            no12: penghasilan_neto,
            no13: data.netoSebelum,
            no14: total_neto,
            no15: data.ptkp.amount,
            no16: penghasilan_kena_pajak,
            no17: data.pajak,
            no18: data.pajakTelahDipotong,
            no19: pajak_terutang,
            no20: data.pajakLunas
        }
    }

}

module.exports = new BukpotService();
