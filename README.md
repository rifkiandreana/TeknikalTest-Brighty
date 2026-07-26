# TeknikalTest-Brighty

Repository ini berisi automation test berbasis Cypress untuk target aplikasi utama Sauce Demo dan API publik ReqRes. Fokusnya adalah memberikan paket Git yang bisa dijalankan ulang dari README ini, lengkap dengan runtime, dependency, cara menjalankan smoke/regression, serta contoh laporan hasil test.

Repository ini juga memuat load testing berbasis JMeter untuk melengkapi coverage non-functional testing. Bagian ini dipakai untuk melihat respons aplikasi publik di bawah beban yang lebih tinggi dan menyiapkan artefak report yang bisa dibagikan sebagai bukti hasil eksekusi.

## Target Aplikasi

Saya memilih dua target yang memang tercermin di suite yang ada di repository ini:

1. Sauce Demo untuk skenario UI end-to-end seperti login, product, dan cart.
2. ReqRes untuk skenario API seperti get user, create user, update user, dan delete user.

Untuk load testing, target yang dipilih adalah JSONPlaceholder pada endpoint `/posts`. Target ini cocok untuk simulasi beban karena bersifat publik, stabil, dan tidak membutuhkan setup data yang rumit.

## Asumsi

Beberapa asumsi yang saya pakai saat menyiapkan repository ini:

1. Environment yang digunakan adalah browser desktop dengan resolusi tetap 1920x1080 agar hasil test konsisten.
2. Akun valid untuk UI adalah `standard_user` dengan password `secret_sauce`.
3. API ReqRes membutuhkan `x-api-key` yang dibaca dari Cypress environment atau credential Jenkins.
4. Test dijalankan pada data publik yang stabil, sehingga tidak perlu menyiapkan seed data lokal khusus.
5. Folder `allure-results` dan `allure-report` bisa di-generate ulang setiap kali test dijalankan.

Asumsi tambahan untuk load testing:

1. Endpoint JSONPlaceholder tersedia saat test dijalankan dan tidak sedang mengalami pembatasan yang mengganggu hasil.
2. Fokus load test adalah pengamatan perilaku respons dasar, bukan pengujian kapasitas infrastruktur internal aplikasi target.
3. Hasil load test dapat diulang dengan konfigurasi thread, ramp-up, dan loop yang sama.

Catatan untuk API key:

1. File `cypress.env.json` harus dibuat terlebih dahulu di root project sebelum menjalankan Cypress.
2. File ini tidak disimpan di repository karena sudah masuk `.gitignore`.
3. API key akan dikirim terpisah melalui email, lalu diisikan ke `cypress.env.json` sesuai format environment Cypress yang dipakai suite ini.

## Runtime dan Dependency

Runtime dan toolchain yang dipakai:

1. Node.js 22
2. Cypress 15.19.0
3. Allure Commandline 2.43.0
4. allure-cypress 3.10.2
5. @cypress/grep 6.0.2
6. dotenv 17.4.2

Runtime untuk load testing:

1. Apache JMeter 5.6.3
2. Java 24.0.1 pada environment yang dipakai saat run contoh report

Artefak load testing tersimpan di folder `jmeter/`, dengan plan di `jmeter/Technicaltest-Brighty-loadtesting.jmx` dan contoh HTML report di `jmeter/report/index.html`.

Dependency utama yang relevan untuk eksekusi test ada di `package.json`. Install dengan `npm ci` agar versi paket mengikuti lockfile dan hasil run lebih repeatable.

## Cara Menjalankan

### Siapkan Cypress Environment

Sebelum menjalankan Cypress, buat file `cypress.env.json` di root project. Jangan letakkan file ini di dalam folder `cypress`, karena Cypress membaca environment file dari level project. Setelah itu, isi API key yang sudah dikirim lewat email. File ini sengaja tidak di-commit ke Git supaya secret tetap aman dan setiap orang yang menjalankan repo ini mengisi credential miliknya masing-masing.

Contoh isi file:

```json
{
  "apiKey": "Masukkan API key yang dikirim di email"
}
```

### Instalasi

```bash
npm ci
```

### Menjalankan semua test

```bash
npm run cy:run
```

### Menjalankan smoke test

```bash
npm run cy:smoke
```

