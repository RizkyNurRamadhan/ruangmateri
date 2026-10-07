import React, { useState } from 'react';
import { handleImageError } from '../utils/imageFallback';

export function MaterialReader({
  chapter,
  subject,
  onClose,
  onOpenFlashcard,
  onOpenQuiz,
  isBookmarked = false,
  onToggleBookmark
}) {
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // 0 = small, 1 = normal, 2 = large
  const [activeSection, setActiveSection] = useState('materi'); // 'materi', 'rangkuman', 'glosarium'
  const [activeKeywordModal, setActiveKeywordModal] = useState(null);

  const fontSizes = ['0.92rem', '1rem', '1.14rem'];

  if (!chapter) return null;

  return (
    <div className="reading-modal-backdrop" onClick={onClose}>
      <div className="reading-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Controls */}
        <div className="reading-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <button
              className="neu-subtle"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)'
              }}
              onClick={onClose}
              title="Tutup & Kembali"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: 'var(--on-surface-variant)' }}>
                <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{subject?.title}</span>
                <span>•</span>
                <span>Kelas {chapter.grade} SMK</span>
                <span>•</span>
                <span className="neu-pressed" style={{ padding: '1px 6px', borderRadius: '4px', fontSize: '0.68rem' }}>
                  {chapter.chapterNumber}
                </span>
              </div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--on-surface)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {chapter.title}
              </h2>
            </div>
          </div>

          {/* Right Toolbar: Font Size, Bookmark, Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Font Size Toggle */}
            <div className="neu-pressed" style={{ display: 'flex', alignItems: 'center', padding: '2px', borderRadius: 'var(--radius-md)' }}>
              <button
                style={{
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: fontSizeLevel === 0 ? '700' : '500',
                  color: fontSizeLevel === 0 ? 'var(--primary)' : 'var(--outline)'
                }}
                onClick={() => setFontSizeLevel(0)}
                title="Ukuran Font Kecil"
              >
                A-
              </button>
              <button
                style={{
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: fontSizeLevel === 1 ? '700' : '500',
                  color: fontSizeLevel === 1 ? 'var(--primary)' : 'var(--outline)'
                }}
                onClick={() => setFontSizeLevel(1)}
                title="Ukuran Font Normal"
              >
                A
              </button>
              <button
                style={{
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: fontSizeLevel === 2 ? '700' : '500',
                  color: fontSizeLevel === 2 ? 'var(--primary)' : 'var(--outline)'
                }}
                onClick={() => setFontSizeLevel(2)}
                title="Ukuran Font Besar"
              >
                A+
              </button>
            </div>

            {/* Bookmark Button */}
            <button
              className="neu-subtle"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isBookmarked ? 'var(--tertiary)' : 'var(--outline)'
              }}
              onClick={() => onToggleBookmark(chapter.id)}
              title={isBookmarked ? 'Hapus dari Simpanan' : 'Simpan Materi Ini'}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>
                bookmark
              </span>
            </button>

            {/* Close Button */}
            <button
              className="neu-subtle"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--outline)'
              }}
              onClick={onClose}
              title="Tutup Layar Baca"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Inset Subnav Tabs for Content / Rangkuman / Glosarium */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem 0', background: 'var(--surface)' }}>
          <button
            className={`neu-btn ${activeSection === 'materi' ? 'active' : ''}`}
            style={{ padding: '0.45rem 1rem', fontSize: '0.84rem' }}
            onClick={() => setActiveSection('materi')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>article</span>
            <span>Materi Lengkap</span>
          </button>

          <button
            className={`neu-btn ${activeSection === 'rangkuman' ? 'active' : ''}`}
            style={{ padding: '0.45rem 1rem', fontSize: '0.84rem' }}
            onClick={() => setActiveSection('rangkuman')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>summarize</span>
            <span>Rangkuman Inti</span>
          </button>

          <button
            className={`neu-btn ${activeSection === 'glosarium' ? 'active' : ''}`}
            style={{ padding: '0.45rem 1rem', fontSize: '0.84rem' }}
            onClick={() => setActiveSection('glosarium')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--tertiary)' }}>style</span>
            <span>Kata Kunci ({chapter.keywords?.length || 0})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="reading-modal-body" style={{ fontSize: fontSizes[fontSizeLevel] }}>
          {activeSection === 'materi' && (
            <div>
              {/* Online Image Illustration Showcase */}
              <div
                className="neu-pressed"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  padding: '0.4rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ position: 'relative', height: '240px', borderRadius: 'calc(var(--radius-lg) - 4px)', overflow: 'hidden' }}>
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={handleImageError}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      background: 'linear-gradient(to top, rgba(23, 28, 33, 0.85) 0%, transparent 100%)',
                      padding: '1.5rem 1.25rem 0.75rem',
                      color: '#fff'
                    }}
                  >
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.25)',
                        fontSize: '0.72rem',
                        fontWeight: '700'
                      }}
                    >
                      {chapter.chapterNumber}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '4px' }}>{chapter.title}</h3>
                    <p style={{ fontSize: '0.82rem', opacity: 0.9 }}>{chapter.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Keywords Bar at top of reading */}
              <div
                className="neu-subtle"
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.4rem'
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', marginRight: '4px' }}>
                  Kata Kunci Penting:
                </span>
                {chapter.keywords?.map((kw, idx) => (
                  <button
                    key={idx}
                    className="keyword-chip"
                    onClick={() => setActiveKeywordModal(kw)}
                    title="Klik untuk membuka definisi istilah"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>key</span>
                    {kw.term}
                  </button>
                ))}
              </div>

              {/* Rendered Prose Content */}
              <div className="prose-section">
                {chapter.content.split('### ').map((part, index) => {
                  if (!part.trim()) return null;
                  const lines = part.split('\n');
                  const heading = lines[0];
                  const body = lines.slice(1).join('\n');

                  return (
                    <div key={index} style={{ marginBottom: '1.5rem' }}>
                      <h3>{heading}</h3>
                      <div style={{ whiteSpace: 'pre-line', color: 'var(--on-surface)', lineHeight: '1.8' }}>
                        {body}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Callout Box: Aplikasi Dunia Industri & K3 Vokasi */}
              <div className="prose-callout">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.4rem' }}>
                  <span className="material-symbols-outlined">engineering</span>
                  <span>Aplikasi di Dunia Kerja & Industri (DUDI)</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--on-surface-variant)' }}>
                  Kompetensi pada modul ini secara langsung digunakan oleh teknisi, staf operasional, dan analis di lingkungan kerja industri modern. Menguasai konsep dasar serta standardisasi prosedural menjamin keselamatan dan efisiensi produksi.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'rangkuman' && (
            <div className="animate-fade">
              <div
                className="neu-subtle"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '1.5rem',
                  background: 'var(--surface)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '24px' }}>
                    checklist
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)', margin: 0 }}>
                    Rangkuman Esensial: {chapter.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', margin: 0 }}>
                  Ringkasan butir-butir krusial untuk persiapan asesmen, ulangan harian, dan verifikasi sertifikasi kompetensi keahlian.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {chapter.summary?.map((item, idx) => (
                  <div
                    key={idx}
                    className="neu-flat"
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem'
                    }}
                  >
                    <div
                      className="neu-pressed"
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--secondary)',
                        fontWeight: '800',
                        fontSize: '0.82rem',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <p style={{ margin: 0, color: 'var(--on-surface)', lineHeight: '1.7', fontSize: '0.96rem' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'glosarium' && (
            <div className="animate-fade">
              <div
                className="neu-subtle"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '24px' }}>
                    menu_book
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)', margin: 0 }}>
                    Glosarium & Kata Kunci Teknis
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', margin: 0 }}>
                  Daftar peristilahan baku industri dan konsep teoritis yang wajib dikuasai siswa SMK.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {chapter.keywords?.map((kw, idx) => (
                  <div
                    key={idx}
                    className="neu-flat"
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>key</span>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0 }}>{kw.term}</h4>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: '1.6', margin: 0 }}>
                        {kw.definition}
                      </p>
                    </div>
                    <div style={{ marginTop: '1rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(186, 198, 214, 0.3)', display: 'flex', justifyContent: 'flex-end' }}>
                      <span className="neu-pressed" style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '0.68rem', color: 'var(--outline)' }}>
                        Istilah Baku
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid rgba(186, 198, 214, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            background: 'var(--surface)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>verified</span>
            <span>Materi telah disesuaikan dengan Capaian Pembelajaran Vokasi</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              className="neu-btn"
              onClick={() => {
                onClose();
                onOpenFlashcard(subject, chapter.id);
              }}
              style={{ color: 'var(--secondary)' }}
            >
              <span className="material-symbols-outlined">style</span>
              <span>Flashcard Bab Ini</span>
            </button>

            <button
              className="neu-btn neu-btn-primary"
              onClick={() => {
                onClose();
                onOpenQuiz(subject, chapter.id);
              }}
            >
              <span className="material-symbols-outlined">quiz</span>
              <span>Uji Pemahaman (Quiz)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Keyword Definition Popup Dialog */}
      {activeKeywordModal && (
        <div
          className="reading-modal-backdrop"
          style={{ zIndex: 300 }}
          onClick={() => setActiveKeywordModal(null)}
        >
          <div
            className="neu-floating"
            style={{
              maxWidth: '460px',
              width: '90%',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem',
              backgroundColor: 'var(--surface)',
              animation: 'slideUp 0.25s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined">key</span>
                <span style={{ fontSize: '0.76rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Definisi Kata Kunci
                </span>
              </div>
              <button
                className="neu-subtle"
                style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setActiveKeywordModal(null)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
              </button>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
              {activeKeywordModal.term}
            </h3>

            <div className="neu-pressed" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--on-surface)', lineHeight: '1.6' }}>
                {activeKeywordModal.definition}
              </p>
            </div>

            <button
              className="neu-btn neu-btn-primary"
              style={{ width: '100%' }}
              onClick={() => setActiveKeywordModal(null)}
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
