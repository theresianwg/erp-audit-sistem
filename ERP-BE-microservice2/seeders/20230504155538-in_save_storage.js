'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('in_save_storages', [
      {
        "id": 1,
        "item_id": "IMG0002",
        "item_detail_id": null,
        "quantity": 5,
        "item_unit": "Set",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 2,
        "item_id": "IMG0001",
        "item_detail_id": null,
        "quantity": 5,
        "item_unit": "Set",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 3,
        "item_id": "IRM0002",
        "item_detail_id": "IRM0002-20230615-0900",
        "quantity": 50,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 4,
        "item_id": "IRM0003",
        "item_detail_id": "IRM0003-20230615-0900",
        "quantity": 50,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 5,
        "item_id": "IRM0001",
        "item_detail_id": "IRM0001-20230601-0900",
        "quantity": 2,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 6,
        "item_id": "IRM0001",
        "item_detail_id": "IRM0001-20230610-0900",
        "quantity": 2,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 7,
        "item_id": "IRM0001",
        "item_detail_id": "IRM0001-20230615-0900",
        "quantity": 10,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 8,
        "item_id": "IRM0008",
        "item_detail_id": "IRM0008-20230615-0900",
        "quantity": 20,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 9,
        "item_id": "IRM0009",
        "item_detail_id": "IRM0009-20230615-0900",
        "quantity": 50,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 10,
        "item_id": "IRM0010",
        "item_detail_id": "IRM0010-20230615-0900",
        "quantity": 20,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 11,
        "item_id": "IRM0011",
        "item_detail_id": "IRM0011-20230615-0900",
        "quantity": 20,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 12,
        "item_id": "IRM0012",
        "item_detail_id": "IRM0012-20230615-0900",
        "quantity": 20,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      },
      {
        "id": 13,
        "item_id": "IRM0013",
        "item_detail_id": "IRM0013-20230615-0900",
        "quantity": 20,
        "item_unit": "Kg",
        "createdAt": "2023-06-20 16:41:14",
        "updatedAt": "2023-06-20 16:41:14"
      }
     ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('in_save_storages', null, {});
  }
};
