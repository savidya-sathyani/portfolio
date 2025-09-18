import WaveHand from '../assets/wave-hand.png';
import HeroImage from '../assets/hero-image.png';
import Button from './Button';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-text z-30">
        <p className="paragraph-text flex space-y-1  ">
          Hey, I'm Savidya
          <span>
            <img src={WaveHand} />
          </span>
        </p>
        <h1 className="hero-section-h1">
          <span className="text-primary">Front</span>end Engineer
        </h1>
        <p className="paragraph-text mt-5">
          Turning ideas into seamless web experiences - crafted with clean code,
          thoughtful design, and user-first thinking.
        </p>
        <div className="flex space-x-5 mt-5">
          <Button label="Get In Touch" type="fill" />
          <Button label="Browse Projects" type="line" />
        </div>
      </div>
      <div className="hero-section-animation">
        <div className="hero-section-animation-container group lg:ml-36">
          {/* 3 Concentric Circles with Primary Border and Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="hero-circle w-[290px] h-[290px] md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px] animate-hero-ripple"></div>
            <div className="hero-circle w-[290px] h-[290px] md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px] animate-hero-ripple animate-hero-ripple-delay-1"></div>
            <div className="hero-circle w-[290px] h-[290px] md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px] animate-hero-ripple animate-hero-ripple-delay-2"></div>
          </div>
          {/* Centered blurred circle behind hero image, color adapts to theme */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full blur-[60px] opacity-50 bg-primary/50 dark:bg-white/40"></div>
          </div>
          {/* Pulsing green overlay for the hero image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-[270px] h-[270px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full bg-primary/15"></div>
          {/* Hero Image */}
          <img src={HeroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
