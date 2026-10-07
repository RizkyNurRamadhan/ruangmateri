/**
 * Database Komprehensif Portal Materi SMK (Kurikulum Merdeka / Spektrum Umum)
 * Khusus Mata Pelajaran Umum SMK Kelas 10, 11, dan 12.
 * Gambar online berkualitas tinggi (Unsplash CDN) untuk tiap mapel dan tiap materi.
 */

export const SUBJECTS_DATA = [
  {
    id: 'matematika',
    title: 'Matematika Terapan',
    shortName: 'Matematika',
    category: 'sains-terapan',
    categoryLabel: 'Sains Terapan & Rekayasa',
    color: '#374d8e',
    badgeColor: '#5065a8',
    description: 'Pondasi logika kuantitatif, kalkulasi skala industri, analisis bunga majemuk, trigonometri pengukuran lapangan, matriks inventaris, dan optimasi biaya produksi.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 28,
      flashcardsCount: 42,
      quizCount: 25,
      estimatedHours: 48
    },
    chapters: [
      {
        id: 'mat-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Eksponen, Bentuk Akar & Logaritma Terapan',
        subtitle: 'Kalkulasi Skala Desain, Pertumbuhan Bakteri Industri & Bunga Majemuk',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Eksponen a^n menyatakan perkalian berulang bilangan a sebanyak n kali, dengan sifat dasar perkalian pangkat penjumlahan a^m * a^n = a^(m+n).',
          'Aplikasi industri eksponen meliputi perhitungan pertumbuhan hasil fermentasi pada industri pangan/kimia serta model peluruhan radioaktif/kualitas oli mesin.',
          'Bentuk akar adalah akar bilangan rasional yang menghasilkan bilangan irasional, dapat disederhanakan dengan merasionalkan penyebut memakai bentuk sekawan.',
          'Logaritma adalah inversi eksponen (a^b = c ekuivalen ^a log c = b), sangat vital dalam mengukur tingkat kebisingan bengkel kerja (desibel) dan skala pH cairan pendingin mesin CNC.'
        ],
        keywords: [
          { term: 'Eksponensial', definition: 'Fungsi matematika berbentuk f(x) = a^x yang menggambarkan pertumbuhan atau penurunan sangat cepat dalam waktu singkat.' },
          { term: 'Bunga Majemuk', definition: 'Bunga yang dihitung berdasarkan pokok awal ditambah akumulasi bunga periode sebelumnya, digunakan pada investasi modal alat produksi.' },
          { term: 'Desibel (dB)', definition: 'Skala logaritmik untuk mengukur intensitas kebisingan suara di lingkungan bengkel kerja SMK sesuai standar K3.' },
          { term: 'Rasionalisasi Akar', definition: 'Proses mengubah penyebut pecahan yang berbentuk akar menjadi bilangan rasional dengan perkalian bentuk sekawan.' }
        ],
        content: `
### 1. Capaian Pembelajaran & Urgensi di Dunia SMK
Di lingkungan industri manufaktur, konstruksi, dan bisnis manajemen, kalkulasi tidak selalu berjalan secara linear. Perhitungan bunga modal pinjaman mesin, penurunan nilai depresiasi aset bengkel, hingga pengukuran tingkat polusi suara (akustik lingkungan kerja) mengandalkan fungsi eksponensial dan logaritmik. Siswa SMK dituntut tidak sekadar hafal rumus, tetapi mahir mengimplementasikannya dalam pemodelan data teknis.

### 2. Sifat-Sifat Pokok Eksponen
Jika $a, b \\in \\mathbb{R}$ dan $m, n$ adalah bilangan rasional:
1. Perkalian: $a^m \\times a^n = a^{m+n}$
2. Pembagian: $\\frac{a^m}{a^n} = a^{m-n}$ dengan $a \\neq 0$
3. Perpangkatan pangkat: $(a^m)^n = a^{m \\cdot n}$
4. Perkalian dipangkatkan: $(a \\cdot b)^n = a^n \\cdot b^n$
5. Pangkat negatif & nol: $a^{-n} = \\frac{1}{a^n}$ dan $a^0 = 1$ ($a \\neq 0$)

### 3. Logaritma & Penerapan di Lingkungan Kerja
Bentuk umum: $^a\\log b = c \\iff a^c = b$ dengan syarat basis $a > 0, a \\neq 1$, dan numerus $b > 0$.
**Aplikasi Nyata SMK (Akustik & K3 Industri):**
Tingkat intensitas bunyi ($TI$) diukur dalam satuan Desibel (dB):
$$TI = 10 \\cdot \\log \\left(\\frac{I}{I_0}\\right)$$
Di mana $I$ adalah intensitas bunyi mesin kompresor/mesin bubut ($W/m^2$) dan $I_0 = 10^{-12} W/m^2$ adalah intensitas ambang pendengaran manusia. Bila suatu bengkel memiliki kebisingan di atas 85 dB selama 8 jam kerja per hari, operator wajib mengenakan penutup telinga (*earmuff*) sesuai regulasi K3.

### 4. Studi Kasus Industri: Perhitungan Bunga Investasi Alat
Sebuah unit produksi (Teaching Factory) SMK membeli mesin bubut CNC seharga Rp 100.000.000 dengan sistem kredit modal ventura berjangka waktu 3 tahun, suku bunga majemuk tahunan 8%. Berapakah total nilai akhir yang harus dibayarkan?
- Modal Awal ($M_0$) = Rp 100.000.000
- Tingkat Bunga ($i$) = 0.08
- Periode ($n$) = 3 tahun
$$M_n = M_0 (1 + i)^n = 100.000.000 \\times (1 + 0.08)^3 = 100.000.000 \\times 1.259712 = \\text{Rp } 125.971.200$$
        `
      },
      {
        id: 'mat-10-2',
        grade: 10,
        chapterNumber: 'BAB 02',
        title: 'Barisan & Deret Aritmatika serta Geometri',
        subtitle: 'Analisis Depresiasi Mesin & Estimasi Kapasitas Produksi Bertingkat',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Barisan aritmatika memiliki selisih tetap (beda b = U_n - U_(n-1)), rumus suku ke-n: U_n = a + (n-1)b.',
          'Deret aritmatika digunakan untuk menjumlahkan output produksi harian/bulanan bertingkat: S_n = n/2 * (2a + (n-1)b).',
          'Barisan geometri memiliki rasio tetap (r = U_n / U_(n-1)), sangat relevan dalam perhitungan laju peluruhan nilai aset (depresiasi saldo menurun) dan penggandaan komponen.',
          'Deret geometri tak hingga konvergen (|r| < 1) digunakan untuk menghitung batas total pergerakan osilasi pegas atau redaman mesin.'
        ],
        keywords: [
          { term: 'Beda (b)', definition: 'Nilai selisih konstan antara dua suku berurutan pada barisan aritmatika.' },
          { term: 'Rasio (r)', definition: 'Nilai perbandingan hasil bagi antara suatu suku dengan suku sebelumnya pada barisan geometri.' },
          { term: 'Depresiasi Saldo Menurun', definition: 'Metode akuntansi penyusutan nilai mesin di mana biaya susut dihitung menggunakan persentase tetap dari nilai buku tiap tahun.' },
          { term: 'Deret Konvergen', definition: 'Deret geometri tak hingga yang mempunyai limit jumlah tertentu karena nilai mutlak rasio kurang dari 1.' }
        ],
        content: `
### 1. Konsep Barisan & Deret di Lantai Produksi
Dalam operasional industri dan logistik, perencanaan kapasitas lini produksi (*production line balancing*) serta estimasi stok bahan mentah mengikuti pola berulang yang teratur. Manajer bengkel menggunakan barisan aritmatika untuk merencanakan peningkatan target berkala dan deret geometri untuk menghitung amortisasi mesin.

### 2. Barisan & Deret Aritmatika
- Suku ke-$n$: $U_n = a + (n - 1)b$
- Jumlah $n$ suku pertama: $S_n = \\frac{n}{2} (2a + (n - 1)b) = \\frac{n}{2} (a + U_n)$
Di mana $a$ adalah suku pertama, $b$ adalah beda selisih, dan $n$ adalah banyak periode.

### 3. Studi Kasus Industri: Target Produksi Bengkel Vokasi
Sebuah lini perakitan komponen mekatronika SMK ditargetkan memproduksi 120 unit pada bulan pertama. Mengingat peningkatan efisiensi kerja mekanik, target ditambah 25 unit setiap bulan berikutnya.
1. Berapa unit yang diproduksi pada bulan ke-10?
   $$U_{10} = 120 + (10 - 1) \\times 25 = 120 + 225 = 345 \\text{ unit}$$
2. Berapa total seluruh komponen yang dihasilkan selama 10 bulan pertama?
   $$S_{10} = \\frac{10}{2} (120 + 345) = 5 \\times 465 = 2.325 \\text{ unit}$$
        `
      },
      {
        id: 'mat-10-3',
        grade: 10,
        chapterNumber: 'BAB 03',
        title: 'Trigonometri Terapan & Vektor Pengukuran Lapangan',
        subtitle: 'Perhitungan Sudut Elevasi, Kemiringan Konstruksi & Resultan Gaya',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Perbandingan trigonometri segitiga siku-siku (sin = depan/miring, cos = samping/miring, tan = depan/samping) adalah dasar navigasi dan konstruksi teknik sipil/mesin.',
          'Sudut elevasi dan depresi digunakan oleh teknisi survei (theodolite) untuk mengukur tinggi menara BTS, gedung, atau kemiringan pipa buangan tanpa harus memanjat.',
          'Aturan Sinus dan Cosinus memecahkan permasalahan pengukuran lahan segitiga sembarang pada survei topografi.',
          'Vektor memodelkan besaran yang memiliki nilai dan arah, seperti gaya tarik kabel crane dan tegangan tali penyangga.'
        ],
        keywords: [
          { term: 'Sudut Elevasi', definition: 'Sudut yang dibentuk oleh garis horizontal pandangan mata pengamat ke arah objek yang berada di atasnya.' },
          { term: 'Theodolite', definition: 'Alat ukur optik presisi tinggi yang digunakan teknisi konstruksi/survei untuk mengukur sudut horizontal dan vertikal.' },
          { term: 'Resultan Gaya', definition: 'Gaya tunggal pengganti yang mempunyai efek mekanis yang sama dengan gabungan seluruh gaya yang bekerja pada suatu titik benda.' }
        ],
        content: `
### 1. Peran Krusial Trigonometri pada Pekerjaan Teknik
Pada jurusan Teknik Kendaraan Ringan, Bangunan, Otomasi, hingga Desain Interior, penentuan sudut pemotongan material, kemiringan atap rangka baja ringan (*truss*), serta analisis gaya tumpuan jembatan membutuhkan kalkulasi trigonometri presisi tinggi untuk menghindari kegagalan struktural.

### 2. Segitiga Siku-siku & Nilai Perbandingan
Dalam segitiga siku-siku dengan sudut acuan $\\alpha$:
- $\\sin \\alpha = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$
- $\\cos \\alpha = \\frac{\\text{sisi samping}}{\\text{sisi miring}}$
- $\\tan \\alpha = \\frac{\\text{sisi depan}}{\\text{sisi samping}}$

### 3. Studi Kasus Pengukuran Menara Transmisi
Seorang teknisi jaringan telekomunikasi berdiri pada jarak 30 meter dari dasar tiang antena pemancar. Dengan menggunakan klinometer, ia mengukur sudut elevasi ke puncak menara sebesar $45^\\circ$. Jika tinggi mata teknisi dari tanah adalah 1,6 meter:
$$\\tan 45^\\circ = \\frac{h_{\\text{puncak}} - 1,6}{30} \\implies 1 = \\frac{h - 1,6}{30} \\implies h = 30 + 1,6 = 31,6 \\text{ meter}$$
        `
      },
      {
        id: 'mat-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Matriks & Sistem Persamaan Linear Terapan',
        subtitle: 'Optimasi Alokasi Bahan Baku & Pengendalian Inventaris Gudang',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Matriks adalah susunan bilangan dalam bentuk baris dan kolom yang merepresentasikan data inventaris multivariabel secara terstruktur.',
          'Operasi penjumlahan dan pengurangan matriks dilakukan pada elemen-elemen seletak dengan ordo sama, sedangkan perkalian matriks memerlukan syarat kolom matriks pertama sama dengan baris matriks kedua.',
          'Determinan dan invers matriks digunakan untuk menyelesaikan Sistem Persamaan Linear Dua/Tiga Variabel (SPLDV/SPLTV) pada kalkulasi kebutuhan bahan baku produk.',
          'Dalam teknologi digital grafis, matriks transformasi digunakan untuk merotasi, translasi, dan menskalakan objek 3D pada perangkat lunak CAD/CAM.'
        ],
        keywords: [
          { term: 'Ordo Matriks', definition: 'Ukuran dimensi matriks yang dinyatakan dengan banyaknya baris dikalikan banyaknya kolom (m x n).' },
          { term: 'Invers Matriks', definition: 'Matriks kebalikan A^(-1) yang apabila dikalikan dengan matriks asal A akan menghasilkan matriks identitas I.' },
          { term: 'CAD/CAM', definition: 'Computer-Aided Design dan Computer-Aided Manufacturing, perangkat lunak perancangan dan manufaktur yang sarat perhitungan matriks transformasi.' }
        ],
        content: `
### 1. Representasi Data Produksi dalam Bentuk Matriks
Ketika bengkel atau garmen memproduksi berbagai jenis produk dengan spesifikasi kebutuhan bahan mentah yang berbeda, matriks mempermudah pengelompokan dan kalkulasi kebutuhan total bahan secara efisien.

### 2. Invers Matriks Berordo 2x2
Jika matriks $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, determinan $A$ adalah $\\det(A) = ad - bc$.
Bila $\\det(A) \\neq 0$, inversnya adalah:
$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

### 3. Studi Kasus Industri Manufaktur
Sebuah bengkel furnitur memproduksi dua tipe meja kerja: Tipe Standar ($x$) dan Tipe Ergonomis ($y$).
- Meja Tipe Standar membutuhkan 2 batang besi profil dan 3 lembar papan kayu.
- Meja Tipe Ergonomis membutuhkan 4 batang besi profil dan 2 lembar papan kayu.
Gudang memiliki persediaan 40 batang besi profil dan 36 lembar papan kayu.
Bentuk sistem persamaan linear:
$$\\begin{pmatrix} 2 & 4 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 40 \\\\ 36 \\end{pmatrix}$$
Dengan menghitung invers matriks koefisien, didapatkan solusi jumlah optimal meja yang harus dibuat tanpa menyisakan bahan baku terbuang.
        `
      },
      {
        id: 'mat-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Statistika Industri & Pengendalian Mutu (Quality Control)',
        subtitle: 'Six Sigma, Mean-Median-Modus Data Berkelompok, Standar Deviasi & Diagram Pareto',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Statistika inferensial dan deskriptif adalah instrumen utama departemen Quality Assurance (QA) untuk memastikan produk memenuhi toleransi presisi standar industri.',
          'Pemusatan data berkelompok dianalisis melalui Mean (rata-rata tertimbang), Median (nilai tengah kuantil), dan Modus (nilai frekuensi tertinggi).',
          'Standar deviasi (simpangan baku) mengukur variabilitas atau dispersi dimensi komponen dari nilai nominal target.',
          'Diagram Pareto (aturan 80/20) dan Histogram membantu tim teknis memprioritaskan penyelesaian jenis cacat produk yang paling dominan di lini perakitan.'
        ],
        keywords: [
          { term: 'Toleransi Dimensi', definition: 'Batas penyimpangan ukuran komponen yang diizinkan agar komponen tetap berfungsi dan dapat dirakit dengan presisi.' },
          { term: 'Standar Deviasi', definition: 'Ukuran statistik seberapa jauh nilai-nilai data tersebar dari nilai rata-rata (mean).' },
          { term: 'Prinsip Pareto', definition: 'Kaidah 80/20 yang menyatakan bahwa sekitar 80% cacat produk di pabrik biasanya disebabkan oleh 20% jenis kegagalan utama.' }
        ],
        content: `
### 1. Statistika sebagai Landasan Standarisasi Industri
Di era industri modern (ISO 9001 & Six Sigma), tidak ada produk massal yang dibuat tanpa pengendalian statistik (*Statistical Process Control / SPC*). Lulusan SMK yang menguasai analisis data pengukuran baut, ketebalan cat, atau resistansi baterai memiliki daya saing tinggi sebagai teknisi pengendali mutu (*QC Inspector*).

### 2. Rumus Rata-rata Data Berkelompok
$$\\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i}$$
Di mana $x_i$ adalah nilai tengah kelas interval ke-$i$ dan $f_i$ adalah frekuensi kelas tersebut.

### 3. Rumus Standar Deviasi Sampel ($s$)
$$s = \\sqrt{\\frac{\\sum f_i (x_i - \\bar{x})^2}{n - 1}}$$
Semakin kecil nilai standar deviasi dari hasil uji sampel baut silinder mesin, semakin seragam dan berkualitas proses manufakturnya.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-mat-1',
        chapterId: 'mat-10-1',
        grade: 10,
        question: 'Bagaimana hubungan eksponen dan logaritma, serta apa syarat basis pada logaritma?',
        answer: 'Logaritma merupakan invers dari perpangkatan: a^b = c ekuivalen dengan ^a log c = b. Syarat basis a adalah a > 0 dan a != 1, sedangkan numerus c harus bernilai positif (c > 0).',
        tip: 'Ingat: Basis pangkat di bawah menjadi basis logaritma di atas kiri!'
      },
      {
        id: 'fc-mat-2',
        chapterId: 'mat-10-2',
        grade: 10,
        question: 'Apa perbedaan mendasar antara Barisan Aritmatika dan Barisan Geometri dalam konteks laju perubahan?',
        answer: 'Barisan aritmatika mengalami perubahan dengan selisih konstan (penjumlahan/pengurangan tetap), sedangkan barisan geometri mengalami perubahan dengan rasio pengali konstan (perkalian/pembagian bertingkat).',
        tip: 'Aritmatika = Tambah/Kurang (+/-); Geometri = Kali/Bagi (* / :).'
      },
      {
        id: 'fc-mat-3',
        chapterId: 'mat-10-3',
        grade: 10,
        question: 'Sebutkan nilai perbandingan trigonometri dasar (Sin, Cos, Tan) pada segitiga siku-siku!',
        answer: 'Sin = Depan / Miring (Demi), Cos = Samping / Miring (Sami), Tan = Depan / Samping (Desa).',
        tip: 'Jembatan keledai: Demi - Sami - Desa.'
      },
      {
        id: 'fc-mat-4',
        chapterId: 'mat-11-1',
        grade: 11,
        question: 'Kapan suatu matriks persegi berordo 2x2 dikatakan tidak memiliki invers (Matriks Singular)?',
        answer: 'Matriks dikatakan singular dan tidak memiliki invers ketika nilai determinannya sama dengan nol (det(A) = ad - bc = 0).',
        tip: 'Jika determinan nol, pembagi pada rumus invers 1/det menjadi tak terdefinisi.'
      },
      {
        id: 'fc-mat-5',
        chapterId: 'mat-12-1',
        grade: 12,
        question: 'Mengapa standar deviasi lebih diutamakan daripada nilai rata-rata (mean) saja saat inspeksi Quality Control (QC)?',
        answer: 'Karena nilai rata-rata bisa menipu jika ada nilai ekstrem. Standar deviasi menunjukkan tingkat kestabilan dan keseragaman ukuran produk komponen mesin.',
        tip: 'Mean mengukur titik tengah, Standar Deviasi mengukur kerapatan/konsistensi.'
      }
    ],
    quiz: [
      {
        id: 'q-mat-1',
        chapterId: 'mat-10-1',
        question: 'Jika 2^(x + 3) = 64, maka berapakah nilai dari x?',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
        correctIndex: 1,
        explanation: 'Ubah ruas kanan ke basis 2: 64 = 2^6. Maka 2^(x+3) = 2^6 -> x + 3 = 6 -> x = 6 - 3 = 3.'
      },
      {
        id: 'q-mat-2',
        chapterId: 'mat-10-2',
        question: 'Sebuah mesin bubut di pabrik menghasilkan 50 unit barang pada hari pertama. Setiap hari berikutnya produksinya meningkat 8 unit. Berapakah produksi mesin tersebut pada hari ke-15?',
        options: ['154 unit', '162 unit', '170 unit', '178 unit'],
        correctIndex: 1,
        explanation: 'Gunakan rumus suku ke-n barisan aritmatika: U_n = a + (n-1)b. Diketahui a = 50, b = 8, n = 15. Maka U_15 = 50 + (14 * 8) = 50 + 112 = 162 unit.'
      },
      {
        id: 'q-mat-3',
        chapterId: 'mat-10-3',
        question: 'Seorang teknisi mengukur sudut elevasi ke ujung atas tiang BTS dari jarak horizontal 20 meter dan mendapati sudut 60 derajat. Jika tinggi alat ukur diabaikan, berapa tinggi tiang tersebut? (tan 60° = √3 ≈ 1,732)',
        options: ['10√3 meter', '20√3 meter', '40/√3 meter', '30 meter'],
        correctIndex: 1,
        explanation: 'tan 60° = tinggi / jarak -> √3 = tinggi / 20 -> tinggi = 20√3 meter (sekitar 34,64 meter).'
      },
      {
        id: 'q-mat-4',
        chapterId: 'mat-11-1',
        question: 'Determinan dari matriks A = [[4, 2], [5, 3]] adalah...',
        options: ['1', '2', '4', '6'],
        correctIndex: 1,
        explanation: 'det(A) = (a * d) - (b * c) = (4 * 3) - (2 * 5) = 12 - 10 = 2.'
      },
      {
        id: 'q-mat-5',
        chapterId: 'mat-12-1',
        question: 'Dalam manajemen mutu industri, diagram apa yang digunakan untuk mengidentifikasi 20% penyebab utama dari 80% cacat produksi?',
        options: ['Diagram Batang', 'Diagram Pareto', 'Diagram Venn', 'Scatter Plot'],
        correctIndex: 1,
        explanation: 'Diagram Pareto menggabungkan diagram batang dan garis kumulatif untuk menerapkan prinsip 80/20 dalam manajemen kualitas manufaktur.'
      }
    ]
  },

  {
    id: 'bahasa-indonesia',
    title: 'Bahasa Indonesia',
    shortName: 'B. Indonesia',
    category: 'bahasa-komunikasi',
    categoryLabel: 'Bahasa & Komunikasi Vokasi',
    color: '#006a68',
    badgeColor: '#3d9896',
    description: 'Penguasaan komunikasi teknis, penyusunan Standard Operating Procedure (SOP), teks negosiasi bisnis, proposal proyek, hingga surat lamaran kerja & CV ATS modern.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 24,
      flashcardsCount: 36,
      quizCount: 20,
      estimatedHours: 42
    },
    chapters: [
      {
        id: 'bindo-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Teks Laporan Hasil Observasi (LHO) Teknis',
        subtitle: 'Inspeksi Mesin, Dokumentasi Fasilitas Bengkel & Karakteristik Alat Kerja',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Teks LHO menyajikan informasi objektif berdasarkan pengamatan empiris di lapangan kerja atau bengkel praktek.',
          'Struktur baku: Pernyataan Umum/Klasifikasi, Deskripsi Bagian (komponen spesifik mesin/alat), dan Deskripsi Manfaat/Fungsi operasional.',
          'Kaidah kebahasaan: Menggunakan kalimat definisi (adalah, merupakan), istilah teknis (*jargon* bidang keahlian), nomina konkret, dan kalimat fakta tanpa opini subjektif.'
        ],
        keywords: [
          { term: 'Objektivitas', definition: 'Penyajian data dan fakta apa adanya tanpa dipengaruhi perasaan atau asumsi pribadi penulis.' },
          { term: 'Deskripsi Bagian', definition: 'Bagian teks LHO yang membedah rincian komponen fisik, dimensi, material, dan mekanisme alat yang diobservasi.' },
          { term: 'Verba Relasional', definition: 'Kata kerja yang berfungsi menghubungkan subjek dengan pelengkap definisi, seperti: adalah, ialah, tergolong.' }
        ],
        content: `
