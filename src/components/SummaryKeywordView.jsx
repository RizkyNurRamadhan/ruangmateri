import React, { useState } from 'react';

export function SummaryKeywordView({
  subjects,
  onOpenMaterialReader,
  onOpenFlashcard
}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [filterType, setFilterType] = useState('all'); // 'all', 'summary', 'keyword'
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedTerm, setCopiedTerm] = useState(null);

  // Flatten all chapters
  const allChapters = React.useMemo(() => {
    let pool = [];
    subjects.forEach((subj) => {
      if (selectedSubjectId === 'all' || subj.id === selectedSubjectId) {
        subj.chapters.forEach((ch) => {
          if (selectedGrade === 'all' || ch.grade === selectedGrade) {
            pool.push({
              ...ch,
              subjectTitle: subj.title,
              subjectColor: subj.badgeColor || subj.color,
              subjectRef: subj
            });
          }
        });
      }
    });
    return pool;
  }, [subjects, selectedSubjectId, selectedGrade]);

  const handleCopy = (term, text) => {
    navigator.clipboard.writeText(`${term}: ${text}`);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  return (
    <div className="page-container animate-fade">
      {/* Top Filter Dock */}
      <div className="neu-subtle rounded-xl p-space-sm mb-space-lg" style={{ padding: '1rem 1.5rem', borderRadius: 'var(--radius-xl)', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Section Filter Pills */}
          <div className="grade-switch">
            <button
              className={`grade-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              Semua Modul
            </button>
            <button
              className={`grade-btn ${filterType === 'summary' ? 'active' : ''}`}
              onClick={() => setFilterType('summary')}
            >
              Rangkuman Saja
            </button>
            <button
              className={`grade-btn ${filterType === 'keyword' ? 'active' : ''}`}
              onClick={() => setFilterType('keyword')}
            >
              Glosarium Kata Kunci
            </button>
          </div>

          {/* Subject & Grade Selectors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div className="neu-subtle" style={{ borderRadius: 'var(--radius-md)', padding: '0.35rem 0.75rem' }}>
              <select
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                style={{ background: 'transparent', fontWeight: '600', color: 'var(--on-surface)', cursor: 'pointer' }}
              >
                <option value="all">Semua Mata Pelajaran</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="neu-subtle" style={{ borderRadius: 'var(--radius-md)', padding: '0.35rem 0.75rem' }}>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                style={{ background: 'transparent', fontWeight: '600', color: 'var(--on-surface)', cursor: 'pointer' }}
              >
                <option value="all">Semua Kelas</option>
                <option value="10">Kelas 10 SMK</option>
                <option value="11">Kelas 11 SMK</option>
                <option value="12">Kelas 12 SMK</option>
              </select>
            </div>
          </div>
        </div>

        {/* In-view Search Input */}
        <div style={{ marginTop: '1rem' }}>
          <div className="neu-pressed" style={{ display: 'flex', alignItems: 'center', padding: '0.6rem 1rem', borderRadius: 'var(--radius-lg)' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)', marginRight: '8px' }}>search</span>
            <input
              type="text"
              placeholder="Cari kata kunci khusus atau rangkuman materi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', background: 'transparent', fontSize: '0.88rem', color: 'var(--on-surface)' }}
            />
          </div>
        </div>
      </div>

      {/* Chapters & Content Render */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {allChapters.map((ch) => {
          // Filter keywords and summaries by search term if present
          const filteredKeywords = ch.keywords?.filter((kw) =>
            !searchTerm || kw.term.toLowerCase().includes(searchTerm.toLowerCase()) || kw.definition.toLowerCase().includes(searchTerm.toLowerCase())
          ) || [];

          const filteredSummaries = ch.summary?.filter((sm) =>
            !searchTerm || sm.toLowerCase().includes(searchTerm.toLowerCase())
          ) || [];

          if (searchTerm && filteredKeywords.length === 0 && filteredSummaries.length === 0) {
            return null;
          }

          return (
            <article key={ch.id} className="neu-flat" style={{ padding: '1.75rem', borderRadius: 'var(--radius-xl)' }}>
              {/* Card Chapter Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(186, 198, 214, 0.4)', paddingBottom: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                    <span
                      className="neu-pressed"
                      style={{ padding: '2px 8px', borderRadius: 'var(--radius-full)', fontSize: '0.72rem', fontWeight: '800', color: ch.subjectColor }}
                    >
                      {ch.subjectTitle}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--outline)', fontWeight: '600' }}>
                      Kelas {ch.grade} SMK • {ch.chapterNumber}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--on-surface)', margin: 0 }}>
                    {ch.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    className="neu-btn"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
                    onClick={() => onOpenMaterialReader(ch, ch.subjectRef)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                    <span>Buka Modul</span>
                  </button>
                  <button
                    className="neu-btn"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem', color: 'var(--secondary)' }}
                    onClick={() => onOpenFlashcard(ch.subjectRef)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>style</span>
                    <span>Flashcard</span>
                  </button>
                </div>
              </div>

              {/* Rangkuman Section */}
              {(filterType === 'all' || filterType === 'summary') && filteredSummaries.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>checklist</span>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Poin Rangkuman Inti</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {filteredSummaries.map((item, idx) => (
                      <div
                        key={idx}
                        className="neu-subtle"
                        style={{
                          padding: '0.85rem 1.15rem',
                          borderRadius: 'var(--radius-md)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem'
                        }}
                      >
                        <span
                          className="neu-pressed"
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.72rem',
                            fontWeight: '800',
                            color: 'var(--secondary)',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          {idx + 1}
                        </span>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--on-surface)', lineHeight: '1.6' }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Kata Kunci Glosarium Section */}
              {(filterType === 'all' || filterType === 'keyword') && filteredKeywords.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--tertiary)', marginBottom: '0.75rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>key</span>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Kata Kunci & Definisi Baku</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '0.85rem' }}>
                    {filteredKeywords.map((kw, idx) => (
                      <div
                        key={idx}
                        className="neu-subtle"
                        style={{
                          padding: '1rem',
                          borderRadius: 'var(--radius-md)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '0.5rem'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                            <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.95rem' }}>{kw.term}</span>
                            <button
                              className="neu-subtle"
                              style={{ padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '2px' }}
                              onClick={() => handleCopy(kw.term, kw.definition)}
                              title="Salin Istilah & Definisi"
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                                {copiedTerm === kw.term ? 'check' : 'content_copy'}
                              </span>
                              <span>{copiedTerm === kw.term ? 'Tersalin' : 'Salin'}</span>
                            </button>
                          </div>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>
                            {kw.definition}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
