const machineRepository = require('../repositories/mf_machineRepository');
const { generateMachineId } = require('../utils/mf_generateId');

class MachineService {
    async getAll() {
        try {
            const machine = await machineRepository.getAll();
            return machine;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await machineRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateMachineId();

            const workingHour = data.m_working_hour;

            // Parsing waktu kerja menjadi komponen-komponennya
            const [hour, minute, second] = workingHour.split(':');

            // Konversi ke bilangan bulat
            const hourInt = parseInt(hour);
            const minuteInt = parseInt(minute);
            const secondInt = parseInt(second);

            // Hitung total jam kerja dalam format desimal
            const totalHours = hourInt + minuteInt / 60 + secondInt / 3600;

            // Hitung biaya per jam
            const biayaPerJam = data.m_cost / totalHours;
            data.m_costph = biayaPerJam;
            const newMachine = await machineRepository.create(data);
            console.log(biayaPerJam);
            return newMachine;
        } catch (err) {
            throw err;
        }
    }

    async update(id, data) {
        const workingHour = data.m_working_hour;

        // Parsing waktu kerja menjadi komponen-komponennya
        const [hour, minute, second] = workingHour.split(':');

        // Konversi ke bilangan bulat
        const hourInt = parseInt(hour);
        const minuteInt = parseInt(minute);
        const secondInt = parseInt(second);

        // Hitung total jam kerja dalam format desimal
        const totalHours = hourInt + minuteInt / 60 + secondInt / 3600;

        // Hitung biaya per jam
        const biayaPerJam = data.m_cost / totalHours;
        data.m_costph = biayaPerJam;
        console.log(data.m_cost);
        console.log('test');
        const updateMachine = await machineRepository.update(id, data);
        return updateMachine;
    }

    async delete(id) {
        return await machineRepository.delete(id);
    }
}

module.exports = new MachineService();
