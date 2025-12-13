import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_SECONDS = 10;

const Launch = () => {
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started]);

  useEffect(() => {
    if (started && secondsLeft === 0) {
      navigate("/", { replace: true });
    }
  }, [started, secondsLeft, navigate]);

  const handleCupClick = () => {
    if (started) return;
    setSecondsLeft(TOTAL_SECONDS);
    setStarted(true);
  };

  return (
    <section
      className="relative w-full h-screen px-24 py-5"
      style={{
        backgroundImage: "url('/assets/logo/launch-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.22)_100%)]" />
      </div>

      <div
        className={`relative z-10 max-w-3xl rounded-[50px] bg-white bg-opacity-60 flex flex-col gap-5 items-center justify-center h-full mx-auto px-24 py-5 ${
          started ? "[animation:mz-float_3.2s_ease-in-out_infinite]" : ""
        }`}
      >
        <img
          src="/assets/logo/mz-logo.png"
          alt="meezan-logo"
          className="max-w-[260px] absolute top-10"
        />

        <button
          type="button"
          onClick={handleCupClick}
          className={`relative mt-20 focus:outline-none active:scale-95 transition-transform duration-500 ${
            started ? "rotate-180" : ""
          }`}
          aria-label="Launch website"
        >
          {started && (
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 w-[220px] h-[160px]">
              <span
                className="absolute left-[30%] bottom-0 w-10 h-16 rounded-full bg-white/60 blur-md"
                style={{ animation: "mz-steam 1.4s ease-out infinite" }}
              />
              <span
                className="absolute left-[48%] bottom-0 w-12 h-20 rounded-full bg-white/55 blur-md"
                style={{ animation: "mz-steam 1.6s ease-out infinite 0.25s" }}
              />
              <span
                className="absolute left-[65%] bottom-0 w-9 h-14 rounded-full bg-white/60 blur-md"
                style={{ animation: "mz-steam 1.5s ease-out infinite 0.5s" }}
              />
            </div>
          )}

          <img
            src="/assets/logo/tea-cup.png"
            alt="tea-cup"
            className="max-w-[450px]"
            draggable={false}
          />

          <div className="absolute inset-0 grid place-items-center">
            <div
              className="
                relative grid place-items-center
                w-24 h-24 md:w-28 md:h-28
                rounded-full
                text-white/70
                font-bold
                tabular-nums
              "
              style={{
                opacity: started ? 1 : 0,
                transform: started ? "scale(1)" : "scale(0.95)",
                transition: "all 200ms ease",
              }}
            >
              {started && (
                <>
                  <span
                    className="absolute inset-0 rounded-full border border-white/40"
                    style={{ animation: "mz-pulseRing 1.1s ease-out infinite" }}
                  />
                  <span
                    className="absolute inset-0 rounded-full border border-white/30"
                    style={{
                      animation: "mz-pulseRing 1.1s ease-out infinite 0.35s",
                    }}
                  />
                </>
              )}

              <span
                key={secondsLeft}
                className="text-4xl md:text-7xl rotate-180 drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] inline-block"
                style={{
                  animation: started ? "mz-tick 180ms ease-out" : "none",
                }}
              >
                {secondsLeft}
              </span>
            </div>
          </div>
        </button>

        <img
          src="/assets/logo/web-text.png"
          alt="web-text"
          className="w-[85%] absolute bottom-10"
        />
      </div>
    </section>
  );
};

export default Launch;
