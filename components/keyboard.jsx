import React from 'react';
import "../stylesheets/keyboard.css";

import Sound from './sound';
import Keys from './keys';
import Canvas from './canvas';

import { getFreq, getColor } from './keyboard-util'


class Keyboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      vis: 2,
      wave: 'square'
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
        this.playSound(keys[i].getAttribute('data-key'));
      });
    }

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.playSound(e.key)
    });
  }

  playSound(key) {
    const freq = getFreq(key);
    if (freq) {
      let note = new Sound(this.ctx, this.state.wave);
      let now = this.ctx.currentTime;
      note.play(freq, now);
      note.stop(now);
    }
    this.handleAnimation(key)
  }


  handleAnimation(key) {
    switch(this.state.vis) {
      case 1:
        this.child.drawCircle(getColor(key));
        break;
      case 2:
        this.child.drawRainbow();
        break;
      default:
        this.child.drawRainbow();
    }
  }

  render() {

    return (
      <div className='audio-visual-div'>
        <Canvas onRef={ref => (this.child = ref)}/>
        <div className='keyboard'>
          <div className='keyboard-nav'>
            <div>Volume</div>
            <div>Synth Wave</div>
            <div>Filter</div>
            <div>Visualization</div>
            <div>About</div>
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