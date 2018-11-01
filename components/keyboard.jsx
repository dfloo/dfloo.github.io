import React from 'react';
import "../stylesheets/keyboard.css";

import Sound from './sound';
import Keys from './keys';

import { getFreq } from './util'


class Keyboard extends React.Component {

  constructor(props) {
    super(props);

    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    const keys = document.getElementsByClassName('key')
    for (let i = 0; i < keys.length; i++) {
      keys[i].addEventListener('click', () => {
        this.playSound(keys[i].getAttribute('data-freq'));
      });
    }

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.playKeySound(e.key)
    });
  }

  playSound(freq) {
    if (freq) {
      let note = new Sound(this.ctx);
      let now = this.ctx.currentTime;
      note.play(freq, now);
      note.stop(now + 2);
    }
  }

  playKeySound(key) {
    console.log(key);
    const freq = getFreq(key);
    this.playSound(freq);
  }

  render() {

    return (
      <div className='keyboard'>
        <div className='keyboard-nav'>
          <h1>Settings</h1>
        </div>
        <div className='keyboard-inner'>
          <Keys />
        </div>
      </div>
    );
  }
}

export default Keyboard;