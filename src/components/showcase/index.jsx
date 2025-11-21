import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import telegram from "../assets/telegram.webp";

export const HomePage = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);

  const directions = [
    {
      id: "football",
      name: "Robo Football",
      icon: "⚽",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      path: "/register/football",
    },
    {
      id: "sumo",
      name: "Robo Sumo",
      icon: "🥋",
      gradient: "from-cyan-400 via-cyan-500 to-cyan-600",
      path: "/register/sumo",
    },
    {
      id: "innovations",
      name: "Foydali Ixtirolar",
      icon: "💡",
      gradient: "from-sky-400 via-sky-500 to-sky-600",
      path: "/register/innovations",
    },
  ];

  const handleDirectionClick = (path) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  // Auto rotation effect
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.2) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    setStartAngle(angle - (rotation * Math.PI) / 180);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const newRotation = (((angle - startAngle) * 180) / Math.PI) % 360;
    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-100 relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center w-[180px] gap-4">
          <img src="https://raqamliavlod.uz/static/svg/logo-word.svg" alt="" />
          <div></div>
        </div>

        <a
          href="https://t.me/digitalgeneration_uz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
        >
          <span className="w-[40px]">
            <img src={telegram} alt="" />
          </span>
          Telegram kanal
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4  h-[calc(100vh-120px)]">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ro'yxatdan o'tish
          </h2>
        </div>

        {/* Rotating Carousel Container */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Rotating Directions */}
          <div
            className="relative w-[450px] h-[450px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {directions.map((direction, index) => {
              const angle = (index * 120 + rotation) % 360;
              const radian = (angle * Math.PI) / 180;
              const radius = 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <div
                  key={direction.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transition: isDragging ? "none" : "transform 0.3s ease-out",
                  }}
                >
                  <button
                    onClick={() => handleDirectionClick(direction.path)}
                    className={`
                      w-32 h-32 group relative bg-gradient-to-br ${direction.gradient} 
                      rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 
                      transform hover:scale-125 flex flex-col items-center justify-center gap-1 
                      border-4 border-white/80 hover:border-white
                    `}
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    {/* Hover effect overlay */}
                    <div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{
                        clipPath:
                          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      }}
                    ></div>

                    {/* Icon */}
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg text-4xl">
                      {direction.icon}
                    </span>

                    {/* Name */}
                    <span className="text-white font-bold text-center px-1 relative z-10 text-sm drop-shadow-lg leading-tight">
                      {direction.name}
                    </span>

                    {/* Shine effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{
                        clipPath:
                          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      }}
                    ></div>
                  </button>
                </div>
              );
            })}

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xl font-bold">Yo'nalish</div>
                <div className="text-sm">Tanlang</div>
              </div>
            </div>

            {/* Outer Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-blue-300/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-300/20 rounded-full"></div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8"></div>

        {/* Footer */}
        <div className="mt-6 mb-6 text-center">
          <p className="text-blue-700 font-medium text-[14px]">
            Natijalarni bilish uchun Digital Generation telegram kanaliga obuna
            bo'ling
          </p>
        </div>
      </main>
    </div>
  );
};
