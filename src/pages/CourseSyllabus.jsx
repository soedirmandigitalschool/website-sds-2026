import { useParams, Navigate } from 'react-router-dom';
import './CourseSyllabus.css';

const COURSES = {
  'graphic-design': {
    title: 'GRAPHIC DESIGN',
    desc: 'Apa yang akan dipelajari? Course ini dirancang untuk mahasiswa umum yang tertarik memulai atau mengembangkan karir dalam Graphic Design.',
    camps: [
      { id: 1, text: 'Membangun Konsep dengan Design Thinking' },
      { id: 2, text: 'Color Theory & Visual Foundation' },
      { id: 3, text: 'Typography & Editorial Design' },
      { id: 4, text: 'Mini Test' },
      { id: 5, text: 'Brand Identity & Logo Design' },
      { id: 6, text: 'Vector Illustration with Figma' },
      { id: 7, text: 'Design System & Asset Guidelines' },
      { id: 8, text: 'Final Project' }
    ]
  },
  'data-analyst': {
    title: 'DATA ANALYST',
    desc: 'Apa yang akan dipelajari? Pada program ini, mahasiswa diajarkan mengenai dasar-dasar ilmu data meliputi teknik analisis hingga visualisasi menggunakan tools yang relevan.',
    camps: [
      { id: 1, text: 'Pengenalan Data Analisis' },
      { id: 2, text: 'Dasar Statistic Deskriptif' },
      { id: 3, text: 'Pengenalan dan Dasar-dasar Database Relasional' },
      { id: 4, text: 'Eksplorasi Data dengan SQL' },
      { id: 5, text: 'Mini Test' },
      { id: 6, text: 'Pengenalan Visualisasi Data dan Tableau Desktop' },
      { id: 7, text: 'Pembuatan Dashboard dengan Tableau' },
      { id: 8, text: 'Belajar Fundamental Python untuk Pengolahan Big Data' },
      { id: 9, text: 'Final Project' }
    ]
  },
  'sosmed-specialist': {
    title: 'SOSIAL MEDIA SPECIALIST',
    desc: 'Apa yang akan dipelajari? Disini kamu akan diajarkan cara menyusun strategi konten untuk berbagai format social media, mengidentifikasi target audiens, dan menganalisis metrik keberhasilan.',
    camps: [
      { id: 1, text: 'Dasar Pemahaman Peran Sosmed di Dunia Bisnis' },
      { id: 2, text: 'Platform Media Sosial & Konten Strategi' },
      { id: 3, text: 'Creative Visual Asset & Copywriting di Media Sosial' },
      { id: 4, text: 'Dasar Analisis Data Digital & Konten Planning' },
      { id: 5, text: 'Mini Test' },
      { id: 6, text: 'Social Media Management & KOL Marketing' },
      { id: 7, text: 'Dasar Meta Ads (FB & IG)' },
      { id: 8, text: 'Membangun Karir Sebagai Sosmed Specialist' },
      { id: 9, text: 'Final Project' }
    ]
  }
};

export default function CourseSyllabus() {
  const { courseId } = useParams();
  const course = COURSES[courseId];

  if (!course) {
    return <Navigate to="/coming-soon" replace />;
  }

  return (
    <div className="course-page">
      <div className="course-hero container">
        <h1 className="course-hero__title">{course.title}</h1>
        <p className="course-hero__desc">{course.desc}</p>
        <a href="#register" className="course-hero__btn">Daftar Sekarang <span>↗</span></a>
      </div>

      <div className="course-syllabus container">
        <h2 className="course-syllabus__title">SILABUS</h2>
        <div className="course-syllabus__list">
          {course.camps.map(camp => (
            <div key={camp.id} className="course-syllabus__item">
              <div className="course-syllabus__badge">CAMP {camp.id}</div>
              <div className="course-syllabus__text">{camp.text}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative birds */}
      <img src="/assets/burung.png" alt="" className="course-bird course-bird--1" />
      <img src="/assets/burung.png" alt="" className="course-bird course-bird--2" />
    </div>
  );
}