### 1. Peran Teks LHO dalam Dunia Usaha & Industri (DUDI)
Di lingkungan industri, setiap laporan teknis harus dapat dipertanggungjawabkan kebenarannya. Ketika teknisi melakukan audit perawatan mesin berkala (*preventive maintenance*), ia menyusun laporan hasil observasi kondisi fisik mesin, kebocoran fluida, hingga keausan suku cadang secara terperinci.

### 2. Struktur Teks LHO
1. **Pernyataan Umum (Klasifikasi):** Mengelompokkan objek amatan ke dalam kelas atau kategori yang lebih luas (misal: mesin bubut konvensional termasuk golongan perkakas potong logam).
2. **Deskripsi Bagian:** Menjelaskan detail spesifikasi teknis komponen utama (kepala tetap, poros transportir, eretan, dan kepala lepas).
3. **Deskripsi Manfaat:** Menguraikan fungsi operasional alat dalam mendukung proses manufaktur di workshop.

### 3. Ciri Kebahasaan Teks LHO
- Pemakaian kalimat deskripsi yang terukur (misal: "Memiliki kapasitas putaran spindel antara 45 hingga 1800 rpm").
- Pemakaian istilah teknis ilmiah sesuai bidang kejuruan.
- Menghindari kata sifat multitafsir seperti "sangat bagus", "agak jelek", melainkan menggantinya dengan data presisi seperti "terjadi keausan 0,2 mm pada pahat".
        `
      },
      {
        id: 'bindo-10-2',
        grade: 10,
        chapterNumber: 'BAB 02',
        title: 'Teks Prosedur Kompleks & SOP Industri',
        subtitle: 'Penyusunan Standard Operating Procedure (SOP), K3 & Buku Manual Perangkat',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Teks prosedur kompleks berisi langkah-langkah kerja terstruktur dan berurutan yang harus ditaati demi keselamatan dan kualitas hasil kerja.',
          'Struktur inti: Tujuan/Pengantar, Alat dan Bahan/Persyaratan Keselamatan (APD), serta Langkah-langkah Kerja yang sistematis disertai penegasan peringatan.',
          'Kaidah bahasa: Menggunakan kalimat imperatif (perintah), konjungsi temporal (kemudian, selanjutnya), verba material, dan keterangan cara/alat.'
        ],
        keywords: [
          { term: 'SOP (Standard Operating Procedure)', definition: 'Pedoman tertulis standar operasional baku yang mengatur alur tindakan teknis demi menjamin keselamatan dan konsistensi mutu.' },
          { term: 'Kalimat Imperatif', definition: 'Kalimat yang mengandung intonasi perintah, instruksi, atau larangan yang tegas (contoh: Pastikan sakelar utama dalam posisi OFF).' },
          { term: 'Verba Material', definition: 'Kata kerja yang menunjukkan aktivitas fisik nyata, seperti: mengencangkan, melumasi, menekan, mengukur.' }
        ],
        content: `
