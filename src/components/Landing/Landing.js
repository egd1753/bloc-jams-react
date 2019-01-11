import React from 'react';
import LandingCarousel from './LandingCarousel'

const Landing = () => (
    <section className="landing">
        <h1 className="hero-title">Turn the music up!</h1>

        <main className='selling-points'>
            <LandingCarousel />
        </main>

    </section>
);

export default Landing;