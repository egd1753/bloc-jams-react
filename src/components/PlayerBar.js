import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
    render() {
        return(
            <section className='player-bar'>
            
                <section id="buttons">
                
                    <button
                        className='mdl-button mdl-js-button mdl-button--icon'  
                        id="previous" 
                        onClick={this.props.handlePrevClick}
                    >
                        <i class="material-icons">skip_previous</i>
                    </button>

                    <button 
                        className='mdl-button mdl-js-button mdl-button--icon'
                        id="play-pause" 
                        onClick={this.props.handleSongClick} 
                    >
                        <span>
                            {this.props.isPlaying ? <i className="material-icons">pause</i>: <i className="material-icons">play_circle_outline</i>}
                        </span>
                    </button>

                    <button 
                        className='mdl-button mdl-js-button mdl-button--icon'
                        id="next" 
                        onClick={this.props.handleNextClick}
                    >
                        <i class="material-icons">skip_next</i>
                    </button>
                </section>

                <section id="time-control">
                    <div className='horizontal' id="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                    <div className='horizontal' id='seekbar'>
                        <input 
                            type="range" 
                            className="mdl-slider mdl-js-slider"
                            id='horizontal'  
                            min="0"
                            max="100" 
                            value={(this.props.currentTime / this.props.duration) || 0} 
                            step="0.01" 
                            onChange={this.props.handleTimeChange}
                        />
                    </div>   
                    <div className='horizontal' id="total-time">{this.props.formatTime(this.props.duration)}</div> 
                </section>



                <section id="volume-control">
    
                    <i className="material-icons" id='volume-down'>volume_down</i>

                    <input 
                        type="range" 
                        className="mdl-slider mdl-js-slider"
                        id="volume-slider" 
                        min="0" 
                        max="1" 
                        value={this.props.volume} 
                        step=".01"
                        onChange={this.props.handleVolumeChange}
                    />

                    <i className="material-icons" id='volume-up'>volume_up</i>
                </section>

            </section>
        );    
    }
}



export default PlayerBar;