### 1. Pentingnya SOP Kerja di Bengkel Vokasi
Kegagalan mematuhi prosedur kerja bukan hanya berisiko merusak instrumen berharga puluhan juta rupiah, melainkan mengancam keselamatan nyawa pekerja. Teks prosedur kompleks berfungsi sebagai panduan universal yang meminimalkan kelalaian manusia (*human error*).

### 2. Sistematika Format SOP Standar Industri
- **Kode Dokumen & Revisi:** Identitas registrasi manajemen ISO.
- **Tujuan Operasional:** Hasil akhir yang ingin dicapai setelah prosedur dijalankan.
- **Perlengkapan K3:** Alat Pelindung Diri (kacamata safety, sepatu boot, sarung tangan nitril).
- **Langkah Kerja Berurut:** Penomoran hierarkis dengan instruksi yang tidak boleh ditukar posisinya.
        `
      },
      {
        id: 'bindo-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Proposal Proyek Kolaboratif & Pengajuan Vendor Industri',
        subtitle: 'Sistematika Rancangan Biaya (RAB), Jadwal Timeline & Metodologi Kerja Praktek',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Proposal proyek kejuruan adalah rencana tertulis formal yang diajukan kepada mitra industri atau dewan sekolah untuk mendapatkan persetujuan dan pendanaan proyek.',
          'Sistematika baku: Latar Belakang Masalah, Rumusan Tujuan & Manfaat Teknis, Ruang Lingkup Proyek, Rencana Anggaran Biaya (RAB), Jadwal Pelaksanaan (Gantt Chart), dan Penutup.',
          'Bahasa proposal bersifat lugas, denotatif, meyakinkan (*persuasif* objektif), dan didukung estimasi kalkulasi finansial realistis.'
        ],
        keywords: [
          { term: 'Rencana Anggaran Biaya (RAB)', definition: 'Rincian estimasi biaya material, upah kerja, dan biaya operasional tak terduga yang disusun secara cermat.' },
          { term: 'Gantt Chart', definition: 'Diagram batang horisontal yang memvisualisasikan jadwal pelaksanaan tiap tahapan proyek dari awal hingga serah terima hasil.' }
        ],
        content: `
### 1. Kemampuan Menyusun Proposal di Era Teaching Factory
Siswa SMK modern terlibat langsung dalam pengerjaan order industri (*Teaching Factory*). Menguasai penulisan proposal yang meyakinkan memungkinkan siswa dan guru mengajukan penawaran jasa pembuatan suku cadang atau pengembangan aplikasi kepada perusahaan mitra secara profesional.
        `
      },
      {
        id: 'bindo-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Surat Lamaran Pekerjaan Profesional & CV ATS-Friendly',
        subtitle: 'Strategi Komunikasi Karir, Portofolio Digital & Penembusan Algoritma Rekrutmen',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Surat lamaran pekerjaan adalah dokumen resmi formal yang ditujukan kepada instansi/perusahaan untuk menawarkan keahlian vokasi yang dimiliki.',
          'Struktur surat: Tempat dan tanggal penulisan, Hal dan lampiran, Alamat instansi, Salam pembuka, Alinea pembuka (sumber info lowongan), Alinea isi (kualifikasi keahlian & kompetensi teknis), Alinea penutup, dan Tanda tangan/nama terang.',
          'Curriculum Vitae (CV) modern harus memenuhi standar format ATS (Applicant Tracking System) dengan tipografi bersih, kata kunci keahlian industri, dan susunan kronologis terbalik.'
        ],
        keywords: [
          { term: 'ATS (Applicant Tracking System)', definition: 'Perangkat lunak rekrutmen yang memindai dan menyaring ribuan CV pencari kerja secara otomatis berdasarkan kata kunci kompetensi.' },
          { term: 'Kompetensi Hard Skill', definition: 'Keterampilan teknis terukur yang diperoleh dari pelatihan vokasi (contoh: sertifikasi pengelasan GTAW, drafting AutoCAD, PLC programming).' },
          { term: 'Titi Mangsa', definition: 'Pencantuman tempat dan tanggal pembuatan surat yang diletakkan di pojok kanan atas tanpa diakhiri tanda titik.' }
        ],
        content: `
### 1. Menyiapkan Dokumen Karir Lulusan SMK
Lulusan SMK memiliki keunggulan kompetensi praktis yang siap kerja. Namun, jika dokumen lamaran ditulis dengan format berantakan, tidak baku, atau salah sasaran, peluang dipanggil wawancara kerja akan gugur pada tahap administrasi awal.

### 2. Aturan Penulisan Alamat Surat yang Benar (Sesuai PUEBI)
Hindari kesalahan umum berikut:
- **SALAH:** Kepada Yth. Bapak HRD PT. Maju Bersama (Kata "Kepada" mubazir, "PT" tidak pakai titik, tidak perlu menyebut gender jika belum tahu).
- **BENAR:**
  Yth. Manajer Personalia PT Maju Bersama
  Jalan Industri Raya No. 45, Cikarang
  Bekasi