### Menjalankan regression test

```bash
npm run cy:regression
```

### Generate dan buka laporan

```bash
npm run report:generate
npm run report:open
```

Atau gunakan flow penuh:

```bash
npm run test:report
```

## Smoke dan Regression

Pembagian test di repository ini sudah ditandai dengan tag `@smoke` dan `@regression` di setiap spec.

Smoke berisi alur paling kritikal dan cepat untuk memvalidasi aplikasi masih layak dipakai, misalnya login sukses, add item to cart, lihat detail produk, basic cart flow, dan beberapa API happy path. Smoke dijalankan lebih sering karena tujuannya adalah memberi sinyal cepat kalau ada masalah besar.

Regression berisi coverage yang lebih luas, termasuk negative scenario, remove item, sorting, input kosong, user not found, dan validasi response yang lebih detail. Regression dijalankan saat butuh verifikasi yang lebih menyeluruh sebelum rilis.

Pemetaan trigger yang dipakai di Jenkins:

1. Smoke: dijadwalkan setiap Senin sampai Jumat pukul 08:00 melalui `Jenkinsfile.smoke`.
2. Regression: dijadwalkan setiap hari pukul 01:00 melalui `Jenkinsfile.regression`.

## Contoh Laporan Hasil Test

Repository ini sudah menyertakan contoh HTML report yang bisa dibuka langsung dari folder `allure-report/index.html`. Itu cukup sebagai contoh output test yang diminta, tanpa harus menunggu run baru.

Kalau ingin melihat artefak hasil eksekusi terbaru, gunakan folder `allure-results` untuk data mentah dan `allure-report` untuk laporan HTML yang sudah di-generate.

Untuk load testing, contoh hasil report juga tersedia di `jmeter/report/index.html`. File ini bisa dibuka langsung sebagai dashboard Apache JMeter dan dipakai sebagai contoh output ketika file JTL terbaru di-generate dari plan yang sama.

### Load Testing

Konfigurasi load test yang ada saat ini memakai:

1. 10 virtual user.
2. Ramp-up 5 detik.
3. 20 loop per user.
4. HTTP sampler `GET /posts` ke `jsonplaceholder.typicode.com`.

Saat ingin menjalankan ulang, buka file `jmeter/Technicaltest-Brighty-loadtesting.jmx` di Apache JMeter 5.6.3, jalankan test plan, lalu generate report HTML dari file `result.jtl` yang dihasilkan.

## Rencana Pengujian

Prioritas saya adalah area yang paling berisiko memutus alur utama pengguna:

1. Login karena ini pintu masuk ke semua alur UI.
2. Product dan cart karena ini inti transaksi sederhana di Sauce Demo.
3. API utama di ReqRes karena ada coverage CRUD dan validasi status code.

Teknik desain test yang dipakai:

1. Equivalence partitioning untuk input valid dan invalid.
2. Boundary and negative testing untuk empty field, user not found, dan respons error.
3. State-based flow untuk urutan login -> add to cart -> cart -> checkout.
4. Assertion berbasis response contract untuk validasi body, status code, dan data penting.

Cara menjaga data dan environment tetap konsisten:

1. Mengunci viewport ke 1920x1080 di setiap spec.
2. Menggunakan akun dan data yang deterministik, bukan data acak.
3. Membersihkan `allure-results` sebelum run laporan baru agar report tidak tercampur hasil lama.
4. Memakai tag test agar smoke dan regression selalu eksekusi subset yang sama.
5. Menjalankan dependensi dengan `npm ci` supaya versi paket tetap sama antar mesin.
6. Mengandalkan environment variable atau Jenkins credential untuk secret seperti API key.

Untuk load testing, konsistensi dijaga dengan plan yang tidak berubah, jumlah thread dan loop yang tetap, endpoint publik yang sama, serta output JTL/report yang digenerate ulang dari eksekusi terbaru agar hasil perbandingan tidak tercampur dengan artefak lama.

## Catatan Struktur Test

Struktur test utama ada di folder `cypress/e2e` dan dipisah per domain:

1. `login`
2. `product`
3. `cart`
4. `API`

Dengan struktur ini, test lebih mudah dipelihara dan lebih jelas pemetaan antara area aplikasi, tag eksekusi, dan report Allure.
