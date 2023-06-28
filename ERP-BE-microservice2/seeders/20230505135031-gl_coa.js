'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_coas',
            [
                {
                    id: 1,
                    id_coa_group: 1,
                    id_account_type: 1,
                    Coa_Name: 'Kas Kecil',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    id_coa_group: 1,
                    id_account_type: 1,
                    Coa_Name: 'Bank',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: -1000000,
                    Coa_Number: 110102,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    id_coa_group: 2,
                    id_account_type: 1,
                    Coa_Name: 'Deposito Bank',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110201,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    id_coa_group: 2,
                    id_account_type: 1,
                    Coa_Name: 'Bank Mandiri',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110202,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    id_coa_group: 3,
                    id_account_type: 2,
                    Coa_Name: 'Piutang Usaha IDR',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110301,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    id_coa_group: 3,
                    id_account_type: 2,
                    Coa_Name: 'Uang Muka Pembelian IDR',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110302,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    id_coa_group: 4,
                    id_account_type: 3,
                    Coa_Name: 'Persediaan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110401,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    id_coa_group: 4,
                    id_account_type: 3,
                    Coa_Name: 'Persediaan Terkirim',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110402,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    id_coa_group: 5,
                    id_account_type: 4,
                    Coa_Name: 'PPN Masukan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110501,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    id_coa_group: 5,
                    id_account_type: 4,
                    Coa_Name: 'Perlengkapan Kantor',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110502,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    id_coa_group: 5,
                    id_account_type: 4,
                    Coa_Name: 'Sewa Gedung Dibayar Muka',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110503,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    id_coa_group: 5,
                    id_account_type: 4,
                    Coa_Name: 'Asuransi Dibayar Muka',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110504,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 14,
                    id_coa_group: 5,
                    id_account_type: 4,
                    Coa_Name: 'PPh 23 Penjualan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 110505,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 15,
                    id_coa_group: 6,
                    id_account_type: 5,
                    Coa_Name: 'Tanah',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 16,
                    id_coa_group: 6,
                    id_account_type: 5,
                    Coa_Name: 'Gedung',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 17,
                    id_coa_group: 6,
                    id_account_type: 5,
                    Coa_Name: 'Kendaraan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 18,
                    id_coa_group: 6,
                    id_account_type: 5,
                    Coa_Name: 'Peralatan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120004,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 19,
                    id_coa_group: 6,
                    id_account_type: 5,
                    Coa_Name: 'Inventaris Kantor',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120005,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 20,
                    id_coa_group: 7,
                    id_account_type: 6,
                    Coa_Name: 'Akumulasi Penyusutan Gedung',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120000601,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 21,
                    id_coa_group: 7,
                    id_account_type: 6,
                    Coa_Name: 'Akumulasi Penyusutan Kendaraan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120000602,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 22,
                    id_coa_group: 7,
                    id_account_type: 6,
                    Coa_Name: 'Akumulasi Penyusutan Peralatan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120000603,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 23,
                    id_coa_group: 7,
                    id_account_type: 6,
                    Coa_Name: 'Akumulasi Penyusutan Inventaris Kantor',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 120000604,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 24,
                    id_coa_group: 8,
                    id_account_type: 8,
                    Coa_Name: 'Utang Usaha IDR',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 210101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 25,
                    id_coa_group: 8,
                    id_account_type: 8,
                    Coa_Name: 'Utang Muka Penjualan IDR',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 210102,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 26,
                    id_coa_group: 9,
                    id_account_type: 9,
                    Coa_Name: 'PPN Keluaran',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 210201,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 27,
                    id_coa_group: 9,
                    id_account_type: 9,
                    Coa_Name: 'PPh 23 Pembelian',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 210202,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 28,
                    id_coa_group: 9,
                    id_account_type: 9,
                    Coa_Name: 'Hutang Pembelian Belum Ditagih',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 210203,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 29,
                    id_coa_group: 11,
                    id_account_type: 11,
                    Coa_Name: 'Equitas Saldo Awal',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: -9000000,
                    Coa_Number: 300001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 30,
                    id_coa_group: 11,
                    id_account_type: 11,
                    Coa_Name: 'Laba Ditahan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 300002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 31,
                    id_coa_group: 11,
                    id_account_type: 11,
                    Coa_Name: 'Modal Saham',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 300003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 32,
                    id_coa_group: 12,
                    id_account_type: 12,
                    Coa_Name: 'Penjualan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 400001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 33,
                    id_coa_group: 12,
                    id_account_type: 12,
                    Coa_Name: 'Pendapatan Jasa',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 400002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 34,
                    id_coa_group: 12,
                    id_account_type: 12,
                    Coa_Name: 'Retur Penjualan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 400003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 35,
                    id_coa_group: 12,
                    id_account_type: 12,
                    Coa_Name: 'Diskon Penjualan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 400004,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 36,
                    id_coa_group: 13,
                    id_account_type: 12,
                    Coa_Name: 'Diskon Penjualan IDR',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 9000000,
                    Coa_Number: 440101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 37,
                    id_coa_group: 14,
                    id_account_type: 13,
                    Coa_Name: 'Beban Pokok Penjualan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 510101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 38,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Iklan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 39,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Komisi',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 40,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Bensin, Parkir, Tol Kendaraan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 41,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Gaji, Upah, & Honorer',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600004,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 42,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Bonus, Pesangon & Kompensasi',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600005,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 43,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Transportasi Karyawan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600006,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 44,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Katering & Makan Karyawan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600007,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 45,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Tunjangan Kesehatan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600008,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 46,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Asuransi Karyawan',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 600009,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 47,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban THR',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 6000010,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 48,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Listrik',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 6000011,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 49,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban PAM',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 6000012,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 50,
                    id_coa_group: 15,
                    id_account_type: 14,
                    Coa_Name: 'Beban Telekomunikasi',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 1000000,
                    Coa_Number: 6000013,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 51,
                    id_coa_group: 16,
                    id_account_type: 16,
                    Coa_Name: 'Pendapatan Jasa Giro',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 710001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 52,
                    id_coa_group: 16,
                    id_account_type: 16,
                    Coa_Name: 'Pendapatan Bunga Deposito',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 710002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 53,
                    id_coa_group: 16,
                    id_account_type: 16,
                    Coa_Name: 'Penjualan Persediaan/Perlengkapan',
                    Coa_Normal_Balance: 'K',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 710003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 54,
                    id_coa_group: 17,
                    id_account_type: 15,
                    Coa_Name: 'Beban Bunga Pinjaman',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720001,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 55,
                    id_coa_group: 17,
                    id_account_type: 15,
                    Coa_Name: 'Beban Adm. Bank & Buku Cek/Giro',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720002,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 56,
                    id_coa_group: 17,
                    id_account_type: 15,
                    Coa_Name: 'Pajak Jasa Giro',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720003,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 57,
                    id_coa_group: 17,
                    id_account_type: 15,
                    Coa_Name: 'Laba/Rugi Terealisasi',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720004,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 58,
                    id_coa_group: 17,
                    id_account_type: 15,
                    Coa_Name: 'Laba/Rugi Belum Terealisasi',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720005,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 59,
                    id_coa_group: 18,
                    id_account_type: 15,
                    Coa_Name: 'Laba/Rugi Terealisasi IDR',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 60,
                    id_coa_group: 19,
                    id_account_type: 15,
                    Coa_Name: 'Laba/Rugi Belum Terealisasi IDR',
                    Coa_Normal_Balance: 'D',
                    Coa_Opening_Balance: 0,
                    Coa_Number: 720201,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_coas', null, {});
    },
};