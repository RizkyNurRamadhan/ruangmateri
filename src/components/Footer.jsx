import React from 'react';

export function Footer({ onSelectCategory, onResetToHome }) {
  return (
    <footer style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid rgba(255, 255, 255, 0.7)', padding: '3.5rem 2rem 2.5rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', cursor: 'pointer' }} onClick={onResetToHome}>
              <div
                className="neu-subtle"
                style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}
              >
                <span className="material-symbols-outlined">school</span>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>
                RuangMateri<span style={{ color: 'var(--secondary)' }}>.SMK</span>
              </div>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>
              Portal referensi edukasi vokasi terlengkap khusus mata pelajaran umum SMK Kelas 10, 11, dan 12 dengan antarmuka Soft Neumorphism Light yang nyaman di mata.
            </p>
            <div
              className="neu-subtle"
              style={{
                marginTop: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.76rem',
                color: 'var(--secondary)',
                fontWeight: '700'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
              <span>SMK BISA, SMK HEBAT!</span>
            </div>
          </div>

          {/* Muatan Pelajaran Umum */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Spektrum Muatan Umum
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--on-surface-variant)' }}>
              <li>Matematika Terapan Industri</li>
              <li>Bahasa Indonesia Komunikasi Bisnis</li>
              <li>Bahasa Inggris Vokasi & Workplace</li>
              <li>Informatika & Literasi Digital</li>
              <li>Pendidikan Pancasila & Regulasi Kerja</li>
              <li>Projek IPAS Terapan Fase E</li>
            </ul>
          </div>

          {/* Fitur Unggulan */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Fitur Pembelajaran Cerdas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--on-surface-variant)' }}>
              <li>Modul Lengkap dengan Studi Kasus Industri</li>
              <li>Flashcard 3D dengan Audio Pelafalan ID</li>
              <li>Simulasi Quiz & Bank Soal Asesmen Mandiri</li>
              <li>Glosarium Kata Kunci & Definisi Baku</li>
              <li>Riwayat Skor & Penyimpanan Offline Lokal</li>
            </ul>
          </div>

          {/* Standarisasi & Lisensi */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: 'var(--on-surface)', marginBottom: '1rem' }}>
              Standar Desain & Kurikulum
            </h4>
            <div className="neu-pressed" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>
              <div style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>Soft Neumorphic Light</div>
              Dirancang dengan pencahayaan spekular ganda dan palet bebas silau untuk mendukung konsentrasi belajar berjam-jam tanpa kelelahan mata.
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(186, 198, 214, 0.4)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--outline)'
          }}
        >
          <div>
            © {new Date().getFullYear()} RuangMateri SMK. Didedikasikan untuk kemajuan pendidikan vokasi Indonesia.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Kurikulum Merdeka SMK</span>
            <span>•</span>
            <span>Spektrum Keahlian Vokasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
