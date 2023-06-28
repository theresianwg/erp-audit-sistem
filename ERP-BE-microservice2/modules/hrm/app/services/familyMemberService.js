'use strict';

const FamilyMemberRepository = require('../repositories/familyMemberRepository');

class FamilyMemberService {
    getAllFamilyMembers() {
        return FamilyMemberRepository.getAllFamilyMembers();
    }

    getFamilyMemberById(id) {
        return FamilyMemberRepository.getFamilyMemberById(id);
    }

    createFamilyMember(data) {
        return FamilyMemberRepository.createFamilyMember(data);
    }

    updateFamilyMember(id, data) {
        return FamilyMemberRepository.updateFamilyMember(id, data);
    }

    deleteFamilyMember(id) {
        return FamilyMemberRepository.deleteFamilyMember(id);
    }
}

module.exports = new FamilyMemberService();
