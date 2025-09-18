import WaveHand from '../assets/wave-hand.png';
import HeroImage from '../assets/hero-image.png';
import Button from './Button';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-text">
        <p className="hero-section-p flex space-y-1  ">
          Hey, I'm Savidya
          <span>
            <img src={WaveHand} />
          </span>
        </p>
        <h1 className="hero-section-h1">
          <span className="text-primary">Front</span>end Engineer
        </h1>
        <p className="hero-section-p mt-5">
          Turning ideas into seamless web experiences - crafted with clean code,
          thoughtful design, and user-first thinking.
        </p>
        <div className="flex space-x-5 mt-5">
          <Button label="Get In Touch" type="fill" />
          <Button label="Browse Projects" type="line" />
        </div>
      </div>
      <div className="hero-section-animation">
        <div className="hero-section-animation-container group">
          {/* 3 Concentric Circles with Primary Border and Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="hero-circle w-[290px] h-[290px] md:w-[340px] md:h-[340px] animate-hero-pulse delay-1000"></div>
            <div className="hero-circle  w-[330px] h-[330px] md:w-[370px] md:h-[370px] animate-hero-pulse delay-2000"></div>
            <div className="hero-circle w-[370px] h-[370px] md:w-[410px] md:h-[410px] animate-hero-pulse delay-3000"></div>
          </div>
          {/* Centered blurred circle behind hero image, color adapts to theme */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div className="w-[350px] h-[350px] sm:w-[800px] sm:h-[800px] rounded-full blur-[60px] opacity-30 bg-primary/50 dark:bg-white/40"></div>
          </div>
          {/* Overlay for transparent effect*/}
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/15 backdrop-blur-none rounded-full z-10 animate-hero-pulse"></div>
          {/* Hero Image */}
          <img src={HeroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