### 3. Tips CV ATS-Friendly untuk Lulusan Vokasi
1. Gunakan jenis font standar yang mudah dibaca mesin OCR (Arial, Calibri, Helvetica).
2. Cantumkan kata kunci (*keywords*) persis seperti yang tertulis dalam kualifikasi lowongan kerja.
3. Tuliskan pencapaian berbasis data angka (contoh: "Menyelesaikan perakitan 120 unit kontrol panel dengan tingkat kecacatan 0% selama program PKL di PT Astra").
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-bind-1',
        chapterId: 'bindo-10-1',
        question: 'Apa perbedaan utama antara kalimat fakta dan kalimat opini dalam Teks Laporan Hasil Observasi?',
        answer: 'Kalimat fakta menyajikan data objektif yang terverifikasi dan dapat diuji kebenarannya (misal: Mesin ini berbobot 250 kg), sedangkan kalimat opini memuat pandangan subjektif atau perkiraan pribadi (misal: Mesin ini tampak sangat bagus).',
        tip: 'Fakta = Ada bukti konkret & angka terukur; Opini = Pendapat/penilaian rasa.'
      },
      {
        id: 'fc-bind-2',
        chapterId: 'bindo-10-2',
        question: 'Mengapa teks prosedur Standard Operating Procedure (SOP) harus memakai urutan langkah yang kaku dan bernomor?',
        answer: 'Karena urutan langkah dalam SOP bersifat kausal dan prosedural teknis; jika satu tahapan dilewati atau dibalik, dapat menyebabkan kegagalan sistem atau kecelakaan kerja fatal.',
        tip: 'Ingat: Prosedur kerja K3 tidak boleh diacak-acak!'
      },
      {
        id: 'fc-bind-3',
        chapterId: 'bindo-12-1',
        question: 'Bagaimana penulisan alamat tujuan surat lamaran pekerjaan yang sesuai dengan kaidah bahasa resmi PUEBI?',
        answer: 'Tidak menggunakan kata "Kepada", singkatan perseroan "PT" tidak memakai titik, tidak menggunakan nama jabatan bersamaan dengan sapaan jenis kelamin bila belum pasti, dan diakhiri tanpa tanda titik.',
        tip: 'Yth. HRD Manager PT Sukses Makmur (bukan Kepada Yth. Bapak HRD PT. ...).'
      }
    ],
    quiz: [
      {
        id: 'q-bind-1',
        chapterId: 'bindo-10-1',
        question: 'Manakah di bawah ini yang merupakan kalimat definisi dalam teks laporan hasil observasi teknis?',
        options: [
          'Mesin bubut sebaiknya dibersihkan setiap hari jumat oleh siswa.',
          'Mesin frais adalah mesin perkakas yang digunakan untuk memotong permukaan benda kerja dengan menggunakan pisau berputar multi-mata.',
          'Bengkel teknik mesin tampak sangat bersih dan nyaman untuk kegiatan praktik.',
          'Pahat karbida mungkin lebih awet dibandingkan pahat HSS.'
        ],
        correctIndex: 1,
        explanation: 'Kalimat definisi ditandai dengan verba kopula relasional seperti "adalah", "merupakan", atau "ialah" yang menjelaskan hakikat konsep secara objektif.'
      },
      {
        id: 'q-bind-2',
        chapterId: 'bindo-10-2',
        question: '"Kencangkan baut pengunci dengan kunci torsi pada tekanan 80 Nm sebelum menyalakan motor induksi!" Kalimat tersebut termasuk jenis kalimat...',
        options: ['Interogatif', 'Deklaratif', 'Imperatif', 'Eksklamatif'],
        correctIndex: 2,
        explanation: 'Kalimat tersebut memberikan instruksi/perintah tegas yang merupakan ciri khas kalimat imperatif pada teks prosedur kerja.'
      },
      {
        id: 'q-bind-3',
        chapterId: 'bindo-12-1',
        question: 'Penulisan singkatan perseroan terbatas dan alamat surat lamaran kerja yang paling tepat adalah...',
        options: [
          'Kepada Yth. Pimpinan P.T. Maju Lancar, Jln. Sudirman 10.',
          'Yth. Direktur PT Maju Lancar\\nJalan Jenderal Sudirman No. 10\\nSurabaya',
          'Kepada PT. Maju Lancar Jalan Jendral Sudirman no 10',
          'Yth; Bapak HRD PT. Maju Lancar. Jln Jenderal Sudirman 10'
        ],
        correctIndex: 1,
        explanation: 'PT tidak disingkat memakai titik (PT bukan P.T.), kata "Kepada" tidak diperlukan sebelum "Yth.", nama jalan tidak disingkat "Jln.", dan tidak diakhiri tanda titik.'
      }
    ]
  },

  {
    id: 'bahasa-inggris',
    title: 'Bahasa Inggris Vokasi',
    shortName: 'B. Inggris',
    category: 'bahasa-komunikasi',
    categoryLabel: 'Bahasa & Komunikasi Vokasi',
    color: '#86381d',
    badgeColor: '#a54f32',
    description: 'Workplace English, manual perbaikan teknis, simulasi wawancara kerja profesional, korespondensi bisnis internasional, serta presentasi proyek industri.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 22,
      flashcardsCount: 38,
      quizCount: 20,
      estimatedHours: 40
    },
    chapters: [
      {
        id: 'bing-10-1',
        grade: 10,
        chapterNumber: 'CHAPTER 01',
        title: 'Workplace Communication & Technical Instructions',
        subtitle: 'Workshop Safety Guidelines, Equipment Handling & Giving Imperative Commands',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Workplace communication requires clear, concise, and unambiguous language to ensure safety and productivity.',
          'Imperative sentences are crucial for manuals: e.g., "Always wear protective goggles before operating the grinding wheel."',
          'Modal auxiliaries for safety rules: MUST (absolute obligation), SHOULD (recommended practice), MUST NOT (strict prohibition).'
        ],
        keywords: [
          { term: 'Personal Protective Equipment (PPE)', definition: 'Gear worn by workers to minimize exposure to hazards that cause workplace injuries or illnesses.' },
          { term: 'Imperative Sentence', definition: 'A sentence that gives direct instructions or warnings, typically beginning with a base verb without a stated subject.' },
          { term: 'Hazard Warning Sign', definition: 'Standardized visual symbols displaying potential dangers such as high voltage, toxic vapors, or hot surfaces.' }
        ],
        content: `
### 1. English as a Global Technical Language
In multinational companies and modern industries, machine interfaces, component specifications, and safety data sheets (MSDS) are written in English. Vocational students who master technical English can interpret manuals without translation errors.

### 2. Formulating Safety Instructions
- **Prohibition:** "Do NOT touch moving gears under any circumstances."
- **Obligation:** "All personnel MUST check emergency stop switches prior to commencing operations."
- **Precaution:** "ENSURE that the coolant valve is fully open before feeding the workpiece."
        `
      },
      {
        id: 'bing-11-1',
        grade: 11,
        chapterNumber: 'CHAPTER 01',
        title: 'Professional Job Interviews & Pitching Skills',
        subtitle: 'STAR Method, Demonstrating Technical Expertise & Handling Common Questions',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Job interviews evaluate not only your technical competencies but also your professional demeanor and communication fluency.',
          'The STAR technique (Situation, Task, Action, Result) is the gold standard for answering behavioral and technical questions.',
          'Key vocabulary: specialized vocational skills, troubleshooting, problem solving, team collaboration, and adaptability.'
        ],
        keywords: [
          { term: 'STAR Technique', definition: 'A structured interview response method: Situation (context), Task (goal), Action (what you did), Result (measurable outcome).' },
          { term: 'Hard Skills vs Soft Skills', definition: 'Hard skills are teachable technical proficiencies; soft skills are interpersonal qualities like leadership and communication.' }
        ],
        content: `
### 1. Excelling in Vocational Job Interviews
When interviewers at global manufacturing or service firms ask: *"Tell me about a time you resolved an equipment breakdown,"* you must deliver a structured narrative rather than a vague statement.

### 2. The STAR Framework in Action
- **Situation:** "During my internship at PT Tech Manufacturing, the automated conveyor line stopped unexpectedly due to a sensor malfunction."
- **Task:** "I was tasked with identifying the root cause within 30 minutes to avoid a costly line bottleneck."
- **Action:** "I used a digital multimeter to trace the circuit signal, found a loose grounding terminal, and rewired it following safety protocols."
- **Result:** "The conveyor resumed normal operation in 18 minutes, saving the shift from missing its daily target."
        `
      },
      {
        id: 'bing-12-1',
        grade: 12,
        chapterNumber: 'CHAPTER 01',
        title: 'Technical Troubleshooting Reports & Cross-Cultural Negotiation',
        subtitle: 'Formal Incident Logs, Warranty Inquiries & International Vendor Dealings',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Technical reports document machine downtime, corrective measures taken, and recommendations to prevent recurring defects.',
          'Cross-cultural negotiation requires polite indirectness, active listening, and clarifying questions (e.g., "Could you clarify the delivery timeline?").',
          'Key formal phrases for negotiation: "We would appreciate if you could offer a 5% volume discount," and "Subject to quality verification."'
        ],
        keywords: [
          { term: 'Root Cause Analysis (RCA)', definition: 'A methodical problem-solving process aimed at identifying the fundamental cause of equipment or process failures.' },
          { term: 'Technical Incident Report', definition: 'A formal document recording unexpected downtime, parts replaced, and machine parameters for quality auditing.' }
        ],
        content: `
### 1. Communicating with Global Suppliers
Modern vocational graduates frequently interface with overseas parts distributors from Japan, Germany, or China. Being able to draft incident reports and negotiate warranty terms in clear English gives you an elite advantage in multinational corporations.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-bing-1',
        chapterId: 'bing-10-1',
        question: 'What is the grammatical form of an imperative sentence in technical operating manuals?',
        answer: 'It starts directly with the base form of the verb (Infinitive without "to") and has an understood subject (You). For example: "Turn off the main power breaker before inspecting the wiring."',
        tip: 'Verb 1 at the beginning of the sentence!'
      },
      {
        id: 'fc-bing-2',
        chapterId: 'bing-11-1',
        question: 'What does each letter stand for in the STAR interview technique?',
        answer: 'S = Situation (Background), T = Task (Objective), A = Action (Your steps taken), R = Result (Measurable outcome or lesson learned).',
        tip: 'Situation - Task - Action - Result.'
      }
    ],
    quiz: [
      {
        id: 'q-bing-1',
        chapterId: 'bing-10-1',
        question: 'Which of the following sentences correctly expresses a mandatory workshop safety rule?',
        options: [
          'You may want to wear safety shoes if you feel like it.',
          'Safety helmets must be worn at all times in this construction zone.',
          'Why don\'t we put on gloves later today?',
          'Wearing earplugs is somewhat interesting for operators.'
        ],
        correctIndex: 1,
        explanation: 'The modal auxiliary "must" indicates an absolute requirement and regulatory obligation indispensable for workplace safety.'
      },
      {
        id: 'q-bing-2',
        chapterId: 'bing-11-1',
        question: 'In the STAR interview response method, what should you explain during the "Action" part?',
        options: [
          'The historical background of the company.',
          'The specific steps, technical tools, and problem-solving actions you personally took.',
          'The grades you received in vocational school.',
          'The complaints from clients.'
        ],
        correctIndex: 1,
        explanation: 'The "Action" segment highlights your active contribution, vocational tools used, and technical judgment.'
      }
    ]
  },

  {
    id: 'informatika',
    title: 'Informatika SMK',
    shortName: 'Informatika',
    category: 'teknologi-digital',
    categoryLabel: 'Teknologi & Literasi Digital',
    color: '#1d4ed8',
    badgeColor: '#3b82f6',
    description: 'Computational thinking, spreadsheet analitik bisnis, jaringan komputer LAN/WLAN, keamanan siber (cybersecurity), logika algoritma, dan tren kecerdasan buatan (AI).',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 26,
      flashcardsCount: 40,
      quizCount: 25,
      estimatedHours: 45
    },
    chapters: [
      {
        id: 'info-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Berpikir Komputasional & Flowchart Logika',
        subtitle: 'Dekomposisi Masalah, Pengenalan Pola, Abstraksi & Perancangan Algoritma',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Berpikir komputasional (Computational Thinking) adalah proses pemecahan masalah dengan 4 pilar: Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.',
          'Dekomposisi memecah masalah kompleks sistem mesin/bisnis menjadi bagian-bagian kecil yang dapat ditangani satu per satu.',
          'Flowchart menggunakan simbol standar internasional (ANSI/ISO): Oval (Terminator), Jajaran Genjang (Input/Output), Persegi Panjang (Proses), dan Belah Ketupat (Decision/Percabangan).'
        ],
        keywords: [
          { term: 'Dekomposisi', definition: 'Strategi memecah masalah besar atau sistem rumit menjadi modul-modul sub-masalah yang lebih sederhana dan mudah dikelola.' },
          { term: 'Abstraksi', definition: 'Proses menyaring detail yang tidak relevan agar fokus pada informasi inti penentu keputusan.' },
          { term: 'Algoritma', definition: 'Urutan langkah-langkah logis dan terhingga untuk menyelesaikan suatu masalah tertentu.' }
        ],
        content: `
### 1. Fondasi Logika di Semua Jurusan SMK
Apapun jurusannya—otomotif, tata boga, akuntansi, atau teknik permesinan—seluruh industri saat ini digerakkan oleh sistem digital otomatis. Kemampuan berpikir komputasional melatih siswa menganalisis akar masalah (*root cause analysis*) secara runut dan efisien.

