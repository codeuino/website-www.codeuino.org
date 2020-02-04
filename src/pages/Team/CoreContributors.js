import React from 'react'
import TeamCard from './TeamCard'
import './TeamCardWrapper.css'

var CoreContributors = [
    {
        name:"Rupeshiya",
        post:"Core Colaborator",
        headline:'Aspiring Full Stack Web Developer | Love developing. | Can Convert Coffee into Code',
        profile:'https://avatars0.githubusercontent.com/u/31209617?s=460&v=4',
        github:'https://github.com/Rupeshiya',
        linkedin:''
    },
    {
        name:"Tushar",
        post:"Core Colaborator",
        headline:'Student Mentor at Google Code-in',
        profile:'https://avatars2.githubusercontent.com/u/34160672?s=460&v=4',
        github:'https://github.com/TG1999?tab=overview&org=codeuino',
        linkedin:''
    },
    {
        name:"Shivansh",
        post:"Core Colaborator",
        headline:'Student Mentor at Google Code-in',
        profile:'https://avatars3.githubusercontent.com/u/43990819?s=460&v=4',
        github:'',
        linkedin:''
    },
    ,
    {
        name:"Lakshya Batra",
        post:"Core Colaborator",
        headline:'GSOCer 2019 Codeuino',
        profile:'https://avatars1.githubusercontent.com/u/29687362?s=460&v=4',
        github:'https://github.com/lakshyabatman/',
        linkedin:''
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