## Description

```bash
aya adalah pemilik tempat parkir khusus Mobil yang dapat menampung hingga sebanyak ‘n’ mobil. Tempat parkir mobil ini memiliki kapasitas tampung(lot) sebanyak ‘n’. Setiap mobil yang masuk akan dicatat nomor plat kendaraan, warna, tipe mobil (SUV/MPV),Tanggal masuk (degenerate otomatis oleh system). Sistem akan mengeluarkan tiket dan pemilik kendaraan akan mendapatkan tiket yang berisi data Nomor Kendaraan, dan Nomor Parkir Lot (tempat tampung).

Beberapa validasi untuk sistem ini adalah:
1. Sistem Tidak dapat meregistrasikan kendaraan apabila nomor kendaraan sama dengan kendaraan yang sudah ada di tempat parkir.
2. Sistem Menolak Registratsi kendaraan baru apabila tempat parkir penuh.
3. Apabila nomor kendaraan tidak di temukan pada saat proses checkout maka sistem akan mengirimkan pesan.
```

## API Documentation

```bash
localhost:3000/docs
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
