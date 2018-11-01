import React from 'react';
import "../stylesheets/keyboard.css";

import Sound from './sound';
import Keys from './keys';
import Canvas from './canvas';

import { getFreq, getColor } from './util'


class Keyboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      vis: 1
    }

    this.child = React.createRef();
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.playSound = this.playSound.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this)
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
      note.stop(now);
    }
  }

  playKeySound(key) {
    console.log(key);
    const freq = getFreq(key);
    this.playSound(freq);
    this.handleAnimation(key);1
  }

  handleAnimation(key) {
    // this.child.drawRainbow(getColor(key));
    this.child.drawChangingRainbow();
  }

  render() {

    return (
      <div className='audio-visual-div'>
        <Canvas onRef={ref => (this.child = ref)}/>
        <div className='keyboard'>
          <div className='keyboard-nav'>
            <h1>Settings</h1>
          </div>
          <div className='keyboard-inner'>
            <Keys />
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;