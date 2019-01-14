import React from 'react';
import LandingCarousel from './LandingCarousel';
import './Landing.css';

const Landing = () => (
    <section className="landing">
        <header>
            <h1 className="hero-title">Turn the music up!</h1>
        </header>

        <main className='selling-points'>
            <LandingCarousel />
        </main>

        <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer__middle-section">

                <div className="mdl-mega-footer__drop-down-section">
                <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
                <h1 className="mdl-mega-footer__heading">Features</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Updates</a></li>
                </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
                <h1 className="mdl-mega-footer__heading">Details</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a href="#">Specs</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
                <h1 className="mdl-mega-footer__heading">Technology</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Patterns</a></li>
                    <li><a href="#">Usage</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contracts</a></li>
                </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
                <h1 className="mdl-mega-footer__heading">FAQ</h1>
                <ul className="mdl-mega-footer__link-list">
                    <li><a href="#">Questions</a></li>
                    <li><a href="#">Answers</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                </div>

            </div>

            <div className="mdl-mega-footer__bottom-section">
                <div className="mdl-logo">Title</div>
                <ul className="mdl-mega-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
                </ul>
            </div>

        </footer>

    </section>
);

export default Landing;