'use strict';

const { FamilyMember } = require('../../../../models');

class FamilyMemberRepository {
    async getAllFamilyMembers() {
        return await FamilyMember.findAll();
    }

    async getFamilyMemberById(nik) {
        return await FamilyMember.findByPk(nik);
    }

    async createFamilyMember(data) {
        return await FamilyMember.create(data);
    }

    async updateFamilyMember(nik, data) {
        return await FamilyMember.update(data, { where: { nik } });
    }

    async deleteFamilyMember(nik) {
        return await FamilyMember.destroy({ where: { nik } });
    }
}

module.exports = new FamilyMemberRepository();
