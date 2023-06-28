const js = [
    {
        id: 1,
        id_jo: 1,
        operation_name: 'Menyusun Hiasan Alas Bundar',
        quantity: 19,
        id_mesin: 1,
        duration: 15,
        man_skill: 'Menyusun Hiasan Alas',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-11 13:00:00',
        updatedAt: '2012-12-11 13:00:00',
    },
    {
        id: 2,
        id_jo: 1,
        operation_name: 'Menyusun Hiasan Supporting Black Forest',
        quantity: 19,
        id_mesin: 2,
        duration: 15,
        man_skill: 'Menyusun Hiasan Supporting',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-11 13:00:00',
        updatedAt: '2012-12-11 13:00:00',
    },
    {
        id: 3,
        id_jo: 1,
        operation_name: 'Membuat Black Forest Circle Cake',
        quantity: 19,
        id_mesin: 3,
        duration: 15,
        man_skill: 'Membuat Cake',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-11 13:00:00',
        updatedAt: '2012-12-11 13:00:00',
    },
    {
        id: 4,
        id_jo: 2,
        operation_name: 'Menyusun Hiasan Supporting Red Velvet',
        quantity: 17,
        id_mesin: 2,
        duration: 14,
        man_skill: 'Menyusun Hiasan Supporting',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-12 13:00:00',
        updatedAt: '2012-12-12 13:00:00',
    },
    {
        id: 5,
        id_jo: 2,
        operation_name: 'Menyusun Hiasan Alas Kotak',
        quantity: 17,
        id_mesin: 1,
        duration: 14,
        man_skill: 'Menyusun Hiasan Alas',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-12 13:00:00',
        updatedAt: '2012-12-12 13:00:00',
    },
    {
        id: 6,
        id_jo: 2,
        operation_name: 'Membuat Red Velvet Square Cake',
        quantity: 17,
        id_mesin: 3,
        duration: 14,
        man_skill: 'Membuat Cake',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-12 13:00:00',
        updatedAt: '2012-12-11 13:00:00',
    },
    {
        id: 7,
        id_jo: 3,
        operation_name: 'Menyusun Hiasan Alas Bundar',
        quantity: 19,
        id_mesin: 1,
        duration: 15,
        man_skill: 'Menyusun Hiasan Alas',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-17 13:00:00',
        updatedAt: '2012-12-17 13:00:00',
    },
    {
        id: 8,
        id_jo: 3,
        operation_name: 'Menyusun Hiasan Supporting Black Forest',
        quantity: 19,
        id_mesin: 2,
        duration: 15,
        man_skill: 'Menyusun Hiasan Supporting',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-17 13:00:00',
        updatedAt: '2012-12-17 13:00:00',
    },
    {
        id: 9,
        id_jo: 3,
        operation_name: 'Membuat Black Forest Circle Cake',
        quantity: 19,
        id_mesin: 3,
        duration: 15,
        man_skill: 'Membuat Cake',
        man_qty: 5,
        status: 'unfinished',
        createdAt: '2012-12-17 13:00:00',
        updatedAt: '2012-12-17 13:00:00',
    },
];
// Membuat objek Date
// let date = new Date();

// // Mengatur zona waktu menjadi WIB (UTC+7)
// date.setUTCHours(date.getUTCHours() + 7);

// function toIndo(time_date) {
//     let date = new Date();
//     date = date.setUTCHours(date.getUTCHours() + 7);
//     date = new Date(date);
//     return date.toISOString();
// }
// console.log(toIndo(date));

// function scheduleData(data, batchSize, hoursPerBatch) {
//     const sortedData = data.sort(
//         (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
//     );
//     const batches = [];

//     let currentBatchStartTime = null;
//     let currentBatchEndTime = null;
//     let currentBatchData = [];

//     for (let i = 0; i < sortedData.length; i++) {
//         const item = sortedData[i];
//         const itemStartTime = new Date(item.createdAt);
//         const itemEndTime = new Date(
//             itemStartTime.getTime() + item.duration * 60 * 1000,
//         ); // Convert duration to milliseconds

//         if (
//             !currentBatchStartTime ||
//             itemStartTime > currentBatchEndTime ||
//             currentBatchData.length >= batchSize
//         ) {
//             // Start a new batch
//             if (currentBatchData.length > 0) {
//                 const batch = {
//                     startTime: currentBatchStartTime,
//                     endTime: currentBatchEndTime,
//                     data: currentBatchData,
//                 };
//                 batches.push(batch);
//             }

//             currentBatchStartTime = itemStartTime;
//             currentBatchEndTime = new Date(
//                 itemStartTime.getTime() + hoursPerBatch * 60 * 60 * 1000,
//             ); // Convert hoursPerBatch to milliseconds
//             currentBatchData = [item];
//         } else {
//             // Check machine availability and wait if necessary
//             let machineReadyTime = currentBatchStartTime;

//             for (const batchItem of currentBatchData) {
//                 const batchItemEndTime = new Date(
//                     batchItem.createdAt.getTime() +
//                         batchItem.duration * 60 * 1000,
//                 );

//                 if (batchItemEndTime > machineReadyTime) {
//                     machineReadyTime = batchItemEndTime;
//                 }
//             }

//             if (itemStartTime < machineReadyTime) {
//                 // Wait until the machine is ready
//                 itemStartTime.setTime(machineReadyTime.getTime());
//                 itemEndTime.setTime(
//                     itemStartTime.getTime() + item.duration * 60 * 1000,
//                 );
//             }

//             currentBatchData.push(item);
//             currentBatchEndTime = new Date(itemEndTime);
//         }
//     }

//     // Add the last batch
//     if (currentBatchData.length > 0) {
//         const batch = {
//             startTime: currentBatchStartTime,
//             endTime: currentBatchEndTime,
//             data: currentBatchData,
//         };
//         batches.push(batch);
//     }

//     return batches;
// }

// const batches = scheduleData(js, 3, 8);

// batches.forEach((batch, index) => {
//     console.log(`Batch ${index + 1}:`);
//     console.log(`Start Time: ${batch.startTime}`);
//     console.log(`End Time: ${batch.endTime}`);
//     console.log('Data:');
//     console.log(batch.data);
//     console.log('------------------------');
// });
// if (endTime.getHours() >= 21) {
//     var remainingHours = endTime.getHours() - 21;
//     var remainingMilliseconds = remainingHours * 60 * 60 * 1000;

//     var nextDatStartTime = new Date(
//         startTime.getFullYear(),
//         startTime.getMonth(),
//         startTime.getDate() + 1,
//         8,
//         0,
//         0,
//     );

//     startTime = nextDatStartTime;
//     endTime = new Date(
//         nextDatStartTime.getTime() + remainingMilliseconds,
//     );
// }

console.log(new Date().toLocaleTimeString('en-US', { hour12: false }));
