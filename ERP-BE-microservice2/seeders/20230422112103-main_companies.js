'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'main_companies',
            [
                {
                    id: 'CMP00001',
                    name: 'PT. Tokopedia',
                    address: 'Jl. Satrio Tower Lt. 7, Jakarta Selatan',
                    phone: '021-12345678',
                    email: 'info@tokopedia.com',
                    imageURL:
                        'https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c1015e.png',
                    description:
                        'Perusahaan teknologi yang fokus pada layanan e-commerce di Indonesia.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00002',
                    name: 'PT. Gojek',
                    address: 'Jl. Pasaraya Blok M, Jakarta Selatan',
                    phone: '021-23456789',
                    email: 'info@gojek.com',
                    imageURL:
                        'https://lelogama.go-jek.com/cms_editor/2021/05/28/info-gojek-2.png',
                    description:
                        'Perusahaan teknologi yang menyediakan berbagai layanan seperti transportasi, logistik, pembayaran, dan lainnya.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00003',
                    name: 'PT. Astra International Tbk',
                    address: 'Jl. Gaya Motor III, Jakarta Utara',
                    phone: '021-34567890',
                    email: 'info@astra.co.id',
                    imageURL:
                        'https://blogger.googleusercontent.com/img/a/AVvXsEhuJ3CezJ-zRFHhEB7_YXRgY6xPh9o2km0czUmPqbvlIkFQZUcaV7CvSjqRBXRX6gRrk6rcd_ibxbygdq3eK_cMnoL57cIcIJixK-zkS15ege4JHm4uQyAXIspaWCufjTe0k_th8bRw7aRlm-YT_OnEs9OAqWfUSM05WajrOy6q-Kg4hcszHo2rvhCJ2A=s320',
                    description:
                        'Konglomerat yang bergerak dalam bidang otomotif, keuangan, agrobisnis, teknologi informasi, dan infrastruktur.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00004',
                    name: 'PT. Indofood Sukses Makmur Tbk',
                    address: 'Jl. Raya Jakarta Bogor KM 29, Cibinong',
                    phone: '021-45678901',
                    email: 'info@indofood.com',
                    imageURL:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Indofood_logo-id.svg/1200px-Indofood_logo-id.svg.png',
                    description:
                        'Perusahaan yang memproduksi berbagai produk makanan dan minuman.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00005',
                    name: 'PT. Pertamina',
                    address: 'Jl. Medan Merdeka Timur 1A, Jakarta Pusat',
                    phone: '021-56789012',
                    email: 'info@pertamina.com',
                    imageURL:
                        'https://www.pertamina.com/Media/Image/Pertamina.png',
                    description:
                        'Perusahaan minyak dan gas bumi milik negara yang bergerak di bidang energi dan petrokimia.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00006',
                    name: 'PT. Unilever Indonesia Tbk',
                    address: 'Jl. Jend. Gatot Subroto Kav. 15, Jakarta Selatan',
                    phone: '021-67890123',
                    email: 'info@unilever.com',
                    imageURL:
                        'https://companieslogo.com/img/orig/UNVR.JK-4c76e4be.png?t=1633509014',
                    description:
                        'Perusahaan yang memproduksi berbagai produk konsumen, termasuk makanan, minuman, dan produk kebersihan.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00007',
                    name: 'PT. Telekomunikasi Indonesia Tbk',
                    address: 'Jl. Jend. Gatot Subroto Kav. 52, Jakarta Selatan',
                    phone: '021-78901234',
                    email: 'info@telkom.co.id',
                    imageURL:
                        'https://www.telkom.co.id/data/image_upload/page/1594108255409_compress_logo%20telkom%20indonesia.png',
                    description:
                        'Perusahaan telekomunikasi dan jaringan terbesar di Indonesia yang menyediakan layanan telepon, internet, dan multimedia.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CMP00008',
                    name: 'PT. Gudang Garam Tbk',
                    address: 'Jl. Semampir Tengah II/1, Kediri, Jawa Timur',
                    phone: '0354-1234567',
                    email: 'info@gudanggaram.com',
                    imageURL:
                        'https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/pt-gudang-garam-tbk-vector-logo.png?ssl=1',
                    description:
                        'Perusahaan produsen rokok kretek yang beroperasi dalam industri tembakau.',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('main_companies', null, {});
    },
};
