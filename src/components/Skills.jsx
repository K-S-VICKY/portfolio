import React from 'react';

const skills = {
	Programming: ['C', 'Java', 'JavaScript', 'HTML', 'CSS', 'React'],
	Databases: ['MongoDB', 'MySQL'],
	'Frameworks/Tools': ['Git/GitHub', 'Docker', 'Figma', 'Cisco Packet Tracer', 'AWS (fundamentals)'],
	'Soft Skills': ['Problem-Solving', 'Teamwork', 'Adaptability', 'Time Management'],
	Languages: ['English (R,W,S)', 'Tamil (R,W,S)'],
};

export function Skills() {
	return (
		<div className="container stack">
			<h2>Skills</h2>
			<div className="grid two">
				{Object.entries(skills).map(([group, items]) => (
					<div key={group} className="card">
						<h3>{group}</h3>
						<ul>
							{items.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
} 