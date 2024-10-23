import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import React from 'react';

const Footer = React.memo(() => {
  return (
    <footer className="w-full pt-20 pb-10 relative bg-black-100" id="contact">
      
      {/* Image de fond */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 opacity-20">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full "
          width="500" height="500"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Faire passer <span className="text-purple">son</span> digital au niveau supérieur.
        </h1>
        <p className="text-blue-100 md:mt-10 my-5 text-center">
          Contactez-moi aujourd&apos;hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:erwandurand91090@gmail.com">
          <MagicButton
            title="Restons en contact"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal text-white">
          Copyright © 2024 Erwan Durand
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-25 bg-white rounded-lg border border-gray-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
