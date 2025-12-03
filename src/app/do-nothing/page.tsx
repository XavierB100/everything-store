'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function DoNothingPage() {
    const [isDoingNothing, setIsDoingNothing] = useState(false);
    const [timer, setTimer] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const storedHighScore = localStorage.getItem('doNothingHighScore');
        if (storedHighScore) {
            setHighScore(parseInt(storedHighScore, 10));
        }
    }, []);

    const startDoingNothing = () => {
        setIsDoingNothing(true);
        setTimer(0);
        intervalRef.current = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 100); // Update every 100ms
    };

    const stopDoingNothing = () => {
        setIsDoingNothing(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (timer > highScore) {
            setHighScore(timer);
            localStorage.setItem('doNothingHighScore', timer.toString());
        }
    };

    // Stop if mouse moves or key is pressed
    useEffect(() => {
        const handleActivity = () => {
            if (isDoingNothing) {
                stopDoingNothing();
            }
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('click', handleActivity);
        window.addEventListener('scroll', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('click', handleActivity);
            window.removeEventListener('scroll', handleActivity);
        };
    }, [isDoingNothing, timer, highScore]);

    const formatTime = (ms: number) => {
        const seconds = (ms / 10).toFixed(1);
        return `${seconds}s`;
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal width="100%">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">DO NOTHING</h1>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.1}>
                    <p className="text-xl text-gray-600 mb-12">
                        Press the button and do absolutely nothing. If you move, you lose.
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {!isDoingNothing ? (
                        <button
                            onMouseDown={(e) => {
                                e.stopPropagation(); // Prevent click listener from firing immediately
                                startDoingNothing();
                            }}
                            className="bg-foreground text-background px-12 py-6 rounded-full text-2xl font-bold hover:bg-accent transition-colors"
                        >
                            START DOING NOTHING
                        </button>
                    ) : (
                        <div className="text-9xl font-display font-bold text-accent animate-pulse">
                            {formatTime(timer)}
                        </div>
                    )}
                </div>

                <div className="mt-16">
                    <p className="text-sm text-gray-400">HIGH SCORE</p>
                    <p className="text-4xl font-display font-bold">{formatTime(highScore)}</p>
                </div>
            </div>
        </div>
    );
}
