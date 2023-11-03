import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						<div className="subtitle contact-subtitle">
					Ready to ignite a conversation? I'm all ears! Whether you've got brilliant ideas, burning questions, or just want to say hi, your message is my command. Reach out directly via email at {" "}
					<a href={`mailto:${INFO.main.email}`}>
						{INFO.main.email}
					</a>
					. I'm known to respond swiftly, usually within 24 hours (though, during the hustle and bustle, it may take a tad longer). 

					If you prefer a more formal rendezvous, why not try the contact form on my site? Fill in the essentials, and I'll be with you in a jiffy.

					Feeling social? I'm a regular on{" "}
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						Instagram
					</a>
					, where I dish out updates and banter with my awesome followers. Swing by, say hello, and let's make it a memorable connection! 

					Your interest means the world, and I can't wait to hear from you!
					</div>

						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
