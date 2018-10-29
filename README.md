# Musical Typewriter - An Audio/Visual Experience

## Background and Overview
Musical Typewriter is a music app that allows users to play music with cool visualizations simply by typing on their keyboards. 

Users will be able to select from a number of different sound and visualization settings. 

## Functionality & MVP
In Musical Typewriter, users will be able to:
- [ ] make music by typing on their keyboards
- [ ] key icons will be sent flying accross the screen and behave according to the selected visualization preference. 
- [ ] select from a list of color schemes and physics behaviors 
- [ ] select from a list of instruments to play (i.e. piano, synth, guitar)


## Wireframes 
The App will consist of a single screen with a visualization canvas and a sidebar. 

## Architecture and Technologies 
This project will be implemented with the following technologies:
- Vanilla JavaScript for overall structure and logic,
- HTML5 Canvas for DOM manipulation and rendering, 
- Web Audio API for sound generation, processing and control. 
- Webpack to bundle and serve up the various scripts. 

In addition to the webpack entry file, there will be two main scripts involved in the project: 

`keys.js`: this script will handle the physics logic for the visualization of the flying keys. 

`audio.js`: this script will handle the audio logic.

## Implementation Timeline 

**Day 1**: 
- [ ] Complete WebAudioAPI Tutorial and load basic sound from static assets
- [ ] Build sound library. 

**Day 2**: 
- [ ] Able to play sounds by pressing keys. 
- [ ] Get webpack serving files and frame out index.html

**Day 3**: 
- [ ] Render flying keys on canvas each time key is pressed. 
- [ ] Implement default physics behavior (bouncing)

**Day 4**: 
- [ ] Add additional physics behaviors (exploding, shrinking, )
- [ ] Add color pallettes for flying keys (fire, water, earth, raindow)

**Day 5**: 
- [ ] Add controls to sidebar to select audio & visual settings
- [ ] Add styling to canvas & sidebar components

**Over the Weekend**: 
- [ ] Ensure smooth bug free experience
- [ ] Add links to github, linkedin, etc. 

## Bonus Features 

- [ ] Add additional controls for generating sounds with different wave forms, filters, etc.
- [ ] Add more visualization physics 
- [ ] Add challenge to play specific songs by promting the user to hit the correct key on time. 