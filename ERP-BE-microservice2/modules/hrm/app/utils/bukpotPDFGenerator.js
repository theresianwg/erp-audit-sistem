const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const path = require('path');
const fs = require('fs');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generateBukpotPDF = async (bukpot, employee, pemotong, ptkp, position) => {
    try {
        const docDefinition = {
            content: [
                {
                    text: 'BUKTI PEMOTONGAN PAJAK PENGHASILAN',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: 'PASAL 21 BAGI PEGAWAI TETAP ATAU',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: 'PENERIMA PENSIUN ATAU TUNJANGAN HARI',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: 'TUA/JAMINAN HARI TUA BERKALA',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: ' ',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: 'NOMOR: ',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: ' ',
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    
                },
                {
                    text: `NPWP PEMOTONG: ${pemotong.npwp}`,
                    fontSize: 10,
                    
                },
                {
                    text: `NAMA PEMOTONG: ${pemotong.fullname}`,
                    fontSize: 10,
                    
                },
                {
                    text: ' ',
                    fontSize: 10,
                    
                },
                {
                    text: 'A. IDENTITAS PENERIMA PENGHASILAN YANG DIPOTONG',
                    fontSize: 10,
                    bold: true,
                    
                },
                {
                    columns: [
                        [
                            {
                                text: `1. NPWP: ${employee.npwp}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `2. NIK/NO. PASPOR: ${employee.nik}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `3. NAMA: ${employee.fullname}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `4. ALAMAT: ${employee.address}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `5. JENIS KELAMIN: ${employee.gender}`,
                                fontSize: 10,
                                
                            },
                        ],
                        [
                            {
                                text: `6. STATUS/JUMLAH TANGGUNGAN KELUARGA UNTUK PTKP: ${ptkp.status}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `7. NAMA JABATAN: ${position.name}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `8. KARYAWAN ASING: ${employee.isForeign ? 'Ya' : 'Tidak'}`,
                                fontSize: 10,
                                
                            },
                            {
                                text: `9. KODE NEGARA DOMISILI: ${employee.countryCode}`,
                                fontSize: 10,
                                
                            },
                        ],
                    ]
        
                },
                {
                    text: ' ',
                    fontSize: 10,
                    
                },
                {
                    text: 'B. RINCIAN  PENGHASILAN DAN PENGHITUNGAN PPh PASAL 21',
                    fontSize: 10,
                    bold: true,
                    
                },
                {
                    table: {
                        widths: [14, '*', 120],
                        body: [
                            [
                                { 
                                    text: 'URAIAN', 
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 2
                                },
                                {},
                                { 
                                    text: 'JUMLAH (Rp)', 
                                    alignment: 'center', 
                                    fontSize: 10,
                                    bold: true 
                                },
                            ],
                            [
                                { 
                                    text: 'PENGHASILAN BRUTO:', 
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 2
                                },
                                {},
                                ''
                            ],
                            [
                                {
                                    text: '1.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'GAJI/PENSIUN ATAU THT/JHT',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '2.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'TUNJANGAN PPh',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '3.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'TUNJANGAN LAINNYA, UANG LEMBUR DAN SEBAGAINYA',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '4.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'HONORARIUM DAN IMBALAN LAIN SEJENISNYA',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '5.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PREMI ASURANSI YANG DIBAYAR PEMBERI KERJA',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no5.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '6.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PENERIMAAN DALAM BENTUK NATURA DAN KENIKMATAN LAINNYA YANG DIKENAKAN PEMOTONGAN PPh PASAL 21',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no6.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '7.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'TANTIEM, BONUS, GRATIFIKASI, JASA PRODUKSI DAN THR',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no7.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '8.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'JUMLAH PENGHASILAN BRUTO (1 S.D.7)',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no8.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                { 
                                    text: 'PENGURANGAN:', 
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 2
                                },
                                {},
                                ''
                            ],
                            [
                                {
                                    text: '9.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'BIAYA JABATAN/BIAYA PENSIUN',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no9.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '10.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'IURAN PENSIUN ATAU IURAN THT/JHT',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no10.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '11.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'JUMLAH PENGURANGAN (9 S.D 10)',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no11.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                { 
                                    text: 'PERHITUNGAN PPh PASAL 21:', 
                                    fontSize: 10,
                                    bold: true,
                                    colSpan: 2
                                },
                                {},
                                ''
                            ],
                            [
                                {
                                    text: '12.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: ' JUMLAH PENGHASILAN NETO',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no12.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '13.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PENGHASILAN NETO MASA SEBELUMNYA',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no13.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '14.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'JUMLAH PENGHASILAN NETO UNTUK PENGHITUNGAN PPh PASAL 21 (SETAHUN/DISETAHUNKAN)',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no14.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '15.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PENGHASILAN TIDAK KENA PAJAK (PTKP)',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no15.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '16.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PENGHASILAN KENA PAJAK SETAHUN/DISETAHUNKAN',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '17.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PPh PASAL 21 ATAS PENGHASILAN KENA PAJAK SETAHUN/DISETAHUNKAN',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no17.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '18.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PPh PASAL 21 YANG TELAH DIPOTONG MASA SEBELUMNYA',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no18.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '19.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PPh PASAL 21 TERUTANG',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no19.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                            [
                                {
                                    text: '20.',
                                    fontSize: 10,
                                    alignment: 'center',
                                },
                                {
                                    text: 'PPh PASAL 21 DAN PPh PASAL 26 YANG TELAH DIPOTONG DAN DILUNASI',
                                    fontSize: 10,
                                },
                                {
                                    text: `${bukpot.no20.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                                    fontSize: 10,
                                    alignment: 'right',
                                },
                            ],
                        ],
                      },
                }
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

module.exports = generateBukpotPDF;
