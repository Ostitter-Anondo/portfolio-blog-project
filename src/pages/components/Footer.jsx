import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "../../assets/portfolio.png";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="footer bg-neutral text-neutral-content items-center p-4">
			<aside className="grid-flow-col items-center">
				<img src={portfolio} alt="gamerdude" className="size-20" />
				<div className="flex flex-col gap-3">
					<p>
						Copyright © {new Date().getFullYear()} - All right reserved
						Ostitter_Anondo
					</p>
          <Link className="font-extralight text-xs hover:underline" to='/dashboard'>Admin Dashboard</Link>
				</div>
			</aside>
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
				<a href="https://github.com/Ostitter-Anondo" target="_blank">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/jawad-ibn-mamoon/" target="_blank">
					<FaLinkedin />
				</a>
				<a href="https://www.facebook.com/ostitter.anondo" target="_blank">
					<FaFacebook />
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
