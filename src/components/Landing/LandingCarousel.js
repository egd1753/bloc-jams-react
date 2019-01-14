import React, { Component } from 'react';
import './LandingCarousel.css';
import imgChooseMusic from './slideshow-images/artificial-photography-119282-unsplash.jpg';
import imgAddFree from './slideshow-images/sharosh-rajasekher-731673-unsplash.jpg';
import imgMobileEnabled from './slideshow-images/leio-mclaren-leiomclaren-307308-unsplash.jpg';

class LandingCarousel extends Component {
    
    
    render() {
        return (
            <section className='slideshow-container'>
                <div className='point fade'>
                    <h2 className='point-title'>Choose your music</h2>
                    <img src={ imgChooseMusic } alt='Choose Music' width='100%' height='100%'/>
                    <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
                </div>

                <div className='point fade'>
                    <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                    <img src={ imgAddFree } alt='Ad Free' width='100%' height='100%' />
                    <p className="point-description">No arbitrary limits. No distractions.</p>
                </div>

                <div className='point fade'>
                    <h2 className="point-title" id='mobile-title'>Mobile enabled</h2>
                    <img src={ imgMobileEnabled } alt='Mobile Enabled' width='100%' height='100%' />
                    <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                </div>
            
            </section>
        );
    }
}

export default LandingCarousel;