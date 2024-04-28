"use client";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
export default function messageAiBox() {
  const [options, showOptions] = useState(false);
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-5">
        <img
          src="./assets/user.png"
          alt=""
        />
        <div>
          <h2 className="font-bold">You</h2>
          <p>kewajiban menunaikan zakat dalam hadits</p>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className="flex-none">
          <img
            src="./assets/hadist-answer.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold">Hadist.ai</h2>
          <Typewriter
            options={{
              autoStart: true,
              delay: 10,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Ini adalah hadist dari pertanyaan berikut yang sahih "kewajiban menunaikan zakat dalam hadits". <br><br> Telah menceritakan kepada kami 
                  'Uqbah bin Mukram Al Bashri telah menceritakan kepada kami Salim bin Nuh dari Ibnu Juraij dari Amru bin Syu'aib dari ayahnya dari kakeknya bahwa Nabi Shallallaahu 
                  'alaihi wasallam mengutus seseorang untuk mengumumkan di lorong-lorong kota Makkah bahwa zakat fitrah hukumnya wajib bagi setiap muslim baik itu laki-laki atau wanita,
                   merdeka atau budak, tua atau muda, sebesar dua mud dari gandum atau satu sha' dari makanan selainnya. Abu 'Isa berkata, Ini adalah hadits hasan gharib,
                    dan Umar bin Harun meriwayatkan hadits ini dari Ibnu Juraij, dia berkata dari Abbas bin Mina' dari Nabi Shallallaahu 'alaihi wasallam, 
                    maka dia menyebutkan sebagian hadits ini, telah menceritakan kepada kami Jarud, telah menceritakan kepada kami Umar bin Harun seperti hadits ini.`
                )
                .callFunction(() => {
                  showOptions(true);
                })
                .pauseFor(2500)

                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          {options && (
            <div className="mt-5 flex gap-5 items-center">
              <button>
                <Icon
                  className="text-2xl"
                  icon="prime:thumbs-up"
                />
              </button>
              <button>
                <Icon
                  className="text-2xl"
                  icon="material-symbols-light:repeat"
                />
              </button>
              <button>
                <Icon
                  className="text-2xl"
                  icon="ph:copy"
                />
              </button>
              <button className="text-xs text-neutral-500">
                Tidak puas dengan jawabannya?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
