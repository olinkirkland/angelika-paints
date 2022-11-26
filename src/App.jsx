import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Home';

export default function App() {
  const [data, setData] = React.useState([]);

  return (
    <Router
      basename={
        ['localhost', '127.0.0.1'].includes(window.location.hostname)
          ? '/'
          : '/angelika-paints/'
      }
    >
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
