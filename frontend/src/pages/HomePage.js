
import React from 'react';
import { Helmet } from 'react-helmet';
import HomeIntro from '../components/HomeIntro';
// import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<div className="/">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Khushboo Gandhi</title>
				<meta
					name="description"
					content="This website is made for CSC 847 Asignment 1"
				/>
			</Helmet>
            <HomeIntro/>
			{/* <Footer /> */}
		</div>
	);
};

export default HomePage;