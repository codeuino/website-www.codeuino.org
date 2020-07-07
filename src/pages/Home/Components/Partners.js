import React from 'react'
import wwc from '../images/wwc.jpeg';
import dgocean from '../images/dgocean.svg';
import DonateCard from '../../../components/DonateUs/Donate'
import './common.css'
const Partners = () => {
    return (
        <section>
				<div>				
						<div className="container" style={{justifyContent:"space-evenly",display:"flex",marginTop:50}}>
							<div class="row">
								<div class="col-6">
									<h2 className="component-heading">Our Partners</h2>
									<img src={wwc} alt="image" style={{width:"60%"}}/>
								</div>
								<div class="col-6">
									<h2 className="component-heading">Our Sponsers</h2>
									<img src={dgocean} alt="image" style={{width:"40%"}}/>
								</div>
							</div>
						</div>
					</div>
                    <div className="mb-5">
					    <DonateCard/>
                    </div>

				</section>
    )
}
export default Partners