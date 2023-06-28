const manSkillRepository = require('../repositories/mf_manSkillRepository');
const { generateManSkillId } = require('../utils/mf_generateId');
const { calculateCostPH } = require('../utils/mf_calculations');

class ManSkillService {
    async getAll() {
        try {
            const manSkill = await manSkillRepository.getAll();
            return manSkill;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await manSkillRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateManSkillId();

            const workingHour = data.ms_skill_wroking_hour;

            // Parsing waktu kerja menjadi komponen-komponennya
            const [hour, minute, second] = workingHour.split(':');

            // Konversi ke bilangan bulat
            const hourInt = parseInt(hour);
            const minuteInt = parseInt(minute);
            const secondInt = parseInt(second);

            // Hitung total jam kerja dalam format desimal
            const totalHours = hourInt + minuteInt / 60 + secondInt / 3600;

            const sallary = data.ms_skill_sallary / 20;

            // Hitung biaya per jam
            const biayaPerJam = sallary / totalHours;
            data.ms_skill_costph = biayaPerJam;
            // data.ms_skill_costph = calculateCostPH(data.ms_skill_wroking_hour,data.ms_skill_sallary);
            // console.log(data.ms_skill_costph);
            const newManSkill = await manSkillRepository.create(data);
            return newManSkill;
        } catch (err) {
            throw err;
        }
    }

    async update(id, man) {
        return await manSkillRepository.update(id, man);
    }

    async delete(id) {
        return await manSkillRepository.delete(id);
    }
}

module.exports = new ManSkillService();
