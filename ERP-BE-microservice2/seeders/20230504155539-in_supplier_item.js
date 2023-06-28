'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('in_supplier_items', [
      {
        id: 1,
        id_supplier: "SU0001",
        id_item: "IRM0001",
        price: 10000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        id_supplier: "SU0001",
        id_item: "IRM0002",
        price: 20000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        id_supplier: "SU0001",
        id_item: "IRM0003",
        price: 30000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        id_supplier: "SU0002",
        id_item: "IRM0001",
        price: 12000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        id_supplier: "SU0002",
        id_item: "IRM0002",
        price: 22000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        id_supplier: "SU0002",
        id_item: "IRM0003",
        price: 32000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        id_supplier: "SU0003",
        id_item: "IRM0001",
        price: 13000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        id_supplier: "SU0003",
        id_item: "IRM0002",
        price: 23000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        id_supplier: "SU0003",
        id_item: "IRM0003",
        price: 33000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        id_supplier: "SU0004",
        id_item: "IRM0008",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        id_supplier: "SU0004",
        id_item: "IRM0009",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        id_supplier: "SU0004",
        id_item: "IRM0010",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        id_supplier: "SU0004",
        id_item: "IRM0011",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        id_supplier: "SU0004",
        id_item: "IRM0012",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        id_supplier: "SU0004",
        id_item: "IRM0013",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        id_supplier: "SU0004",
        id_item: "IRM0014",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        id_supplier: "SU0004",
        id_item: "IRM0015",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        id_supplier: "SU0005",
        id_item: "IRM0016",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:19,
        id_supplier: "SU0005",
        id_item: "IRM0017",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:20,
        id_supplier: "SU0005",
        id_item: "IRM0018",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:21,
        id_supplier: "SU0005",
        id_item: "IRM0019",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:22,
        id_supplier: "SU0005",
        id_item: "IRM0020",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:23,
        id_supplier: "SU0006",
        id_item: "IRM0021",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:24,
        id_supplier: "SU0006",
        id_item: "IRM0022",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:25,
        id_supplier: "SU0006",
        id_item: "IRM0023",
        price: 14000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:26,
        id_supplier: "SU0006",
        id_item: "IRM0024",
        price: 24000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:27,
        id_supplier: "SU0006",
        id_item: "IRM0025",
        price: 34000,
        delivery_time: "00:30:00",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('in_supplier_items', null, {});
  }
};
