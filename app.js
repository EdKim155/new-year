/**
 * NEW YEAR WELCOME SCREEN - INTERACTIVE ANIMATIONS
 * Premium Mobile Application Experience
 */

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
    snowflakes: {
        count: 25, // Number of snowflakes
        minDuration: 10, // Minimum fall duration in seconds
        maxDuration: 20, // Maximum fall duration in seconds
        minSize: 8,
        maxSize: 16,
        symbols: ['❄', '❅', '❆', '✻', '✼']
    },
    animations: {
        buttonRipple: true,
        hapticFeedback: true
    }
};

// ============================================
// SNOWFALL EFFECT
// ============================================

class SnowfallEffect {
    constructor(container, config) {
        this.container = container;
        this.config = config;
        this.snowflakes = [];
        this.init();
    }

    init() {
        this.createSnowflakes();
        this.startAnimation();
    }

    createSnowflakes() {
        const containerWidth = window.innerWidth;

        for (let i = 0; i < this.config.count; i++) {
            const snowflake = this.createSnowflake(containerWidth);
            this.snowflakes.push(snowflake);
            this.container.appendChild(snowflake);
        }
    }

    createSnowflake(containerWidth) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // Random snowflake symbol
        const symbol = this.config.symbols[
            Math.floor(Math.random() * this.config.symbols.length)
        ];
        snowflake.textContent = symbol;

        // Random position
        const leftPosition = Math.random() * containerWidth;
        snowflake.style.left = `${leftPosition}px`;

        // Random size
        const size = this.config.minSize +
            Math.random() * (this.config.maxSize - this.config.minSize);
        snowflake.style.fontSize = `${size}px`;

        // Random animation duration
        const duration = this.config.minDuration +
            Math.random() * (this.config.maxDuration - this.config.minDuration);
        snowflake.style.animationDuration = `${duration}s`;

        // Random delay for staggered effect
        const delay = Math.random() * -20; // Negative delay for immediate variety
        snowflake.style.animationDelay = `${delay}s`;

        // Random opacity
        const opacity = 0.5 + Math.random() * 0.5;
        snowflake.style.opacity = opacity;

        return snowflake;
    }

    startAnimation() {
        // Snowflakes are animated via CSS
        // This method can be extended for additional JS-based effects
    }

    destroy() {
        this.snowflakes.forEach(snowflake => {
            this.container.removeChild(snowflake);
        });
        this.snowflakes = [];
    }
}

// ============================================
// BUTTON INTERACTIONS
// ============================================

class ButtonEffects {
    constructor(button) {
        this.button = button;
        this.init();
    }

    init() {
        this.addRippleEffect();
        this.addHapticFeedback();
        this.addClickHandler();
    }

    addRippleEffect() {
        this.button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = this.button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');

            // Add ripple styles dynamically
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-effect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.button.appendChild(ripple);

            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });

        // Add ripple animation to stylesheet dynamically
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple-effect {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    addHapticFeedback() {
        this.button.addEventListener('click', () => {
            // Haptic feedback for mobile devices
            if ('vibrate' in navigator) {
                navigator.vibrate(10);
            }
        });
    }

    addClickHandler() {
        this.button.addEventListener('click', () => {
            this.handleButtonClick();
        });
    }

    handleButtonClick() {
        console.log('🎄 Welcome screen: Start button clicked');

        // Add scale animation
        this.button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.button.style.transform = '';
        }, 150);

        // Trigger celebration effect
        this.triggerCelebration();

        // Navigate or trigger app functionality
        // TODO: Add your navigation logic here
        // For demo purposes, we'll show a console message
        setTimeout(() => {
            console.log('✨ Starting your magical journey...');
            // Example: window.location.href = '/main-app';
        }, 600);
    }

    triggerCelebration() {
        // Create sparkle burst effect
        const sparkleCount = 12;
        const rect = this.button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < sparkleCount; i++) {
            this.createSparkle(centerX, centerY, i, sparkleCount);
        }
    }

    createSparkle(centerX, centerY, index, total) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${centerX}px`;
        sparkle.style.top = `${centerY}px`;
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';

        const angle = (index / total) * Math.PI * 2;
        const distance = 80;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        sparkle.style.animation = `sparkle-burst 0.8s ease-out forwards`;

        // Add sparkle burst animation
        if (!document.querySelector('#sparkle-burst-styles')) {
            const style = document.createElement('style');
            style.id = 'sparkle-burst-styles';
            style.textContent = `
                @keyframes sparkle-burst {
                    0% {
                        transform: translate(-50%, -50%) scale(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);

        document.body.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

// ============================================
// SCROLL PARALLAX EFFECT (SUBTLE)
// ============================================

class ParallaxEffect {
    constructor() {
        this.bokehElements = document.querySelectorAll('.bokeh');
        this.init();
    }

    init() {
        // Subtle mouse move parallax on desktop
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                this.handleMouseMove(e);
            });
        }

        // Gyroscope parallax on mobile (if available)
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', (e) => {
                this.handleDeviceOrientation(e);
            });
        }
    }

    handleMouseMove(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

        this.bokehElements.forEach((bokeh, index) => {
            const speed = (index + 1) * 0.5;
            bokeh.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
        });
    }

    handleDeviceOrientation(e) {
        const gamma = e.gamma; // Left to right tilt in degrees
        const beta = e.beta;   // Front to back tilt in degrees

        if (gamma !== null && beta !== null) {
            const xPos = (gamma / 90) * 10;
            const yPos = (beta / 90) * 10;

            this.bokehElements.forEach((bokeh, index) => {
                const speed = (index + 1) * 0.3;
                bokeh.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
            });
        }
    }
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

class PerformanceMonitor {
    constructor() {
        this.checkPerformance();
    }

    checkPerformance() {
        // Reduce animations on lower-end devices
        const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const isLowEndDevice = isMobile && window.innerWidth < 375;

        if (isLowEndDevice) {
            CONFIG.snowflakes.count = 15; // Reduce snowflakes
            document.body.classList.add('low-performance');
        }
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎄 New Year Welcome Screen Initialized');

    // Initialize performance monitoring
    new PerformanceMonitor();

    // Initialize snowfall effect
    const snowfallContainer = document.getElementById('snowfall');
    if (snowfallContainer) {
        new SnowfallEffect(snowfallContainer, CONFIG.snowflakes);
    }

    // Initialize button effects
    const startButton = document.getElementById('startButton');
    if (startButton) {
        new ButtonEffects(startButton);
    }

    // Initialize parallax effect
    new ParallaxEffect();

    // Prevent pull-to-refresh on mobile
    document.body.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// ============================================
// WINDOW RESIZE HANDLER
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('🎄 Window resized - reinitializing effects');
        // Reinitialize snowfall if needed
        const snowfallContainer = document.getElementById('snowfall');
        if (snowfallContainer) {
            snowfallContainer.innerHTML = '';
            new SnowfallEffect(snowfallContainer, CONFIG.snowflakes);
        }
    }, 250);
});

// ============================================
// EXPORT FOR MODERN MODULE SYSTEMS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SnowfallEffect,
        ButtonEffects,
        ParallaxEffect,
        CONFIG
    };
}
