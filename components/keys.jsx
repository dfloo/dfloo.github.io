import React from 'react';
import '../stylesheets/keys.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

class Keys extends React.Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <div className="keys">
        <div className="row1">
          <img data-freq='138.59' className='key' src={images["1.png"]} />
          <img data-freq='155.56' className='key'src={images["2.png"]} />
          <img data-freq='185' className='key extra-space' src={images["4.png"]} />
          <img data-freq='207.65' className='key'src={images["5.png"]} />
          <img data-freq='233.08' className='key'src={images["6.png"]} />
          <img data-freq='277.18' className='key extra-space' src={images["8.png"]} />
          <img data-freq='311.13' className='key'src={images["9.png"]} />
        </div>
        <div className="row2">
          <img data-freq='130.81' className='key' src={images["tab.png"]} />
          <img data-freq='146.83' className='key' src={images["q.png"]} />
          <img data-freq='164.81' className='key' src={images["w.png"]} />
          <img data-freq='174.61' className='key' src={images["e.png"]} />
          <img data-freq='196' className='key' src={images["r.png"]} />
          <img data-freq='220' className='key' src={images["t.png"]} />
          <img data-freq='246.94' className='key' src={images["y.png"]} />
          <img data-freq='261.63' className='key' src={images["u.png"]} />
          <img data-freq='293.66' className='key' src={images["i.png"]} />
          <img data-freq='329.63' className='key' src={images["o.png"]} />
          <img data-freq='349.23' className='key' src={images["p.png"]} />
        </div>
        <div className="row3">
          <img data-freq='369.99' className='key' src={images["a.png"]} />
          <img data-freq='415.3' className='key' src={images["s.png"]} />
          <img data-freq='466.16' className='key' src={images["d.png"]} />
          <img data-freq='554.37' className='key extra-space' src={images["g.png"]} />
          <img data-freq='622.25' className='key' src={images["h.png"]} />
          <img data-freq='739.99' className='key extra-space' src={images["k.png"]} />
          <img data-freq='830.61' className='key' src={images["l.png"]} />
          <img data-freq='932.33' className='key' src={images["semi.png"]} />
        </div>
        <div className="row4">
          <img data-freq='392' className='key' src={images["z.png"]} />
          <img data-freq='440' className='key' src={images["x.png"]} />
          <img data-freq='493.88' className='key' src={images["c.png"]} />
          <img data-freq='523.25' className='key' src={images["v.png"]} />
          <img data-freq='587.33' className='key' src={images["b.png"]} />
          <img data-freq='659.25' className='key' src={images["n.png"]} />
          <img data-freq='698.46' className='key' src={images["m.png"]} />
          <img data-freq='783.99' className='key' src={images["comma.png"]} />
          <img data-freq='880' className='key' src={images["period.png"]} />
          <img data-freq='987.77' className='key' src={images["slash.png"]} />
          <img data-freq='1046.5' className='key' src={images["shift.png"]} />
        </div>
      </div>
    );
  }
}

export default Keys;