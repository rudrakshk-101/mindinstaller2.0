






"use client";
import { DoctorDashboard } from "@/components/doctor-dashboard";
// import BotpressWebChat from "./bot"

export default function Home() {
  return (
    <>
      <DoctorDashboard />
      <button
        className="absolute z-100 top-3.5 right-[28vw] bg-[#0f3460] hover:bg-[#0f3460] text-white font-bold py-2 px-4 rounded w-24 h-10"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Home
      </button>
    </>
  );
}

