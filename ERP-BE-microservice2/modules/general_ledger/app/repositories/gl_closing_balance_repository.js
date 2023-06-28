const { Model } = require('sequelize');
const { GlAccountingPeriod, GlClosingBalance, GlCoa, GlCoaGroup, GlAccountType } = require('../../../../models');

class GlClosingBalanceRepository{
    async getClosingBalanceById(id) {
        return await GlClosingBalance.findByPk(id,{
            include:[
                {
                    model: GlCoa,
                    include: [{
                        model: GlCoaGroup,
                        include:[{
                            model: GlAccountType
                        }]
                    }
                    ]
                },
                {
                    model: GlAccountingPeriod
                }
            ]
        });
    }
}

module.exports = new GlClosingBalanceRepository()