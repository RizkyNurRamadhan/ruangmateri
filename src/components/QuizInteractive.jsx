import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export function QuizInteractive({
  subjects,
  activeSubjectId,
  chapterId,
  onBackToKatalog,
  onRecordQuizResult
}) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(activeSubjectId || (subjects[0]?.id || ''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: optionIndex }
  const [markedForReview, setMarkedForReview] = useState({}); // { [questionIndex]: boolean }
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(900); // 15 mins default
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Find active subject
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];

  // Get question pool
  const questions = React.useMemo(() => {
    if (!currentSubject || !currentSubject.quiz) return [];
    if (chapterId) {
      const filtered = currentSubject.quiz.filter((q) => q.chapterId === chapterId);
      return filtered.length > 0 ? filtered : currentSubject.quiz;
    }
    return currentSubject.quiz;
  }, [currentSubject, chapterId]);

  // Timer countdown
  useEffect(() => {
    if (isQuizCompleted || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isQuizCompleted, questions]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (qIdx, optIdx) => {
    if (isQuizCompleted) return;
    setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleToggleReview = (qIdx) => {
    setMarkedForReview((prev) => ({ ...prev, [qIdx]: !prev[qIdx] }));
  };

  const handleFinishQuiz = () => {
    setIsQuizCompleted(true);
    setShowExplanation(true);

    // Calculate score
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const finalScore = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

    // Trigger confetti celebration if score >= 70
    if (finalScore >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }

    if (onRecordQuizResult) {
      onRecordQuizResult({
        subjectTitle: currentSubject.title,
        score: finalScore,
        date: new Date().toLocaleDateString('id-ID'),
        total: questions.length,
        correct: correctCount
      });
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setShowExplanation(false);
    setTimeLeftSeconds(900);
  };

  const currentQ = questions[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;

  let calculatedScore = 0;
  let correctCount = 0;
  if (isQuizCompleted && questions.length > 0) {
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) correctCount += 1;
    });
    calculatedScore = Math.round((correctCount / questions.length) * 100);
  }

  return (
    <div className="page-container animate-fade">
      {/* Top Quiz Header Card */}
      <section className="quiz-header-bar neu-flat">
        {/* Title & Subject Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
          <button
            className="neu-subtle"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              flexShrink: 0
            }}
            onClick={onBackToKatalog}
            title="Kembali ke Beranda"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>verified</span>
              <span style={{ fontWeight: '700', textTransform: 'uppercase' }}>
                Bank Soal Vokasi • {currentSubject.title}
              </span>
            </div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Simulasi Ujian & Evaluasi Pemahaman Bab
            </h1>
          </div>
        </div>

        {/* Timer & Quiz Status Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Circular Countdown Timer Pill */}
          <div className="neu-subtle" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-full)' }}>
            <span className="material-symbols-outlined" style={{ color: timeLeftSeconds < 180 ? 'var(--error)' : 'var(--tertiary)', fontSize: '20px' }}>
              timer
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.64rem', color: 'var(--outline)', textTransform: 'uppercase', fontWeight: '600' }}>Sisa Waktu</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '800', color: timeLeftSeconds < 180 ? 'var(--error)' : 'var(--on-surface)' }}>
                {formatTime(timeLeftSeconds)}
              </span>
            </div>
          </div>

          {/* Answered Counter Pill */}
          <div className="neu-pressed" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', color: 'var(--primary)', fontSize: '0.84rem', fontWeight: '700' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
            <span>{answeredCount}/{questions.length} Terjawab</span>
          </div>

          {/* Finish / Review Toggle */}
          {!isQuizCompleted ? (
            <button
              className="neu-btn neu-btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.86rem' }}
              onClick={handleFinishQuiz}
            >
              <span>Kumpulkan Jawaban</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>send</span>
            </button>
          ) : (
            <button
              className="neu-btn"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.86rem', color: 'var(--secondary)' }}
              onClick={handleResetQuiz}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restart_alt</span>
              <span>Ulangi Quiz</span>
            </button>
          )}
        </div>
      </section>

      {/* Question Number Horizontal Navigator (1..N) */}
      <div className="quiz-nav-strip neu-pressed">
        {questions.map((_, idx) => {
          const isAnswered = userAnswers[idx] !== undefined;
          const isCurrent = currentQuestionIndex === idx;
          const isFlagged = markedForReview[idx];

          let btnClass = 'quiz-nav-btn neu-subtle';
          if (isCurrent) btnClass = 'quiz-nav-btn active neu-pressed';
          else if (isAnswered) btnClass = 'quiz-nav-btn answered neu-flat';

          return (
            <button
              key={idx}
              className={btnClass}
              style={{ position: 'relative' }}
              onClick={() => setCurrentQuestionIndex(idx)}
              title={`Soal nomor ${idx + 1}`}
            >
              {idx + 1}
              {isFlagged && (
                <span
                  style={{
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--tertiary)'
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Question & Choices Section */}
      {currentQ ? (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="quiz-question-card neu-flat">
            {/* Question Badge Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="neu-pressed" style={{ padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.76rem', fontWeight: '800', color: 'var(--primary)' }}>
                  SOAL NOMOR {String(currentQuestionIndex + 1).padStart(2, '0')}
                </span>
                <span className="neu-subtle" style={{ padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.74rem', fontWeight: '600', color: 'var(--secondary)' }}>
                  Pilihan Ganda
                </span>
              </div>

              {/* Bookmark & Flag */}
              <button
                className="neu-subtle"
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.76rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: markedForReview[currentQuestionIndex] ? 'var(--tertiary)' : 'var(--outline)'
                }}
                onClick={() => handleToggleReview(currentQuestionIndex)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>flag</span>
                <span>{markedForReview[currentQuestionIndex] ? 'Ditandai Ragu' : 'Tandai Ragu'}</span>
              </button>
            </div>

            {/* Question Text */}
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--on-surface)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="quiz-option-list">
              {currentQ.options.map((optText, optIdx) => {
                const isSelected = userAnswers[currentQuestionIndex] === optIdx;
                const isCorrect = isQuizCompleted && optIdx === currentQ.correctIndex;
                const isWrong = isQuizCompleted && isSelected && optIdx !== currentQ.correctIndex;

                let optionClass = 'quiz-option-item neu-subtle';
                if (isQuizCompleted) {
                  if (isCorrect) optionClass = 'quiz-option-item correct';
                  else if (isWrong) optionClass = 'quiz-option-item wrong';
                } else if (isSelected) {
                  optionClass = 'quiz-option-item selected';
                }

                const optionLetter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <div
                    key={optIdx}
                    className={optionClass}
                    onClick={() => handleSelectOption(currentQuestionIndex, optIdx)}
                  >
                    <div className="quiz-badge-key">
                      {optionLetter}
                    </div>
                    <div style={{ flex: 1, fontSize: '0.96rem', lineHeight: '1.5', paddingTop: '3px' }}>
                      {optText}
                    </div>
                    {isQuizCompleted && isCorrect && (
                      <span className="material-symbols-outlined" style={{ color: 'var(--success)', fontSize: '20px' }}>
                        check_circle
                      </span>
                    )}
                    {isQuizCompleted && isWrong && (
                      <span className="material-symbols-outlined" style={{ color: 'var(--error)', fontSize: '20px' }}>
                        cancel
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Explanation Drawer (when quiz is completed or in review mode) */}
            {isQuizCompleted && currentQ.explanation && (
              <div
                className="neu-pressed"
                style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--secondary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: '700', marginBottom: '0.35rem' }}>
                  <span className="material-symbols-outlined">lightbulb</span>
                  <span>Pembahasan Lengkap & Kunci Jawaban</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--on-surface)', lineHeight: '1.6' }}>
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Question Card Bottom Navigation Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(186, 198, 214, 0.4)' }}>
              <button
                className="neu-btn"
                disabled={currentQuestionIndex === 0}
                style={{ opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Soal Sebelumnya</span>
              </button>

              <div style={{ fontSize: '0.82rem', color: 'var(--on-surface-variant)' }}>
                Soal {currentQuestionIndex + 1} dari {questions.length}
              </div>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  className="neu-btn neu-btn-primary"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                >
                  <span>Soal Berikutnya</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              ) : (
                <button
                  className="neu-btn neu-btn-primary"
                  onClick={handleFinishQuiz}
                >
                  <span>Selesai & Kumpulkan</span>
                  <span className="material-symbols-outlined">done_all</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="neu-subtle" style={{ padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-xl)' }}>
          <p>Belum ada soal pada kategori ini.</p>
        </div>
      )}

      {/* Score Modal Report (Triggered on completion) */}
      {isQuizCompleted && (
        <div className="reading-modal-backdrop" onClick={() => setIsQuizCompleted(false)}>
          <div
            className="neu-floating"
            style={{
              width: '90%',
              maxWidth: '520px',
              borderRadius: 'var(--radius-xl)',
              padding: '2.25rem',
              textAlign: 'center',
              backgroundColor: 'var(--surface)',
              animation: 'slideUp 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Score Ring Graphic */}
            <div
              className="neu-pressed"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                margin: '0 auto 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: calculatedScore >= 70 ? 'var(--primary)' : 'var(--tertiary)', lineHeight: '1' }}>
                {calculatedScore}
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--outline)', textTransform: 'uppercase' }}>
                Skor Akhir
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
              {calculatedScore >= 80 ? 'Luar Biasa, Kamu Kompeten!' : calculatedScore >= 60 ? 'Hasil Cukup Bagus!' : 'Tetap Semangat, Pelajari Lagi!'}
            </h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Kamu menjawab dengan benar <strong>{correctCount}</strong> dari <strong>{questions.length}</strong> pertanyaan pada simulasi asesmen ini.
            </p>

            <div className="neu-subtle" style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--outline)' }}>Jawaban Benar</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--success)' }}>{correctCount}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--outline)' }}>Jawaban Salah</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--error)' }}>{questions.length - correctCount}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                className="neu-btn"
                style={{ flex: 1 }}
                onClick={() => setIsQuizCompleted(false)}
              >
                Review Soal
              </button>
              <button
                className="neu-btn neu-btn-primary"
                style={{ flex: 1 }}
                onClick={handleResetQuiz}
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
