import React, { useState } from 'react';

export function Header({
  activeTab,
  setActiveTab,
  selectedGrade,
  setSelectedGrade,
  searchQuery,
  setSearchQuery,
  bookmarkedCount = 0,
  onResetToHome
}) {
  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    { id: 1, title: 'Modul Baru Ditambahkan', desc: 'Bab Internet of Things (IoT) pada Informatika SMK Kelas 12 telah diperbarui.', time: '10 mnt lalu' },
    { id: 2, title: 'Target Belajar Harian', desc: 'Kamu telah menyelesaikan 3 kuis hari ini. Pertahankan streak belajarmu!', time: '1 jam lalu' },
    { id: 3, title: 'Tips Menghadapi Ujian', desc: 'Gunakan Flashcard Mode Santai sebelum tidur untuk retensi memori jangka panjang.', time: 'Kemarin' },
  ];

  return (
    <header className="app-header">
      {/* Top Header Row */}
      <div className="header-top">
        {/* Brand Logo */}
        <div className="brand-badge" onClick={onResetToHome} title="Kembali ke Katalog Beranda">
          <div className="brand-icon-box">
            <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>school</span>
          </div>
          <div>
            <div style={{ lineHeight: '1.1' }}>RuangMateri<span style={{ color: 'var(--secondary)', fontSize: '0.9em' }}>.SMK</span></div>
            <div style={{ fontSize: '0.68rem', color: 'var(--on-surface-variant)', fontWeight: '600', letterSpacing: '0.04em' }}>
              PORTAL VOKASI UMUM KELAS 10-12
            </div>
          </div>
        </div>

        {/* Global Search Input */}
        <div className="header-search">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="Cari konsep materi, rumus, istilah industri, atau bab..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--outline)',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Bersihkan Pencarian"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
            </button>
          )}
        </div>

        {/* Grade Selector Switch & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Grade Selector Pills */}
          <div className="grade-switch">
            <button
              className={`grade-btn ${selectedGrade === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedGrade('all')}
              title="Tampilkan materi semua tingkat"
            >
              Semua
            </button>
            <button
              className={`grade-btn ${selectedGrade === 10 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(10)}
            >
              Kelas 10
            </button>
            <button
              className={`grade-btn ${selectedGrade === 11 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(11)}
            >
              Kelas 11
            </button>
            <button
              className={`grade-btn ${selectedGrade === 12 ? 'active' : ''}`}
              onClick={() => setSelectedGrade(12)}
            >
              Kelas 12
            </button>
          </div>

          {/* Notification Button */}
          <div style={{ position: 'relative' }}>
            <button
              className="neu-subtle"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: 'var(--on-surface-variant)'
              }}
              onClick={() => setShowNotification(!showNotification)}
              title="Pemberitahuan"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
              <span
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--error)'
                }}
              />
            </button>

            {/* Notification Popover */}
            {showNotification && (
              <div
                className="neu-floating"
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '52px',
                  width: '320px',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem',
                  zIndex: 150
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--on-surface)' }}>Notifikasi Belajar</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '600' }}>3 Baru</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="neu-subtle"
                      style={{ padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem' }}
                    >
                      <div style={{ fontWeight: '600', color: 'var(--primary)' }}>{n.title}</div>
                      <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.75rem', marginTop: '2px' }}>{n.desc}</div>
                      <div style={{ color: 'var(--outline)', fontSize: '0.68rem', marginTop: '4px' }}>{n.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Chip */}
          <div
            className="neu-subtle"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.35rem 0.75rem 0.35rem 0.4rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('history')}
            title="Buka Riwayat & Profil Belajar"
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '0.82rem'
              }}
            >
              SMK
            </div>
            <div style={{ display: 'none', flexDirection: 'column', textAlign: 'left' }} className="d-md-flex">
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--on-surface)', lineHeight: '1.1' }}>Siswa Vokasi</span>
              <span style={{ fontSize: '0.68rem', color: 'var(--secondary)', fontWeight: '600' }}>
                {bookmarkedCount > 0 ? `${bookmarkedCount} Simpanan` : 'Belajar Mandiri'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Bar */}
      <nav className="nav-tabs-bar">
        <button
          className={`nav-tab-item ${activeTab === 'katalog' ? 'active' : ''}`}
          onClick={() => { setActiveTab('katalog'); onResetToHome(); }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
          <span>Mata Pelajaran Umum</span>
        </button>

        <button
          className={`nav-tab-item ${activeTab === 'flashcard' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcard')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>style</span>
          <span>Flashcard Interaktif</span>
        </button>

        <button
          className={`nav-tab-item ${activeTab === 'rangkuman' ? 'active' : ''}`}
          onClick={() => setActiveTab('rangkuman')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>summarize</span>
          <span>Rangkuman & Kata Kunci</span>
        </button>

        <button
          className={`nav-tab-item ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>quiz</span>
          <span>Bank Soal & Quiz</span>
        </button>

        <button
          className={`nav-tab-item ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bookmark</span>
          <span>Materi Tersimpan</span>
          {bookmarkedCount > 0 && (
            <span
              style={{
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '0.68rem',
                padding: '1px 6px',
                borderRadius: 'var(--radius-full)',
                fontWeight: '700'
              }}
            >
              {bookmarkedCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
