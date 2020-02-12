import React from 'react'
import ActivityCard from '../../../components/Activities/ActivityCard'
import KWoC from '../images/kwoc_logo.png'
import workshop19 from '../images/workshop.jpg'
import './common.css'
var activities = [
    {
        img:'https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png',
        title:'Google CodeIN 2019-20',
        text:'Competition for preschool.',
        link:'/#/gci19'
    },
    {
        img:'https://cdn.shortpixel.ai/spai/q_lossy+ret_img/https://numfocus.org/wp-content/uploads/2017/03/vertical-gsoc-logo_1-1.jpg',
        title:'Google Summer of Code 2019',
        text:'Competition for undergraduate students.',
        link:'/#/gsoc19'
    },
    {
        img:KWoC,
        title:'Kharagpur Winter of Code 2019',
        text:'Competition for undergraduate students.',
        link:'/#/kwoc19'
    },
    {
        img:workshop19,
        title:'Organized a Workshop/ Event At New Delhi Together With Women Who Code',
        text:'Competition for undergraduate students.',
        link:'/#/workshop19'
    },
]

const MapActivites = activities.map((activity,index)=>{return <ActivityCard key={index} activity={activity}/> })


const Activities = () => {
    return (
        <div id="activity">
				<h1 className="component-heading">Activities</h1>
				<div class="container">
				<div class="row"style={{display:"flex",justifyContent:"space-around"}}>
                    {MapActivites}
				</div>
			</div>
		</div>	
    )
}

export default Activities