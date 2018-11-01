import React from 'react';

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}

const canvasStyle = { border: '1px solid pink'}

class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth * 0.7;
    ctx.canvas.height = window.innerHeight * 0.4;
    ctx.clearRect(0, 0, 500, 500);
    // draw children “components”
    rect({ ctx, x: 10, y: 10, width: 50, height: 50 });
    rect({ ctx, x: 110, y: 110, width: 50, height: 50 });
  }

  render() {

    return (
      <div className='canvas'>
        <canvas ref='canvas' width='0' height='0' style={canvasStyle}/>
      </div>
    );
  }
}

export default Canvas;
