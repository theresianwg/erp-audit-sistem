# Frontend for Enterprise Resource Planning (ERP) System

Proyek ini adalah bagian frontend dari sistem ERP yang dibangun menggunakan
Next.js dengan backend Node.js. Proyek ini ditujukan untuk digunakan sebagai
pondasi dasar untuk pengembangan sistem ERP yang lebih besar.

## Daftar Isi

- [Struktur Folder](#struktur-folder)
- [Konfiguras Aplikasi](#konfigurasi-aplikasi)
- [Penggunaan Aplikasi](#penggunaan-aplikasi)

## Struktur Folder

- `public`: Direktori yang berisi berkas-berkas publik.
- `src`: Direktori yang berisi source code aplikasi.
  - `components`: Direktori yang berisi komponen-komponen.
  - `pages`: Direktori yang berisi berkas yang membentuk halaman-halaman pada
    aplikasi.
  - `styles`: Direktori yang berisi berkas untuk menyesuaikan style aplikasi.
- `next.config.js`: Berkas yang berisi konfigurasi untuk Next.js.
- `node_modules`: Direktori yang berisi dependensi Node.js.
- `.gitignore`: Berkas yang berisi daftar berkas dan direktori yang diabaikan
  oleh Git.
- `package.json`: Berkas konfigurasi proyek Next.js.
- `tsconfig.json`: Berkas yang berisi konfigurasi untuk Next.js.
- `README.md`: Berkas yang berisi deskripsi proyek dan dokumentasi.

## Konfigurasi Aplikasi

Konfigurasi aplikasi dapat ditemukan pada direktori `config`. Berkas `config.js`
berisi konfigurasi umum seperti port aplikasi, sedangkan `db.js` berisi
konfigurasi koneksi database. Berkas `server.js` berisi konfigurasi server HTTP,
seperti middleware dan definisi rute.

## Penggunaan Aplikasi

Sebelum menjalankan aplikasi, pastikan Anda telah menginstall npm dengan
`npm install`. Kemudian, Anda dapat menjalankan aplikasi dengan menjalankan
perintah `npm start` atau `npm run dev`. Aplikasi akan berjalan pada port yang
telah ditentukan pada file `config.js`.

Untuk menguji aplikasi, Anda dapat menjalankan perintah `npm test`. Aplikasi
akan diuji menggunakan file tes yang terdapat pada direktori `test`.

## Dokumentasi API

Dokuemntasi API dapat dilihat pada link Postman berikut

## Aturan Commit Github

- Gunakan bahasa Inggris
- Gunakan pedoman Convention Commit
  (https://www.conventionalcommits.org/en/v1.0.0/)
