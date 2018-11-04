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
      vis: 'dots',
      wave: 'sine',
      vol: 'on'
    }

    this.child = React.createRef();
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.playSound = this.playSound.bind(this);
    this.playFreq = this.playFreq.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.playDemo = this.playDemo.bind(this);
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
      this.playFreq(freq);
    }
    this.handleAnimation(key)
  }

  playFreq(freq) {
    let note = new Sound(this.ctx, this.state.wave);
    let now = this.ctx.currentTime;
    if (this.state.vol === 'on') {
      note.play(freq, now);
      note.stop(now + 1);
    }
  }


  handleAnimation(key) {
    switch(this.state.vis) {
      case 'dots':
        this.child.drawCircle(getColor(key));
        break;
      case 'rainbow':
        this.child.drawRainbow();
        break;
      case 'fire':
        this.child.drawFire();
        break;
      default:
        this.child.drawRainbow();
    }
  }

  handleClick(key, val) {
    this.setState({[key]: val})
  }

  playDemo() {
    const temp = 350

    setTimeout(this.playFreq, 0, 493.9);
    setTimeout(this.handleAnimation, 0, "Tab");
    setTimeout(this.playFreq, temp, 493.9);
    setTimeout(this.handleAnimation, temp, "1");
    setTimeout(this.playFreq, 2 * temp, 523.3);
    setTimeout(this.handleAnimation, 2 * temp, "q");
    setTimeout(this.playFreq, 3 * temp, 587.33);
    setTimeout(this.handleAnimation, 3 * temp, "2");
    
    setTimeout(this.playFreq, 4 * temp, 587.33);
    setTimeout(this.handleAnimation, 4 * temp, "w");
    setTimeout(this.playFreq, 5 * temp, 523.3);
    setTimeout(this.handleAnimation, 5 * temp, "e");
    setTimeout(this.playFreq, 6 * temp, 493.9);
    setTimeout(this.handleAnimation, 6 * temp, "4");
    setTimeout(this.playFreq, 7 * temp, 440);
    setTimeout(this.handleAnimation, 7 * temp, "r");
    
    setTimeout(this.playFreq, 8 * temp, 392);
    setTimeout(this.handleAnimation, 8 * temp, '5');
    setTimeout(this.playFreq, 9 * temp, 392);
    setTimeout(this.handleAnimation, 9 * temp, "t");
    setTimeout(this.playFreq, 10 * temp, 440);
    setTimeout(this.handleAnimation, 10 * temp, "6");
    setTimeout(this.playFreq, 11 * temp, 493.9);
    setTimeout(this.handleAnimation, 11 * temp, "y");
    
    setTimeout(this.playFreq, 12 * temp, 493.9);
    setTimeout(this.handleAnimation, 12 * temp, "u");
    setTimeout(this.playFreq, 13.5 * temp, 440);
    setTimeout(this.handleAnimation, 13.5 * temp, "8");
    setTimeout(this.playFreq, 14 * temp, 440);
    setTimeout(this.handleAnimation, 14 * temp, "i");

    setTimeout(this.playFreq, 16 * temp, 493.9);
    setTimeout(this.handleAnimation, 16 * temp, "9");
    setTimeout(this.playFreq, 17 * temp, 493.9);
    setTimeout(this.handleAnimation, 17 * temp, "o");
    setTimeout(this.playFreq, 18 * temp, 523.3);
    setTimeout(this.handleAnimation, 18 * temp, "p");
    setTimeout(this.playFreq, 19 * temp, 587.33);
    setTimeout(this.handleAnimation, 19 * temp, "a");

    setTimeout(this.playFreq, 20 * temp, 587.33);
    setTimeout(this.handleAnimation, 20 * temp, "z");
    setTimeout(this.playFreq, 21 * temp, 523.3);
    setTimeout(this.handleAnimation, 21 * temp, "s");
    setTimeout(this.playFreq, 22 * temp, 493.9);
    setTimeout(this.handleAnimation, 22 * temp, "x");
    setTimeout(this.playFreq, 23 * temp, 440);
    setTimeout(this.handleAnimation, 23 * temp, "d");

    setTimeout(this.playFreq, 24 * temp, 392);
    setTimeout(this.handleAnimation, 24 * temp, "c");
    setTimeout(this.playFreq, 25 * temp, 392);
    setTimeout(this.handleAnimation, 25 * temp, "v");
    setTimeout(this.playFreq, 26 * temp, 440);
    setTimeout(this.handleAnimation, 26 * temp, "g");
    setTimeout(this.playFreq, 27 * temp, 493.9);
    setTimeout(this.handleAnimation, 27 * temp, "b");

    setTimeout(this.playFreq, 26 * temp, 440);
    setTimeout(this.handleAnimation, 26 * temp, "h");
    setTimeout(this.playFreq, 27.5 * temp, 392);
    setTimeout(this.handleAnimation, 27.5 * temp, "n");
    setTimeout(this.playFreq, 28 * temp, 392);
    setTimeout(this.handleAnimation, 28 * temp, "m");

    setTimeout(this.playFreq, 30 * temp, 440);
    setTimeout(this.handleAnimation, 30 * temp, "k");
    setTimeout(this.playFreq, 31 * temp, 440);
    setTimeout(this.handleAnimation, 31 * temp, ",");
    setTimeout(this.playFreq, 32 * temp, 493.9);
    setTimeout(this.handleAnimation, 32 * temp, "l");
    setTimeout(this.playFreq, 33 * temp, 392);
    setTimeout(this.handleAnimation, 33 * temp, ".");

    setTimeout(this.playFreq, 34 * temp, 440);
    setTimeout(this.handleAnimation, 34 * temp, ";");
    setTimeout(this.playFreq, 35 * temp, 493.9);
    setTimeout(this.handleAnimation, 35 * temp, "/");
    setTimeout(this.playFreq, 35.5 * temp, 523.3);
    setTimeout(this.handleAnimation, 35.5 * temp, "Shift");
    setTimeout(this.playFreq, 36 * temp, 493.9);
    setTimeout(this.handleAnimation, 36 * temp, "d");
    setTimeout(this.playFreq, 37 * temp, 392);
    setTimeout(this.handleAnimation, 37 * temp, "e");

    setTimeout(this.playFreq, 38 * temp, 440);
    setTimeout(this.handleAnimation, 38 * temp, "v");
    setTimeout(this.playFreq, 39 * temp, 493.9);
    setTimeout(this.handleAnimation, 39 * temp, "i");
    setTimeout(this.playFreq, 39.5 * temp, 523.3);
    setTimeout(this.handleAnimation, 39.5 * temp, "n");
    setTimeout(this.playFreq, 40 * temp, 493.9);
    setTimeout(this.handleAnimation, 40 * temp, "d");
    setTimeout(this.playFreq, 41 * temp, 440);
    setTimeout(this.handleAnimation, 41 * temp, "e");

    setTimeout(this.playFreq, 42 * temp, 392);
    setTimeout(this.handleAnimation, 42 * temp, "v");
    setTimeout(this.playFreq, 43 * temp, 440);
    setTimeout(this.handleAnimation, 43 * temp, "i");
    setTimeout(this.playFreq, 44 * temp, 587.33);  
    setTimeout(this.handleAnimation, 44 * temp, "n");

    setTimeout(this.playFreq, 46 * temp, 493.9);
    setTimeout(this.handleAnimation, 46 * temp, "d");
    setTimeout(this.playFreq, 47 * temp, 493.9);
    setTimeout(this.handleAnimation, 47 * temp, "e");
    setTimeout(this.playFreq, 48 * temp, 523.3);
    setTimeout(this.handleAnimation, 48 * temp, "v");
    setTimeout(this.playFreq, 49 * temp, 587.33);
    setTimeout(this.handleAnimation, 49 * temp, "i");
    
    setTimeout(this.playFreq, 50 * temp, 587.33);
    setTimeout(this.handleAnimation, 50 * temp, "n");
    setTimeout(this.playFreq, 51 * temp, 523.3);
    setTimeout(this.handleAnimation, 51 * temp, "d");
    setTimeout(this.playFreq, 52 * temp, 493.9);
    setTimeout(this.handleAnimation, 52 * temp, "e");
    setTimeout(this.playFreq, 53 * temp, 440);
    setTimeout(this.handleAnimation, 53 * temp, "v");

    setTimeout(this.playFreq, 54 * temp, 392);
    setTimeout(this.handleAnimation, 54 * temp, "i");
    setTimeout(this.playFreq, 55 * temp, 392);
    setTimeout(this.handleAnimation, 55 * temp, "n");
    setTimeout(this.playFreq, 56 * temp, 440);
    setTimeout(this.handleAnimation, 56 * temp, "d");
    setTimeout(this.playFreq, 57 * temp, 493.9);
    setTimeout(this.handleAnimation, 57 * temp, "e");

    setTimeout(this.playFreq, 58 * temp, 440);
    setTimeout(this.handleAnimation, 58 * temp, "v");
    setTimeout(this.playFreq, 59.5 * temp, 392);
    setTimeout(this.handleAnimation, 59.5 * temp, "i");
    setTimeout(this.playFreq, 60 * temp, 392);
    setTimeout(this.handleAnimation, 60 * temp, "n");

  }

  render() {

    return <div className="audio-visual-div">
        <Canvas onRef={ref => (this.child = ref)} />
        <div className="keyboard">
          <div className="keyboard-nav">

            <div className='vol-btn'>
              <div>Volume</div>
              <div className='dropdown vol'>
                <div className='vol1' 
                  onClick={() => this.handleClick('vol', 'on')}>On
                </div>
                <div className='vol2' 
                  onClick={() => this.handleClick('vol','off')}>Off
                </div>
              </div>
            </div>

            <div className='wave-btn'>
              <div>Synth Wave</div>
              <div className='dropdown wave'>
                <div className='wave1'
                  onClick={() => this.handleClick('wave','sine')}>Sine
                </div>
                <div className='wave2'
                  onClick={() => this.handleClick('wave','square')}>Square
                </div>
                <div className='wave3'
                  onClick={() => this.handleClick('wave','triangle')}>Triangle
                </div>
                <div className='wave4'
                  onClick={() => this.handleClick('wave','sawtooth')}>Sawtooth
                </div>
              </div>
            </div>

            <div className='vis-btn'>
              <div>Visualization</div>
              <div className='dropdown vis'>
                <div className='vis1' 
                  onClick={() => this.handleClick('vis','rainbow')}>Rainbow
                </div>
                <div className='vis2' 
                  onClick={() => this.handleClick('vis','dots')}>Dots
                </div>
                <div className='vis3' 
                  onClick={() => this.handleClick('vis','fire')}>Fire
                </div>
              </div>
            </div>

            <div className='demo-btn'>
              <div onClick={this.playDemo}>Demo</div>
            </div>

            <div className='about-btn'>
              <div>About</div>
              <div className='dropdown about'>
                <div className='about1'>
                  <a href='https://github.com/dfloo'>Github</a>
                </div>
                <div className='about1'>
                  <a href='https://linkedin.com/in/dfloo'>Linkedin</a>
                </div>
              </div>
            </div>

          </div>
          <div className="keyboard-inner">
            <Keys />
          </div>
        </div>
      </div>;
  }
}

export default Keyboard;