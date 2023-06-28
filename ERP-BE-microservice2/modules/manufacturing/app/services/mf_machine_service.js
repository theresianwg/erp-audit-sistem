const MachineRepository = require('../repositories/mf_machine_repository');

class MachineService {
    async createMachine(data) {
        return await MachineRepository.createMachine(data);
    }
    async getAllMachine() {
        return await MachineRepository.getAllMachine();
    }
    async getMachineById(id) {
        return await MachineRepository.getMachineById(id);
    }
    async getMachineByName(name) {
        return await MachineRepository.getMachineByName(name);
    }
    async deleteMachineById(id) {
        return await MachineRepository.deleteMachineById(id);
    }
    async updateMachine(id, data) {
        return await MachineRepository.updateMachine(id, data);
    }
}

module.exports = new MachineService();
