import React from 'react';
import './layout.css';

const TV_SERIES_DATA = [
  {
    id: 1,
    title: "Celestial Echoes",
    excerpt: "In a future where sound is the only currency, a silent thief discovers a frequency that could rewrite human history.",
    length: "10 Episodes / Season 1",
    coverImage: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "The Iron Hearth",
    excerpt: "Three families struggle for control over the last remaining forge in a world gripped by a supernatural ice age.",
    length: "8 Episodes / Season 2",
    coverImage: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Shadow of the Crane",
    excerpt: "A retired diplomat is drawn back into the world of espionage when a scroll containing forbidden techniques goes missing.",
    length: "12 Episodes / Season 1",
    coverImage: "https://images.unsplash.com/photo-1528164344705-4754268799af?auto=format&fit=crop&q=80&w=1000",
  }
];

const SeriesRow = ({ series }) => (
  <div className="series-row">
    <div className="cover-container">
      <img src={series.coverImage} alt={series.title} className="horizontal-cover" />
    </div>
    <div className="info-container">
      <h2 className="series-title">{series.title}</h2>
      <p className="series-excerpt">{series.excerpt}</p>
      <span className="series-length">{series.length}</span>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="app-container custom-scrollbar">
      {/* Decorative Bamboo Element using your animation class */}
      <div className="bamboo-decoration">
        <div className="bamboo-stalk"></div>
      </div>

      <header className="page-header">
        <h1>Featured Series</h1>
      </header>

      <main className="series-list hide-scrollbar">
        {TV_SERIES_DATA.map(series => (
          <SeriesRow key={series.id} series={series} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
