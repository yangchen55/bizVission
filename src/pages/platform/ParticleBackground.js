// ParticleBackground.js
import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './background.css';

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div id="particle-background">

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        color: {
                            value: '#2caaf3',
                            opacity: 0.5,
                        },
                        links: {
                            color: '#2caaf3',
                            distance: 150,
                            enable: true,
                            opacity: 0.8,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: 'triangle',
                        },
                    },
                    detectRetina: true,
                }}

            >
            </Particles>
        </div>

    );
};

export default ParticleBackground;
