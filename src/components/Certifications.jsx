import React from 'react';

const certs = [
	'Introduction to Cybersecurity – Cisco (Oct 2024)',
	'Microsoft AI Skills Challenge (Jan 2024)',
	'Google Cloud Skills Boost (Oct 2024)',
	'Oracle Cloud Essentials (Oct 2024)',
	'Threat Landscape 2.0 (Jan 2025)',
];

export function Certifications() {
	return (
		<div className="container stack">
			<h2>Certifications</h2>
			<ul>
				{certs.map(c => (
					<li key={c}>{c}</li>
				))}
			</ul>
		</div>
	);
} 