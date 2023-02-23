import React from 'react';
import Nav from './Nav';
import './Home.css';

function Home() {
  /* eslint-disable max-len */

  return (
    <div>
      <Nav />

      <section className="home_section">

        <header className="home_header">
          Welcome to our page!
        </header>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia impedit rerum. Similique sapiente quibusdam esse voluptatibus fugiat. Animi eum quisquam quo, vitae neque voluptates iusto placeat accusantium deserunt nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat exercitationem ad modi similique corporis aperiam. Eligendi hic architecto perspiciatis dignissimos totam voluptates asperiores, repudiandae culpa ad sunt quas cupiditate magnam. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat exercitationem ad modi similique corporis aperiam. Eligendi hic architecto perspiciatis dignissimos totam voluptates asperiores, repudiandae culpa ad sunt quas cupiditate magnam.</p>
      </section>
    </div>

  );
  /* eslint-enable max-len */
}

export default Home;
