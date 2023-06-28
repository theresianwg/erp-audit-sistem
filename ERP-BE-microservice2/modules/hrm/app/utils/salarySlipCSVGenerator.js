const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

const generateSalarySlipCSV = async (salary_slips, res) => {
    const csvWriter = createCsvWriter({
        path: 'salary_slip_all.csv',
        header: [
            // ini juga harus direvisi
            { id: 'id', title: 'ID' },
            { id: 'employeeId', title: 'Employee ID' },
            { id: 'startDate', title: 'Periode Mulai' },
            { id: 'lastDate', title: 'Periode Selesai' },
            { id: 'gaji', title: 'Gaji Bersih' },
            { id: 'tunjanganPPh', title: 'Tunjangan PPh' },
            { id: 'tunjanganLain', title: 'Tunjangan Lain' },
            { id: 'honorariumImbalan', title: 'Imbalan Lain' },
            { id: 'premiAsuransi', title: 'Premi Asuransi' },
            { id: 'natura', title: 'Natura' },
            { id: 'gratifikasiTHR', title: 'Bonus' },
            { id: 'pajakTelahDipotong', title: 'Pajak' },
            { id: 'pensiun', title: 'Pensiun' },
            { id: 'asuransi', title: 'Asuransi' },
        ],
        fieldDelimiter: ',',
        fieldQuote: '"',
    });

    const csvFilePath = path.resolve(
        __dirname,
        '../../../../salary_slip_all.csv',
    );

    try {
        const records = salary_slips;
        await csvWriter.writeRecords(records);

        res.download(
            csvFilePath,
            'salary_slip_all.csv',
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

module.exports = generateSalarySlipCSV;
