import React from 'react';
import { GENERAL_CATEGORIES } from '../data/subjectsData';

export function HeroBanner({
  selectedCategory,
  setSelectedCategory,
  selectedGrade,
  setSelectedGrade,
  totalSubjectsCount,
  totalChaptersCount,
  totalFlashcardsCount,
  totalQuizzesCount,
}) {
  return (
    <section className="hero-banner neu-flat">
      {/* Soft Ambient Neumorphic Light Orbs */}
      <div className="hero-ambient-sphere-1" />
      <div className="hero-ambient-sphere-2" />

      <div className="hero-content">
        {/* Top Header Row: Greeting & Grade Selector Pill */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                fontWeight: '700',
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
              Kurikulum Merdeka SMK • Muatan Umum Fase E & F
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: '800', color: 'var(--on-surface)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Portal Pembelajaran Umum <span style={{ color: 'var(--primary)' }}>SMK Indonesia</span>
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', maxWidth: '720px', marginTop: '0.35rem' }}>
              Akses modul materi komprehensif, rangkuman poin penting, glosarium istilah industri, flashcard 3D memori pintar, dan quiz asesmen mandiri untuk siswa kelas 10 sampai 12 SMK.
            </p>
          </div>

          {/* Grade Quick Toggle Dock */}
          <div className="grade-switch" style={{ padding: '0.35rem 0.5rem' }}>
            <button
              className={`grade-btn ${selectedGrade === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedGrade('all')}
            >
              Semua Kelas
            </button>
            <button
              className={`grade-btn ${selectedGrade === 10 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(10)}
            >
              Kelas 10 SMK
            </button>
            <button
              className={`grade-btn ${selectedGrade === 11 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(11)}
            >
              Kelas 11 SMK
            </button>
            <button
              className={`grade-btn ${selectedGrade === 12 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(12)}
            >
              Kelas 12 SMK
            </button>
          </div>
        </div>

        {/* Metric Ribbon (Extruded Tactile Counters) */}
        <div className="stats-grid">
          <div className="stat-item neu-subtle">
            <div className="stat-icon text-primary" style={{ color: 'var(--primary)' }}>
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div>
              <div className="stat-number">{totalSubjectsCount} Mapel</div>
              <div className="stat-label">Mata Pelajaran Umum SMK</div>
            </div>
          </div>

          <div className="stat-item neu-subtle">
            <div className="stat-icon" style={{ color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined">auto_stories</span>
            </div>
            <div>
              <div className="stat-number">{totalChaptersCount}+ Modul</div>
              <div className="stat-label">Bab & Silabus Terverifikasi</div>
            </div>
          </div>

          <div className="stat-item neu-subtle">
            <div className="stat-icon" style={{ color: 'var(--tertiary)' }}>
              <span className="material-symbols-outlined">style</span>
            </div>
            <div>
              <div className="stat-number">{totalFlashcardsCount}+ Kartu</div>
              <div className="stat-label">Flashcard Audio Interaktif</div>
            </div>
          </div>

          <div className="stat-item neu-subtle">
            <div className="stat-icon" style={{ color: 'var(--primary-container)' }}>
              <span className="material-symbols-outlined">quiz</span>
            </div>
            <div>
              <div className="stat-number">{totalQuizzesCount}+ Latihan</div>
              <div className="stat-label">Soal Ujian & Pembahasan</div>
            </div>
          </div>
        </div>

        {/* Category Chips Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
          <div className="filter-chips">
            {GENERAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', marginRight: '4px' }}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--outline)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
            <span>Standar Asesmen Vokasi Kemendikbudristek</span>
          </div>
        </div>
      </div>
    </section>
  );
}
