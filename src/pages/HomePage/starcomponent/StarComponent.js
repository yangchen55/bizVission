import React, { useEffect, useRef } from 'react';

const StarComponent = () => {
    const canvasRef = useRef();
    const starCount = 50; // Number of stars in the constellation
    const movementSpeed = 0.5; // Base movement speed of the stars
    const minStarSize = 1; // Minimum size of a star
    const maxStarSize = 5; // Maximum size of a star

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const stars = [];

        // Create random stars
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
            const vx = Math.random() * movementSpeed * 2 - movementSpeed; // Random velocity in x direction
            const vy = Math.random() * movementSpeed * 2 - movementSpeed; // Random velocity in y direction
            stars.push({ x, y, size, vx, vy });
        }

        const render = () => {
            // Clear canvas
            context.clearRect(0, 0, width, height);

            // Move and draw stars
            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                // Wrap the star around the canvas
                if (star.x > width + star.size) {
                    star.x = -star.size;
                } else if (star.x < -star.size) {
                    star.x = width + star.size;
                }
                if (star.y > height + star.size) {
                    star.y = -star.size;
                } else if (star.y < -star.size) {
                    star.y = height + star.size;
                }
                // Draw star
                context.beginPath();
                context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
                context.fillStyle = 'grey';
                context.fill();
                context.closePath();
            });

            // Call the render function again on the next animation frame
            requestAnimationFrame(render);
        };

        // Start rendering
        render();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                zIndex: -1,
            }}
            width={400}
            height={400}
        />
    );
};

export default StarComponent;
