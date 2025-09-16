type ButtonProps = {
  label: string;
  type: 'fill' | 'line';
};

export default function Button({ label, type }: ButtonProps) {
  return <button className={`btn btn-${type}`}>{label}</button>;
}
