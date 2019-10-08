import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css'

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            albums: albumData 
        };
    }

    render() {
    return (
        <section className='library'>
        {
            this.state.albums.map( (album, index) => 
            <Link to={`/album/${album.slug}`} key={index}>
                <img src={album.albumCover} alt={album.title} width='30%' height='30%' />
                <div className='library-albuminfo'>{album.title}</div>
                <div className='library-albuminfo'>{album.artist}</div>
                <div className='library-albuminfo'>{album.songs.length} songs</div>
            </Link>
            )
        }
        </section>
    );
}
}


export default Library;

