const machineUsageRepository = require('../repositories/mf_machineUsageRepository');
const { generateMachineUsageId } = require('../utils/mf_generateId');

class MachineUsageService {
    async getAll() {
        try {
            const machineUsage = await machineUsageUsageRepository.getAll();
            return machineUsage;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await machineUsageRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateMachineUsageId();

            const startDate = new Date(data.mu_start);
            const endDate = new Date(data.mu_end);

            const timeDiff = endDate - startDate;

            const seconds = Math.floor(timeDiff / 1000); // Selisih waktu dalam detik
            const minutes = Math.floor(timeDiff / (1000 * 60)); // Selisih waktu dalam menit
            const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Selisih waktu dalam jam

            const totalSeconds = seconds % 60;
            const totalMinutes = Math.floor(minutes % 60);
            const totalHours = Math.floor(hours);

            const usage = totalHours + ':' + totalMinutes + ':' + totalSeconds;

            data.mu_machine_usage = usage;

            const newMachine = await machineUsageRepository.create(data);
            return newMachine;
        } catch (err) {
            throw err;
        }
    }

    async update(id, machine) {
        return await machineUsageRepository.update(id, machine);
    }

    async delete(id) {
        return await machineUsageRepository.delete(id);
    }
}

module.exports = new MachineUsageService();
