import React from 'react';
import { handleImageError } from '../utils/imageFallback';

export function SubjectCard({
  subject,
  onSelectSubject,
  onOpenFlashcard,
  onOpenQuiz
}) {
  return (
    <article className="subject-card neu-flat" onClick={() => onSelectSubject(subject)}>
      {/* Image with Inset Frame */}
      <div className="subject-img-wrap">
        <img
          src={subject.image}
          alt={`Ilustrasi mata pelajaran ${subject.title} SMK`}
          className="subject-img"
          loading="lazy"
          onError={handleImageError}
        />
        {/* Category Pill Tag */}
        <div className="subject-badge-top">
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: subject.badgeColor || 'var(--primary)'
            }}
          />
          {subject.categoryLabel}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="subject-card-body">
        <div className="subject-header-row">
          <h3 className="subject-title">{subject.title}</h3>
          <span className="subject-grade-pill">SMK 10-12</span>
        </div>

        <p className="subject-desc">{subject.description}</p>

        {/* Real Static Information Metrics */}
        <div className="subject-metrics-bar">
          <div>
            <div className="metric-val">{subject.chapters.length}</div>
            <div className="metric-name">Bab Materi</div>
          </div>
          <div>
            <div className="metric-val">{subject.flashcards?.length || 0}</div>
            <div className="metric-name">Flashcard</div>
          </div>
          <div>
            <div className="metric-val">{subject.quiz?.length || 0}</div>
            <div className="metric-name">Soal Latihan</div>
          </div>
        </div>

        {/* Curriculum Badge */}
        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: 'var(--outline)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--secondary)' }}>verified</span>
          <span>{subject.curriculum}</span>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="subject-card-actions" onClick={(e) => e.stopPropagation()}>
        <button
          className="neu-btn neu-btn-primary"
          style={{ flex: 1, padding: '0.55rem 0.8rem', fontSize: '0.84rem' }}
          onClick={() => onSelectSubject(subject)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
          <span>Buka Materi</span>
        </button>

        <button
          className="neu-btn"
          style={{ padding: '0.55rem 0.75rem', color: 'var(--secondary)' }}
          title="Buka Flashcard Interaktif"
          onClick={() => onOpenFlashcard(subject)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>style</span>
        </button>

        <button
          className="neu-btn"
          style={{ padding: '0.55rem 0.75rem', color: 'var(--tertiary)' }}
          title="Mulai Uji Pemahaman Quiz"
          onClick={() => onOpenQuiz(subject)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>quiz</span>
        </button>
      </div>
    </article>
  );
}
