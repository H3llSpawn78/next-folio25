import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <Spotlight />
            <div className="absolute top-0 left-0 h-screen flex h-[50rem] w-full items-center justify-center bg-black-100[0.2]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100"></div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="text-white">My folio</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero
