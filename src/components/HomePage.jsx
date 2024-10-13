import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = ({ events }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h2 className="homepage-title">Welcome Dear Students and Parents!</h2>
        <p className="mission-statement">
          Our mission is to empower students through quality education, fostering a community of lifelong learners.
        </p>
      </header>

      <section className="college-overview">
        <h3 className="overview-title">About Our College</h3>
        <p className="overview-description">
          Established in 1983, Our College has been a pillar of academic excellence, offering a variety of programs
          designed to meet the diverse needs of our students. We focus on practical learning, innovation, and
          research.
        </p>
      </section>

      <section className="upcoming-events">
        <h3 className="upcoming-events-title">Upcoming Events</h3>
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <div className="event-card">
                <h4 className="event-name">{event.name}</h4>
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <button className="event-details-button">View Details</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="featured-programs">
        <h3 className="programs-title">Featured Programs</h3>
        <div className="programs-list">
          <div className="program-card">
            <h4 className="program-name">Computer Science</h4>
            <p className="program-description">
              Prepare for a career in software development and data science with our hands-on curriculum.
            </p>
          </div>
          <div className="program-card">
            <h4 className="program-name">Business Administration</h4>
            <p className="program-description">
              Learn the fundamentals of business management and entrepreneurship to lead in today’s market.
            </p>
          </div>
          <div className="program-card">
            <h4 className="program-name">Mechanical Engineering</h4>
            <p className="program-description">
              Gain practical experience and theoretical knowledge in the field of mechanical engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h3 className="testimonials-title">Student Testimonials</h3>
        <blockquote className="testimonial">
          "Attending this college has been a transformative experience for me. The faculty genuinely care about our
          success." – Jane Doe, Computer Science Major
        </blockquote>
        <blockquote className="testimonial">
          "I’ve made lifelong friends and gained invaluable skills that prepared me for the workforce." – John Smith,
          Business Administration Graduate
        </blockquote>
      </section>

      <footer className="homepage-footer">
        <p>For more information, visit our <a href="/about">About Us</a> page or contact us at <a href="mailto:info@ourcollege.edu">info@ourcollege.edu</a>.</p>
      </footer>
    </div>
  );
};

export default HomePage;
