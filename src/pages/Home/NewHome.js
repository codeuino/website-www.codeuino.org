import React from 'react';
import './NewHome.css';
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn.js';
import Projects from './Components/Projects'
import LandingPageComponent from './Components/LandingPageComponent'
import Activities from './Components/Activities'
import Partners from './Components/Partners'
import TweetFeeds from '../../components/TwitterFeeds/TwitterFeeds'
const NewHome = () => {
    return (
        <div>
            <div id="___gatsby">
		<div style={{outline:"none"}} tabindex="-1" role="group" id="gatsby-focus-wrapper">
			<div class="mt-12">
				<LandingPageComponent/>
				<Projects/>
				<Activities/>
				<Partners/>
				<TweetFeeds/>
				<ScrollToTopBtn />
		</div>
	</div>
        </div>
		</div>
    );
}

export default NewHome;