### 2. Empat Pilar Berpikir Komputasional
1. **Dekomposisi:** Misalnya saat mobil tidak menyala, mekanik membagi analisis menjadi sistem pengapian, sistem bahan bakar, dan sistem kelistrikan aki.
2. **Pengenalan Pola (Pattern Recognition):** Mengidentifikasi kesamaan siklus kegagalan berdasarkan data riwayat perawatan sebelumnya.
3. **Abstraksi:** Mengabaikan warna cat mobil saat mendiagnosis kerusakan injektor bahan bakar.
4. **Algoritma:** Menyusun panduan pemecahan masalah bertahap (*step-by-step troubleshooting checklist*).
        `
      },
      {
        id: 'info-10-2',
        grade: 10,
        chapterNumber: 'BAB 02',
        title: 'Analisis Data Lembar Kerja & Otomasi Perkantoran',
        subtitle: 'Formula Spreadsheet Bisnis (VLOOKUP/XLOOKUP, IF Bercabang, Pivot Table)',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Spreadsheet (Excel / Google Sheets) adalah perangkat lunak wajib di seluruh lini kerja untuk mengelola inventaris, daftar harga, dan pencatatan absensi.',
          'Fungsi logika IF bertingkat digunakan untuk menentukan status kelayakan barang (LOLOS QC / REJECT).',
          'Fungsi pencarian data (VLOOKUP / XLOOKUP) menghubungkan tabel referensi suku cadang dengan tabel transaksi pemesanan secara otomatis.',
          'Pivot Table merangkum ribuan baris data penjualan/produksi menjadi laporan ringkas dalam hitungan detik.'
        ],
        keywords: [
          { term: 'XLOOKUP', definition: 'Fungsi pencarian modern serbaguna pada spreadsheet yang mampu mencari data ke kiri maupun kanan tanpa batasan indeks kolom.' },
          { term: 'Pivot Table', definition: 'Fitur interaktif untuk meringkas, mengelompokkan, dan menganalisis data dalam jumlah besar dengan metode seret-lepas.' }
        ],
        content: `
### 1. Kebutuhan Spreadsheet di Dunia Kerja
Seorang lulusan SMK yang mahir formula spreadsheet memiliki nilai tawar tinggi di mata manajer gudang dan staf operasional. Menginput data secara manual rentan kesalahan fatal, sementara otomatisasi formula menjamin keakuratan laporan.

### 2. Logika Formula Penting
- **IF Bersarang:** \`=IF(C2>=80, "Lolos Kategori A", IF(C2>=65, "Lolos Kategori B", "Uji Ulang"))\`
- **XLOOKUP Pencarian Kode Barang:** \`=XLOOKUP(A2, MasterBarang!A:A, MasterBarang!C:C, "Tidak Ditemukan")\`
        `
      },
      {
        id: 'info-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Keamanan Siber (Cybersecurity) & Etika Digital',
        subtitle: 'Ancaman Phishing, Enkripsi Data, Autentikasi 2FA, dan Kepatuhan UU ITE',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Keamanan siber melindungi integritas, kerahasiaan (*confidentiality*), dan ketersediaan (*availability*) data perusahaan (prinsip CIA Triad).',
          'Serangan *Social Engineering* seperti *Phishing* mengeksploitasi kelengahan manusia daripada kelemahan celah perangkat lunak.',
          'Autentikasi Dua Faktor (2FA) dan manajemen kata sandi yang kuat adalah garis pertahanan pertama bagi akun operasional industri.',
          'Etika digital dan UU ITE mengatur perlindungan rahasia dagang, privasi konsumen, dan sanksi pembajakan lisensi perangkat lunak.'
        ],
        keywords: [
          { term: 'CIA Triad', definition: 'Tiga pilar dasar keamanan siber: Confidentiality (Kerahasiaan), Integrity (Keaslian/Integritas), dan Availability (Ketersediaan).' },
          { term: 'Phishing', definition: 'Metode penipuan rekayasa sosial untuk mencuri kredensial login atau data rahasia melalui pesan atau email palsu yang menyamar sebagai pihak resmi.' },
          { term: 'Enkripsi End-to-End', definition: 'Teknik pengkodean data di mana hanya pengirim dan penerima yang sah yang memegang kunci untuk membaca pesan tersebut.' }
        ],
        content: `
### 1. Kesadaran Keamanan Data di Lingkungan Perusahaan
Di tempat kerja, seorang teknisi sering memegang akses ke komputer server jaringan, data desain produk baru, atau transaksi keuangan pelanggan. Kecerobohan mencolokkan flashdisk bervirus atau membagikan kata sandi dapat memicu kerugian miliaran rupiah akibat serangan *ransomware*.
        `
      },
      {
        id: 'info-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Internet of Things (IoT), Smart Factory & Kecerdasan Buatan (AI)',
        subtitle: 'Sensor Mikrokontroler, Protokol MQTT, Machine Learning & Etika Profesi IT',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Industri 4.0 menghubungkan mesin fisik dengan ekosistem digital melalui sensor IoT berbasis mikrokontroler (ESP32/Arduino).',
          'Protokol komunikasi ringan MQTT (Message Queuing Telemetry Transport) menjadi standar pertukaran data sensor ke dashboard cloud pemantauan.',
          'Penerapan Kecerdasan Buatan (AI) di pabrik mencakup pemeliharaan prediktif (*Predictive Maintenance*) dan inspeksi visual otomatis berbasis Computer Vision.',
          'Etika profesi IT mencakup kepatuhan lisensi open-source vs proprietary, Hak Atas Kekayaan Intelektual (HaKI), dan perlindungan privasi data pengguna.'
        ],
        keywords: [
          { term: 'Internet of Things (IoT)', definition: 'Jaringan perangkat fisik yang dilengkapi sensor, perangkat lunak, dan konektivitas untuk mengumpulkan serta bertukar data secara otomatis.' },
          { term: 'Predictive Maintenance', definition: 'Teknik perawatan mesin berbasis analitik data sensor getaran dan suhu untuk mendeteksi potensi kerusakan sebelum mesin benar-benar mogok.' },
          { term: 'MQTT', definition: 'Protokol pesan publish/subscribe yang sangat hemat daya dan bandwidth, ideal untuk komunikasi perangkat sensor cerdas di pabrik.' }
        ],
        content: `
### 1. Transformasi Smart Factory di Dunia Vokasi
Di era modern, lulusan SMK tidak lagi hanya memperbaiki mesin secara mekanis, melainkan membaca data telemetri yang dikirimkan sensor cerdas ke layar tablet atau komputer pengawas. Kemampuan memahami arsitektur IoT dan otomasi data menjadi nilai keunggulan utama.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-info-1',
        chapterId: 'info-10-1',
        question: 'Apa fungsi simbol jajaran genjang dalam diagram alir (Flowchart)?',
        answer: 'Simbol jajaran genjang (parallelogram) digunakan untuk menyatakan operasi Masukan (Input) atau Keluaran (Output) data.',
        tip: 'Jajaran genjang = Input / Output data!'
      },
      {
        id: 'fc-info-2',
        chapterId: 'info-10-2',
        question: 'Apa keunggulan formula XLOOKUP dibandingkan dengan VLOOKUP konvensional?',
        answer: 'XLOOKUP dapat mencari data ke segala arah (kanan maupun kiri), tidak memerlukan penomoran indeks kolom statis, dan secara bawaan menangani nilai error jika data tidak ditemukan.',
        tip: 'XLOOKUP = Lebih fleksibel dan tidak mudah rusak saat tabel disisipi kolom baru.'
      },
      {
        id: 'fc-info-3',
        chapterId: 'info-11-1',
        question: 'Sebutkan 3 komponen utama dalam prinsip dasar keamanan informasi (CIA Triad)!',
        answer: '1. Confidentiality (Kerahasiaan), 2. Integrity (Keutuhan/Integritas), dan 3. Availability (Ketersediaan data saat dibutuhkan).',
        tip: 'C - I - A: Confidentiality, Integrity, Availability.'
      }
    ],
    quiz: [
      {
        id: 'q-info-1',
        chapterId: 'info-10-1',
        question: 'Simbol belah ketupat (diamond) pada bagan alir (flowchart) memiliki kegunaan untuk...',
        options: [
          'Memulai atau mengakhiri alur program',
          'Menunjukkan proses perhitungan aritmatika',
          'Mengambil keputusan atau percabangan berdasarkan kondisi benar/salah',
          'Menghubungkan flowchart antar halaman'
        ],
        correctIndex: 2,
        explanation: 'Simbol belah ketupat (Decision) menguji suatu syarat/kondisi logika yang menghasilkan cabang jalur Ya (True) atau Tidak (False).'
      },
      {
        id: 'q-info-2',
        chapterId: 'info-10-2',
        question: 'Di program Microsoft Excel, formula yang digunakan untuk menjumlahkan nilai pada rentang tertentu hanya jika memenuhi kriteria tertentu adalah...',
        options: ['SUM', 'SUMIF', 'COUNTIF', 'AVERAGE'],
        correctIndex: 1,
        explanation: 'Fungsi SUMIF menjumlahkan nilai sel yang memenuhi satu kriteria kualifikasi yang ditentukan pengguna.'
      },
      {
        id: 'q-info-3',
        chapterId: 'info-11-1',
        question: 'Email palsu yang mengatasnamakan bank atau vendor resmi untuk memancing karyawan mengeklik tautan pencuri password disebut serangan...',
        options: ['DDoS Attack', 'Phishing', 'Brute Force', 'Trojan Horse'],
        correctIndex: 1,
        explanation: 'Phishing adalah bentuk rekayasa sosial yang memanipulasi psikologis korban agar menyerahkan kredensial sensitif secara sukarela.'
      }
    ]
  },

  {
    id: 'pendidikan-pancasila',
    title: 'Pendidikan Pancasila',
    shortName: 'Pancasila (PPKn)',
    category: 'sosial-humaniora',
    categoryLabel: 'Sosial Humaniora & Kewarganegaraan',
    color: '#006a68',
    badgeColor: '#00706f',
    description: 'Konstitusi UUD NRI 1945, hak & kewajiban tenaga kerja (UU Ketenagakerjaan), etika profesi anti-korupsi, wawasan kebangsaan, dan harmonisasi budaya industri.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 20,
      flashcardsCount: 30,
      quizCount: 18,
      estimatedHours: 36
    },
    chapters: [
      {
        id: 'ppkn-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Nilai-Nilai Pancasila dalam Praktik Berbangsa & Budaya Kerja',
        subtitle: 'Penerapan Sila Pancasila di Tempat Kerja, Integritas & Disiplin Industri 5S/5R',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Pancasila bukan sekadar dasar negara teoretis, melainkan pedoman moral dan etika kerja luhur di dunia industri dan masyarakat.',
          'Sila ke-1 melandasi kejujuran dan etika spiritual; Sila ke-2 menjamin perlakuan manusiawi tanpa diskriminasi sesama buruh; Sila ke-3 memperkuat gotong royong dan kekompakan tim.',
          'Sila ke-4 mengedepankan musyawarah mufakat dalam perundingan kerja bersama (PKB); Sila ke-5 menuntut keadilan kompensasi dan kesejahteraan pekerja.'
        ],
        keywords: [
          { term: 'Integritas Moral', definition: 'Konsistensi antara prinsip moral, kejujuran batiniah, dan perbuatan nyata dalam mengemban amanah pekerjaan.' },
          { term: 'Perjanjian Kerja Bersama (PKB)', definition: 'Perjanjian hasil musyawarah antara serikat pekerja dengan pengusaha yang memuat syarat-syarat kerja dan kewajiban kedua pihak.' },
          { term: 'Gotong Royong', definition: 'Tradisi luhur bangsa Indonesia yang tercermin dalam semangat kolaborasi tanpa pamrih untuk kemakmuran bersama.' }
        ],
        content: `
