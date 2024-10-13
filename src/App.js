import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import Faculty from './components/Faculty'; // Import the Faculty component

const App = () => {
  const events = ['Science Fair', 'Cultural Fest', 'Sports Day'];

  return (
    <Router>
      <div>
        {/* Header with title prop */}
        <Header title="Vivekanand Education Society's Institute Of Technology" />

      
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty</Link> {/* Link to Faculty page */
            /* </li>
          </ul>
        </nav> */} 

        {/* Define Routes for Home, Profile, and Faculty Pages */}
        <Routes>
          <Route path="/" element={<HomePage events={events} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/faculty" element={<Faculty />} /> {/* Route for Faculty page */}
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
