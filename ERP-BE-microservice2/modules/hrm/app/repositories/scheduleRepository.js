'use strict';

const { Op } = require('sequelize');
const { Schedule, Job, RequestHR, Employee, Presence } = require('../../../../models');

class ScheduleRepository {
    async getAllSchedules() {
        return await Schedule.findAll({
            include: [
                {
                    model: Job,
                    as: 'job',
                    attributes: ['id', 'name', 'objective'],
                    include: [
                        {
                            model: RequestHR,
                            attributes: ['id', 'name', 'actionType', 'periodical'],
                            as: 'reqHR',
                        },
                    ],
                },
                {
                    model: Employee,
                    attributes: ['nip', 'fullname'],
                    as: 'employees',
                    through: {
                        model: Presence,
                        attributes: ['presence', 'meetingNumber'],
                    },
                },
            ],
        });
    }

    async getScheduleById(id) {
        return await Schedule.findByPk(id, {
            include: [
                {
                    model: Job,
                    as: 'job',
                    include: [
                        {
                            model: RequestHR,
                            as: 'reqHR',
                        },
                    ],
                },
                {
                    model: Employee,
                    attributes: ['fullname'],
                    as: 'employees',
                    through: {
                        model: Presence,
                        attributes: ['employeeId', 'presence', 'meetingNumber'],
                    },
                },
            ],
        });
    }

    async getScheduleByCriteria(criteria) {
        const { employeeId, presence, month, year } = criteria;

        const where = {};
        const whereEmployee = {};
        const wherePresence = {};

        if (year && !month) {
            where.workDate = {
                [Op.and]: [
                    { [Op.gte]: new Date(year, 0, 1) },
                    { [Op.lt]: new Date(year + 1, 0, 1) }
                ]
            };
        }
        else if (month && year) {
            where.workDate = {
                [Op.and]: [
                    { [Op.gte]: new Date(year, month - 1, 1) },
                    { [Op.lt]: new Date(year, month, 1) }
                ]
            }
        }

        if (employeeId) {
            whereEmployee.nip = employeeId;
        }

        if (presence) {
            wherePresence.presence = presence
        }

        return await Schedule.findAll({ 
            where,
            include: [
                {
                    model: Job,
                    as: 'job',
                    attributes: ['id', 'name', 'objective'],
                    include: [
                        {
                            model: RequestHR,
                            attributes: ['id', 'name', 'actionType', 'periodical'],
                            as: 'reqHR',
                        },
                    ],
                },
                {
                    model: Employee,
                    attributes: ['nip', 'fullname'],
                    as: 'employees',
                    through: {
                        model: Presence,
                        attributes: ['presence', 'meetingNumber'],
                        where: wherePresence
                    },
                    where: whereEmployee 
                },
            ],
        });

    }

    async countPresence(criteria) {
        const { employeeId, presence, startDate, lastDate } = criteria;

        const where = {};
        const whereEmployee = {};
        const wherePresence = {};

        if (startDate && lastDate) {
            where.workDate = {
                [Op.and]: [
                    { [Op.gte]: startDate },
                    { [Op.lt]: lastDate }
                ]
            };
        }

        if (employeeId) {
            whereEmployee.nip = employeeId;
        }

        if (presence) {
            wherePresence.presence = presence
        }

        const count = await Schedule.count({ 
            where,
            include: [
                {
                    model: Job,
                    as: 'job',
                    attributes: ['id', 'name', 'objective'],
                    include: [
                        {
                            model: RequestHR,
                            attributes: ['id', 'name', 'actionType', 'periodical'],
                            as: 'reqHR',
                        },
                    ],
                },
                {
                    model: Employee,
                    attributes: ['nip', 'fullname'],
                    as: 'employees',
                    through: {
                        model: Presence,
                        attributes: ['presence', 'meetingNumber'],
                        where: wherePresence
                    },
                    where: whereEmployee 
                },
            ],
        });

        return count;

    }

    async createSchedule(data) {
        return await Schedule.create(data);
    }

    async updateSchedule(id, data) {
        return await Schedule.update(data, { where: { id } });
    }

    async deleteSchedule(id) {
        return await Schedule.destroy({ where: { id } });
    }
}

module.exports = new ScheduleRepository();