### 1. Relevansi Pancasila bagi Calon Tenaga Kerja Vokasi
Di tempat kerja modern, keahlian teknis (*hard skills*) yang hebat tidak akan bertahan lama tanpa integritas dan etika yang kuat. Penerapan nilai-nilai Pancasila membentuk lulusan SMK yang berkarakter tangguh, toleran, jujur, dan bertanggung jawab terhadap keselamatan bersama.
        `
      },
      {
        id: 'ppkn-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Norma Hukum & Hak Asasi Tenaga Kerja',
        subtitle: 'Regulasi Ketenagakerjaan, Hak Upah Layak, Jaminan Sosial (BPJS), dan K3',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Pasal 27 ayat 2 UUD 1945 menjamin tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.',
          'UU Ketenagakerjaan mengatur hak normatif pekerja: batas jam kerja (40 jam/minggu), waktu istirahat, hak cuti tahunan, dan hak upah lembur.',
          'Kewajiban pengusaha mencakup penyediaan lingkungan kerja yang aman (K3) serta kepesertaan dalam program BPJS Ketenagakerjaan dan Kesehatan.'
        ],
        keywords: [
          { term: 'Hak Normatif Buruh', definition: 'Hak-hak mendasar pekerja yang secara tegas dijamin dan dilindungi oleh undang-undang ketenagakerjaan negara.' },
          { term: 'BPJS Ketenagakerjaan', definition: 'Badan hukum publik yang memberikan perlindungan jaminan kecelakaan kerja, jaminan hari tua, jaminan pensiun, dan jaminan kematian.' }
        ],
        content: `
### 1. Perlindungan Hukum bagi Pekerja Muda SMK
Banyak siswa SMK yang akan langsung memasuki bursa kerja setelah lulus. Mengetahui hak dan kewajiban hukum adalah modal penting agar tidak menjadi korban eksploitasi kerja lembur ilegal atau pemutusan hubungan kerja sepihak tanpa pesangon.
        `
      },
      {
        id: 'ppkn-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Integritas Anti-Korupsi & Tata Kelola Perusahaan (Good Corporate Governance)',
        subtitle: 'Pencegahan Gratifikasi Pengadaan Barang, Whistleblowing System & Tanggung Jawab Sosial (CSR)',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Integritas profesional menuntut teknisi menolak segala bentuk suap/gratifikasi dalam proses inspeksi penerimaan bahan baku atau tender subkontrak.',
          'Prinsip Good Corporate Governance (GCG): Transparansi, Akuntabilitas, Responsibilitas, Independensi, dan Kesetaraan.',
          'Whistleblowing system adalah mekanisme perlindungan bagi karyawan yang berani melaporkan pelanggaran etika atau penyelewengan dana proyek.'
        ],
        keywords: [
          { term: 'Gratifikasi', definition: 'Pemberian uang, barang, diskon, atau fasilitas lain kepada pejabat atau petugas demi mempengaruhi keputusannya.' },
          { term: 'Good Corporate Governance (GCG)', definition: 'Prinsip tata kelola perusahaan yang sehat dan beretika demi melindungi kepentingan seluruh pemangku kepentingan.' }
        ],
        content: `
