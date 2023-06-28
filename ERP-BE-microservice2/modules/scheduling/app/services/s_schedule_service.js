const ScheduleRepository = require('../repositories/s_schedule_repository');
const JodDummyService = require('./jod_dummy_service');
const MachineRepository = require('../../../manufacturing/app/repositories/mf_machineRepository');
class ScheduleService {
    async createScheduleAuto(data) {
        // const schedule = await ScheduleRepository.createScheduleAuto(data);
        const getJOD = await JodDummyService.getAllJodDummyUnfinished();
        // console.log(getJOD);
        const scheduleTask = {};
        var machines = [];
        var theSchedule = [];
        getJOD.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        // console.log(getJOD);
        var machineEndTime = {};
        var countProductPerDay = 0;
        var maximumProduct = 50;

        for (const dummy of getJOD) {
            // console.log(dummy.createdAt.split(' ')[0]);
            const machine = await MachineRepository.getById(dummy.id_mesin);
            // console.log(dummy);
            console.log(machine.last_used);
            scheduleTask.jod_id = dummy.id;
            var createDate = dummy.createdAt;
            if (machine.last_used > createDate) {
                console.log('masuk');
                createDate = machine.last_used;
            } else {
                console.log('tidak masuk');
                createDate = dummy.createdAt;
            }
            var startDate = createDate.split(' ')[0];
            var startTime = createDate.split(' ')[1];

            var year = parseInt(startDate.split('-')[0]);
            var month = parseInt(startDate.split('-')[1]);
            var day = parseInt(startDate.split('-')[2]);
            var hour = parseInt(startTime.split(':')[0]);
            var minute = parseInt(startTime.split(':')[1]);
            var second = parseInt(startTime.split(':')[2]);
            var toSecond =
                (hour + dummy.duration) * 3600 + minute * 60 + second;
            var days = Math.floor(toSecond / 86400);
            var hours = Math.floor((toSecond % 86400) / 3600);
            var minutes = Math.floor((toSecond % 3600) / 60);
            var seconds = toSecond % 60;
            console.log(
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's',
            );
            var finishDate = new Date(
                year,
                month - 1,
                day + days,
                hours + 7,
                minutes,
                seconds,
            );
            scheduleTask.start_time = startTime;
            scheduleTask.start_date = startDate;
            var endDate = finishDate.toISOString().split('T')[0];
            var endTime = finishDate.toISOString().split('T')[1].slice(0, 8);
            scheduleTask.end_time = endTime;
            scheduleTask.end_date = endDate;
            const updateMachine = await MachineRepository.update(
                dummy.id_mesin,
                {
                    last_used: finishDate,
                },
            );
            theSchedule.push(scheduleTask);
            machines.push(updateMachine);
            const schedule = await ScheduleRepository.createScheduleAuto(
                scheduleTask,
            );
            // return [schedule, updateMachine];
        }
        return [theSchedule, machines];
    }
    async getAllSchedule() {
        return await ScheduleRepository.getAllSchedule();
    }
}

module.exports = new ScheduleService();
