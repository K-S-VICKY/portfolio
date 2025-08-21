import React from 'react';

const links = [
	{ href: '#home', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#education', label: 'Education' },
	{ href: '#certifications', label: 'Certifications' },
	{ href: '#achievements', label: 'Achievements' },
	{ href: '#hobbies', label: 'Hobbies' },
	{ href: '#contact', label: 'Contact' },
];

export function NavBar() {
	const [theme, setTheme] = React.useState(() => {
		const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
		return saved || 'theme-dark';
	});

	React.useEffect(() => {
		const root = document.documentElement;
		root.classList.remove('theme-dark', 'theme-light');
		root.classList.add(theme);
		try {
			localStorage.setItem('theme', theme);
		} catch {}
	}, [theme]);

	function toggleTheme() {
		setTheme(prev => (prev === 'theme-dark' ? 'theme-light' : 'theme-dark'));
	}

	return (
		<header className="nav">
			<nav>
				<a className="brand" href="#home" title="Go to Home">Vignesh K S</a>
				<ul>
					{links.map(link => (
						<li key={link.href}>
							<a href={link.href} title={link.label + ' section'}>{link.label}</a>
						</li>
					))}
				</ul>
				<button className="btn small" onClick={toggleTheme} title={theme === 'theme-dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
					{theme === 'theme-dark' ? 'Light' : 'Dark'} Mode
				</button>
			</nav>
		</header>
	);
} 