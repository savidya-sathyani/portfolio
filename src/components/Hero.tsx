import WaveHand from '../assets/wave-hand.png';
import Button from './Button';

export default function Hero() {
  return (<section className="flex-1 grid grid-cols-3 gap-1 mt-10">
    <div className='col-span-2 flex flex-col justify-center font-body text-lg'>
      <p className="flex items-center space-y-1">Hey, I'm Savidya<span><img src={WaveHand} /></span></p>
      <h1 className='font-heading text-9xl/28 font-bold left-0'>
        <span className='text-primary'>Front</span>end Engineer
      </h1>
      <p className='mt-5'>
        Turning ideas into seamless web experiences - crafted with clean code, thoughtful design, and user-first thinking.
      </p>
      <div className='flex space-x-5 mt-5'>
        <Button label='Get In Touch' type='fill'/>
        <Button label='Browse Projects' type='line'/>
      </div>
    </div>
    <div className="">d</div>
  </section>)
}