### 1. Membangun Budaya Kerja Bersih di Dunia Usaha
Saat lulusan SMK bekerja sebagai staf logistik pengadaan suku cadang atau teknisi kalibrasi mesin, godaan komisi ilegal (*kickback*) dari vendor kerap terjadi. Sikap anti-korupsi yang tertanam kuat menjaga reputasi diri dan mencegah kebangkrutan perusahaan.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-ppkn-1',
        chapterId: 'ppkn-10-1',
        question: 'Bagaimana perwujudan Sila Kedua Pancasila (Kemanusiaan yang Adil dan Beradab) di lingkungan bengkel kerja?',
        answer: 'Dengan menjamin perlakuan yang bermartabat terhadap seluruh tenaga kerja, melarang diskriminasi, menyediakan alat perlindungan diri yang layak, serta tidak mempekerjakan karyawan melampaui batas kemampuan fisik manusiawi.',
        tip: 'Menghargai martabat sesama manusia tanpa penindasan.'
      },
      {
        id: 'fc-ppkn-2',
        chapterId: 'ppkn-11-1',
        question: 'Berapakah batas jam kerja normal per minggu bagi tenaga kerja menurut regulasi ketenagakerjaan di Indonesia?',
        answer: 'Maksimal 40 jam per minggu (dapat dibagi menjadi 7 jam per hari untuk 6 hari kerja, atau 8 jam per hari untuk 5 hari kerja). Kelebihan jam wajib dihitung sebagai lembur berbayar.',
        tip: '40 jam per minggu batas kerja normal!'
      }
    ],
    quiz: [
      {
        id: 'q-ppkn-1',
        chapterId: 'ppkn-10-1',
        question: 'Musyawarah antara pimpinan perusahaan dan perwakilan serikat pekerja dalam menyusun Perjanjian Kerja Bersama (PKB) merupakan wujud pengamalan Pancasila sila ke-...',
        options: ['Kedua', 'Ketiga', 'Keempat', 'Kelima'],
        correctIndex: 2,
        explanation: 'Sila ke-4 menjiwai semangat musyawarah mufakat secara demokratis dan kekeluargaan dalam mengambil keputusan penting.'
      },
      {
        id: 'q-ppkn-2',
        chapterId: 'ppkn-11-1',
        question: 'Jaminan konstitusi bahwa tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan termaktub dalam UUD NRI 1945 pasal...',
        options: ['Pasal 27 ayat 1', 'Pasal 27 ayat 2', 'Pasal 28 ayat 1', 'Pasal 33 ayat 1'],
        correctIndex: 1,
        explanation: 'Pasal 27 ayat (2) UUD 1945 secara eksplisit menjamin hak setiap warga negara atas pekerjaan dan penghidupan yang layak.'
      }
    ]
  },

  {
    id: 'projek-ipas',
    title: 'Projek IPAS Terapan SMK',
    shortName: 'Projek IPAS',
    category: 'sains-terapan',
    categoryLabel: 'Sains Terapan & Rekayasa',
    color: '#006a68',
    badgeColor: '#3d9896',
    description: 'Khusus SMK Kelas 10: Pengelolaan limbah industri, keselamatan zat kimia, audit energi listrik terbarukan, dan interaksi dinamika sosial ekonomi pasar kerja.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E Terintegrasi)',
    stats: {
      modulesCount: 20,
      flashcardsCount: 32,
      quizCount: 20,
      estimatedHours: 38
    },
    chapters: [
      {
        id: 'ipas-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Makhluk Hidup & Penanganan Limbah Industri (B3)',
        subtitle: 'Pengolahan Air Limbah Pabrik, Dampak Polusi Logam Berat & Amdal Lingkungan',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Projek IPAS di SMK mengintegrasikan konsep biologi dan kimia lingkungan ke dalam praktik nyata pengendalian limbah bengkel/pabrik.',
          'Limbah B3 (Bahan Berbahaya dan Beracun) seperti oli bekas, pelarut kimia, dan baterai asam timbal wajib disimpan di TPS B3 berizin dengan simbol bahaya resmi.',
          'Parameter baku mutu limbah cair meliputi BOD (Biochemical Oxygen Demand), COD (Chemical Oxygen Demand), pH, dan Total Suspended Solids (TSS).'
        ],
        keywords: [
          { term: 'Limbah B3', definition: 'Zat, energi, atau komponen lain yang karena sifat, konsentrasi, atau jumlahnya dapat mencemari lingkungan atau membahayakan kesehatan manusia.' },
          { term: 'BOD & COD', definition: 'Indikator jumlah oksigen yang dibutuhkan mikroorganisme (BOD) atau oksigen kimiawi (COD) untuk menguraikan polutan dalam air limbah.' },
          { term: 'Instalasi Pengolahan Air Limbah (IPAL)', definition: 'Sistem fasilitas teknis yang dirancang untuk membersihkan air limbah industri sebelum dialirkan ke badan air umum.' }
        ],
        content: `
### 1. Mengapa Siswa SMK Wajib Menguasai Pengelolaan Limbah?
Di era keberlanjutan (*Green Industry*), bengkel otomotif atau industri manufaktur yang membuang cairan sisa oli atau air pencuci logam langsung ke selokan dapat dikenai sanksi pidana lingkungan. Siswa SMK harus memahami alur pemilahan limbah ramah lingkungan sejak dini.
        `
      },
      {
        id: 'ipas-10-2',
        grade: 10,
        chapterNumber: 'BAB 02',
        title: 'Energi & Perubahannya: Efisiensi Daya Listrik Workshop',
        subtitle: 'Konversi Energi Terbarukan, Audit Faktor Daya (Cos Phi) & Penghematan Listrik',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Hukum Kekekalan Energi: Energi tidak dapat diciptakan atau dimusnahkan, melainkan hanya diubah dari satu bentuk ke bentuk lain.',
          'Pada motor induksi dan kompresor bengkel, energi listrik diubah menjadi energi kinetik mekanik dengan sebagian hilang sebagai energi termal (panas).',
          'Pemanfaatan Panel Surya Fotovoltaik (Solar PV) sebagai sumber energi baru terbarukan di atap fasilitas workshop SMK.'
        ],
        keywords: [
          { term: 'Faktor Daya (Cos Phi)', definition: 'Perbandingan antara daya nyata (Watt) dengan daya semu (Volt-Ampere) pada beban induktif motor listrik industri.' },
          { term: 'Fotovoltaik (Solar Cell)', definition: 'Perangkat semikonduktor yang mengubah energi foton cahaya matahari langsung menjadi energi listrik arus searah (DC).' }
        ],
        content: `
### 1. Efisiensi Energi di Fasilitas Bengkel SMK
Mesin-mesin bengkel menyedot daya listrik besar. Memahami hubungan tegangan ($V$), arus ($I$), dan daya listrik ($P = V \\cdot I \\cdot \\cos \\phi$) memungkinkan siswa menghitung konsumsi energi dan merancang sistem kerja yang hemat biaya operasional.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-ipas-1',
        chapterId: 'ipas-10-1',
        question: 'Apa singkatan dari B3 dalam kategori limbah industri dan berikan 2 contohnya di bengkel kerja?',
        answer: 'B3 adalah Bahan Berbahaya dan Beracun. Contohnya di bengkel: oli pelumas bekas mesin, aki bekas yang mengandung asam sulfat/timbal, dan tiner cairan pembersih pelarut.',
        tip: 'B3 = Bahan Berbahaya dan Beracun.'
      },
      {
        id: 'fc-ipas-2',
        chapterId: 'ipas-10-2',
        question: 'Mengapa nilai faktor daya (Cos Phi) pada bengkel yang banyak menggunakan motor induksi harus dijaga mendekati 1?',
        answer: 'Karena faktor daya yang rendah menyebabkan arus yang mengalir lebih besar untuk menghasilkan daya yang sama, mengakibatkan rugi-rugi panas kabel dan denda kelebihan pemakaian kVARh dari PLN.',
        tip: 'Cos Phi mendekati 1 = Efisiensi pemakaian listrik maksimal.'
      }
    ],
    quiz: [
      {
        id: 'q-ipas-1',
        chapterId: 'ipas-10-1',
        question: 'Manakah di bawah ini yang tergolong limbah B3 dari aktivitas servis otomotif?',
        options: [
          'Kardus pembungkus kampas rem',
          'Oli pelumas mesin bekas dan saringan oli',
          'Plastik pelindung jok kursi',
          'Sisa serbuk gergaji kayu'
        ],
        correctIndex: 1,
        explanation: 'Oli bekas mengandung hidrokarbon berat dan serpihan logam aus yang bersifat karsinogenik dan mencemari air tanah, sehingga wajib dikelola sebagai limbah B3.'
      },
      {
        id: 'q-ipas-2',
        chapterId: 'ipas-10-2',
        question: 'Alat pengubah energi cahaya matahari menjadi energi listrik pada atap gedung bengkel menggunakan prinsip...',
        options: ['Efek Termokopel', 'Efek Fotovoltaik', 'Induksi Elektromagnetik', 'Resonansi Mekanik'],
        correctIndex: 1,
        explanation: 'Efek fotovoltaik menghasilkan arus listrik saat foton cahaya mengeksitasi elektron pada sambungan semikonduktor silikon sel surya.'
      }
    ]
  },

  {
    id: 'sejarah-indonesia',
    title: 'Sejarah Indonesia',
    shortName: 'Sejarah',
    category: 'sosial-humaniora',
    categoryLabel: 'Sosial Humaniora & Kewarganegaraan',
    color: '#b45309',
    badgeColor: '#d97757',
    description: 'Jalur rempah maritim, dampak revolusi industri terhadap kaum buruh nusantara, pergerakan serikat kerja, dan sejarah pembangunan industri & vokasi di Indonesia.',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 18,
      flashcardsCount: 28,
      quizCount: 16,
      estimatedHours: 32
    },
    chapters: [
      {
        id: 'sej-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Jalur Rempah & Keterampilan Pertukangan Maritim Nusantara',
        subtitle: 'Teknologi Pembuatan Kapal Pinisi, Perdagangan Internasional & Pertukangan Tradisional',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Nusantara telah memiliki tradisi kejuruan dan pertukangan kayu tingkat tinggi sejak era pra-kolonial, terbukti dari arsitektur kapal pinisi dan candi batu megah.',
          'Jalur Rempah menghubungkan pelabuhan Malaka, Banten, Makassar, dan Banda dengan pedagang dari India, Arab, Cina, dan Eropa.',
          'Sistem perbengkelan logam (pandai besi) tradisional menghasilkan keris, perkakas pertanian, dan persenjataan meriam cetbang Majapahit.'
        ],
        keywords: [
          { term: 'Jalur Rempah', definition: 'Jaringan rute pelayaran niaga maritim kuno yang memperdagangkan rempah-rempah eksotis Nusantara ke seluruh penjuru dunia.' },
          { term: 'Meriam Cetbang', definition: 'Senjata api laras tembaga buatan pandai besi Majapahit yang membuktikan penguasaan teknik metalurgi kuno Nusantara.' }
        ],
        content: `
### 1. Sejarah Keterampilan Vokasi di Tanah Air
Vokasi atau kejuruan bukanlah produk asing. Nenek moyang bangsa Indonesia adalah insinyur maritim dan perajin ulung yang menguasai ketahanan struktur kayu ulin, aerodinamika layar kapal, hingga peleburan logam tanpa peralatan modern.
        `
      },
      {
        id: 'sej-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Kolonialisme, Revolusi Industri & Lahirnya Kaum Buruh',
        subtitle: 'Pembangunan Jalur Rel Kereta Api, Politik Etis, dan Sekolah Pertukangan Ambachtsschool',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Revolusi Industri di Eropa mendorong pemerintah kolonial Hindia Belanda membangun infrastruktur kereta api, pabrik gula, dan pelabuhan modern.',
          'Kebutuhan tenaga teknis terampil pribumi mendorong didirikannya sekolah kejuruan pertama di Indonesia: Ambachtsschool (Sekolah Pertukangan) pada akhir abad ke-19.',
          'Kelahiran organisasi serikat buruh pertama (seperti VSTP serikat pekerja kereta api) menjadi motor awal pergerakan nasional menentang kolonialisme.'
        ],
        keywords: [
          { term: 'Ambachtsschool', definition: 'Sekolah pertukangan kejuruan era kolonial Belanda yang menjadi cikal bakal berdirinya Sekolah Menengah Kejuruan (SMK) modern di Indonesia.' },
          { term: 'Serikat Pekerja (VSTP)', definition: 'Vereniging van Spoor- en Tramwegpersoneel, serikat buruh kereta api modern pertama di Indonesia yang berperan penting dalam kesadaran kemerdekaan.' }
        ],
        content: `
### 1. Asal-Usul Pendidikan Vokasi (SMK) di Indonesia
Industrialisasi perkebunan dan tambang batu bara abad ke-19 menuntut ribuan teknisi mesin uap dan montir lokal. Pemerintah Hindia Belanda mendirikan sekolah pertukangan demi mencetak juru ukur dan montir pribumi yang lebih terjangkau biayanya daripada mendatangkan tenaga dari Eropa.
        `
      },
      {
        id: 'sej-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Industrialisasi Modern & Sejarah Kebijakan Link and Match Vokasi',
        subtitle: 'Era Orde Baru, Kebangkitan Industri Kedirgantaraan (IPTN), hingga Revitalisasi SMK',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Industrialisasi Indonesia dekade 1970–1990 ditandai dengan pembangunan industri strategis seperti baja Krakatau Steel dan dirgantara IPTN (Nurtanio/B.J. Habibie).',
          'Konsep Link and Match (Pendidikan Sistem Ganda / PSG) diperkenalkan Menteri Wardiman Djojonegoro pada 1993 untuk menghubungkan kurikulum SMK langsung dengan kebutuhan pabrik.',
          'Inpres No. 9 Tahun 2016 tentang Revitalisasi SMK menegaskan percepatan penyelarasan kurikulum vokasi dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI).'
        ],
        keywords: [
          { term: 'Link and Match', definition: 'Kebijakan strategis penyelarasan kompetensi lulusan pendidikan vokasi dengan tuntutan riil kebutuhan dunia usaha dan dunia industri.' },
          { term: 'Pendidikan Sistem Ganda (PSG)', definition: 'Pola pembelajaran kejuruan yang memadukan teori di sekolah dengan Praktik Kerja Lapangan (PKL) terstruktur di industri.' }
        ],
        content: `
### 1. Titik Tolak Vokasi Modern Indonesia
Sejarah membuktikan bahwa kemajuan suatu bangsa ditentukan oleh ketersediaan tenaga teknis menengah yang handal. Di era modern, revitalisasi SMK dan program SMK Pusat Keunggulan (SMK PK) menjadi poros utama transformasi ekonomi manufaktur nasional.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-sej-1',
        chapterId: 'sej-10-1',
        question: 'Apa bukti kemahiran teknologi pertukangan maritim bangsa Indonesia yang diakui dunia UNESCO?',
        answer: 'Seni pembuatan perahu Pinisi dari suku Bugis-Makassar di Sulawesi Selatan, yang dirakit tanpa paku logam tetapi mampu mengarungi samudra luas.',
        tip: 'Perahu Pinisi = Mahakarya warisan budaya maritim dunia.'
      },
      {
        id: 'fc-sej-2',
        chapterId: 'sej-11-1',
        question: 'Apa nama sekolah kejuruan pertukangan pada masa Hindia Belanda yang menjadi cikal bakal SMK di Indonesia?',
        answer: 'Ambachtsschool (Sekolah Pertukangan).',
        tip: 'Ambacht (Pertukangan) + School (Sekolah).'
      }
    ],
    quiz: [
      {
        id: 'q-sej-1',
        chapterId: 'sej-10-1',
        question: 'Komoditas rempah utama asal Kepulauan Maluku yang menjadi incaran bangsa Eropa dalam penjelajahan samudra adalah...',
        options: ['Kopi dan Teh', 'Pala dan Cengkih', 'Karet dan Tembakau', 'Padi dan Jagung'],
        correctIndex: 1,
        explanation: 'Pala (Banda) dan Cengkih (Ternate, Tidore) adalah rempah bernilai sangat tinggi yang melahirkan Jalur Rempah perdagangan maritim dunia.'
      },
      {
        id: 'q-sej-2',
        chapterId: 'sej-11-1',
        question: 'Dampak utama Revolusi Industri abad ke-19 terhadap corak pendidikan di Hindia Belanda adalah...',
        options: [
          'Dihapuskannya seluruh sekolah di pedesaan',
          'Didirikannya sekolah kejuruan teknis/pertukangan untuk mencetak buruh dan teknisi terampil lokal',
          'Larangan bagi warga pribumi untuk bekerja di pabrik',
          'Penutupan semua jalur rel kereta api'
        ],
        correctIndex: 1,
        explanation: 'Kebutuhan masif mekanik lokomotif, tukang kayu konstruksi, dan juru gambar pabrik mendorong lahirnya sekolah vokasi Ambachtsschool.'
      }
    ]
  },

  {
    id: 'pjok',
    title: 'Pendidikan Jasmani & Kesehatan (PJOK)',
    shortName: 'PJOK',
    category: 'olahraga-kesehatan',
    categoryLabel: 'Olahraga & Kesehatan Kerja (K3)',
    color: '#006a68',
    badgeColor: '#00504e',
    description: 'Kebugaran fisik disesuaikan dengan ergonomi kerja bengkel, pencegahan cedera Repetitive Strain Injury (RSI), pertolongan pertama (P3K), dan nutrisi stamina tenaga kerja.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 16,
      flashcardsCount: 26,
      quizCount: 15,
      estimatedHours: 28
    },
    chapters: [
      {
        id: 'pjok-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Kebugaran Jasmani & Ergonomi Postur Kerja',
        subtitle: 'Pencegahan Low Back Pain, Teknik Mengangkat Beban Berat & Senam Peregangan Kerja',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
        summary: [
          'PJOK di SMK berorientasi pada daya tahan fisik pekerja industri agar terhindar dari penyakit akibat kerja (PAK).',
          'Teknik mengangkat benda berat wajib bertumpu pada otot paha dan kaki (menekuk lutut), bukan membungkukkan tulang belakang pinggang (*ergonomic lifting*).',
          'Peregangan mikro (*workplace micro-stretching*) tiap 2 jam kerja meredakan ketegangan otot leher, bahu, dan pergelangan tangan dari posisi kerja statis.'
        ],
        keywords: [
          { term: 'Ergonomi Kerja', definition: 'Ilmu yang menyesuaikan lingkungan dan alat kerja dengan anatomi dan keterbatasan tubuh manusia demi efisiensi dan keselamatan.' },
          { term: 'Low Back Pain (LBP)', definition: 'Nyeri punggung bawah akibat kesalahan postur membungkuk saat mengangkat beban berat di bengkel atau gudang.' }
        ],
        content: `
### 1. Hubungan Jasmani dengan Produktivitas Industri
Seorang teknisi bengkel seringkali harus berdiri selama 8 jam atau bekerja dalam posisi jongkok merakit sasis. Tanpa kebugaran otot inti (*core stability*) dan pemahaman ergonomi, pekerja akan mengalami cedera saraf kejepit atau peradangan sendi sebelum usia 30 tahun.
        `
      },
      {
        id: 'pjok-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Kebugaran Kardiorespirasi & Manajemen Stamina Kerja Shift',
        subtitle: 'Kapasitas VO2 Max, Sirkulasi Darah, Nutrisi Pekerja Produktif & Ritme Sirkadian',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Daya tahan jantung dan paru-paru (kardiorespirasi) menentukan ketahanan pekerja terhadap kelelahan kronis (*fatigue*) di lini manufaktur.',
          'Bekerja pada shift malam mengganggu ritme sirkadian tubuh, sehingga memerlukan manajemen asupan hidrasi air putih dan tidur restoratif 7-8 jam.',
          'Tes kebugaran jasmani Indonesia (TKJI) seperti lari multistage / bleep test mengukur kapasitas paru-paru calon pekerja industri.'
        ],
        keywords: [
          { term: 'Ritme Sirkadian', definition: 'Siklus biologis alami 24 jam tubuh manusia yang mengatur tidur, suhu tubuh, dan pelepasan hormon metabolisme.' },
          { term: 'Fatigue (Kelelahan Kerja)', definition: 'Kondisi penurunan kapasitas mental dan fisik akibat kurang istirahat yang menjadi pemicu 60% kecelakaan kerja pabrik.' }
        ],
        content: `
### 1. Ketahanan Fisik di Lingkungan Pabrik & Bengkel
Pekerja vokasi sering menghadapi jadwal shift rotasi (pagi, sore, malam). Memahami kebugaran kardiorespirasi dan nutrisi makro/mikro menjaga daya konsentrasi tetap tajam saat mengoperasikan mesin berisiko tinggi.
        `
      },
      {
        id: 'pjok-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Manajemen Stres Kerja, Relaksasi & Kesehatan Mental Tenaga Kerja',
        subtitle: 'Mindfulness, Pencegahan Burnout, Olahraga Rekreatif & Gaya Hidup Bebas Narkoba',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Kesehatan mental sama krusialnya dengan kebugaran otot; tekanan target deadline produksi yang ketat dapat memicu sindrom *burnout*.',
          'Teknik pernapasan diafragma (Box Breathing 4-4-4-4) meredakan lonjakan hormon kortisol dan menstabilkan denyut nadi dalam situasi panik.',
          'Pencegahan penyalahgunaan zat stimulan dan narkotika mutlak diperlukan demi menjaga kelangsungan karir di industri.'
        ],
        keywords: [
          { term: 'Burnout Syndrome', definition: 'Keadaan kelelahan emosional, fisik, dan mental yang disebabkan oleh stres kerja berlebihan dan berkepanjangan.' },
          { term: 'Box Breathing', definition: 'Teknik pernapasan teratur 4 detik tarik, 4 detik tahan, 4 detik hembus, dan 4 detik jeda untuk menenangkan sistem saraf simpatik.' }
        ],
        content: `
### 1. Menjaga Keseimbangan Mental di Dunia Kerja yang Cepat
Lulusan SMK yang memasuki lingkungan industri yang kompetitif harus memiliki resiliensi psikologis. Olahraga rekreatif kelompok seperti futsal atau bulu tangkis efektif membangun pelepasan endorfin dan mempererat relasi sosial antar rekan kerja.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-pjok-1',
        chapterId: 'pjok-10-1',
        question: 'Bagaimana posisi tubuh yang benar secara ergonomis saat hendak mengangkat kotak suku cadang berat dari lantai?',
        answer: 'Dekati beban sedekat mungkin, tekuk kedua lutut membentuk posisi squat dengan punggung tetap lurus, lalu angkat menggunakan kekuatan dorong otot paha dan tungkai kaki (bukan bertumpu pada pinggang).',
        tip: 'Tekuk lutut, tegakkan punggung, angkat dengan kekuatan kaki!'
      }
    ],
    quiz: [
      {
        id: 'q-pjok-1',
        chapterId: 'pjok-10-1',
        question: 'Untuk menghindari cedera Low Back Pain saat memindahkan material berat di gudang bengkel, tumpuan utama dorongan tubuh harus berada pada...',
        options: ['Tulang belakang pinggang', 'Otot tungkai dan paha', 'Leher dan kepala', 'Pergelangan tangan'],
        correctIndex: 1,
        explanation: 'Otot paha dan tungkai adalah kelompok otot terbesar dan terkuat pada tubuh manusia yang dirancang menopang beban berat.'
      }
    ]
  },

  {
    id: 'seni-budaya',
    title: 'Seni Budaya & Desain Kreatif',
    shortName: 'Seni Budaya',
    category: 'industri-kreatif',
    categoryLabel: 'Industri Kreatif & Estetika',
    color: '#86381d',
    badgeColor: '#b45309',
    description: 'Prinsip desain visual produk industri, psikologi warna kemasan (packaging), identitas merek (branding), serta perlindungan Hak Atas Kekayaan Intelektual (HAKI).',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80',
    curriculum: 'Kurikulum Merdeka SMK (Fase E & F)',
    stats: {
      modulesCount: 16,
      flashcardsCount: 24,
      quizCount: 15,
      estimatedHours: 26
    },
    chapters: [
      {
        id: 'seni-10-1',
        grade: 10,
        chapterNumber: 'BAB 01',
        title: 'Unsur & Prinsip Desain Visual Produk Komersial',
        subtitle: 'Keseimbangan, Hierarki Visual, Kontras, Psikologi Warna & Tipografi Kemasan',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Seni budaya di SMK diaplikasikan pada nilai tambah estetika produk vokasi, dari desain kemasan (*packaging*) hingga tampilan media digital pemasaran.',
          'Prinsip desain utama: Keseimbangan (Simetris/Asimetris), Kontras (memandu fokus mata), Keselarasan (Harmoni), dan Hierarki Visual informasi.',
          'Psikologi warna komersial: Biru (kepercayaan dan teknologi), Hijau (kesehatan dan ramah lingkungan), Merah/Oranye (energi, nafsu makan, dan keberanian).'
        ],
        keywords: [
          { term: 'Hierarki Visual', definition: 'Pengaturan urutan elemen desain berdasarkan tingkat kepentingannya agar mata audiens membaca pesan utama terlebih dahulu.' },
          { term: 'Psikologi Warna', definition: 'Pengaruh kombinasi warna terhadap emosi dan keputusan beli calon konsumen terhadap suatu produk.' }
        ],
        content: `
