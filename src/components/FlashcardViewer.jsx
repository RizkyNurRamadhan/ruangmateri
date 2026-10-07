import React, { useState, useEffect } from 'react';

export function FlashcardViewer({
  subjects,
  activeSubjectId,
  onBackToKatalog,
  bookmarkedCards = [],
  onToggleBookmarkCard
}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(activeSubjectId || 'all');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [studyMode, setStudyMode] = useState('santai'); // 'santai', 'kejar', 'mandiri'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({}); // cardId: boolean
  const [speaking, setSpeaking] = useState(false);

  // Gather cards based on filters
  const allCards = React.useMemo(() => {
    let pool = [];
    subjects.forEach((subj) => {
      if (selectedSubjectId === 'all' || subj.id === selectedSubjectId) {
        if (subj.flashcards) {
          subj.flashcards.forEach((fc) => {
            pool.push({
              ...fc,
              subjectTitle: subj.title,
              subjectColor: subj.badgeColor || subj.color,
              subjectId: subj.id
            });
          });
        }
      }
    });

    if (gradeFilter !== 'all') {
      pool = pool.filter((c) => c.grade === gradeFilter);
    }
    return pool;
  }, [subjects, selectedSubjectId, gradeFilter]);

  const [cardsDeck, setCardsDeck] = useState(allCards);

  useEffect(() => {
    setCardsDeck(allCards);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [allCards]);

  const currentCard = cardsDeck[currentCardIndex] || null;

  // Key navigation (Space to flip, Left/Right for cards)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNextCard();
      } else if (e.code === 'ArrowLeft') {
        handlePrevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cardsDeck, currentCardIndex]);

  const handleNextCard = () => {
    if (cardsDeck.length === 0) return;
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % cardsDeck.length);
  };

  const handlePrevCard = () => {
    if (cardsDeck.length === 0) return;
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + cardsDeck.length) % cardsDeck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardsDeck].sort(() => Math.random() - 0.5);
    setCardsDeck(shuffled);
    setCurrentCardIndex(0);
  };

  const handleMarkMastery = (cardId, isMastered) => {
    setMasteredCards((prev) => ({ ...prev, [cardId]: isMastered }));
    handleNextCard();
  };

  // Text-To-Speech (TTS) Web Speech API in Indonesian
  const handlePlayVoice = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur suara tidak didukung di browser ini.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;
  const progressPercent = cardsDeck.length > 0 ? Math.round((masteredCount / cardsDeck.length) * 100) : 0;

  return (
    <div className="page-container animate-fade">
      {/* Top Workspace Toolbar */}
      <div className="neu-subtle rounded-xl p-space-sm mb-space-lg" style={{ padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-xl)', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Study Mode Segmented Control */}
          <div className="grade-switch" style={{ padding: '0.3rem' }}>
            <button
              className={`grade-btn ${studyMode === 'santai' ? 'active' : ''}`}
              onClick={() => setStudyMode('santai')}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>spa</span>
              <span>Mode Santai</span>
            </button>
            <button
              className={`grade-btn ${studyMode === 'kejar' ? 'active' : ''}`}
              onClick={() => setStudyMode('kejar')}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
              <span>Kejar Ujian</span>
            </button>
            <button
              className={`grade-btn ${studyMode === 'mandiri' ? 'active' : ''}`}
              onClick={() => setStudyMode('mandiri')}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer</span>
              <span>Ujian Mandiri</span>
            </button>
          </div>

          {/* Subject & Grade Selectors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Subject Selector Dropdown */}
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

            {/* Grade Selector Dropdown */}
            <div className="neu-subtle" style={{ borderRadius: 'var(--radius-md)', padding: '0.35rem 0.75rem' }}>
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                style={{ background: 'transparent', fontWeight: '600', color: 'var(--on-surface)', cursor: 'pointer' }}
              >
                <option value="all">Semua Kelas</option>
                <option value="10">Kelas 10 SMK</option>
                <option value="11">Kelas 11 SMK</option>
                <option value="12">Kelas 12 SMK</option>
              </select>
            </div>

            {/* Shuffle Button */}
            <button
              className="neu-subtle"
              style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={handleShuffle}
              title="Acak Urutan Kartu"
            >
              <span className="material-symbols-outlined">shuffle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Flashcard Work Area */}
      <div className="flashcard-workspace">
        {cardsDeck.length > 0 && currentCard ? (
          <div>
            {/* Deck Progress & Status Header */}
            <div
              className="neu-subtle"
              style={{
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  className="neu-pressed"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}
                >
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--on-surface)' }}>
                      Kartu {currentCardIndex + 1} dari {cardsDeck.length}
                    </span>
                    <span
                      className="neu-pressed"
                      style={{
                        padding: '1px 8px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        color: 'var(--primary)'
                      }}
                    >
                      Mode Latihan Mandiri
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)', margin: 0 }}>
                    {currentCard.subjectTitle} • Kelas {currentCard.grade} SMK
                  </p>
                </div>
              </div>

              {/* Flip Manual Trigger */}
              <button
                className="neu-btn"
                style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem', color: 'var(--primary)' }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>sync</span>
                <span className="d-none d-sm-inline">Balik Kartu (Spasi)</span>
              </button>
            </div>

            {/* Inset Progress Trench */}
            <div className="progress-trench" style={{ height: '10px', marginBottom: '1.5rem' }}>
              <div
                className="progress-pill"
                style={{ width: `${Math.round(((currentCardIndex + 1) / cardsDeck.length) * 100)}%` }}
              />
            </div>

            {/* 3D Flippable Neumorphic Card Frame */}
            <div
              className="flashcard-container"
              onClick={() => setIsFlipped(!isFlipped)}
              title="Klik kartu atau tekan spasi untuk membalik"
            >
              <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* FRONT FACE (Convex Raised Extruded) */}
                <div className="flashcard-face flashcard-front">
                  {/* Top Metadata & Utility Icons */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span
                        className="neu-pressed"
                        style={{
                          padding: '0.3rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: currentCard.subjectColor || 'var(--primary)'
                        }}
                      >
                        {currentCard.subjectTitle} • Kelas {currentCard.grade}
                      </span>
                      <span
                        className="neu-subtle"
                        style={{ padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-full)', fontSize: '0.72rem', color: 'var(--outline)' }}
                      >
                        Pertanyaan Konsep
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }} onClick={(e) => e.stopPropagation()}>
                      {/* Audio Button */}
                      <button
                        className="neu-subtle"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: speaking ? 'var(--secondary)' : 'var(--primary)'
                        }}
                        onClick={() => handlePlayVoice(currentCard.question)}
                        title="Dengarkan Pertanyaan"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          {speaking ? 'graphic_eq' : 'volume_up'}
                        </span>
                      </button>

                      {/* Bookmark Card */}
                      <button
                        className="neu-subtle"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: bookmarkedCards.includes(currentCard.id) ? 'var(--tertiary)' : 'var(--outline)'
                        }}
                        onClick={() => onToggleBookmarkCard(currentCard.id)}
                        title="Simpan Kartu Ini"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '18px',
                            fontVariationSettings: bookmarkedCards.includes(currentCard.id) ? "'FILL' 1" : "'FILL' 0"
                          }}
                        >
                          bookmark
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Main Question Text */}
                  <div style={{ margin: 'auto 0', padding: '1.5rem 0' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.04em', display: 'block', marginBottom: '0.75rem' }}>
                      Kartu Tantangan #{currentCardIndex + 1}
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--on-surface)', lineHeight: '1.5' }}>
                      {currentCard.question}
                    </h3>
                    {currentCard.tip && (
                      <div
                        style={{
                          marginTop: '1.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--secondary)'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>lightbulb</span>
                        <span>{currentCard.tip}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Clue */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--outline)', borderTop: '1px solid rgba(186, 198, 214, 0.3)', paddingTop: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>touch_app</span>
                      Ketuk kartu untuk melihat jawaban lengkap
                    </span>
                    <span style={{ fontWeight: '600', color: 'var(--primary)' }}>
                      Sisi Depan
                    </span>
                  </div>
                </div>

                {/* BACK FACE (Concave Debossed Pressed Inset) */}
                <div className="flashcard-face flashcard-back">
                  {/* Top Answer Badge */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        className="neu-flat"
                        style={{
                          padding: '0.3rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          color: 'var(--primary)'
                        }}
                      >
                        Kunci Jawaban & Pembahasan
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
                        Terverifikasi Guru Vokasi
                      </span>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                      <button
                        className="neu-subtle"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary)'
                        }}
                        onClick={() => handlePlayVoice(currentCard.answer)}
                        title="Dengarkan Jawaban"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>volume_up</span>
                      </button>
                    </div>
                  </div>

                  {/* Answer Content */}
                  <div style={{ margin: 'auto 0', padding: '1.25rem 0' }}>
                    <div className="neu-flat" style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)', background: 'var(--surface)' }}>
                      <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--on-surface)', lineHeight: '1.7', fontWeight: '500' }}>
                        {currentCard.answer}
                      </p>
                    </div>

                    {currentCard.tip && (
                      <div
                        className="neu-pressed"
                        style={{
                          marginTop: '1rem',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.85rem',
                          color: 'var(--on-surface-variant)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '18px' }}>tips_and_updates</span>
                        <span><strong>Trik Mengingat:</strong> {currentCard.tip}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      borderTop: '1px solid rgba(186, 198, 214, 0.4)',
                      paddingTop: '0.75rem'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span style={{ fontSize: '0.76rem', color: 'var(--outline)' }}>
                      Tinjauan Jawaban
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        className="neu-btn"
                        style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', color: 'var(--primary)' }}
                        onClick={() => setIsFlipped(false)}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>sync</span>
                        <span>Balik ke Soal</span>
                      </button>

                      <button
                        className="neu-btn neu-btn-primary"
                        style={{ padding: '0.4rem 0.95rem', fontSize: '0.8rem' }}
                        onClick={handleNextCard}
                      >
                        <span>Kartu Berikutnya</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deck Navigation Controls */}
            <div className="flashcard-deck-controls">
              <button
                className="neu-btn"
                onClick={handlePrevCard}
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Kartu Sebelumnya</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  className="neu-btn"
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{ color: 'var(--primary)' }}
                >
                  <span className="material-symbols-outlined">sync</span>
                  <span>Balik</span>
                </button>
                <button
                  className="neu-btn"
                  onClick={handleShuffle}
                  title="Acak Kartu"
                >
                  <span className="material-symbols-outlined">shuffle</span>
                </button>
              </div>

              <button
                className="neu-btn neu-btn-primary"
                onClick={handleNextCard}
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <span>Kartu Berikutnya</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            className="neu-subtle"
            style={{
              padding: '4rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              color: 'var(--on-surface-variant)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline)' }}>style</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)', marginTop: '0.5rem' }}>
              Tidak Ada Kartu untuk Kriteria Ini
            </h3>
            <p style={{ fontSize: '0.88rem', margin: '0.5rem auto 1.5rem', maxWidth: '400px' }}>
              Silakan ganti pilihan Mata Pelajaran atau Tingkat Kelas untuk menampilkan kartu lainnya.
            </p>
            <button
              className="neu-btn neu-btn-primary"
              onClick={() => { setSelectedSubjectId('all'); setGradeFilter('all'); }}
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
