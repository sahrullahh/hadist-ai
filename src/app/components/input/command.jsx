"use client";
import { Icon } from "@iconify/react";

export default function command() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 border border-neutral-800 bg-neutral-950 fixed bottom-12 left-0 right-0 pt-3 pb-3 pl-3 pr-3 rounded-lg">
      <div className="flex items-center gap-2"></div>
      <div className="flex relative rounded-lg bg-neutral-900 border border-neutral-700 focus-within:border-primary focus-within:bg-[#323334]  hover:bg-[#323334]">
        <div className="px-3 py-3 text-center border-r border-neutral-800">
          <Icon
            className="text-2xl text-neutral-500"
            icon="ph:command"
          />
        </div>
        <input
          type="text"
          autoComplete="off"
          placeholder="Cari hadist yang relavan contoh:  Kewajiban Menunaikan Zakat ......"
          className="w-full p-4  bg-neutral-900 hover:bg-[#323334] focus:bg-[#323334] rounded-md  text-sm text-gray-100 outline-none"
        />
        <button className="bg-primary px-2 py-2 rounded-full absolute right-3 top-[.6rem] flex justify-center">
          <Icon
            className="text-lg text-white"
            icon="octicon:arrow-up-16"
          />
        </button>
      </div>
      <p className="text-neutral-500 text-xs text-center">
        Developed by <b>Mohammad Sahrullah,</b> Using Next.js and Tailwind CSS
        with ❤️
      </p>
    </div>
  );
}
