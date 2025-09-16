import WaveHand from '../assets/wave-hand.png';
import HeroImage from '../assets/hero-image.png';
import Button from './Button';

export default function Hero() {
  return (
    <section className="flex-1 grid grid-cols-3 gap-1 mt-8">
      <div className="col-span-2 flex flex-col justify-center font-body text-lg">
        <p className="flex items-center space-y-1 font-thin tracking-3">
          Hey, I'm Savidya
          <span>
            <img src={WaveHand} />
          </span>
        </p>
        <h1 className="font-heading text-9xl/28 font-bold leading-none m-0 p-0 inline">
          <span className="text-primary inline">Front</span>end Engineer
        </h1>
        <p className="mt-5 font-thin tracking-3">
          Turning ideas into seamless web experiences - crafted with clean code,
          thoughtful design, and user-first thinking.
        </p>
        <div className="flex space-x-5 mt-5">
          <Button label="Get In Touch" type="fill" />
          <Button label="Browse Projects" type="line" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="relative flex items-center justify-center group w-[220px] h-[220px] sm:w-[370px] sm:h-[370px]">
          {/* 3 Concentric Circles with Primary Border and Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="hero-circle w-[140px] h-[140px] sm:w-[440px] sm:h-[440px] animate-hero-pulse delay-1000"></div>
            <div className="hero-circle w-[170px] h-[170px] sm:w-[490px] sm:h-[490px] animate-hero-pulse delay-2000"></div>
            <div className="hero-circle w-[200px] h-[200px] sm:w-[550px] sm:h-[550px] animate-hero-pulse delay-3000"></div>
          </div>
          {/* Centered blurred circle behind hero image, color adapts to theme */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="w-[350px] h-[350px] sm:w-[800px] sm:h-[800px] rounded-full blur-[60px] opacity-30 bg-primary/50 dark:bg-white/40"></div>
          </div>
          {/* Overlay for transparent effect*/}
          <div
            className="absolute inset-0 bg-primary/20 dark:bg-primary/15 backdrop-blur-none rounded-full z-10
          animate-hero-pulse"
          ></div>
          {/* Hero Image */}
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[350px] h-[350px] rounded-full object-cover z-0"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  );
}
