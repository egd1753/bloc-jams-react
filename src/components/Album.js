import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import './Album.css';

class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
          });
      
          this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false,
            currentTime: 0,
            duration: album.songs[0].duration,
            currentHoveredSong: null, 
            volume: .7
          };

          this.audioElement = document.createElement('audio');
          this.audioElement.src = album.songs[0].audioSrc;
          this.handlePlayPauseButtons = this.handlePlayPauseButtons.bind(this);
    }

          play() {
            this.audioElement.play();
            this.setState({ isPlaying: true });
          }

          pause() {
              this.audioElement.pause();
              this.setState({ isPlaying: false });
          }

          setSong(song) {
            this.audioElement.src = song.audioSrc;
            this.setState({ currentSong: song });
          }

          handleSongClick(song) {
            const isSameSong = this.state.currentSong === song;
              if (this.state.isPlaying && isSameSong) {
                  this.pause();
              } else {
                if (!isSameSong) {
                    this.setSong(song);
                }  
                this.play();
              }    
          }

          handleSetHoveredSong(song) {
              this.setState({ currentHoveredSong: song });
          }

          handleUnsetHoveredSong() {
            this.setState({ currentHoveredSong: null });
          }

          handlePlayPauseButtons(song, songIndex) {
            const isSameSong = this.state.currentSong === song;
            const isHoveredSong = this.state.currentHoveredSong === song;
            if (isSameSong && this.state.isPlaying) {
                    return <ion-icon name="pause"></ion-icon>;
            } else if (isHoveredSong) {
                return <ion-icon name="play"></ion-icon>;
            } else {
                return songIndex + 1 + ".";
            }
        }

        handlePrevClick() {
            const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
            const newIndex = Math.max(0, currentIndex - 1);
            const newSong = this.state.album.songs[newIndex];
            this.setSong(newSong);
            this.play();
        }

        handleNextClick() {
            const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
            const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
            const newSong = this.state.album.songs[newIndex];
            this.setSong(newSong);
            this.play();
        }

        componentDidMount() {
            this.eventListeners = {
                timeupdate: e => {
                    this.setState({ currentTime: this.audioElement.currentTime });
                },
                durationchange: e => {
                    this.setState({ duration: this.audioElement.duration });
                },
                volumechange: e => {
                    this.setState({ volume: this.audioElement.volume });
                }
            };
            this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
            this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
            this.audioElement.addEventListener('volumechange',this.eventListeners.volumechange);
        }
     
        componentWillUnmount() {
            this.audioElement.src = null;
            this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
            this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
            this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
        }

        handleTimeChange(e) {
            const newTime = this.audioElement.duration * e.target.value;
            this.audioElement.currentTime = newTime;
            this.setState({ currentTime: newTime });
          }

          handleVolumeChange(e) {
            this.audioElement.volume = e.target.value;
            this.setState({ volume: e.target.value });
          }

          formatTime(timeSec) {
            const minutes = Math.floor(timeSec / 60);
            const seconds = (timeSec % 60 / 100).toFixed(2);
            const formattedTime = minutes + ":" + seconds.substr(2, 2);
            return ( (timeSec === NaN ) ? "-:--" : formattedTime);
          }

    render() {
        return (
            <section className="album">

                <section id="album-info">
                
                    <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} width='30%' height='30%' />

                    <div className="album-details">
                        <h1 id="album-title">{this.state.album.title}</h1>
                        <h6 className="artist">By <span id='artist-name'>{this.state.album.artist}</span></h6>
                        <h6 id="release-info">{this.state.album.releaseInfo}</h6>
                    </div>

                </section>

                <table id="song-list">
                    <colgroup>
                        <col id="song-number-column" />
                        <col id="song-title-column" />
                        <col id="song-duration-column" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th id='hash-number'>#</th>
                            <th id='title-header'>Title</th>
                            <th id='timer-icon'><i className="material-icons">timer</i></th>
                        </tr>
                    </thead>  
                    <tbody>  
                        {
                            this.state.album.songs.map( (song, index) => 
                                <tr 
                                    key={index} 
                                    className="song" 
                                    onClick={() => this.handleSongClick(song)} 
                                    onMouseEnter={() => this.handleSetHoveredSong(song)} 
                                    onMouseLeave={() => this.handleUnsetHoveredSong(song)}
                                    >
                                        <td>{this.handlePlayPauseButtons(song, index)}</td>              
                                        <td className='song-title'>{ song.title }</td>      
                                        <td className='song-duration'>{ this.formatTime(song.duration) }</td>  
                                </tr>
                            ) 
                        } 
                    </tbody>
                </table>

                <PlayerBar 
                    isPlaying={this.state.isPlaying} 
                    currentSong={this.state.currentSong} 
                    currentTime={this.audioElement.currentTime}
                    duration={this.audioElement.duration}
                    volume={this.audioElement.volume} 
                    handleVolumeChange={(e) => this.handleVolumeChange(e)}
                    handleSongClick={() => this.handleSongClick(this.state.currentSong)}
                    handlePrevClick={() => this.handlePrevClick()}
                    handleNextClick={() => this.handleNextClick()}
                    handleTimeChange={(e) => this.handleTimeChange(e)}
                    formatTime={(timeSec) => this.formatTime(timeSec)}
                />
                
            </section>
        );
    }
}

export default Album;