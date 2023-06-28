'use strict';

const { Op } = require('sequelize');
const { LogBook } = require('../../../../models');

class LogBookRepository {
    async getAllLogBooks() {
        return await LogBook.findAll();
    }

    async getLogBookById(id) {
        return await LogBook.findByPk(id);
    }

    async createLogBook(data) {
        return await LogBook.create(data);
    }

    async updateLogBook(id, data) {
        return await LogBook.update(data, { where: { id } });
    }

    async deleteLogBook(id) {
        return await LogBook.destroy({ where: { id } });
    }
}

module.exports = new LogBookRepository();
