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
          <img data-key='1' className='key' src={images["1.png"]} />
          <img data-key='2' className='key'src={images["2.png"]} />
          <img data-key='4' className='key extra-space' src={images["4.png"]} />
          <img data-key='5' className='key'src={images["5.png"]} />
          <img data-key='6' className='key'src={images["6.png"]} />
          <img data-key='8' className='key extra-space' src={images["8.png"]} />
          <img data-key='9' className='key'src={images["9.png"]} />
        </div>
        <div className="row2">
          <img data-key='Tab' className='key' src={images["tab.png"]} />
          <img data-key='q' className='key' src={images["q.png"]} />
          <img data-key='w' className='key' src={images["w.png"]} />
          <img data-key='e' className='key' src={images["e.png"]} />
          <img data-key='r' className='key' src={images["r.png"]} />
          <img data-key='t' className='key' src={images["t.png"]} />
          <img data-key='y' className='key' src={images["y.png"]} />
          <img data-key='u' className='key' src={images["u.png"]} />
          <img data-key='i' className='key' src={images["i.png"]} />
          <img data-key='o' className='key' src={images["o.png"]} />
          <img data-key='p' className='key' src={images["p.png"]} />
        </div>
        <div className="row3">
          <img data-key='a' className='key' src={images["a.png"]} />
          <img data-key='s' className='key' src={images["s.png"]} />
          <img data-key='d' className='key' src={images["d.png"]} />
          <img data-key='g' className='key extra-space' src={images["g.png"]} />
          <img data-key='h' className='key' src={images["h.png"]} />
          <img data-key='k' className='key extra-space' src={images["k.png"]} />
          <img data-key='l' className='key' src={images["l.png"]} />
          <img data-key=';' className='key' src={images["semi.png"]} />
        </div>
        <div className="row4">
          <img data-key='z' className='key' src={images["z.png"]} />
          <img data-key='x' className='key' src={images["x.png"]} />
          <img data-key='c' className='key' src={images["c.png"]} />
          <img data-key='v' className='key' src={images["v.png"]} />
          <img data-key='b' className='key' src={images["b.png"]} />
          <img data-key='n' className='key' src={images["n.png"]} />
          <img data-key='m' className='key' src={images["m.png"]} />
          <img data-key=',' className='key' src={images["comma.png"]} />
          <img data-key='.' className='key' src={images["period.png"]} />
          <img data-key='/' className='key' src={images["slash.png"]} />
          <img data-key='Shift' className='key' src={images["shift.png"]} />
        </div>
      </div>
    );
  }
}

export default Keys;