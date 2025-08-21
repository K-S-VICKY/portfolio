import React from 'react';
import { NavBar } from './components/NavBar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Education } from './components/Education.jsx';
import { Certifications } from './components/Certifications.jsx';
import { Achievements } from './components/Achievements.jsx';
import { Hobbies } from './components/Hobbies.jsx';
import { Contact } from './components/Contact.jsx';

export default function App() {
	return (
		<>
			<NavBar />
			<main>
				<section id="home" className="section">
					<Hero />
				</section>
				<section id="about" className="section alt">
					<About />
				</section>
				<section id="skills" className="section">
					<Skills />
				</section>
				<section id="projects" className="section alt">
					<Projects />
				</section>
				<section id="education" className="section">
					<Education />
				</section>
				<section id="certifications" className="section alt">
					<Certifications />
				</section>
				<section id="achievements" className="section">
					<Achievements />
				</section>
				<section id="hobbies" className="section alt">
					<Hobbies />
				</section>
				<section id="contact" className="section">
					<Contact />
				</section>
			</main>
		</>
	);
} 