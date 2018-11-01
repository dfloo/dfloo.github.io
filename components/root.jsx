import React from "react";
import Canvas from './canvas';
import Keyboard from './keyboard';

import "../stylesheets/root.css";

const Root = () => (
  <div className='main-div'>
    <h1>Musical Typewriter</h1>
    <Canvas />
    <Keyboard />
  </div>
);

export default Root;
