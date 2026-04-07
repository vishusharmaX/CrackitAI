import React from 'react';

const Logo = ({ size = "large" }) => {
    const isLarge = size === "large";
    const iconSize = isLarge ? 32 : 24;
    const fontSize = isLarge ? "1.75rem" : "1.25rem";
    
    return (
        <div className='brand-logo' style={{ fontSize: fontSize, marginBottom: isLarge ? "2rem" : "0" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                    <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff2d78" />
                        <stop offset="100%" stopColor="#ff4d8d" />
                    </linearGradient>
                </defs>
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span>CrackIt <span className="brand-text-highlight">AI</span></span>
        </div>
    );
};

export default Logo;
