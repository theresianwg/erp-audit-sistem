const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const path = require('path');
const fs = require('fs');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function formatDate(dateString) {
    const date = new Date(dateString);
    
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);
    
    return formattedDate;
  }

const generateSalarySlipPDF = async (salary_slip, employee, company, position) => {
    try {
        const incomes = salary_slip.incomes;
        const reductions = salary_slip.reductions;
        const length = (incomes.length > reductions.length) ? incomes.length : reductions.length;

        let totalIncome = 0;
        let totalReduction = 0;

        const tableBody = [];

        for (let i = 0; i < length; i++) {
            const row = [];

            if (incomes[i]) {
                totalIncome += incomes[i].SalaryIncome.nominal;

                const title = {
                    text: `${incomes[i].name}`, 
                    fontSize: 10,
                    border: [true, true, false, true]
                }

                const nominal = {
                    text: `${incomes[i].SalaryIncome.nominal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
                    alignment: 'right',
                    fontSize: 10,
                    border: [false, true, true, true]
                }

                row.push(title);
                row.push(nominal);
            }
            else {
                row.push({text: " ", colSpan: 2});
                row.push({});
            }

            if (reductions[i]) {
                totalReduction += reductions[i].SalaryReduction.nominal;

                const title = {
                    text: `${reductions[i].name}`, 
                    fontSize: 10,
                    border: [true, true, false, true]
                }

                const nominal = {
                    text: `${reductions[i].SalaryReduction.nominal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
                    alignment: 'right',
                    fontSize: 10,
                    border: [false, true, true, true]
                }

                row.push(title);
                row.push(nominal);
            }
            else {
                row.push({text: " ", colSpan: 2});
                row.push({});
            }

            tableBody.push(row);
        }

        const docDefinition = {
            content: [
                {
                    text: company.name,
                    fontSize: 18,
                    bold: 1.4,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                    
                },
                {
                    text: company.address,
                    fontSize: 12,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{ type: 'line', x1: 0, y1: 0, x2: 520, y2: 0, lineWidth: 1 }]
                },
                {
                    text: "SLIP GAJI KARYAWAN",
                    fontSize: 16,
                    bold: 1.2,
                    alignment: 'center',
                    decoration: 'underline',
                    margin: [0, 12, 0, 0]
                },
                {
                    text: `Periode ${formatDate(salary_slip.startDate)} - ${formatDate(salary_slip.lastDate)}`,
                    fontSize: 12,
                    bold: 2,
                    alignment: 'center',
                    margin: [0, 6, 0, 0]
                },
                {
                    text: `Tanggal Rilis: ${formatDate(salary_slip.updatedAt)}`,
                    fontSize: 12,
                    margin: [0, 20, 0, 0]
                },
                {
                    text: `NIP: ${employee.nip}`,
                    fontSize: 12,
                },
                {
                    text: `Nama: ${employee.fullname}`,
                    fontSize: 12,
                },
                {
                    text: `Jabatan: ${position.name}`,
                    fontSize: 12,
                },
                {
                    text: `Status: ${position.contractType}`,
                    fontSize: 12,
                    margin: [0, 0, 0, 16]
                },
                {
                    table: {
                        widths: ['*', 90, '*', 90],
                        body: [
                            [
                                { 
                                    text: 'PENDAPATAN', 
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    fillColor: '#CCCCCC',
                                    colSpan: 2
                                },
                                {},
                                { 
                                    text: 'PENGURANGAN', 
                                    alignment: 'center', 
                                    fontSize: 10,
                                    bold: true,
                                    fillColor: '#CCCCCC',
                                    colSpan: 2
                                },
                                {}
                            ],
                        ],
                    },
                },
                {
                    table: {
                        widths: ['*', 90, '*', 90],
                        body: tableBody,
                    },
                },
                {
                    table: {
                        widths: ['*', 90, '*', 90],
                        body: [
                            [
                                { 
                                    text: 'TOTAL PENDAPATAN', 
                                    fontSize: 10,
                                    bold: true,
                                },
                                { 
                                    text: `${totalIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
                                    alignment: 'right', 
                                    fontSize: 10,
                                    bold: true,
                                },
                                { 
                                    text: 'TOTAL PEMOTONGAN', 
                                    fontSize: 10,
                                    bold: true,
                                },
                                { 
                                    text: `${totalReduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
                                    alignment: 'right', 
                                    fontSize: 10,
                                    bold: true,
                                },
                            ],
                            [
                                { 
                                    text: 'GAJI BERSIH', 
                                    alignment: 'left', 
                                    fontSize: 10,
                                    bold: true,
                                    fillColor: '#CCCCCC',
                                    colSpan: 2
                                },
                                {},
                                {
                                    text: `${(totalIncome - totalReduction).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 
                                    alignment: 'right',
                                    fontSize: 10,
                                    fillColor: '#CCCCCC',
                                    bold: true,
                                    colSpan: 2,
                                },
                                {},
                            ]
                        ],
                    },
                },
            ],
            styles: {
                footer: {
                    fontSize: 10,
                    bold: true,
                },
            },
        };
    
        const pdfDoc = pdfMake.createPdf(docDefinition);
        return new Promise((resolve, reject) => {
            pdfDoc.getBuffer((buffer) => {
                resolve(buffer);
            });
        });
    } catch (error) {
        console.log(err);
    }

    
};

module.exports = generateSalarySlipPDF;
