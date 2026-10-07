import React, { useState } from 'react';
import { handleImageError } from '../utils/imageFallback';

export function SubjectDetail({
  subject,
  onBack,
  onOpenMaterialReader,
  onOpenFlashcard,
  onOpenQuiz,
  onOpenChapterKeywords
}) {
  const [internalTab, setInternalTab] = useState('chapters'); // 'chapters', 'flashcard', 'quiz'
  const [gradeFilter, setGradeFilter] = useState('all');

  const filteredChapters = gradeFilter === 'all'
    ? subject.chapters
    : subject.chapters.filter((ch) => ch.grade === gradeFilter);

  return (
    <div className="page-container animate-fade">
      {/* Breadcrumb Debossed Navigation Rail */}
      <div
        className="neu-subtle"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.45rem 1rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '1.5rem',
          fontSize: '0.84rem',
          color: 'var(--on-surface-variant)'
        }}
      >
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: '600' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          <span>Katalog Mapel</span>
        </button>
        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--outline)' }}>chevron_right</span>
        <span>{subject.title}</span>
        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--outline)' }}>chevron_right</span>
        <span style={{ color: 'var(--on-surface)', fontWeight: '700' }}>
          {gradeFilter === 'all' ? 'Kelas 10–12 SMK' : `Kelas ${gradeFilter} SMK`}
        </span>
      </div>

      {/* Subject Hero Showcase Banner */}
      <section className="subject-detail-hero neu-flat">
        <div className="detail-banner-grid">
          {/* Left Hero Texts */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <span
                className="neu-subtle"
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.74rem',
                  fontWeight: '700',
                  color: subject.badgeColor || 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                {subject.categoryLabel}
              </span>
              <span
                className="neu-pressed"
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  color: 'var(--outline)',
                  fontWeight: '600'
                }}
              >
                {subject.curriculum}
              </span>
            </div>

            <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--on-surface)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              {subject.title}
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', marginTop: '0.5rem', lineHeight: '1.6', maxWidth: '650px' }}>
              {subject.description}
            </p>

            {/* Static Content Info Chips (No Fake Database Progress) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
              <div className="neu-subtle" style={{ padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '700' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
                <span>{subject.chapters.length} Bab Modul Lengkap</span>
              </div>
              <div className="neu-subtle" style={{ padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary)', fontWeight: '700' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>style</span>
                <span>{subject.flashcards?.length || 0} Flashcard Audio</span>
              </div>
              <div className="neu-subtle" style={{ padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--tertiary)', fontWeight: '700' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>quiz</span>
                <span>{subject.quiz?.length || 0} Soal Latihan & Pembahasan</span>
              </div>
            </div>

            {/* Fast Action Shortcuts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <button
                className="neu-btn neu-btn-primary"
                onClick={() => {
                  if (subject.chapters.length > 0) {
                    onOpenMaterialReader(subject.chapters[0], subject);
                  }
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>play_circle</span>
                <span>Mulai Belajar Bab 1</span>
              </button>

              <button
                className="neu-btn"
                style={{ color: 'var(--secondary)' }}
                onClick={() => onOpenFlashcard(subject)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>style</span>
                <span>Flashcard ({subject.flashcards?.length || 0})</span>
              </button>

              <button
                className="neu-btn"
                style={{ color: 'var(--tertiary)' }}
                onClick={() => onOpenQuiz(subject)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>quiz</span>
                <span>Simulasi Quiz ({subject.quiz?.length || 0} Soal)</span>
              </button>
            </div>
          </div>

          {/* Right Subject Big Visual Image */}
          <div className="detail-img-showcase neu-pressed">
            <img
              src={subject.image}
              alt={subject.title}
              onError={handleImageError}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'rgba(23, 28, 33, 0.75)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontWeight: '600' }}>Silabus SMK Vokasi</span>
              <span style={{ opacity: 0.8 }}>{subject.chapters.length} Bab Terstruktur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation Pill Switcher */}
      <div className="subnav-pills">
        <button
          className={`subnav-pill-btn ${internalTab === 'chapters' ? 'active' : ''}`}
          onClick={() => setInternalTab('chapters')}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span>Daftar Bab & Materi ({subject.chapters.length})</span>
        </button>

        <button
          className={`subnav-pill-btn ${internalTab === 'flashcard' ? 'active' : ''}`}
          onClick={() => onOpenFlashcard(subject)}
        >
          <span className="material-symbols-outlined">style</span>
          <span>Flashcard Cerdas ({subject.flashcards?.length || 0})</span>
        </button>

        <button
          className={`subnav-pill-btn ${internalTab === 'quiz' ? 'active' : ''}`}
          onClick={() => onOpenQuiz(subject)}
        >
          <span className="material-symbols-outlined">quiz</span>
          <span>Bank Soal & Quiz ({subject.quiz?.length || 0})</span>
        </button>
      </div>

      {/* Section Content: Chapters List */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--on-surface)' }}>Silabus Modul Pembelajaran</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>
            Materi lengkap terstruktur dengan ilustrasi, studi kasus industri, rumus terapan, dan rangkuman.
          </p>
        </div>

        {/* Grade Filter Pill within Subject */}
        <div className="grade-switch">
          <button
            className={`grade-btn ${gradeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setGradeFilter('all')}
          >
            Semua Kelas
          </button>
          <button
            className={`grade-btn ${gradeFilter === 10 ? 'active' : ''}`}
            onClick={() => setGradeFilter(10)}
          >
            Kelas 10
          </button>
          <button
            className={`grade-btn ${gradeFilter === 11 ? 'active' : ''}`}
            onClick={() => setGradeFilter(11)}
          >
            Kelas 11
          </button>
          <button
            className={`grade-btn ${gradeFilter === 12 ? 'active' : ''}`}
            onClick={() => setGradeFilter(12)}
          >
            Kelas 12
          </button>
        </div>
      </div>

      {/* Chapter Cards Accordion/Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredChapters.map((chapter) => (
          <article key={chapter.id} className="chapter-card neu-flat">
            <div className="chapter-inner">
              {/* Chapter Dedicated Image Thumbnail */}
              <div className="chapter-img-box">
                <img
                  src={chapter.image}
                  alt={`Materi ${chapter.title}`}
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              {/* Chapter Information */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span
                      className="neu-subtle"
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        color: 'var(--primary)'
                      }}
                    >
                      {chapter.chapterNumber}
                    </span>
                    <span
                      className="neu-pressed"
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        color: 'var(--secondary)'
                      }}
                    >
                      Kelas {chapter.grade} SMK
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
                    {chapter.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginBottom: '0.75rem', fontWeight: '500' }}>
                    {chapter.subtitle}
                  </p>

                  {/* Keywords Pills Preview */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--outline)', fontWeight: '600', marginRight: '4px' }}>Kata Kunci:</span>
                    {chapter.keywords?.map((kw, idx) => (
                      <span
                        key={idx}
                        className="keyword-chip"
                        onClick={() => onOpenChapterKeywords(kw, chapter)}
                        title="Klik untuk melihat definisi lengkap"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>tag</span>
                        {kw.term}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chapter Bottom Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid rgba(186, 198, 214, 0.3)' }}>
                  <button
                    className="neu-btn neu-btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.84rem' }}
                    onClick={() => onOpenMaterialReader(chapter, subject)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
                    <span>Pelajari Materi Lengkap</span>
                  </button>

                  <button
                    className="neu-btn"
                    style={{ padding: '0.5rem 0.9rem', fontSize: '0.84rem' }}
                    onClick={() => onOpenMaterialReader(chapter, subject, 'summary')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>summarize</span>
                    <span>Lihat Rangkuman</span>
                  </button>

                  <button
                    className="neu-btn"
                    style={{ padding: '0.5rem 0.9rem', fontSize: '0.84rem' }}
                    onClick={() => onOpenQuiz(subject, chapter.id)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--tertiary)' }}>quiz</span>
                    <span>Latihan Soal</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {filteredChapters.length === 0 && (
          <div
            className="neu-subtle"
            style={{
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              color: 'var(--on-surface-variant)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline)' }}>auto_stories</span>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--on-surface)', marginTop: '0.5rem' }}>
              Tidak Ada Modul untuk Kelas {gradeFilter}
            </h4>
            <p style={{ fontSize: '0.85rem', maxWidth: '400px', margin: '0.25rem auto 1rem' }}>
              Materi untuk tingkat kelas ini disajikan pada kurikulum fase lainnya atau pilih Semua Kelas untuk melihat seluruh silabus.
            </p>
            <button className="neu-btn" onClick={() => setGradeFilter('all')}>
              Tampilkan Semua Kelas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
