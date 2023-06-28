'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('in_item_details', [
      {
        id: 'IRM0001-20230601-0900',
        id_item: 'IRM0001',
        buy_price: 12000,
        quantity: 40,
        date: new Date('2023/06/01'),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 'IRM0001-20230610-0900',
        id_item: 'IRM0001',
        buy_price: 12500,
        quantity: 30,
        date: new Date('2023/06/10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 'IRM0001-20230615-0900',
        id_item: 'IRM0001',
        buy_price: 13000,
        quantity: 30,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 'IRM0002-20230615-0900',
        id_item: 'IRM0002',
        buy_price: 12000,
        quantity: 100,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 'IRM0003-20230615-0900',
        id_item: 'IRM0003',
        buy_price: 22000,
        quantity: 100,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0008-20230615-0900',
        id_item: 'IRM0008',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0009-20230615-0900',
        id_item: 'IRM0009',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0010-20230615-0900',
        id_item: 'IRM0010',
        buy_price: 40000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0011-20230615-0900',
        id_item: 'IRM0011',
        buy_price: 100000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0012-20230615-0900',
        id_item: 'IRM0012',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0013-20230615-0900',
        id_item: 'IRM0013',
        buy_price: 12000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0014-20230615-0900',
        id_item: 'IRM0014',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0015-20230615-0900',
        id_item: 'IRM0015',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0016-20230615-0900',
        id_item: 'IRM0016',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0017-20230615-0900',
        id_item: 'IRM0017',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0018-20230615-0900',
        id_item: 'IRM0018',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0019-20230615-0900',
        id_item: 'IRM0019',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0020-20230615-0900',
        id_item: 'IRM0020',
        buy_price: 20000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0021-20230615-0900',
        id_item: 'IRM0021',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0022-20230615-0900',
        id_item: 'IRM0022',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0023-20230615-0900',
        id_item: 'IRM0023',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0024-20230615-0900',
        id_item: 'IRM0024',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 'IRM0025-20230615-0900',
        id_item: 'IRM0025',
        buy_price: 30000,
        quantity: 50,
        date: new Date('2023/06/15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('in_item_details', null, {})
  }
};
