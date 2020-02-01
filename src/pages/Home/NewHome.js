import React from 'react';
import './NewHome.css';

import Projects from './Components/Projects'
import LandingPageComponent from './Components/LandingPageComponent'
import Activities from './Components/Activities'
import Partners from './Components/Partners'
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
		</div>
	</div>
        </div>
		</div>
    );
}

export default NewHome;
