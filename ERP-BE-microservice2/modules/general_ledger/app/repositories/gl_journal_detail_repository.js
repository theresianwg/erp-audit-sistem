const {
    GlJournal,
    GlAccountingPeriod,
    GlAccountType,
    GlCoa,
    GlCoaGroup,
    GlJournalDetail,
} = require('../../../../models');
const { Op, Sequelize } = require('sequelize');
class GlJournalDetailRepository {
    async createJournalDetail(data) {
        return await GlJournalDetail.bulkCreate(data);
    }
    async createJournalDetailSingle(data) {
        return await GlJournalDetail.create(data);
    }
    async updateJournalDetail(id, data) {
        return await GlJournalDetail.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteJournalDetail(id) {
        return await GlJournalDetail.destroy({
            where: {
                id: id,
            },
        });
    }
    async getJournalDetailById(id) {
        return await GlJournalDetail.findByPk(id, {
            include: [
                {
                    model: GlJournal,
                },
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include: [
                        {
                            model: GlCoaGroup,
                        },
                        {
                            model: GlAccountType,
                        },
                    ],
                },
            ],
        });
    }
    async getAllJournalDetail() {
        return await GlJournalDetail.findAll({
            include: [
                {
                    model: GlJournal,
                },
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number']
                },
            ],
        });
    }
    async getAllJournalDetailByAccountType(id_account_type) {
        return await GlJournalDetail.findAll({
            include: [
                {
                    model: GlJournal,
                },
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include:[
                        {
                            model: GlAccountType,
                            where:{
                                id:id_account_type
                            }
                        }
                    ]
                },
            ],
        });
    }
}

module.exports = new GlJournalDetailRepository();
