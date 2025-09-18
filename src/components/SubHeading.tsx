import FullStop from '../assets/full-stop.png';

export function SubHeading({
  heading,
  subText,
}: {
  heading: string;
  subText: string;
}) {
  return (
    <div className="text-center lg:text-start">
      <h2 className="flex flex-row items-end justify-center lg:justify-start sub-heading">
        <span>{heading}</span>
        <img src={FullStop} width={12} height={12} className="mb-1" />
      </h2>
      <p className="paragraph-text mt-2">{subText}</p>
    </div>
  );
}
