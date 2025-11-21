import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { direction } = useParams();

  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    telefon: "+998",
    shahar: "",
    tugulganSana: "",
    telegram: "",
    email: "",
    oyishJoyi: "",
    qoshimchaMalumot: "",
  });

  const directionInfo = {
    football: {
      name: "Robo Football",
      icon: "⚽",
      gradient: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-100",
    },
    sumo: {
      name: "Robo Sumo",
      icon: "🥋",
      gradient: "from-cyan-400 to-cyan-600",
      iconBg: "bg-cyan-100",
    },
    innovations: {
      name: "Foydali Ixtirolar",
      icon: "💡",
      gradient: "from-sky-400 to-sky-600",
      iconBg: "bg-sky-100",
    },
  };

  const currentDirection = directionInfo[direction] || directionInfo.football;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-3xl">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-blue-800 hover:text-blue-600 transition-colors text-base font-semibold group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Orqaga</span>
          </button>

          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-4 border-white/50 p-6 md:p-8">
            {/* Direction Header */}
            <div className="text-center mb-6">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${currentDirection.iconBg} rounded-2xl mb-3 shadow-lg`}
              >
                <span className="text-4xl">{currentDirection.icon}</span>
              </div>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r ${currentDirection.gradient} bg-clip-text text-transparent`}
              >
                {currentDirection.name}
              </h2>
              <p className="text-blue-600 text-sm mt-1 font-medium">
                Ro'yxatdan o'tish formasi
              </p>
            </div>

            <div className="space-y-4">
              {/* Two columns */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Ism *
                  </label>
                  <input
                    type="text"
                    name="ism"
                    required
                    value={formData.ism}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Familiya *
                  </label>
                  <input
                    type="text"
                    name="familiya"
                    required
                    value={formData.familiya}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                    placeholder="Familiyangizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Telefon raqam *
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                    placeholder="+998 __ ___ __ __"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Shahar *
                  </label>
                  <input
                    type="text"
                    name="shahar"
                    required
                    value={formData.shahar}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                    placeholder="Shaharingiz"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Tug'ilgan sana *
                  </label>
                  <input
                    type="date"
                    name="tugulganSana"
                    required
                    value={formData.tugulganSana}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 focus:outline-none focus:border-blue-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                    Telegram *
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    required
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                    placeholder="@username"
                  />
                </div>
              </div>

              {/* Full width fields */}
              <div>
                <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                  O'qish joyi *
                </label>
                <input
                  type="text"
                  name="oyishJoyi"
                  required
                  value={formData.oyishJoyi}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all text-sm"
                  placeholder="Maktab yoki Universitet nomi"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-1.5 font-semibold text-sm">
                  O'zingiz haqingizda qisqacha
                </label>
                <textarea
                  name="qoshimchaMalumot"
                  value={formData.qoshimchaMalumot}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 bg-blue-50/50 border-2 border-blue-200 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-all resize-none text-sm"
                  placeholder="Tajribangiz va qiziqishlaringiz haqida..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className={`w-full bg-gradient-to-r ${currentDirection.gradient} py-3 rounded-xl text-white font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300`}
              >
                Keyingi ishtirokchini ro'yxatdan o'tkazish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};