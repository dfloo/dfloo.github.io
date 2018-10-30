let context = new (window.AudioContext || window.webkitAudioContext)();

let oscillator = context.createOscillator();

oscillator.type = 'sine';
oscillator.frecuency.value = 440;
oscillator.connect(context.destination);
oscillator.start();

let gain = context.createGain();
oscillator.connect(gain);
gain.connect(context.destination);

let now = context.currentTime;
gain.gain.setValueAtTime(1, now);
gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
oscillator.start(now);
oscillator.stop(now + 0.5);

