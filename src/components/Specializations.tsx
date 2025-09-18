// const specializations = [
//   {
//     title: 'Frontend Development',
//     description: 'React, TypeScript, HTML, CSS, Next.js',
//   },
//   {
//     title: 'Backend Development',
//     description: 'Node.js, Express, REST APIs, GraphQL',
//   },
//   { title: 'UI/UX Design', description: 'Figma, Adobe XD, Responsive Design' },
//   { title: 'DevOps', description: 'Docker, CI/CD, AWS, Azure' },
// ];

import { SubHeading } from './SubHeading';

export default function Specializations() {
  return (
    <section className="specialization-section">
      <SubHeading
        heading="Build Digital Experiences"
        subText="I specialize in creating stunning user interfaces and developing high-quality applications that stand out."
      />
    </section>
  );
}
