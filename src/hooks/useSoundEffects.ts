'use client';

import { useCallback } from 'react';

export function useSoundEffects() {
    const playHover = useCallback(() => {
        const audio = new AudioContext();
        const osc = audio.createOscillator();
        const gain = audio.createGain();

        osc.connect(gain);
        gain.connect(audio.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audio.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audio.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audio.currentTime + 0.1);

        osc.start();
        osc.stop(audio.currentTime + 0.1);
    }, []);

    const playClick = useCallback(() => {
        const audio = new AudioContext();
        const osc = audio.createOscillator();
        const gain = audio.createGain();

        osc.connect(gain);
        gain.connect(audio.destination);

        osc.type = 'square';
        osc.frequency.setValueAtTime(220, audio.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, audio.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audio.currentTime + 0.1);

        osc.start();
        osc.stop(audio.currentTime + 0.1);
    }, []);

    return { playHover, playClick };
}
