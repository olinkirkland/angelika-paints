import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import IdeasPage from './components/pages/IdeasPage';
import LessonsPage from './components/pages/LessonsPage';
import NaturePage from './components/pages/NaturePage';
import PageNotFound from './components/pages/NotFoundPage';
import PrintsAndCommissionsPage from './components/pages/PrintsAndCommissionsPage';
import TalesPage from './components/pages/TalesPage';
import TourPage from './components/pages/TourPage';

export default function App() {
  const [data, setData] = React.useState([]);

  return (
    <Router
      basename={
        ['localhost', '127.0.0.1'].includes(window.location.hostname)
          ? '/angelika-paints' // local (localhost:5173/angelika-paints)
          : 'olinkirk.land/angelika-paints' // production (olinkirk.land/angelika-paints)
      }
    >
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/collections/ideas" element={<IdeasPage />} />
          <Route path="/collections/nature" element={<NaturePage />} />
          <Route path="/collections/tales" element={<TalesPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route
            path="/prints-and-commissions"
            element={<PrintsAndCommissionsPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
