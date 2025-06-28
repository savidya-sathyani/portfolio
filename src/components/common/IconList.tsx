import type { Icon } from "../../utils/global-types";

interface IconListProps {
	icons: Icon[];
}

export default function IconList({ icons }: IconListProps) {
	return (icons.map((icon) => ("hi")))
}