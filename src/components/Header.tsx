import { Link } from "react-router-dom";
import LogoDark from "../assets/savidya.co-dark.png";
import LogoLight from "../assets/savidya.co-light.png";
import GithubDark from '../assets/github-dark.svg';
import GithubLight from '../assets/github-light.svg';
import LinkedinDark from '../assets/linkedin-dark.svg';
import LinkedinLight from '../assets/linkedin-light.svg';
import ThemeDark from '../assets/theme-dark.svg';
import ThemeLight from '../assets/theme-light.svg';
import MenuDark from '../assets/menu-dark.svg';
import MenuLight from '../assets/menu-light.svg';
import { useTheme } from "../providers/theme-provider";
import { useState } from "react";

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const handleMenuClick = () => {
		console.log("clicked")
		setOpenMenu(prev => !prev);
	}

	return (
		<header className="main h-8 flex item-end justify-between sm:h-14">
			<div className="flex justify-between space-x-10">
				<Link to="/" className="w-32 sm:w-52">
					<img src={theme === 'light' ? LogoLight : LogoDark} alt="Savidya's Portfolio" title="Savidya's Portfolio" />
				</Link>

				<div className="hidden items-end space-x-5 sm:flex">
					<Link to="/" className="nav-link item-hover">Home</Link>
					<Link to="/" className="nav-link item-hover">Projects</Link>
					<Link to="/" className="nav-link item-hover">Contact</Link>
				</div>
			</div>
			<div className="items-end space-x-0.5 hidden sm:flex">
				<button className="icon-button item-hover" onClick={toggleTheme}>
					<img src={theme === 'light' ? GithubLight : GithubDark} alt="GitHub" />
				</button>
				<button className="icon-button item-hover" onClick={toggleTheme}>
					<img src={theme === 'light' ? LinkedinLight : LinkedinDark} alt="GitHub" />
				</button>
				<button className="icon-button item-hover" onClick={toggleTheme}>
					<img src={theme === 'light' ? ThemeLight : ThemeDark} alt="GitHub" />
				</button>
			</div>

			{/* mobile screens */}
			<div className="flex items-end space-x-0.5 relative sm:hidden">
				<button className="icon-button item-hover" onClick={handleMenuClick}>
					<img src={theme === 'light' ? MenuLight : MenuDark} alt="Menu" />
				</button>
				<button className="icon-button item-hover" onClick={toggleTheme}>
					<img src={theme === 'light' ? ThemeLight : ThemeDark} alt="GitHub" />
				</button>
			</div>
			{/* Dimmed overlay for mobile view */}
			<div className={`${openMenu ? 'flex' : 'hidden'} justify-center items-center fixed inset-0 bg-blur/10 backdrop-blur-sm z-10 sm:hidden`}onClick={() => setOpenMenu(false)}>
					<div className="w-4/5 h-2/3 bg-background/50 rounded-2xl flex flex-col justify-center space-y-3 items-center mt-5">
						<Link to="/" className="nav-link item-hover">Home</Link>
						<Link to="/" className="nav-link item-hover">Projects</Link>
						<Link to="/" className="nav-link item-hover">Contact</Link>
					</div>
			</div>
		</header>
	);
}