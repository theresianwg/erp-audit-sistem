const {
    GlJournal,
    GlAccountingPeriod,
    GlNumbering,
    GlJournalDetail,
    GlCoa,
    GlCoaGroup,
    GlAccountType
} = require('../../../../models');
const {Op} = require('sequelize')
class GlJournalRepository {
    async getJournalByDate(start_date,end_date){
        return await GlJournal.findAll({
            where:{
                Journal_Post_Date: {
                    [Op.and] : {
                        [Op.gte] : new Date(start_date),
                        [Op.lte]: new Date(end_date)
                    }
                }
            },
            include:[{
                model:GlJournalDetail,
                include:[{
                    model:GlCoa,
                    include:[
                    {
                        model:GlCoaGroup
                    },
                    {
                        model: GlAccountType
                    }]
                }]
            }]
        })
    }
    async createJournal(data) {
        return await GlJournal.create(data);
    }
    async updateJournal(id, data) {
        return await GlJournal.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteJournal(id) {
        return await GlJournal.destroy({
            where: {
                id: id,
            },
        });
    }
    async getJournalByCode(code) {
        return await GlJournal.findOne({
            where: {
                Journal_Code: code,
            },
            include: [
                {
                    model: GlNumbering
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
    async getJournalByJournalRef(code){
        return await GlJournal.findOne({
            where:{
                Journal_Ref: code
            },
        })
    }
    async getJournalById(id) {
        return await GlJournal.findByPk(id, {
            include: [
                {
                    model: GlNumbering,
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
    async getLastJournal() {
        const lastRecord = await GlJournal.findOne({
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlNumbering,
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
        return lastRecord;
    }
    
    async getAllJournal() {
        return await GlJournal.findAll({
            include: [
                {
                    model: GlNumbering,
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
    async getAllJournalSort() {
        return await GlJournal.findAll({
            order:[['Journal_Post_Date','DESC']],
            include: [
                {
                    model: GlNumbering,
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }    
    async getAllJournalDetailByJournal(Journal_Code) {
        return await GlJournal.findOne({
            where:{
                Journal_Code: Journal_Code
            },
            include: [
                {
                    model: GlJournalDetail,
                    include:[
                        {
                            model:GlCoa
                        }
                    ]
                }
            ],
        });
    } 
}

module.exports = new GlJournalRepository();
