import React from 'react';

const projects = [
	{
		title: 'Fresh Fleet – Health Focused Grocery Shopping Website',
		stack: 'MERN stack | Team of 4 | Role: Frontend Developer',
		desc: 'Built an online platform for healthy grocery shopping.',
		link: 'https://freshfleet.vercel.app',
	},
	{
		title: 'ZeroShield – Role-Based Access Control System',
		stack: 'MERN stack | Solo project | Frontend & Backend Developer',
		desc: 'Implemented AES-256 encryption + Access Control Lists (ACL) for secure user access.',
		link: 'https://zeroshield.vercel.app',
	},
];

export function Projects() {
	return (
		<div className="container stack">
			<h2>Projects</h2>
			<div className="grid two">
				{projects.map(p => (
					<article key={p.title} className="card">
						<h3>{p.title}</h3>
						<p className="muted">{p.stack}</p>
						<p>{p.desc}</p>
						{p.link ? (
							<a className="btn small" href={p.link} target="_blank" rel="noreferrer" title={`Open ${p.title}`}>Visit ↗</a>
						) : null}
					</article>
				))}
			</div>
		</div>
	);
} 