### 1. Menambah Nilai Jual Produk Hasil Karya SMK
Karya inovasi siswa SMK—apakah itu mesin pencacah sampah, kue olahan boga, atau aplikasi software—akan sulit bersaing di pasar modern tanpa sentuhan desain visual yang estetis dan kemasan yang profesional. Seni rupa terapan menjembatani fungsi teknis dengan ketertarikan emosional konsumen.
        `
      },
      {
        id: 'seni-11-1',
        grade: 11,
        chapterNumber: 'BAB 01',
        title: 'Desain Kemasan (Packaging) & Identitas Merek (Branding)',
        subtitle: 'Bahan Kemasan Ramah Lingkungan, Label Informasi Produk & Logo Korporat',
        image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80',
        summary: [
          'Desain kemasan mengintegrasikan 3 aspek: Proteksi isi barang, Ergonomi kemudahan distribusi, dan Promosi visual di rak toko.',
          'Pilihan material kemasan modern mengutamakan *biodegradable*, karton daur ulang, atau bioplastik untuk memenuhi tuntutan ramah lingkungan.',
          'Identitas merek (Brand Identity) meliputi pedoman warna (palette), tipografi resmi, dan logo yang mudah diingat.'
        ],
        keywords: [
          { term: 'Packaging Ergonomics', definition: 'Desain bentuk kemasan yang nyaman digenggam, mudah dibuka, dan praktis saat disimpan atau dipindahkan.' },
          { term: 'Brand Identity', definition: 'Kumpulan elemen visual unik yang membedakan suatu merek produk dari para kompetitornya di pasaran.' }
        ],
        content: `
### 1. Estetika Kemasan Produk Teaching Factory
Banyak produk teaching factory SMK memiliki kualitas fungsi teknis yang sangat bagus, tetapi dikemas dalam plastik polos tanpa label yang menarik. Dengan menerapkan prinsip desain kemasan, nilai jual produk dapat meningkat hingga 300%.
        `
      },
      {
        id: 'seni-12-1',
        grade: 12,
        chapterNumber: 'BAB 01',
        title: 'Hak Atas Kekayaan Intelektual (HAKI) & Pameran Inovasi',
        subtitle: 'Pendaftaran Hak Cipta, Paten Sederhana Desain Industri & Kurasi Portofolio',
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
        summary: [
          'HAKI melindungi karya cipta inovasi siswa SMK agar tidak dijiplak secara ilegal oleh pihak lain tanpa royalti.',
          'Kategori HAKI: Hak Cipta (karya seni, buku, kode software), Paten (invensi teknologi mesin), dan Desain Industri (bentuk estetis produk 3D).',
          'Pameran karya (Gelaran Inovasi Vokasi) menjadi sarana memamerkan prototipe produk kepada calon investor dan mitra industri.'
        ],
        keywords: [
          { term: 'Desain Industri', definition: 'Kreasi tentang bentuk, konfigurasi, atau komposisi garis dan warna yang memberikan kesan estetis pada suatu komoditas.' },
          { term: 'Paten Sederhana', definition: 'Perlindungan hukum untuk invensi teknologi baru yang berupa pengembangan alat praktis bernilai ekonomis.' }
        ],
        content: `
### 1. Melindungi Karya Inovasi SMK
Ketika siswa menciptakan modifikasi alat perkakas baru atau desain furnitur multifungsi, langkah terpenting sebelum menjual secara massal adalah mendaftarkan Desain Industri ke Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham.
        `
      }
    ],
    flashcards: [
      {
        id: 'fc-seni-1',
        chapterId: 'seni-10-1',
        question: 'Apa fungsi dari prinsip kontras dalam perancangan label kemasan produk industri?',
        answer: 'Kontras berfungsi membedakan elemen penting (seperti merek dagang atau peringatan bahaya) dari latar belakang agar cepat terlihat dan menarik perhatian pembeli seketika.',
        tip: 'Kontras = Membuat elemen utama menonjol dan langsung terbaca!'
      }
    ],
    quiz: [
      {
        id: 'q-seni-1',
        chapterId: 'seni-10-1',
        question: 'Warna biru dalam psikologi desain identitas korporat dan produk teknologi banyak digunakan karena memberikan kesan...',
        options: ['Ketegangan dan kemarahan', 'Kepercayaan, keamanan, dan profesionalisme', 'Kelaparan dan gairah makanan', 'Kuno dan misterius'],
        correctIndex: 1,
        explanation: 'Secara psikologis, warna biru membangkitkan persepsi ketenangan, keandalan teknis, kestabilan, dan integritas profesional.'
      }
    ]
  }
];

export const GENERAL_CATEGORIES = [
  { id: 'all', label: 'Semua Peminatan', icon: 'apps' },
  { id: 'sains-terapan', label: 'Sains Terapan & Matematika', icon: 'calculate' },
  { id: 'bahasa-komunikasi', label: 'Bahasa & Komunikasi', icon: 'translate' },
  { id: 'teknologi-digital', label: 'Teknologi & Informatika', icon: 'computer' },
  { id: 'sosial-humaniora', label: 'Sosial & Kewarganegaraan', icon: 'public' },
  { id: 'olahraga-kesehatan', label: 'K3 & Kebugaran', icon: 'fitness_center' },
  { id: 'industri-kreatif', label: 'Desain & Industri Kreatif', icon: 'palette' }
];
