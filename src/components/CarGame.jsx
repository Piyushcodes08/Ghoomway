import React, { useEffect, useRef, useState, useCallback } from "react";

const GAME_HEIGHT = 400;
const CAR_WIDTH = 50;
const CAR_HEIGHT = 80;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_HEIGHT = 80;

const CarGame = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const moveState = useRef(0);

  const gameStartedRef = useRef(false);
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const frameRef = useRef(0);
  const speedRef = useRef(5);
  const obstaclesRef = useRef([]);
  const scoreTickRef = useRef(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const carRef = useRef({
    x: 175,
    y: 300,
    width: CAR_WIDTH,
    height: CAR_HEIGHT,
    color: "#4f46e5",
  });

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const parentWidth = canvas.parentElement?.clientWidth || 400;
    const logicalWidth = Math.max(320, Math.min(parentWidth, 800));
    const logicalHeight = GAME_HEIGHT;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    canvas.style.width = `${logicalWidth}px`;
    canvas.style.height = `${logicalHeight}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    carRef.current.x = logicalWidth / 2 - CAR_WIDTH / 2;
    carRef.current.y = logicalHeight - 100;

    return { ctx, logicalWidth, logicalHeight };
  }, []);

  const stopLoop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const resetInternalState = useCallback(() => {
    const canvas = canvasRef.current;
    const width = parseFloat(canvas?.style.width || "400");
    const height = parseFloat(canvas?.style.height || "400");

    frameRef.current = 0;
    speedRef.current = 5;
    scoreRef.current = 0;
    scoreTickRef.current = 0;
    obstaclesRef.current = [];
    moveState.current = 0;

    carRef.current = {
      x: width / 2 - CAR_WIDTH / 2,
      y: height - 100,
      width: CAR_WIDTH,
      height: CAR_HEIGHT,
      color: "#4f46e5",
    };
  }, []);

  const drawRoundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fill();
  };

  const draw = useCallback((ctx, width, height) => {
    const car = carRef.current;
    const obstacles = obstaclesRef.current;

    ctx.clearRect(0, 0, width, height);

    // Road
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, width, height);

    // Side edges
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 8, height);
    ctx.fillRect(width - 8, 0, 8, height);

    // Middle dashed line
    ctx.save();
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 20]);
    ctx.lineDashOffset = -(frameRef.current * speedRef.current * 0.8) % 40;
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    ctx.restore();

    // Player car
    ctx.save();
    ctx.fillStyle = car.color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = car.color;
    drawRoundedRect(ctx, car.x, car.y, car.width, car.height, 8);
    ctx.restore();

    // Headlights
    ctx.fillStyle = "#fbbf24";
    ctx.fillRect(car.x + 5, car.y, 10, 5);
    ctx.fillRect(car.x + car.width - 15, car.y, 10, 5);

    // Windshield
    ctx.fillStyle = "#93c5fd";
    ctx.fillRect(car.x + 8, car.y + 14, car.width - 16, 16);

    // Obstacles
    for (const obs of obstacles) {
      ctx.fillStyle = obs.color;
      drawRoundedRect(ctx, obs.x, obs.y, obs.width, obs.height, 8);

      ctx.fillStyle = "#fca5a5";
      ctx.fillRect(obs.x + 5, obs.y + obs.height - 6, 10, 4);
      ctx.fillRect(obs.x + obs.width - 15, obs.y + obs.height - 6, 10, 4);
    }
  }, []);

  const update = useCallback((width, height) => {
    const car = carRef.current;

    frameRef.current += 1;

    if (frameRef.current % 60 === 0) {
      const x = Math.random() * (width - OBSTACLE_WIDTH);
      obstaclesRef.current.push({
        x,
        y: -100,
        width: OBSTACLE_WIDTH,
        height: OBSTACLE_HEIGHT,
        color: "#ef4444",
      });
      speedRef.current = Math.min(speedRef.current + 0.12, 11);
    }

    // Car move
    const moveSpeed = 7;
    if (moveState.current === -1) {
      car.x = Math.max(0, car.x - moveSpeed);
    } else if (moveState.current === 1) {
      car.x = Math.min(width - car.width, car.x + moveSpeed);
    }

    // Obstacles move
    for (const obs of obstaclesRef.current) {
      obs.y += speedRef.current;
    }

    obstaclesRef.current = obstaclesRef.current.filter((obs) => obs.y < height + 20);

    // Collision
    for (const obs of obstaclesRef.current) {
      const hit =
        car.x < obs.x + obs.width &&
        car.x + car.width > obs.x &&
        car.y < obs.y + obs.height &&
        car.y + car.height > obs.y;

      if (hit) {
        gameOverRef.current = true;
        setGameOver(true);
        stopLoop();
        return;
      }
    }

    // Score
    scoreRef.current += 1;
    if (frameRef.current - scoreTickRef.current >= 6) {
      scoreTickRef.current = frameRef.current;
      setScore(scoreRef.current);
    }
  }, [stopLoop]);

  const startLoop = useCallback(() => {
    const setup = setupCanvas();
    if (!setup) return;

    const { ctx, logicalWidth, logicalHeight } = setup;

    const loop = () => {
      if (!gameStartedRef.current || gameOverRef.current) return;

      update(logicalWidth, logicalHeight);
      draw(ctx, logicalWidth, logicalHeight);

      animationRef.current = requestAnimationFrame(loop);
    };

    stopLoop();
    animationRef.current = requestAnimationFrame(loop);
  }, [draw, setupCanvas, stopLoop, update]);

  useEffect(() => {
    const handleResize = () => {
      const setup = setupCanvas();
      if (!setup) return;
      draw(setup.ctx, setup.logicalWidth, setup.logicalHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [draw, setupCanvas]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStartedRef.current || gameOverRef.current) return;
      if (e.key === "ArrowLeft") moveState.current = -1;
      if (e.key === "ArrowRight") moveState.current = 1;
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" && moveState.current === -1) moveState.current = 0;
      if (e.key === "ArrowRight" && moveState.current === 1) moveState.current = 0;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    gameStartedRef.current = gameStarted;
    gameOverRef.current = gameOver;

    if (gameStarted && !gameOver) {
      startLoop();
    } else {
      stopLoop();
    }

    return () => stopLoop();
  }, [gameStarted, gameOver, startLoop, stopLoop]);

  const startGame = () => {
    resetInternalState();
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const resetGame = () => {
    resetInternalState();
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="relative w-full h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-800">
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center bg-slate-900/85 z-20">
          <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">
            Speed Driver
          </h3>
          <button
            onClick={startGame}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 shadow-lg shadow-indigo-900/30"
          >
            START ENGINE
          </button>
          <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
            Use Arrow Keys to Move
          </p>
        </div>
      )}

      {gameOver && (
        <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center bg-red-950/90 z-30">
          <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">
            CRASHED!
          </h3>
          <p className="text-red-300 font-bold mb-8 uppercase tracking-widest">
            Final Score: {score}
          </p>
          <button
            onClick={resetGame}
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
          >
            RETRY SESSION
          </button>
        </div>
      )}

      <div className="absolute top-6 left-6 z-10 bg-black/40 px-4 py-2 rounded-xl border border-white/10">
        <p className="text-[10px] text-indigo-300 font-black uppercase tracking-widest mb-0.5">
          Distance
        </p>
        <p className="text-xl font-black text-white font-mono">{score}m</p>
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-none" />

      {gameStarted && !gameOver && (
        <div className="absolute bottom-6 left-0 w-full px-8 flex justify-between z-20 md:hidden pointer-events-none">
          <button
            onPointerDown={(e) => {
              e.preventDefault();
              moveState.current = -1;
            }}
            onPointerUp={(e) => {
              e.preventDefault();
              moveState.current = 0;
            }}
            onPointerCancel={(e) => {
              e.preventDefault();
              moveState.current = 0;
            }}
            onContextMenu={(e) => e.preventDefault()}
            className="pointer-events-auto touch-none bg-white/20 border border-white/30 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl active:bg-white/40 select-none shadow-lg"
          >
            ←
          </button>

          <button
            onPointerDown={(e) => {
              e.preventDefault();
              moveState.current = 1;
            }}
            onPointerUp={(e) => {
              e.preventDefault();
              moveState.current = 0;
            }}
            onPointerCancel={(e) => {
              e.preventDefault();
              moveState.current = 0;
            }}
            onContextMenu={(e) => e.preventDefault()}
            className="pointer-events-auto touch-none bg-white/20 border border-white/30 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl active:bg-white/40 select-none shadow-lg"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default CarGame;