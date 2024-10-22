import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-5">
      <div>
        
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

        <div className="w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      

          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Next js tech
              </p>

              {/**
               *  Link: https://ui.aceternity.com/components/text-generate-effect
               */}
               
              <TextGenerateEffect
                words="Traduire les idées en interfaces intuitives."
                className="text-center text-[40px] md:text-6xl lg:text-6xl"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Durand Erwan, développeur full stack.
              </p>

              <a href="https://github.com/R1-scripts11" target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title="Mon Github"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Hero;
