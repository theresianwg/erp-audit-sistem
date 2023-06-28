const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

const generateBukpotCSV = async (bukpots, res) => {
    const csvWriter = createCsvWriter({
        path: 'bukpot_all.csv',
        header: [
            // ini juga harus direvisi
            { id: 'id', title: 'ID' },
            { id: 'employee_id', title: 'Employee ID' },
            { id: 'pemotong_id', title: 'Pemotong ID' },
            { id: 'tanggal_dibuat', title: 'Tanggal Dibuat' },
            { id: 'pajak', title: 'Pajak Lunas' },
        ],
        fieldDelimiter: ',',
        fieldQuote: '"',
    });

    const csvFilePath = path.resolve(
        __dirname,
        '../../../../bukpot_all.csv',
    );

    try {
        const records = bukpots.map(formatBukpotForCSV);
        await csvWriter.writeRecords(records);

        res.download(
            csvFilePath,
            'bukpot_all.csv',
            (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({
                        message: 'Failed to download CSV file',
                    });
                }

                fs.unlink(csvFilePath, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            },
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to generate CSV file' });
    }
};

const formatBukpotForCSV = (bukpot) => {
    return {
        id: bukpot.id,
        employee_id: bukpot.employeeId,
        pemotong_id: bukpot.pemotongId,
        tanggal_dibuat: bukpot.updatedAt,
        pajak: bukpot.pajakLunas,
    };
};

module.exports = generateBukpotCSV;
