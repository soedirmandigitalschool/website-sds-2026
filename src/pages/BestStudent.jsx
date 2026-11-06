import { useEffect } from 'react';
import './BestStudent.css';

const BEST_STUDENTS = [
  {
    rank: 1,
    name: 'Tasya Apriani Siregar',
    nim: 'K1D025023',
    prodi: 'S1 Statistika',
    course: 'Data Analyst',
    courseKey: 'da',
    image: '/assets/best-student/best-student-1.jpg',
  },
  {
    rank: 2,
    name: 'Jasmine Evita Raihana',
    nim: 'A1F026159',
    prodi: 'S1 Teknologi Pangan',
    course: 'Social Media Specialist',
    courseKey: 'sms',
    image: '/assets/best-student/best-student-2.jpg',
  },
  {
    rank: 3,
    name: 'Jawza Fathiyyah',
    nim: 'A0B026044',
    prodi: 'D3 Perencanaan Sumberdaya Lahan',
    course: 'Graphic Design',
    courseKey: 'gd',
    image: null,
    note: 'Tidak hadir saat Graduation.',
  },
];

const BEST_PROJECTS = [
  {
    groupName: 'Kelompok 2',
    image: '/assets/best-student/best-project-1.jpg',
    members: [
      { name: 'Afrilia Faizah Az - Zahra', nim: 'A1A025175', prodi: 'S1 Agribisnis', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Imelda Khairunnisa', nim: 'K1C024084', prodi: 'S1 Fisika', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Fattati Yumna Nurjanah', nim: 'H1D025162', prodi: 'S1 Informatika', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Fildza Nazhifa', nim: 'H1D025148', prodi: 'S1 Informatika', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Zuvika Dwi Yustina', nim: 'H1D025124', prodi: 'S1 Informatika', course: 'Data Analyst', courseKey: 'da' },
      { name: 'Annisa Firda Nazila', nim: 'K1A026164', prodi: 'S1 Kimia', course: 'Data Analyst', courseKey: 'da' },
    ],
  },
  {
    groupName: 'Kelompok 5',
    image: '/assets/best-student/best-project-2.jpg',
    members: [
      { name: 'Ajeng Tazkiah Derajat', nim: 'F1C02517', prodi: 'S1 Ilmu Komunikasi', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Jasmine Evita Raihana', nim: 'A1F026159', prodi: 'S1 Teknologi Pangan', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Nasya Shifani Rubina', nim: 'J1A025065', prodi: 'S1 Sastra Inggris', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Rufaidah Adhwaa Nisa', nim: 'G1A024089', prodi: 'S1 Pendidikan Kedokteran', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Tasya Apriani Siregar', nim: 'K1D025023', prodi: 'S1 Statistika', course: 'Data Analyst', courseKey: 'da' },
      { name: 'Habiel Billah Akbar Heikmatiar', nim: 'K1B026012', prodi: 'S1 Matematika', course: 'Data Analyst', courseKey: 'da' },
    ],
  },
  {
    groupName: 'Kelompok 1',
    image: '/assets/best-student/best-project-3.jpg',
    members: [
      { name: 'Farah Talitha Az Zahra', nim: 'F1C026021', prodi: 'S1 Ilmu Komunikasi', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Fatmah Aulia', nim: 'J1B025093', prodi: 'S1 Sastra Indonesia', course: 'Social Media Specialist', courseKey: 'sms' },
      { name: 'Chadijah Putih Ath Thaariq', nim: 'H1H025029', prodi: 'S1 Teknik Komputer', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Tabina Zhafif Huwaida', nim: 'I1B026029', prodi: 'S1 Keperawatan', course: 'Graphic Design', courseKey: 'gd' },
      { name: 'Nikita Andini', nim: 'C1B026004', prodi: 'S1 Manajemen', course: 'Data Analyst', courseKey: 'da' },
      { name: 'Muhammad Fachril Aziz', nim: 'H1E025047', prodi: 'S1 Teknik Industri', course: 'Data Analyst', courseKey: 'da' },
    ],
  },
];

export default function BestStudent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="best-student-page">
      {/* Decorative birds */}
      <img src="/assets/burung.png" alt="" className="bs-bird bs-bird--1" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="bs-bird bs-bird--2" aria-hidden="true" />
      <img src="/assets/burung.png" alt="" className="bs-bird bs-bird--3" aria-hidden="true" />

      {/* Hero Section */}
      <section className="bs-hero">
        <div className="bs-hero__content container">
          <div className="bs-hero__badge">HALL OF FAME</div>
          <h1 className="bs-hero__title">BEST STUDENT & PROJECT</h1>
          <h2 className="bs-hero__subtitle">SOEDIRMAN DIGITAL SCHOOL 2026</h2>

          <div className="bs-hero__mascot-area">
            <img src="/assets/maskot piko.png" alt="Mascot Piko" className="bs-hero__mascot" />
            <div className="bs-hero__speech-bubble">
              <strong>Selamat untuk Para Juara! 🎉</strong>
              <p>
                Apresiasi setinggi-tingginya kepada para peserta dan kelompok terbaik
                yang telah menunjukkan dedikasi, kreativitas, dan kerja keras luar biasa
                sepanjang rangkaian pembelajaran Soedirman Digital School 2026!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bs-content container">
        {/* Section 1: Best Student */}
        <section className="bs-section">
          <div className="bs-section__header">
            <span className="bs-section__tag">INDIVIDUAL AWARDS</span>
            <h2 className="bs-section__title">BEST STUDENT</h2>
            <p className="bs-section__desc">
              Peserta terbaik yang menunjukkan prestasi serta kontribusi unggul pada masing-masing learning path.
            </p>
          </div>

          <div className="bs-cards-grid">
            {BEST_STUDENTS.map((student) => (
              <article key={student.nim} className="bs-card">
                <div className="bs-card__badge-wrapper">
                  <span className="bs-card__rank-badge">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Best Student
                  </span>
                  <span className={`bs-course-pill bs-course-pill--${student.courseKey}`}>
                    {student.course}
                  </span>
                </div>

                <div className="bs-card__photo-container">
                  {student.image ? (
                    <img
                      src={student.image}
                      alt={student.name}
                      className="bs-card__photo"
                      loading="lazy"
                    />
                  ) : (
                    <div className="bs-card__photo-placeholder" aria-label="Foto tidak tersedia">
                      <div className="bs-card__placeholder-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span className="bs-card__placeholder-label">Graduation Photo</span>
                      {student.note && (
                        <div className="bs-card__note-badge">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                          </svg>
                          <span>{student.note}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="bs-card__body">
                  <h3 className="bs-card__name">{student.name}</h3>

                  <div className="bs-card__details">
                    <div className="bs-card__detail-row">
                      <span className="bs-card__detail-label">NIM</span>
                      <span className="bs-card__detail-value">{student.nim}</span>
                    </div>
                    <div className="bs-card__detail-row">
                      <span className="bs-card__detail-label">Program Studi</span>
                      <span className="bs-card__detail-value">{student.prodi}</span>
                    </div>
                    <div className="bs-card__detail-row">
                      <span className="bs-card__detail-label">Learning Path</span>
                      <span className="bs-card__detail-value highlight">{student.course}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Best Project */}
        <section className="bs-section bs-section--projects">
          <div className="bs-section__header">
            <span className="bs-section__tag">TEAM COLLABORATION</span>
            <h2 className="bs-section__title">BEST PROJECT</h2>
            <p className="bs-section__desc">
              Kelompok dengan kolaborasi solid dan capaian proyek akhir paling inovatif serta berdampak.
            </p>
          </div>

          <div className="bs-projects-list">
            {BEST_PROJECTS.map((project, idx) => (
              <article key={idx} className="bs-project-card">
                <div className="bs-project-card__visual">
                  <div className="bs-project-card__image-wrapper">
                    <img
                      src={project.image}
                      alt={project.groupName}
                      className="bs-project-card__image"
                      loading="lazy"
                    />
                  </div>
                  <div className="bs-project-card__visual-caption">
                    <span className="bs-project-card__trophy">🏆</span>
                    <div>
                      <h3 className="bs-project-card__name">{project.groupName}</h3>
                      <span className="bs-project-card__count">{project.members.length} Anggota Tim</span>
                    </div>
                  </div>
                </div>

                <div className="bs-project-card__content">
                  <div className="bs-project-card__header">
                    <span className="bs-badge-pill">Best Project Team</span>
                    <h4 className="bs-project-card__title">Daftar Anggota {project.groupName}</h4>
                  </div>

                  <div className="bs-members-table-wrapper">
                    <table className="bs-members-table">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Lengkap</th>
                          <th>NIM</th>
                          <th>Program Studi</th>
                          <th>Course</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.members.map((member, mIdx) => (
                          <tr key={mIdx}>
                            <td className="bs-col-num">{mIdx + 1}</td>
                            <td className="bs-col-name">{member.name}</td>
                            <td className="bs-col-nim">{member.nim}</td>
                            <td className="bs-col-prodi">{member.prodi}</td>
                            <td className="bs-col-course">
                              <span className={`bs-course-tag bs-course-tag--${member.courseKey}`}>
                                {member.course}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards for Members */}
                  <div className="bs-members-mobile-list">
                    {project.members.map((member, mIdx) => (
                      <div key={mIdx} className="bs-member-mobile-card">
                        <div className="bs-member-mobile-top">
                          <span className="bs-member-mobile-index">#{mIdx + 1}</span>
                          <span className={`bs-course-tag bs-course-tag--${member.courseKey}`}>
                            {member.course}
                          </span>
                        </div>
                        <h5 className="bs-member-mobile-name">{member.name}</h5>
                        <div className="bs-member-mobile-meta">
                          <span>{member.nim}</span>
                          <span className="separator">•</span>
                          <span>{member.prodi}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Decorative Ship & Wave Bottom Footer Area */}
      <div className="bs-footer-deco" aria-hidden="true">
        <img className="bs-ship-deco" src="/assets/Vector.png" alt="" />
        <div className="bs-wave-layer bs-wave-layer--back" />
        <div className="bs-wave-layer bs-wave-layer--front" />
      </div>
    </div>
  );
}
