const JodDummyRepository = require('../repositories/jod_dummy_repository');

class JodDummyService {
    async createJodDummyAuto(data) {
        return await JodDummyRepository.createJodDummyAuto(data);
    }
    async getAllJodDummyUnfinished() {
        return await JodDummyRepository.getAllJodDummyUnfinished();
    }
}

module.exports = new JodDummyService();
