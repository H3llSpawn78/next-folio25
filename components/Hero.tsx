import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from "./ui/TextGenerateEffectHeading";
import BorderedButton from "./ui/BorderedButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-20">
            <Spotlight />
            <div className="absolute top-0 left-0 h-screen flex h-[50rem] w-full items-center justify-center opacity-20">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#18e97d57_1px,transparent_1px),linear-gradient(to_bottom,#18e97d57_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100"></div>
            </div>
            <div className="flex justify-center relative my-10 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="text-white">My folio</h2>
                    <TextGenerateEffect words="Welcome to my portfolio" className="text-center text-[60px] md:text-5xl lg:text-6xl drop-shadow-[0px_0px_18px_rgba(25,245,161,0.9)]" />
                    <p className="text-white text-center md:tracking-wider mt-2 mb-4 text-sm md:text-2xl">Hi, my name is Rich and i am a frontend developer from the UK.</p>
                </div>
            </div>
            <a href="#"><BorderedButton title="Check out some of my work" otherClasses="mx-auto" position="right" icon={<FaLocationArrow />} handleClick={() => { }} /></a>
        </div>
    )
}

export default Hero
