const { jod_dummy } = require('../../../../models');

class JodDummyRepository {
    async createJodDummyAuto(data) {
        return await jod_dummy.create(data);
    }
    async getAllJodDummyUnfinished() {
        return await jod_dummy.findAll({
            where: { status: 'unfinished' },
        });
    }
    async updateJodDummy(id, data) {
        return await jod_dummy.update(data, { where: { id: id } });
    }
    // async getAllDummyNotAssigned() {
    //     return await dummy_jod.findAll({
    //         where: { status: 'notassigned' },
    //     });
    // }
}

module.exports = new JodDummyRepository();
