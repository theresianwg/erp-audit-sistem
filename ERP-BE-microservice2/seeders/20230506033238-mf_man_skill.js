'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_man_skills',
            [
                {
                    id: 'MAS1955',
                    ms_skill: 'Menyusun',
                    ms_skill_sallary: 4500000,
                    ms_skill_wroking_hour: '08:00:00',
                    ms_skill_costph: 28125,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MAS1956',
                    ms_skill: 'Memasak',
                    ms_skill_sallary: 4500000,
                    ms_skill_wroking_hour: '08:00:00',
                    ms_skill_costph: 28125,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_man_skills', null, {});
    },
};
