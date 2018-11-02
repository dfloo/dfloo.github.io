import React from 'react';

class Canvas extends React.Component {
  componentDidMount() {
    this.props.onRef(this);
    this.initializeCanvas();
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  initializeCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth * 0.7;
    ctx.canvas.height = window.innerHeight * 0.4;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = '40px Arial';
    ctx.fillText(
      'Welcome to Musical Typewriter', 
      (ctx.canvas.width / 2) - 300, 250);
  }

  drawCircle(color) {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth * 0.7;
    ctx.canvas.height = window.innerHeight * 0.4;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const mid = [
      Math.floor(Math.random() * ctx.canvas.width), 
      Math.floor(Math.random() * ctx.canvas.height)
    ];
    
    let radius = 0;

    function draw() {
      ctx.fillStyle = 'hsl(' + color++ + ', 100%,55%)'
      ctx.beginPath();
      ctx.arc(mid[0], mid[1], radius, 0, 2 * Math.PI, false)
      ctx.fill();
      radius += 2;
      if (radius <= ctx.canvas.width * 0.1) {
        requestAnimationFrame(draw);
      } else {  
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    }

    draw();
  }

  drawRainbow() {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth * 0.7;
    ctx.canvas.height = window.innerHeight * 0.4;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const mid = [
      ctx.canvas.width / 2, 
      ctx.canvas.height
    ];
    
    let radius = 0;
    let color = 0

    function draw() {
      ctx.fillStyle = 'hsl(' + color++ + ', 100%,55%)'
      ctx.beginPath();
      ctx.arc(mid[0], mid[1], radius, 0, 2 * Math.PI, false)
      ctx.fill();
      radius += 2;
      if (radius <= ctx.canvas.width * 0.68) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    }

    draw();
  }

  render() {

    return (
      <div className='canvas'>
        <canvas ref='canvas' width='0' height='0' />
      </div>
    );
  }
}

export default Canvas;
