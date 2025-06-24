import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore from 'swiper';
import {Autoplay} from 'swiper/modules';

SwiperCore.use([Autoplay]);
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
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2200,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      freeMode={false}
      style={{ padding: "20px 0" }}
    >
      {cards.map((card) => (
        <SwiperSlide
          key={card.title}
          style={{
            width: "280px", // fixed width for each slide
            backgroundColor: "#ffbe85",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            cursor: "grab",
            display: "flex", // add this
            flexDirection: "column", // add this
            justifyContent: "center", // add this
            height: "100%", // ensure full height for centering
          }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-bold text-orange-700 mb-2">{card.title}</h4>
          <p className="text-sm text-gray-700">{card.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
