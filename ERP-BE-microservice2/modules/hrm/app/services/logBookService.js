'use strict';

const LogBookRepository = require('../repositories/LogBookRepository');

class LogBookService {
    getAllLogBooks() {
        return LogBookRepository.getAllLogBooks();
    }

    getLogBookById(id) {
        return LogBookRepository.getLogBookById(id);
    }

    createLogBook(data) {
        return LogBookRepository.createLogBook(data);
    }

    updateLogBook(id, data) {
        return LogBookRepository.updateLogBook(id, data);
    }

    deleteLogBook(id) {
        return LogBookRepository.deleteLogBook(id);
    }
}

module.exports = new LogBookService();
