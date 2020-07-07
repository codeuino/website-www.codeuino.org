import React from 'react'
const DonateCard = () => {
    return (
        <div class="mt-10 container lift" style={{borderRadius:"25px",textAlign:"left",color:"white",backgroundColor:" #22247A",width:"100%"}}>
			<div class="row">
			    <div class="col-md-6 co-12 ml-0 pt-6 pb-6 pl-8">
				    <h2>Donate Us</h2>
				    <p>COMMUNITY FUND AND PROJECT INCUBATION</p>
				    <a href="https://opencollective.com/donut" class="ml-0 btn btn-primary shadow lift" style={{color:" #22247A",backgroundColor:"white"}}>Open Collective</a>
			    </div>
			    <div class="col-md-6 col-12" id="join">
					<p>Codeuino is an Open Source Social Networking organisation that provides various robust frameworks solutions which could span the entire world through building all kinds of social environments, discussion portals and collaboration.</p>
				</div>
			</div>
		</div>
    )
}
export default DonateCard