# Backend for Enterprise Resource Planning (ERP) System

Proyek ini adalah bagian backend dari sistem ERP yang dibangun menggunakan Node.js dengan framework Express. Proyek ini ditujukan untuk digunakan sebagai pondasi dasar untuk pengembangan sistem ERP yang lebih besar.

## Daftar Isi

-   [Struktur Folder Microservice](#struktur-folder-microservice)
-   [Konfiguras Aplikasi](#konfigurasi-aplikasi)
-   [Penggunaan Aplikasi](#penggunaan-aplikasi)
-   [Dokumentasi API](#dokumentasi-api)
-   [Aturan Commit Github](#aturan-commit-github)
-   [Kode Migrations dan database](#kode-migrations-dan-database)

## Struktur Folder Microservice

-   `common`: Direktori yang berisi kode yang digunakan oleh beberapa mikroservis (mis. utilitas, konfigurasi, dll.).
-   `config`: Direktori yang berisi konfigurasi aplikasi.
    -   `config.js`: Berkas yang berisi konfigurasi umum.
-   `migrations`: Direktori yang berisi kode migrasi database.
-   `models`: Direktori yang berisi definisi model database.
-   `modules`: Direktori yang berisi semua mikroservis.
    -   `main`: Direktori yang berisi kode mikroservis Main Module.
        -   `app`: Direktori yang berisi kode aplikasi.
            -   `controllers`: Direktori yang berisi kontroler Express.
            -   `repositories`: Direktori yang berisi repository yang digunakan untuk mengakses database.
            -   `routes`: Direktori yang berisi definisi rute Express.
            -   `services`: Direktori yang berisi logika bisnis.
            -   `utils`: Direktori yang berisi utilitas yang digunakan dalam aplikasi.
        -   `app.js`: File yang berisi kode untuk menjalankan aplikasi.
        -   `package.json`: Berkas konfigurasi proyek Node.js untuk modul `main`.
    -   `inventory`: Direktori yang berisi kode mikroservis Inventory Module.
        -   `app`: Direktori yang berisi kode aplikasi.
            -   `controllers`: Direktori yang berisi kontroler Express.
            -   `repositories`: Direktori yang berisi repository yang digunakan untuk mengakses database.
            -   `routes`: Direktori yang berisi definisi rute Express.
            -   `services`: Direktori yang berisi logika bisnis.
            -   `utils`: Direktori yang berisi utilitas yang digunakan dalam aplikasi.
        -   `app.js`: File yang berisi kode untuk menjalankan aplikasi.
        -   `package.json`: Berkas konfigurasi proyek Node.js untuk modul `inventory`.
    -   `account-payable`: Direktori yang berisi kode mikroservis Account Payable Module.
    -   `accounting`: Direktori yang berisi kode mikroservis Accounting Module.
    -   `manufacturing`: Direktori yang berisi kode mikroservis Manufacturing Module.
    -   `...`: Direktori untuk modul lainnya.
-   `seeders`: Direktori yang berisi kode seeder database.
-   `node_modules`: Direktori yang berisi dependensi Node.js.
-   `test`: Direktori yang berisi file tes.
-   `.env`: Berkas yang berisi variabel lingkungan aplikasi.
-   `.gitignore`: Berkas yang berisi daftar file dan direktori yang diabaikan oleh Git.
-   `.sequelizerc`: Berkas yang berisi konfigurasi Sequelize CLI.
-   `.prettierrc`: Berkas yang berisi konfigurasi Prettier.
-   `package.json`: Berkas konfigurasi proyek Node.js.
-   `README.md`: Berkas yang berisi deskripsi proyek dan dokumentasi.

## Konfigurasi Aplikasi

Konfigurasi aplikasi dapat ditemukan pada direktori `config`. Berkas `config.js` berisi konfigurasi umum seperti port aplikasi, sedangkan `db.js` berisi konfigurasi koneksi database. Berkas `server.js` berisi konfigurasi server HTTP, seperti middleware dan definisi rute.

## Penggunaan Aplikasi

Sebelum menjalankan aplikasi, pastikan Anda telah mengatur variabel lingkungan yang dibutuhkan pada berkasa `.env`. Kemudian, Anda dapat menjalankan aplikasi dengan menjalankan perintah `npm start`. Aplikasi akan berjalan pada port yang telah ditentukan pada file `config.js`.

Untuk menguji aplikasi, Anda dapat menjalankan perintah `npm test`. Aplikasi akan diuji menggunakan file tes yang terdapat pada direktori `test`.

## Dokumentasi API

Dokuemntasi API dapat dilihat pada link Postman berikut `https://its.id/m/erp-api` atau (https://its.id/m/erp-api)

## Aturan Commit Github

-   Gunakan bahasa Inggris
-   Gunakan pedoman Convention Commit (https://www.conventionalcommits.org/en/v1.0.0/)

## Kode Migrations dan database

-   Inventory: `in`
-   Account Payable: `ap`
-   Account Receivable: `ar`
-   Cash & Bank: `cb`
-   General Ledger: `gl`
-   Manufacturing: `mf`
-   HRM: `hrm`
-   CRM: `crm`
-   Sales: `sl`
-   Taxes: `tx`
-   Schedule: `sc`
-   Fixed Asset: `fa`
-   Accounting: `ac`
-   Forecasting: `fc`
-   Main Module: `main`
