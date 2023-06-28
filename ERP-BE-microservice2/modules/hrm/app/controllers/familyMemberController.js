'use strict';

const FamilyMemberService = require('../services/familyMemberService');

class FamilyMemberController {
    async getAllFamilyMembers(req, res, next) {
        try {
            const reqHR = await FamilyMemberService.getAllFamilyMembers();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getFamilyMemberById(req, res, next) {
        try {
            const reqHR = await FamilyMemberService.getFamilyMemberById(
                req.params.id,
            );
            if (!reqHR) {
                return res
                    .status(404)
                    .json({ message: 'FamilyMember not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createFamilyMember(req, res, next) {
        try {
            const reqHR = await FamilyMemberService.createFamilyMember(
                req.body,
            );
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateFamilyMember(req, res, next) {
        try {
            const { nik } = req.body;
            if (!nik) {
                return res.status(400).json({ message: 'NIK is required' });
            }

            const result = await FamilyMemberService.updateFamilyMember(
                nik,
                req.body,
            );
            if (result[0] === 0) {
                return res
                    .status(404)
                    .json({ message: 'FamilyMember not found' });
            }
            res.json({ message: 'FamilyMember updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteFamilyMember(req, res, next) {
        try {
            const { nik } = req.body;
            if (!nik) {
                return res.status(400).json({ message: 'NIK is required' });
            }

            const result = await FamilyMemberService.deleteFamilyMember(nik);
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'FamilyMember not found' });
            }
            res.json({ message: 'FamilyMember deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new FamilyMemberController();
