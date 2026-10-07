import React from 'react';

export function HistoryBookmarkView({
  subjects,
  bookmarkedChapterIds = [],
  bookmarkedCardIds = [],
  quizHistory = [],
  onOpenMaterialReader,
  onOpenFlashcard,
  onClearHistory
}) {
  // Find bookmarked chapters
  const bookmarkedChapters = [];
  subjects.forEach((subj) => {
    subj.chapters.forEach((ch) => {
      if (bookmarkedChapterIds.includes(ch.id)) {
        bookmarkedChapters.push({ ...ch, subjectTitle: subj.title, subjectRef: subj });
      }
    });
  });

  return (
    <div className="page-container animate-fade">
      {/* Header Info */}
      <div className="neu-flat" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.04em' }}>
              Fitur Akses Cepat Lokal
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--on-surface)', marginTop: '4px' }}>
              Materi & Modul Tersimpan
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.92rem', maxWidth: '640px', marginTop: '4px' }}>
              Daftar bab materi dan kuis yang Anda tandai untuk dibaca kembali. Disimpan langsung di browser lokal Anda tanpa memerlukan server atau database luar.
            </p>
          </div>

          {(bookmarkedChapters.length > 0 || quizHistory.length > 0) && (
            <button
              className="neu-btn"
              style={{ color: 'var(--error)', padding: '0.55rem 1rem', fontSize: '0.82rem' }}
              onClick={onClearHistory}
              title="Bersihkan Semua Simpanan"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete_sweep</span>
              <span>Kosongkan Simpanan</span>
            </button>
          )}
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.75rem' }}>
          <div className="neu-subtle" style={{ padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--outline)', fontWeight: '600' }}>Modul Ditandai</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)', marginTop: '2px' }}>
              {bookmarkedChapters.length} Bab
            </div>
          </div>

          <div className="neu-subtle" style={{ padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--outline)', fontWeight: '600' }}>Kartu Flashcard Ditandai</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '2px' }}>
              {bookmarkedCardIds.length} Kartu
            </div>
          </div>

          <div className="neu-subtle" style={{ padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontSize: '0.74rem', color: 'var(--outline)', fontWeight: '600' }}>Latihan Sesi Ini</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--tertiary)', marginTop: '2px' }}>
              {quizHistory.length} Kuis Selesai
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Bookmarked Chapters & Recent Quizzes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
        {/* Left Column: Bookmarked Chapters */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            <span className="material-symbols-outlined">bookmarks</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>Modul Tersimpan ({bookmarkedChapters.length})</h2>
          </div>

          {bookmarkedChapters.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookmarkedChapters.map((ch) => (
                <div key={ch.id} className="neu-flat" style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '4px', fontSize: '0.74rem', color: 'var(--outline)' }}>
                    <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{ch.subjectTitle}</span>
                    <span>•</span>
                    <span>Kelas {ch.grade} SMK</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
                    {ch.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--on-surface-variant)', marginBottom: '1rem' }}>
                    {ch.subtitle}
                  </p>
                  <button
                    className="neu-btn neu-btn-primary"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                    onClick={() => onOpenMaterialReader(ch, ch.subjectRef)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                    <span>Buka Materi</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="neu-subtle" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--on-surface-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '36px', color: 'var(--outline)' }}>bookmark_border</span>
              <p style={{ marginTop: '0.5rem', fontSize: '0.88rem' }}>
                Belum ada materi yang ditandai. Anda dapat menandai materi dengan menekan ikon bookmark pada layar baca materi.
              </p>
            </div>
          )}
        </section>

        {/* Right Column: Quiz Records (From current user attempts only) */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
            <span className="material-symbols-outlined">analytics</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0 }}>Hasil Latihan Quiz ({quizHistory.length})</h2>
          </div>

          {quizHistory.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quizHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="neu-flat"
                  style={{
                    padding: '1.15rem 1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--outline)' }}>{item.date}</div>
                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--on-surface)' }}>{item.subjectTitle}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)', marginTop: '2px' }}>
                      {item.correct} dari {item.total} soal terjawab benar
                    </div>
                  </div>

                  <div
                    className="neu-pressed"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '1.15rem',
                      color: item.score >= 70 ? 'var(--primary)' : 'var(--tertiary)'
                    }}
                  >
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="neu-subtle" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--on-surface-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '36px', color: 'var(--outline)' }}>quiz</span>
              <p style={{ marginTop: '0.5rem', fontSize: '0.88rem' }}>
                Belum ada kuis yang dikerjakan pada sesi ini. Buka tab "Bank Soal & Quiz" untuk menguji pemahaman materi Anda.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
