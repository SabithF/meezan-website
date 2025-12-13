import { Link } from "react-router-dom";

const FloatingLogo = () => {
  return (
    <Link
      to="/"
      aria-label="Go to home"
      className="
        fixed bottom-4 right-4 z-[9999]
        w-14 h-14 md:w-20 md:h-20
        rounded-full
        bg-white/90 backdrop-blur
        shadow-xl
        flex items-center justify-center
        hover:scale-105 active:scale-95
        transition-transform animate-pulse
      "
    >
      <img
        src="/assets/logo/100-logo.png"
        alt="Company logo"
        className="w-16 h-16 object-contain"
      />
    </Link>
  );
};

export default FloatingLogo;
