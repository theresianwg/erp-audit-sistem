const {GlCoa, GlCoaGroup } = require('../../../../models');
const GlJournalRepository = require('../repositories/gl_journal_repository')

const getDate = (command) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    switch (command) {
        case 'year':
            return `${year}`;
        case 'month':
            return `${month}`;
        case 'day':
            return `${day}`;
    }
};

const getLastCoaNumber = async (id_coa_group) => {
    return await GlCoa.findOne({
        where: {
            id_coa_group: id_coa_group,
        },
        order: [['Coa_Number', 'DESC']],
        attributes: ['Coa_Number'],
    });
};
const getLastAccountType = async (id_account_type) => {
    return await GlCoaGroup.findOne({
        where: {
            id_account_type: id_account_type,
        },
        order: [['CG_Code', 'DESC']],
        attributes: ['CG_Code'],
    });
};
const generateAccountingPeriodCode = () => {
    return 'AP' + getDate('year') + getDate('month');
};

const generateJournalCode = async () => {
    const LastJournal = await GlJournalRepository.getLastJournal()
    const LastJournalCode = LastJournal.dataValues.Journal_Code
    let lastDigit = LastJournalCode.slice(-5)
    let num = parseInt(lastDigit) + 1
    const d = new Date()
    let newJournalCode = "JV-"+d.getFullYear().toString()+"-"+ (d.getMonth()+1).toString().padStart(2,'0') + "-" + num.toString().padStart(5,'0')

    return newJournalCode
}

// const generateTransactionTypeCode = async (journal_source) => {
//     //JR.API
// }

const generateCoaCode = async (id_coa_group) => {
    const LastCoaNumber = await getLastCoaNumber(id_coa_group);
    return parseInt(LastCoaNumber.dataValues.Coa_Number + 1);
};

const generateCoaGroupCode = async (id_account_type) => {
    const LastAccountTypeNumber = await getLastAccountType(id_account_type);
    return parseInt(LastAccountTypeNumber + 1);
};

module.exports = {
    generateCoaCode,
    generateCoaGroupCode,
    generateAccountingPeriodCode,
    generateJournalCode,
};
