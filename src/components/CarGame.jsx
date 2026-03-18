import React, { useEffect, useRef, useState } from 'react';

const CarGame = () => {
    const canvasRef = useRef(null);
    const moveState = useRef(0);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        // Game State
        const car = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 100,
            width: 50,
            height: 80,
            color: '#4f46e5', // Indigo-600
        };

        let obstacles = [];
        let frames = 0;
        let speed = 5;

        const update = () => {
            frames++;
            if (frames % 60 === 0) {
                const x = Math.random() * (canvas.width - 50);
                obstacles.push({ x, y: -100, width: 50, height: 80, color: '#ef4444' });
                // Increase speed slightly
                speed += 0.1;
            }

            // Move car continuously
            if (moveState.current === -1 && car.x > 0) car.x -= 7;
            if (moveState.current === 1 && car.x < canvas.width - car.width) car.x += 7;

            // Move obstacles
            obstacles.forEach(obs => {
                obs.y += speed;
            });

            // Filter out obstacles off-screen
            obstacles = obstacles.filter(obs => obs.y < canvas.height);

            // Check collision
            obstacles.forEach(obs => {
                if (
                    car.x < obs.x + obs.width &&
                    car.x + car.width > obs.x &&
                    car.y < obs.y + obs.height &&
                    car.y + car.height > obs.y
                ) {
                    setGameOver(true);
                }
            });

            // Score
            setScore(prev => prev + 1);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Road
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Road lines
            ctx.strokeStyle = '#cbd5e1';
            ctx.setLineDash([20, 20]);
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();

            // Draw Car
            ctx.fillStyle = car.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = car.color;
            ctx.beginPath();
            ctx.roundRect(car.x, car.y, car.width, car.height, 8);
            ctx.fill();
            
            // Car headlights
            ctx.fillStyle = '#fbbf24';
            ctx.fillRect(car.x + 5, car.y, 10, 5);
            ctx.fillRect(car.x + 35, car.y, 10, 5);

            // Draw Obstacles
            ctx.shadowBlur = 0;
            obstacles.forEach(obs => {
                ctx.fillStyle = obs.color;
                ctx.beginPath();
                ctx.roundRect(obs.x, obs.y, obs.width, obs.height, 8);
                ctx.fill();
            });
        };

        const gameLoop = () => {
            update();
            draw();
            animationId = requestAnimationFrame(gameLoop);
        };

        gameLoop();

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') moveState.current = -1;
            if (e.key === 'ArrowRight') moveState.current = 1;
        };

        const handleKeyUp = (e) => {
            if (e.key === 'ArrowLeft' && moveState.current === -1) moveState.current = 0;
            if (e.key === 'ArrowRight' && moveState.current === 1) moveState.current = 0;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [gameStarted, gameOver]);

    const resetGame = () => {
        setGameOver(false);
        setScore(0);
        setGameStarted(true);
    };

    return (
        <div className="relative w-full h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
            {!gameStarted && !gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm z-20">
                    <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Speed Driver</h3>
                    <button 
                        onClick={() => setGameStarted(true)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl shadow-indigo-900/40"
                    >
                        START ENGINE
                    </button>
                    <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest">Use Arrow Keys to Move</p>
                </div>
            )}

            {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/90 backdrop-blur-md z-30">
                    <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">CRASHED!</h3>
                    <p className="text-red-300 font-bold mb-8 uppercase tracking-widest">Final Score: {score}</p>
                    <button 
                        onClick={resetGame}
                        className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl"
                    >
                        RETRY SESSION
                    </button>
                </div>
            )}

            <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <p className="text-[10px] text-indigo-300 font-black uppercase tracking-widest mb-0.5">Distance</p>
                <p className="text-xl font-black text-white font-mono">{score}m</p>
            </div>

            <canvas 
                ref={canvasRef} 
                width={400} 
                height={400} 
                className="w-full h-full cursor-none"
            />

            {/* Mobile Controls */}
            {gameStarted && !gameOver && (
                <div className="absolute bottom-6 left-0 w-full px-8 flex justify-between z-20 md:hidden pointer-events-none">
                    <button 
                        onPointerDown={(e) => { e.preventDefault(); moveState.current = -1; }}
                        onPointerUp={(e) => { e.preventDefault(); moveState.current = 0; }}
                        onPointerCancel={(e) => { e.preventDefault(); moveState.current = 0; }}
                        onContextMenu={(e) => e.preventDefault()}
                        className="pointer-events-auto touch-none bg-white/20 backdrop-blur-md border border-white/30 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl active:bg-white/40 select-none shadow-xl"
                    >
                        ←
                    </button>
                    <button 
                        onPointerDown={(e) => { e.preventDefault(); moveState.current = 1; }}
                        onPointerUp={(e) => { e.preventDefault(); moveState.current = 0; }}
                        onPointerCancel={(e) => { e.preventDefault(); moveState.current = 0; }}
                        onContextMenu={(e) => e.preventDefault()}
                        className="pointer-events-auto touch-none bg-white/20 backdrop-blur-md border border-white/30 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl active:bg-white/40 select-none shadow-xl"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarGame;
