import '@/styles/globals.css';

import Layout from '../components/layout';
// import { Lato } from 'next/font/google';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

// const Lato = Lato({ subsets: ['latin'] })

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={inter.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }