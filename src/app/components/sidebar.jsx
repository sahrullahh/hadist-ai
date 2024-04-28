"use client";
import { Icon } from "@iconify/react";
export default function Sidebar() {
  return (
    <div className="w-[75px] h-screen bg-secondary flex text-center justify-center">
      <div className="mt-5 space-y-5">
        <button className="bg-[#323334] px-3 py-3 rounded-full hover:bg-[#3d3e3f]  hover:drop-shadow-[0_35px_35px_rgba(71, 178, 184,0.25)] transition-colors">
          <Icon
            className="text-2xl text-primary"
            icon="ic:round-plus"
          />
        </button>
        <button className="bg-[#323334] px-3 py-3 rounded-full hover:bg-[#3d3e3f]  hover:drop-shadow-[0_35px_35px_rgba(71, 178, 184,0.25)] transition-colors">
          <Icon
            className="text-2xl text-primary"
            icon="mdi:recent"
          />
        </button>
      </div>
    </div>
  );
}
