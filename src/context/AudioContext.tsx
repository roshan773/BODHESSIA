import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface AudioContextType {
  isPlayingDrone: boolean;
  toggleDrone: () => void;
  playSingingBowl: (pitchModifier?: number) => void;
  volume: number;
  setVolume: (v: number) => void;
}

const MeditationAudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlayingDrone, setIsPlayingDrone] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const droneNodesRef = useRef<AudioNode[]>([]);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (droneGainRef.current && audioCtxRef.current) {
      droneGainRef.current.gain.setTargetAtTime(v * 0.15, audioCtxRef.current.currentTime, 0.1);
    }
  };

  // Tibetan Singing Bowl Synthesizer (Realistic Overtones + Exponential Decay)
  const playSingingBowl = (pitchModifier: number = 1.0) => {
    try {
      const ctx = getAudioContext();
      const baseFreq = 216 * pitchModifier; // A4 harmonic tuning
      const now = ctx.currentTime;

      // Harmonic overtone ratios typical of bronze Tibetan bowls
      const harmonics = [
        { mult: 1.0, gain: 0.6, decay: 7.0 },
        { mult: 2.76, gain: 0.35, decay: 5.5 },
        { mult: 5.4, gain: 0.2, decay: 3.8 },
        { mult: 8.9, gain: 0.08, decay: 2.2 },
      ];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.7, now);
      masterGain.connect(ctx.destination);

      harmonics.forEach(({ mult, gain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * mult, now);

        // Subtle pitch wobble (vibrato of physical bronze)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(3.2, now);
        lfoGain.gain.setValueAtTime(baseFreq * mult * 0.003, now);
        lfo.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + decay);

        // Exponential decay envelope
        gainNode.gain.setValueAtTime(gain, now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {
      console.warn('Audio context playback prevented or not supported', e);
    }
  };

  // Warm Ambient Drone (Warm low-frequency harmonic drone with soft organic breathing)
  const startDrone = () => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const masterDroneGain = ctx.createGain();
    masterDroneGain.gain.setValueAtTime(0, now);
    masterDroneGain.gain.linearRampToValueAtTime(volume * 0.15, now + 3);
    masterDroneGain.connect(ctx.destination);
    droneGainRef.current = masterDroneGain;

    const freqs = [108, 162, 216, 324]; // Golden ratio harmonic series
    const nodes: AudioNode[] = [masterDroneGain];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Gentle beat frequencies
      osc.frequency.linearRampToValueAtTime(freq + (idx * 0.3), now + 10);

      oscGain.gain.setValueAtTime(0.2 / (idx + 1), now);

      // Lowpass filter for warm, dark temple ambiance
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterDroneGain);

      osc.start(now);
      nodes.push(osc, oscGain, filter);
    });

    droneNodesRef.current = nodes;
    setIsPlayingDrone(true);
  };

  const stopDrone = () => {
    if (droneGainRef.current && audioCtxRef.current) {
      const now = audioCtxRef.current.currentTime;
      droneGainRef.current.gain.linearRampToValueAtTime(0.0001, now + 2);
      setTimeout(() => {
        droneNodesRef.current.forEach((n) => {
          if ('stop' in n && typeof (n as OscillatorNode).stop === 'function') {
            try {
              (n as OscillatorNode).stop();
            } catch {
              // ignore if already stopped
            }
          }
        });
        droneNodesRef.current = [];
        droneGainRef.current = null;
        setIsPlayingDrone(false);
      }, 2100);
    } else {
      setIsPlayingDrone(false);
    }
  };

  const toggleDrone = () => {
    if (isPlayingDrone) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <MeditationAudioContext.Provider
      value={{
        isPlayingDrone,
        toggleDrone,
        playSingingBowl,
        volume,
        setVolume
      }}
    >
      {children}
    </MeditationAudioContext.Provider>
  );
};

export const useMeditationAudio = () => {
  const context = useContext(MeditationAudioContext);
  if (!context) {
    throw new Error('useMeditationAudio must be used within an AudioProvider');
  }
  return context;
};
