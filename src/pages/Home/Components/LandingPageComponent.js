import React from 'react'
import Banner from '../images/banner.svg';
import poster from '../images/poster.svg';

import DonateCard from '../../../components/DonateUs/Donate'
const LandingPageComponent = () => {
    return (
        <section class="pt-4 pt-md-5">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-12 col-md-5 col-lg-6 order-md-2">
								<img src={Banner} class="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0" alt="all-channels" />
							</div>
							<div class="col-12 col-md-7 col-lg-6 order-md-1">
								<h1 class="display-3 text-center text-md-left">Learn, Build, Contribute, Grow.<br/><span class="text-primary"><span><span></span></span></span></h1>
								<p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">We are an Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world.</p>
								<div class="text-center text-md-left"><a href="https://github.com/codeuino" class="btn btn-primary shadow lift pr-5 mr-1" style={{backgroundColor:" #22247A"}}><span class="fe fe-github mr-1"></span>Github</a>
								<a href="http://slack.codeuino.org" class="btn btn-primary shadow lift pr-5 mr-1" style={{backgroundColor:" #22247A"}}><span class="fe fe-slack mr-1"></span>Slack</a>
								</div>
							</div>
							</div>
							<DonateCard/>
							<div class="container mt-10 ml-0" style={{width:"100%",alignContent:"left"}}>
								<div class="row" style={{textAlign:"left"}}>
									<div class="col-md-4 col-12">
										<span class="fa fa-question-circle fa-2x mr-1" style={{color:" #22247A"}}></span>
										<h2>What is Codeuino?</h2>
										<p style={{textAlign: "justify"}}>Codeuino is an Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration platforms by giving prospectus to various other organisations, users and outreaches to showcase their products in a custom way. This wide social open networking framework organisation is driven by volunteers all over the globe. This helps open source enthusiast to build up various technocratic social wide living software and researching FOSS projects under code survivors and challenging world. Codeuino takes into the house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world..</p>
									</div>
									<div class="col-md-4 col-12">
									<span class="fa fa-user-circle fa-2x mr-1" style={{color:" #22247A",}}></span>
										<h2>Who we Are?</h2>
										<p style={{textAlign: "justify"}}>We are a group of young open-source contributors creatively leveraging our expertise in Social networking and development projects to improve the quality of outreaching, interaction and collaboration for the people in developing nations. We consist of various teams from Development, Documentation, Designers and Donut Platform. Everyone at Codeuino contributes to increase efficiency, outreaching for the user and expedite idea generation for social networking.</p>
									</div>
									<div class="col-md-4 col-12">
									<span class="fa fa-check fa-2x mr-1" style={{color:" #22247A"}}></span>
										<h2>What do we do?</h2>
										<p style={{textAlign: "justify"}}>Codeuino takes into the house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.
										Teams within organization design and develop some basic set of software and networking plugins to help users/organisations to build up their own platform to interact for feeds, projects, Scholarships, etc.
										We build social networking Kit/FOSS for various organisations to build up the social environment for their organisation to showcase their products and services for their community along with the collaboration platform to interact with one another.</p>
									</div>
								</div>
							</div>
							<img class="mt-10" src={poster} style={{width:"100%"}}/>
						</div>
						
				</section>
				
    )
}

export default LandingPageComponent