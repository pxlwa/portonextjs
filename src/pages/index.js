import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Palwa's Playground</title>
				<meta name="description" content="Joel's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/itulah.png" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default Home;
