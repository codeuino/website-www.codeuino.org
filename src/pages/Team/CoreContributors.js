import React from 'react'
import TeamCard from './TeamCard'
import aselPeiris from './AselPeiris.png'
import './TeamCardWrapper.css'

var CoreContributors = [
    {
        name:"Rupeshiya",
        post:"Core Colaborator",
        headline:"GSoC '20 Codeuino",
        profile:'https://avatars0.githubusercontent.com/u/31209617?s=460&v=4',
        github:'https://github.com/Rupeshiya',
        linkedin:''
    },
    {
        name:"Asel Peiris",
        post:"Core Colaborator",
        headline:"GSoC '20 Codeuino",
        profile:aselPeiris,
        github:'https://github.com/AuraOfDivinity',
        linkedin:''
    },
    {
        name:"Devansh Agarwal",
        post:"Core Colaborator",
        headline:"Maintains Codeuino.org",
        profile:'https://avatars3.githubusercontent.com/u/48180687?s=460&v=4',
        github:'https://github.com/DevanshCodes',
        linkedin:'https://www.linkedin.com/in/devansh-agarwal-739702189/'
    }
]
const InjectedJSX = CoreContributors.map((member,index) => {
    return <TeamCard member={member}/>
})
const CoreContributorsWrapper = () => {
    return (
        <div className="grid">
            {InjectedJSX}
        </div>
    )
}
export default CoreContributorsWrapper