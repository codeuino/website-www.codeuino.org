import React from 'react';
import './NewHome.css';
import Banner from './banner.svg';
import { Card, Icon, Image,Button } from 'react-bootstrap';
import wwc from './wwc.jpeg';
import dgocean from './dgocean.svg';
import poster from './poster.svg';
import image from './image.svg';
import donut from './donut.svg';
import codebadge from './codebadge.svg';
import card from './card.svg'

const NewHome = () => {
    return (
        <div>
            <div id="___gatsby">
		<div style={{outline:"none"}} tabindex="-1" role="group" id="gatsby-focus-wrapper">
			
			<div class="mt-12 holder">
				<div class="pt-4 pt-md-5">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-12 col-md-5 col-lg-6 order-md-2">
								<img src={Banner} class="img-fluid mw-md-100 mw-lg-100 mb-6 mb-md-0" alt="all-channels" />
							</div>
							<div class="col-12 col-md-7 col-lg-6 order-md-1">
								<h1 class="display-3 text-center text-md-left">Learn, Build, Contribute, Grow.<br/><span class="text-primary"><span><span></span></span></span></h1>
								<p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">We are a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world.</p>
								<div class="text-center text-md-left"><a href="https://github.com/codeuino" class="btn btn-primary shadow lift pr-5 mr-1" style={{backgroundColor:" #22247A"}}><span class="fe fe-github mr-1"></span>Github</a>
								<a href="http://slack.codeuino.org" class="btn btn-primary shadow lift pr-5 mr-1" style={{backgroundColor:" #22247A"}}><span class="fe fe-slack mr-1"></span>Slack</a>
								</div>
								{/* <div class="text-muted mt-4 h5 text-center text-md-left"><span>Hosted version coming soon. </span><a href="https://chatwoot.typeform.com/to/tNMDIM" data-mode="popup" target="_blank" class="typeform-share d-inline mr-3" rel="noreferrer noopener nofollow">Request an early access</a>
								</div> */}
							</div>
							</div>
							<div class="mt-10 container lift" style={{borderRadius:"25px",textAlign:"left",color:"white",backgroundColor:" #22247A",width:"100%"}}>
								<div class="row">
									<div class="col-md-6 co-12 ml-0 pt-6 pb-6 pl-8">
										<h2>Join Us</h2>
										<p>COMMUNITY FUND AND PROJECT INCUBATION</p>
										<a href="https://opencollective.com/donut" class="ml-0 btn btn-primary shadow lift" style={{color:" #22247A",backgroundColor:"white"}}>Open Collective</a>
									</div>
									<div class="col-md-6 col-12" id="join">
										<p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration.</p>
									</div>
								</div>
							</div>
							<div class="container mt-10 ml-0" style={{width:"100%",alignContent:"left"}}>
								<div class="row" style={{textAlign:"left"}}>
									<div class="col-md-4 col-12">
										<span class="fa fa-question-circle fa-2x mr-1" style={{color:" #22247A"}}></span>
										<h2>What is Codeuino?</h2>
										<p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration platforms by giving prospectus to various other organisations, users and outreaches to showcase their products in a custom way. This wide social open networking framework organisation is driven by volunteers all over the globe. This helps open source enthusiast to build up various technocratic social wide living software and researching FOSS projects under code survivors and challenging world. Codeuino takes into the house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world..</p>
									</div>
									<div class="col-md-4 col-12">
									<span class="fa fa-user-circle fa-2x mr-1" style={{color:" #22247A",}}></span>
										<h2>Who we Are?</h2>
										<p>We are a group of young open-source contributors creatively leveraging our expertise in Social networking and development projects to improve the quality of outreaching, interaction and collaboration for the people in developing nations. We consist of various teams from Development, Documentation, Designers and Donut Platform. Everyone at Codeuino contributes to increase efficiency, outreaching for the user and expedite idea generation for social networking.</p>
									</div>
									<div class="col-md-4 col-12">
									<span class="fa fa-check fa-2x mr-1" style={{color:" #22247A"}}></span>
										<h2>What do we do?</h2>
										<p>Codeuino takes into the house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.</p>
										<p>Teams within organization design and develop some basic set of software and networking plugins to help users/organisations to build up their own platform to interact for feeds, projects, Scholarships, etc.</p>
										<p>We build social networking Kit/FOSS for various organisations to build up the social environment for their organisation to showcase their products and services for their community along with the collaboration platform to interact with one another.</p>
									</div>
								</div>
							</div>
							<img class="mt-10" src={poster} style={{width:"100%"}}/>
						</div>
						
				</div>
				
				<div class="mt-5 pt-md-11" id="projects">
					
					<div class="container">
						
						{/* <h1>Our Projects</h1> */}
						<div class="row justify-content-center">
							<div class="col-12 col-md-10 col-lg-10 text-center"><span class="badge badge-pill badge-primary-soft mb-2"><span class="h6 text-uppercase font-weight-bold">Opensource</span></span>
								<h1 class="font-weight-bold">Our Projects</h1>
								{/* <p class="font-size-lg text-muted mb-7">Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration platforms by giving prospectus to various other organisations, users and outreachers to showcase their products in a custom way. This wide social open networking framework organisation is driven by the volunteers all over the globe. This helps open source enthusiast to build up various technocratic social wide living softwares and researching FOSS projects under code survivors and challenging world. Codeuino takes into house the development of some of the coolest Open Source Projects that are made with the sole motive to benefit more and more people present all over the world.</p> */}
								<div class="row">
									<div class="col-md-6 col-12" style={{display:"flex",justifyContent:"space-around"}}>
										<img src={donut}/>
									</div>
									<div class="col-md-6 col-12">
										<h1>Donut</h1>
										<p>Donut is an open-source, feature-rich, highly flexible and privacy-friendly, social networking platform built for community-oriented collaboration in a customized way. It has been built on the Node.js framework allowing an essential impetus to provide custom and friendly rich widgets and an expansive library of modules to make communication and collaboration easy and successful. With a powerful module system, you can customize this platform by using third party tools, writing your own or integrating other software.</p>
										<div class="container" style={{display:"flex",justifyContent:"space-around"}}>
											<div class="row">
												<a href="https://github.com/codeuino/Social-Platform-Donut" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-github"></span></a>
												<a href="https://www.youtube.com/watch?v=wYk71_KY6Bk" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-youtube"></span></a>
												<a href="https://docs.codeuino.org/documentation/donut-docs/donut-documentation" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-file"></span></a>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-12">
										<h1>Codebadge</h1>
										<p>Codebadge is an open-source, user-friendly, visual-oriented collaboration tool which incorporates development of badges and integrating with forums in a customized way. Codebadge communicate skills, achievements and contribution tracking by providing visual symbols of accomplishments packed with verifiable data and evidence that can be shared across the web. It is a standard organization-oriented project  that provides an essential impetus to Admins and users with an appropriate dashboards.</p>
										<div class="container" style={{display:"flex",justifyContent:"space-around"}}>
											<div class="row">
												<a href="https://github.com/codeuino/Codebadge" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-github"></span></a>
												<a href="https://www.youtube.com/watch?v=s1gDGjJtmpk" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-youtube"></span></a>
												<a href="https://docs.codeuino.org/documentation/codebadge/codebadge-documentation" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-file"></span></a>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-12 mt-10"style={{display:"flex",justifyContent:"space-around"}}>
										<img src={codebadge}/>
									</div>
									
								</div>
							</div>
						</div>
						<div class="index-content">
						<div class="form-row">
						<div class="shadow-light-lg overflow-hidden">
									<div class="row">
									<div class="col-12">
									<div class="card shadow-lg p-3 mb-5 bg-white rounded overflow-hidden text-center text-lg-left comming-soon">
										<div class="row">
											
											<div class="col-md-7">
												<div class="card-body py-7 py-md-9">
													<h4 class="font-weight-bold">Design Project</h4>
													<p class="text-muted mb-0">To all the designers in the world something big is comming soon! Update your tools for the battle.</p>
												</div>
											</div>
											<div class="col-md-3">
												<h1 class="mt-5">Comming Soon</h1>
												</div>
												<div class="col-md-2">
												<img src={card} class="h-75 position-absolute right-0 mt-6 mr-3" alt="Productivity" />
											</div>
										</div>
									</div>
							</div>
										
									</div>
								</div>
							{/* </div> */}
						</div>
						</div>
						{/* <img src="https://d33wubrfki0l68.cloudfront.net/952392990c72334768fe8a1bbf2abb95f18dabfc/574b9/static/dashboard-screen-a4681e6a8cbc13190924ce784fdcc815.png" alt="DashboardScreenshot" class="img-fluid" /> */}
					</div>
					<section class="pt-30 mt-n15 bg-gray-200 position-relative"> 
					</section>
					</div>
					
					<div id="activity">
						<h1>Activities</h1>
						<div class="container">
							<div class="row"style={{display:"flex",justifyContent:"space-around"}}>
							<Card style={{ width: '18rem',marginBottom:"2vh",border:"0px" }}>
							<Card.Img variant="top" src="https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png" />
							<Card.Body>
								<Card.Title><h3>Google CodeIN 2019-20</h3></Card.Title>
								<Card.Text>
								Competition for preschool.
								</Card.Text>
								<a href="/#/gci19" class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More</u></a>
							</Card.Body>
							</Card>
							<Card style={{ width: '18rem' ,marginBottom:"2vh",border:"0px" }}>
							<Card.Img variant="top" src="https://cdn-media-1.freecodecamp.org/images/1*eGuxTZlES8o0YhnacR0Bwg.png" />
							<Card.Body>
								<Card.Title><h3>Google Summer of Code 2019</h3></Card.Title>
								<Card.Text>
								Competition for undergraduate students.
								</Card.Text>
								<a href="/#/gsoc19" class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More</u></a>
							</Card.Body>
							</Card>
							<Card style={{ width: '18rem' ,marginBottom:"2vh",border:"0px" }}>
							<Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1058940008176992256/Ckm74AnJ_400x400.jpg" />
							<Card.Body>
								<Card.Title><h3>Organised a workshop/event in New Delhi in collaboration with Women Who Code</h3></Card.Title>
								<Card.Text>
								Competition for undergraduate students.
								</Card.Text>
								<a href="/#/workshop19" class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More</u></a>
							</Card.Body>
							</Card>
							<Card style={{ width: '18rem' ,marginBottom:"2vh",border:"0px" }}>
							<Card.Img variant="top" src="https://kwoc.kossiitkgp.org/static/images/kwoc_logo.png" />
							<Card.Body>
								<Card.Title><h3>Kharagpur Winter of Code 2019</h3></Card.Title>
								<Card.Text>
								Competition for undergraduate students.
								</Card.Text>
								<a href="/#/kwoc19" class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More</u></a>
							</Card.Body>
							</Card>
							
							{/* <Card style={{ width: '18rem' ,marginBottom:"2vh",border:"0px" }}>
							<Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/440px-GSoC-icon.svg.png" />
							<Card.Body>
								<Card.Title><h3>Google Summer of Code 2019</h3></Card.Title>
								<Card.Text>
								Competition for undergraduate students.
								</Card.Text>
								<a href="https://github.com/codeuino" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-github"></span></a>
								<a href="https://github.com/codeuino" class="btn btn-primary shadow lift mr-1" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><span class="fe fe-github"></span></a>
							</Card.Body>
							</Card> */}
							
							</div>
						</div>
					</div>	
					
					{/* <section>
					
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-12 col-md-10 col-lg-7 text-center">
								<h2 class="font-weight-bold">Our Projects</h2>
								
							</div>
						</div>
				
					<div class="index-content">
						<div class="form-row">
							<div class="col-12 col-lg-6 d-lg-flex mb-2">
								<div class="card shadow-light-lg overflow-hidden">
									<div class="row">
										<div class="col-md-4">
											
										</div>
										<div class="col-md-8">
											<div class="card-body py-7 py-md-9 text-center">
												<h4 class="font-weight-bold">Social Platform Donut</h4>
												<p class="text-muted mb-0">We build social networking Kit/FOSS for various organisations to build up social environment for their organisation to showcase their productivity and services for their community along with the collaboration platform to interact with one another.</p>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-github" aria-hidden="true"></i></button></a>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-file-text-o" aria-hidden="true"></i></button></a>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-youtube" aria-hidden="true"></i></button></a>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-6 d-lg-flex mb-2">
								<div class="card shadow-light-lg overflow-hidden text-center">
									<div class="row">
										<div class="col-md-8">
											<div class="card-body py-7 py-md-9">
												<h4 class="font-weight-bold">Codebadge</h4>
												<p class="text-muted mb-0">Platform to give each contributor a token of appriciation to the organization one contributes to. It has an inbuild shareable illustrator with which admin can create new and awesome badges for there organization</p>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-github" aria-hidden="true"></i></button></a>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-file-text-o" aria-hidden="true"></i></button></a>
												<a href="https://github.com/codeuino/Social-Platform-Donut"><button class="btn btn-primary" role="button" style={{borderRadius:"50%"}}><i class="fa fa-youtube" aria-hidden="true"></i></button></a>
											</div>
										</div>
										<div class="col-md-4">
											<img src="https://d33wubrfki0l68.cloudfront.net/ba5935e6e74f0d62d2d06942c4dd9fa48f0869d7/5c3a5/static/assignment-illustration-da49a641c90ed9d5e50db4a9af1db59e.svg" class="h-75 position-absolute left-0 mt-7" alt="assignment" />
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div class="card shadow-light-lg overflow-hidden text-center text-lg-left">
									<div class="row">
										<div class="col-md-4 position-relative">
											<img src="https://d33wubrfki0l68.cloudfront.net/43f4bc67f1a2f7024a50fc5628212f40739c2766/88932/static/productivity-illustration-4ae99113baaad95577137c1480c31cc7.svg" class="h-75 position-absolute right-0 mt-6" alt="Productivity" />
										</div>
										<div class="col-md-8">
											<div class="card-body py-7 py-md-9">
												<h4 class="font-weight-bold">Designers be ready for blast</h4>
												<p class="text-muted mb-0">To all the designers in the world something big is comming soon! Update your tools for the battle.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<div class="mt-10"></div>
				<h2>Activities</h2>
					<div class="index-content">
						<div class="container">
							<div class="row">
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACuCAMAAABEK7LrAAAAw1BMVEX///8hlvP/jwBra2v7+/sAj/IAjfK2trbc3NxoaGhlZWVhYWFWVlbS0tLu7u729vasrKy+vr5cXFx1dXV+fn6hoaETk/P/iwDj4+OUlJQAifLw9v7KysqOjo72+v6amprf7P2GvPf/8uqGhobV5vxJovScx/jK4Pu41vo2nPNysvZkrfWrzvn/gQCQwffn8f3/tYX/qmj/mEQAfvD/2L7/xJ7/sHT/vJL/zKf/6t3/oFz/kyf/0bL/4c//mjz/jStHR0fCc0wGAAAK+0lEQVR4nO1b6XqjuBKFEZgtrAJsbAx2MDZe2k5ye5l0p3vm/Z9qxGJ2gZ18Dcxczp9ElgR1pKpSSSoIYsSIESNGjBgxYsSIESNGjBgxYkQfuJwujfXUbteRJB/CZu2bx0VTi4DcHwOnK3neic2eNE3S9Ff4JqcJamDuz4OmcpiTEUxzh5HTuTah/9esgP1ibZIJk/l6VVO/CHw6aUHO6xoMBYcrETTi++2mVOsEBzNrMGQiTo5IaAfHnP9yducjSWfV5LzMc0BYHHNEQiomclDn7em0XfthMV9JToK+xcVj4xdljdjQE4Tq7yS97ltcPIIaeRvQt7h4bOl26TPMB7uSXI53zcjk1LfAOGzumhC0/vctMAYF53sTBuq3NpM7eZiHYVpJje/9V07JfS4rnhJ/gIHj7m4aCPSB6lvuMjb7+xULYX7uW/ASNv79ihUzOQ3K4Hfv5YG069y4L+4Wwf7dPEInPBSLvxzod9lHysQcghd2Luf5h2iEmO93/erXYrVbm81aZZo02pDQtNnI1pz4p92lD1d8CYLT9nzw6UYa5pw8rqMd4vmwr91d5aigpttTEOCOX34T1uYe7f2ah3lCr3eryyISzFmsNie/WQnR3KH6fadb+UW7WdD0tqwrzurYbk90pyd35zZ5TLJ+yV4dm2cxxKo7Hk5boGsesQpyaltzutw4Bi1jSm8bvGlbFGDuO+PhrJsnZB40OtLVsZlJdyd3zqFRknnbQr1oZtLhEWTj7pxu1/FFg42ZZpfXQA2SmOuS+6QeEUr9V/jozOz2kGiFE6S8e/385en5+fnrtz9fCz+f5reOw+9GgJOkYCCfv/+Yxvjj5Sk/LTjlNP2uo8dF/ali4dDt8RkRuAKRecvV7TBEuo/o6yXJ3978/JXRiPDpKXPLzrrOc/Vx+FirHPnF7PWlxAMx+ZYxqT11mfdxcX2qIZK/vKnyQPqVaVedbna4qOewqnHBk8xlfflU5fHH9FfmvGrCA3rbBxGiOqTmMfWdj3/V8CgoV41u9XQ/uq0QyS3q32oUK0LqhBdVzerpBLXqt3Im8owh8ulz2mRfIXLo5wjiUlWt1OnUuKzESp7S/hXV7HZzmMGpEMn2259/YDRr+pL2r1h7T7ZOEA1E3jA8EJO0+7m8JPZ2qVgmYt5JpHzD1ReR96nWj7R/JUi5YSfzW1BzJpQaeyXOSok8p/0rMU5fxl7dk0xSIo/fce73z7R/JTLo63K0mrCRU/KvOCJZjFJdR3paEKvhL51t737WE5l+TUOUTUUxycmqDx41p3TmPlua65f26c+0QTXC6SnzaVdRjcJJzmNt9JvbWtXsZ/pJ6qisZ6FuHbL6tyqT6Uu2b6+9Bp73YCSr2vvoea7F27SkXdO/cucPtfkF5rFzHsS2NvOkkBb39itPZTp9yZ2k1m3LECadJzpuSMzJ1irX6PVp+mmasJi+fMn3rx+H/NasI+COGkuL2ucv36efEH48vRVO6Da4a5KODxprLT2RpORCH19ff/58fS2dz2MTPkyyU+U6NR2n3yDJAZ/aZZKr3y19hrqToEySfaskNWthrj/d2YZ30Xw/0sbE2eIcRYwOT+kaRzRcoBu169zMg6S7olGfcV2cE3zQ5LTl1Haaod2aT0rj1oOg9Xq601M6zKVAflLm20uFy2Ln465VckPQ6eGWP6HNlrGdkOdgleOy2ARtiQ9RBk63ofxufV4ffboxT4akTX99PgW7zWYXbNfHfXNaFz0nj4f1uumK/nfAcZzFZRUcJo1Zy9Gs7RFCVo0N5+R2E2bgOH2lOFKnNhW7AWZDykeHVLbvy5TN0Whed7rDan1vVnyBx76vI98qnMYgsoWHP6gPXoNm/9U0H0NJlk1w5+dVKY/hfWjVEkjieAwoDfuKu7/nIXtJdGjH4n7XRXedQXMbsBk/2Plo+lq8R7SmbFaIDGcBKSK4U7n2A7T0CJjTQ+yEDPZj3frUJSwG/EF74zFRlUjf4uJRd1VgxqjyyF9BDA3lr44Rgb3v+8ej7+8rO6ve8hxuQDGrzqT3h22wuTgEtVjtTudj8ZuZyaCi3hLyRCb+aVNYuC/Fz38GbOv5PBl6cqquEs7mmIX7wyZyHXH8Ad31vNQcNJHNYR87KPx1TZzhb5L+dpABY4rd+UjTjZ93Owd6Qh5qFG9ouOwOzf5osd32/NnhrWjTGWdw336PGDFixIgRI0aMGPFfAsXaNtu3EB8HuxQ4juN5Q7qjk6oDXBVF9bITkRUeAN3zdMBB+/ZuDPdQ/zhWNVxDZbFcRBE3XjNmdvv7qy+2OLBUxdlMZHTBkG/ux4BaIqzLPwAINF7BCQUBRollS4M3v74KlwNKMkSiejsPDBEbCpbNsqztaUsME13HETEe3NvfX4bIgTumIYdaIizgmPhpsuVilAtLhJCld0kSwwNe3cgV7LVUiP9eiRQqPY6pPqn0f0qkwSPc7yxYHRg1vzLW0rVjhaNmqGAkBYJVlpYqiSqbEJFZY2mlNmpDvfQkyVYMhk0miQ3/J7yIiCyiglicgRlyA7IoUWHVvWZvQxB7KnmWQCYoleMFgeeW0QsZGBaEWOOjguDpmhETkRQ+/AGK8dMUoTQhoqdxUBMivy4Zgoa6q8uQyMxCFULJuTB/M4T4YCgPyFlcH3krVAjjiZ5ZXgybUAHwVJHhgIferwLOs20FRBrIcNzStg0OAiUiQimAc0V7CfSIJmVoxYGUAKewM9HSllTo5T12xip8pFoeH1a4QsG6VU1FVqZz4ow1opffRySmzkKB53kkoip50AsHSuQ4hZBg9EQK+QSGkDnghgUGJERYCAykzlL8h5DdEhGLi/RWsjQbSQgj0RQOEbG1qAOqQMokxUDjFBKBWjSy8J41LZQWglgbJDsE4mWrgI/HF8lLqTyYJTItJQbEdipZXEwE1VLEzOABtMJWcmlGZhDGqhPajqIlyiKgh6DXhPKjWWII9QEpp6DpCRHgUTFf9S4ikgeWORchIk1TgZAUeA29yYqn2Ob1mQuWsWAGHxNRuCXSG94zEj+kCIW3i1fbn3kC4QoJydDYARQeQvC8hTxLBDUhwrnvIkIYID+HBtRlBvCJHFwrESQQ76rpNJS8lgi9HBE+abZEVsnpjBqBySvQh4jIAGYLlA2RziDVimQPLRmpVqzZBCKRqpacqhZaTdmcUcpe7vUSUi2dShjBTLXChyTeoYQPEUH+DsKkDwNDrUJLixWW0CptEDMuLoihfUtCbNQ2zIw9rrUSNyqmnhi5EZHQgRoPicYQtrCMB4tHRAw+tkzVzi99HyMSysjxBsO4AogdCzJyqLKKEJXQoENbNGL3q3DIF4sufyUSNvVE0eD4ROcIhhcsVpZl1uPR8LA8UGUKLSAQuV9XWFIyZQuhBsjIL0uUrCLlzUmifowIwVoQINeLfI8bq4kCOUHjgRctiAqaJiEpIBsKa1DEj4gIf0e1XFhrZWbigQcBCBpYhlOjQg14mhBFQTOL13ROM5Zh9MvqAu+hciHsYh5UQtSsiIihVYKddsgi41oWihiu8ywqrmWoSYgiKmFdrqCwLrIRllEiwQ1Um4+aUVDiWq6S9GYVd3ntLKnhUwk7qpox7tItBSKswhJSYv4i874dK/LqhWghX6RKBWTsvFpfe/1FylQ/H9IWmn4o1v0YKEWPhkuE2ke2cgMARIYvyyga+MhObgiQdMBznMDBf/mEIBNVPAh14z9wckTNWHY2XjuPGDFixIgRI0aMGDHi/xL/AA+560STIfdrAAAAAElFTkSuQmCC" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,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" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,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" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,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" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,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" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
								<div class="col-lg-4" style={{marginBottom:"2vh"}}>
									<a href="/">   
											<div class="card">
												<img src="data:image/png;base64,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" style={{width:"100%",height:"300px"}}/>
												<h4>Investment Strategy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<button href="/" class="btn btn-primary">Read More</button>
											</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					
				</section> */}
				
				<div className="associations">
					
				{/* <div></div> */}
					<div>
					
						
						{/* <div class="mt-10"></div> */}
						<div class="container" style={{justifyContent:"space-evenly",display:"flex"}}>
							<div class="row">
								<div class="col-6">
									<h2>Our Partners</h2>
									<img src={wwc} style={{width:"60%",height:"60%"}}/>
								</div>
								<div class="col-6">
									<h2>Our Sponsers</h2>
									<img src={dgocean} style={{width:"60%",height:"60%"}}/>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-10"></div>
					<div class="mt-10 container lift" style={{borderRadius:"25px",textAlign:"left",color:"white",backgroundColor:" #22247A",width:"100%"}}>
								<div class="row">
									<div class="col-md-6 co-12 ml-0 pt-6 pb-6 pl-8">
										<h2>Donate Us</h2>
										<p>COMMUNITY FUND AND PROJECT INCUBATION</p>
										<a href="https://opencollective.com/donut" class="ml-0 btn btn-primary shadow lift" style={{color:" #22247A",backgroundColor:"white"}}>Open Collective</a>
									</div>
									<div class="col-md-6 col-12" id="join">
										<p>Codeuino is a Non-Profit Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration.</p>
									</div>
								</div>
							</div>
							<section class="pt-30 mt-n15 bg-gray-200 position-relative">
					</section>
				</div>
		</div>
	</div>
        </div>
		</div>
    );
}

export default NewHome;
