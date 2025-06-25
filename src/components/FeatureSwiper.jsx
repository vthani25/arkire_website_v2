import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const cards = [
  {
    title: "📚 Dynamic Lessons",
    img: "/assets/lessons.png",
    description: "Quick, interactive lessons that teach real skills—not just definitions.",
  },
  {
    title: "⚔️ Challenge-Based Learning",
    img: "/assets/challenge.png",
    description: "Do, don’t memorize. Every module comes with an action-packed prompt.",
  },
  {
    title: "🧍 Custom Avatars",
    img: "/assets/avatars.png",
    description: "Design your brand persona and evolve your identity as you grow.",
  },
  {
    title: "🔥 Streaks",
    img: "/assets/streak.png",
    description: "Keep your creative momentum. More days, more perks, more growth.",
  },
  {
    title: "🌍 Community Quests",
    img: "/assets/community1.png",
    description: "Collaborate with other users to solve real-world brand challenges.",
  },
  {
    title: "🎨 Creative Feedback",
    img: "/assets/feedback.png",
    description: "Get constructive, positive feedback from peers and mentors.",
  },
];

export default function FeatureSwiper() {
  const onBreakpoint = (swiper) => {
    // Check if slidesPerView is exactly 3
    if (swiper.params.slidesPerView === 3) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  };

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 2200,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      onBreakpoint={onBreakpoint}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,  // Only here autoplay runs
        },
      }}
      className="px-2 sm:px-4"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.title}>
          <div className="bg-[#ffbe85] rounded-xl p-6 h-full shadow-md flex flex-col justify-start hover:shadow-lg transition duration-300">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold text-orange-700 mb-2">{card.title}</h4>
            <p className="text-sm text-gray-700">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
