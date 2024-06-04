import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home" style={{ height: '800px', background: '#ffcccc' }}>
          <h1>Welcome to the Community Library</h1>
          <p>Discover a world of knowledge and adventure at the Community Library! Our extensive collection includes thousands of books, magazines, and digital resources. Whether you're looking for the latest bestsellers, scholarly articles for research, or classic literature, we have something for everyone.</p>
          <p>Enjoy access to our comfortable reading areas, private study rooms, and computer labs. Our library is committed to supporting lifelong learning and providing a welcoming space for community engagement. Join us for regular events such as author talks, educational workshops, and book clubs.</p>
          <p>Sign up for a library card today to start exploring our collections and services!</p>
        </section>
        <section id="services" style={{ height: '800px', background: '#ccccff' }}>
          <h2>Library Services</h2>
          <ul>
            <li>Lending Services - Books, magazines, DVDs, and more available for checkout.</li>
            <li>Reference Services - Get assistance from librarians and access to specialized databases.</li>
            <li>Children’s Programs - Story hours, summer reading challenges, and educational games.</li>
            <li>Community Events - Author readings, lectures, and community discussion groups.</li>
            <li>Public Computers and Wi-Fi - Access the internet and digital services for free.</li>
            <li>Study and Meeting Rooms - Private spaces for study groups, meetings, and classes.</li>
          </ul>
        </section>
        <section id="about" style={{ height: '800px', background: '#ccffcc' }}>
          <h2>About Our Library</h2>
          <p>The Community Library was founded in 1903 with the mission to provide free access to information and education to all residents of our community. Our historic building and modern annex offer a welcoming space for study, relaxation, and community engagement.</p>
          <p>Our staff includes knowledgeable librarians, enthusiastic event coordinators, and dedicated volunteers who work together to maintain a rich and supportive learning environment. We strive to adapt and grow with the needs of our community, continually updating our collections and services.</p>
        </section>
        <section id="contact" style={{ height: '800px', background: '#ffffcc' }}>
          <h2>Contact Us</h2>
          <p>Community Library<br />
             123 Library Avenue<br />
             Townsville, TS 12345<br />
             Email: info@communitylibrary.com<br />
             Phone: (123) 456-7890</p>
          <p>Contact Us for any help!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
