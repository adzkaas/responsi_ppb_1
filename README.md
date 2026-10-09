# Library Loans REST API - Responsi Modul 1

REST API layanan pencatatan peminjaman buku perpustakaan yang dibangun menggunakan Node.js, Express.js, dan Supabase (`responsi_ppb_1`).

## Vercel Deployment Link
- Base URL: `https://responsi-ppb-1.vercel.app` (Sesuaikan dengan Link Vercel Anda)

## Data Schema (`responsi_ppb_1` table)

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary Key (Auto Gen) |
| `borrower_name` | String | Nama Peminjam |
| `book_title` | String | Judul Buku |
| `borrow_date` | Date | Tanggal Pinjam |
| `return_date` | Date | Tanggal Kembali |
| `status` | String | Enum: 'Dipinjam', 'Dikembalikan', 'Terlambat' |

## API Endpoints
- `GET /api/loans` - Mendapatkan seluruh data peminjaman (Mendukung filter query: `?status=Terlambat`)
- `GET /api/loans/:id` - Mendapatkan detail peminjaman berdasarkan ID
- `POST /api/loans` - Menambahkan data peminjaman baru
- `PUT /api/loans/:id` - Mengubah data peminjaman
- `DELETE /api/loans/:id` - Menghapus data peminjaman

## Contoh Request & Response

### 1. Tambah Peminjaman (`POST /api/loans`)

**Request Body:**
```json
{
  "borrower_name": "Abdurrahman Adzka",
  "book_title": "Algoritma dan Pemrograman",
  "borrow_date": "2026-10-01",
  "return_date": "2026-10-08",
  "status": "Terlambat"
}
```

**Response (201 Created):**
```json
{
  "id": "e8b4c3d2-1234-5678-9abc-def012345678",
  "borrower_name": "Abdurrahman Adzka",
  "book_title": "Algoritma dan Pemrograman",
  "borrow_date": "2026-10-01",
  "return_date": "2026-10-08",
  "status": "Terlambat"
}
```

### 2. Filter Status Terlambat (`GET /api/loans?status=Terlambat`)

**Response (200 OK):**
```json
[
  {
    "id": "e8b4c3d2-1234-5678-9abc-def012345678",
    "borrower_name": "Abdurrahman Adzka",
    "book_title": "Algoritma dan Pemrograman",
    "borrow_date": "2026-10-01",
    "return_date": "2026-10-08",
    "status": "Terlambat"
  }
]
```

## Panduan Instalasi & Jalankan Lokal

1. Clone repository ini.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Pastikan file `.env` di root directory telah terisi kredensial Supabase:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   PORT=3000
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

---

### Step 5: Git & Deployment ke Vercel
1. Commit dan push proyek ke repository GitHub publik.
2. Buka [Vercel](https://vercel.com/) -> klik **Add New...** -> pilih **Project**.
3. Import repository **`responsi_ppb_1`**.
4. Pada bagian **Environment Variables**, tambahkan:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
5. Klik **Deploy**. Setelah selesai, ambil link public URL yang diberikan Vercel lalu perbarui pada file `README.md`.