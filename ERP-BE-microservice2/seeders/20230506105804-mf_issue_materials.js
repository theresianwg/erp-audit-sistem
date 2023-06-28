'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_issue_materials',
            [
                {
                    id: 'ISM20230560770',
                    po_id: 'PDO20230560300',
                    item_id: 'IRM0001',
                    im_qty: 2,
                    im_approval: 'Unapproved',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_issue_materials', null, {});
    },
};
