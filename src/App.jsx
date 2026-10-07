import React, { useState, useEffect } from 'react';
import { SUBJECTS_DATA } from './data/subjectsData';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { SubjectCard } from './components/SubjectCard';
import { SubjectDetail } from './components/SubjectDetail';
import { MaterialReader } from './components/MaterialReader';
import { FlashcardViewer } from './components/FlashcardViewer';
import { QuizInteractive } from './components/QuizInteractive';
import { SummaryKeywordView } from './components/SummaryKeywordView';
import { HistoryBookmarkView } from './components/HistoryBookmarkView';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState('katalog'); // 'katalog', 'flashcard', 'rangkuman', 'quiz', 'history'
  const [selectedGrade, setSelectedGrade] = useState('all'); // 'all', 10, 11, 12
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [readingChapter, setReadingChapter] = useState(null);
  const [readingSubject, setReadingSubject] = useState(null);

  // Active sub-states for direct jumps
  const [activeFlashcardSubjectId, setActiveFlashcardSubjectId] = useState('all');
  const [activeQuizSubjectId, setActiveQuizSubjectId] = useState(SUBJECTS_DATA[0]?.id || '');
  const [activeQuizChapterId, setActiveQuizChapterId] = useState(null);

  // LocalStorage Persisted State (Pure local browser storage, no backend database required)
  const [bookmarkedChapters, setBookmarkedChapters] = useState(() => {
    try {
      const saved = localStorage.getItem('ruangmateri_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedCards, setBookmarkedCards] = useState(() => {
    try {
      const saved = localStorage.getItem('ruangmateri_fav_cards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizHistory, setQuizHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('ruangmateri_quiz_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ruangmateri_bookmarks', JSON.stringify(bookmarkedChapters));
    } catch {}
  }, [bookmarkedChapters]);

  useEffect(() => {
    try {
      localStorage.setItem('ruangmateri_fav_cards', JSON.stringify(bookmarkedCards));
    } catch {}
  }, [bookmarkedCards]);

  useEffect(() => {
    try {
      localStorage.setItem('ruangmateri_quiz_history', JSON.stringify(quizHistory));
    } catch {}
  }, [quizHistory]);

  const toggleBookmarkChapter = (chapterId) => {
    setBookmarkedChapters((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId]
    );
  };

  const toggleBookmarkCard = (cardId) => {
    setBookmarkedCards((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  const handleRecordQuizResult = (result) => {
    setQuizHistory((prev) => [result, ...prev]);
  };

  const handleClearHistory = () => {
    if (window.confirm('Apakah kamu yakin ingin mengosongkan riwayat kuis dan simpanan materi?')) {
      setBookmarkedChapters([]);
      setBookmarkedCards([]);
      setQuizHistory([]);
    }
  };

  // Quick action navigation
  const handleOpenMaterialReader = (chapter, subject, initialSection = 'materi') => {
    setReadingChapter(chapter);
    setReadingSubject(subject);
  };

  const handleOpenFlashcardFromSubject = (subject, chapterId = null) => {
    setActiveFlashcardSubjectId(subject.id);
    setActiveTab('flashcard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuizFromSubject = (subject, chapterId = null) => {
    setActiveQuizSubjectId(subject.id);
    setActiveQuizChapterId(chapterId);
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetToHome = () => {
    setSelectedSubject(null);
    setSearchQuery('');
    setActiveTab('katalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter subjects for the main catalog
  const filteredSubjects = SUBJECTS_DATA.filter((subj) => {
    // Category filter
    if (selectedCategory !== 'all' && subj.category !== selectedCategory) {
      return false;
    }
    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchSubject = subj.title.toLowerCase().includes(q) || subj.description.toLowerCase().includes(q);
      const matchChapter = subj.chapters.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.keywords.some((k) => k.term.toLowerCase().includes(q) || k.definition.toLowerCase().includes(q))
      );
      if (!matchSubject && !matchChapter) return false;
    }
    // Grade filter
    if (selectedGrade !== 'all') {
      const hasGradeChapter = subj.chapters.some((c) => c.grade === selectedGrade);
      if (!hasGradeChapter) return false;
    }
    return true;
  });

  // Calculate statistics across all subjects
  const totalChaptersCount = SUBJECTS_DATA.reduce((acc, s) => acc + s.chapters.length, 0);
  const totalFlashcardsCount = SUBJECTS_DATA.reduce((acc, s) => acc + (s.flashcards?.length || 0), 0);
  const totalQuizzesCount = SUBJECTS_DATA.reduce((acc, s) => acc + (s.quiz?.length || 0), 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
      {/* Top Fixed / Sticky Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkedCount={bookmarkedChapters.length}
        onResetToHome={handleResetToHome}
      />

      {/* Main View Switcher */}
      <main style={{ flex: 1 }}>
        {activeTab === 'katalog' && (
          <div>
            {selectedSubject ? (
              <SubjectDetail
                subject={selectedSubject}
                onBack={() => setSelectedSubject(null)}
                onOpenMaterialReader={handleOpenMaterialReader}
                onOpenFlashcard={handleOpenFlashcardFromSubject}
                onOpenQuiz={handleOpenQuizFromSubject}
                onOpenChapterKeywords={(kw, ch) => handleOpenMaterialReader(ch, selectedSubject, 'glosarium')}
              />
            ) : (
              <div className="page-container animate-fade">
                {/* Hero Command Banner */}
                <HeroBanner
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedGrade={selectedGrade}
                  setSelectedGrade={setSelectedGrade}
                  totalSubjectsCount={SUBJECTS_DATA.length}
                  totalChaptersCount={totalChaptersCount}
                  totalFlashcardsCount={totalFlashcardsCount}
                  totalQuizzesCount={totalQuizzesCount}
                />

                {/* Section Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '0.04em' }}>
                      Eksplorasi Kurikulum Vokasi
                    </span>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--on-surface)', marginTop: '2px' }}>
                      Katalog Mata Pelajaran Umum SMK
                    </h2>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--on-surface-variant)' }}>
                    <span>Menampilkan</span>
                    <span className="neu-pressed" style={{ padding: '3px 10px', borderRadius: '6px', fontWeight: '800', color: 'var(--primary)' }}>
                      {filteredSubjects.length} Mata Pelajaran
                    </span>
                  </div>
                </div>

                {/* Subject Cards Grid */}
                {filteredSubjects.length > 0 ? (
                  <div className="subject-grid">
                    {filteredSubjects.map((subj) => (
                      <SubjectCard
                        key={subj.id}
                        subject={subj}
                        onSelectSubject={(s) => setSelectedSubject(s)}
                        onOpenFlashcard={handleOpenFlashcardFromSubject}
                        onOpenQuiz={handleOpenQuizFromSubject}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="neu-subtle" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-xl)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '54px', color: 'var(--outline)' }}>search_off</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)', marginTop: '0.75rem' }}>
                      Tidak Ditemukan Mata Pelajaran yang Sesuai
                    </h3>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', maxWidth: '420px', margin: '0.5rem auto 1.5rem' }}>
                      Coba gunakan kata kunci pencarian lain atau kembalikan filter kategori dan tingkat kelas ke semula.
                    </p>
                    <button
                      className="neu-btn neu-btn-primary"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedGrade('all');
                      }}
                    >
                      Reset Filter Pencarian
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab: Flashcard Interaktif */}
        {activeTab === 'flashcard' && (
          <FlashcardViewer
            subjects={SUBJECTS_DATA}
            activeSubjectId={activeFlashcardSubjectId}
            onBackToKatalog={handleResetToHome}
            bookmarkedCards={bookmarkedCards}
            onToggleBookmarkCard={toggleBookmarkCard}
          />
        )}

        {/* Tab: Rangkuman & Kata Kunci */}
        {activeTab === 'rangkuman' && (
          <SummaryKeywordView
            subjects={SUBJECTS_DATA}
            onOpenMaterialReader={handleOpenMaterialReader}
            onOpenFlashcard={handleOpenFlashcardFromSubject}
          />
        )}

        {/* Tab: Bank Soal & Quiz Interaktif */}
        {activeTab === 'quiz' && (
          <QuizInteractive
            subjects={SUBJECTS_DATA}
            activeSubjectId={activeQuizSubjectId}
            chapterId={activeQuizChapterId}
            onBackToKatalog={handleResetToHome}
            onRecordQuizResult={handleRecordQuizResult}
          />
        )}

        {/* Tab: Riwayat Belajar & Simpanan */}
        {activeTab === 'history' && (
          <HistoryBookmarkView
            subjects={SUBJECTS_DATA}
            bookmarkedChapterIds={bookmarkedChapters}
            bookmarkedCardIds={bookmarkedCards}
            quizHistory={quizHistory}
            onOpenMaterialReader={handleOpenMaterialReader}
            onOpenFlashcard={handleOpenFlashcardFromSubject}
            onClearHistory={handleClearHistory}
          />
        )}
      </main>

      {/* Global Reading Modal Drawer */}
      {readingChapter && (
        <MaterialReader
          chapter={readingChapter}
          subject={readingSubject}
          onClose={() => setReadingChapter(null)}
          onOpenFlashcard={(subj, chId) => {
            setReadingChapter(null);
            handleOpenFlashcardFromSubject(subj, chId);
          }}
          onOpenQuiz={(subj, chId) => {
            setReadingChapter(null);
            handleOpenQuizFromSubject(subj, chId);
          }}
          isBookmarked={bookmarkedChapters.includes(readingChapter.id)}
          onToggleBookmark={toggleBookmarkChapter}
        />
      )}

      {/* Global Neumorphic Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('katalog');
          setSelectedSubject(null);
        }}
        onResetToHome={handleResetToHome}
      />
    </div>
  );
}
export default App;
