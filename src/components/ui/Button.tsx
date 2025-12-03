'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    onClick,
    ...props
}: ButtonProps) {
    const { playHover, playClick } = useSoundEffects();

    const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-foreground text-background hover:bg-accent hover:text-white",
        secondary: "bg-surface text-foreground hover:bg-gray-200",
        outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base"
    };

    const width = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
            onClick={(e) => {
                playClick();
                onClick?.(e);
            }}
            onMouseEnter={playHover}
            {...props}
        >
            <span className="font-display tracking-wide uppercase">{children}</span>
        </button>
    );
}
