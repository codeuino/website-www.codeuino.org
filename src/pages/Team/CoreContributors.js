import React from 'react'
import TeamCard from './TeamCard'
import './TeamCardWrapper.css'

var CoreContributors = [
    {
        name:"Rupeshiya",
        post:"Core Colaborator",
        headline:'Matthew is a musician living in Nashville.',
        profile:'https://avatars0.githubusercontent.com/u/31209617?s=460&v=4',
        github:'',
        linkedin:''
    },
    {
        name:"Tushar",
        post:"Core Colaborator",
        headline:'Matthew is a musician living in Nashville.',
        profile:'https://avatars2.githubusercontent.com/u/34160672?s=460&v=4',
        github:'',
        linkedin:''
    },
    {
        name:"Shivansh",
        post:"Core Colaborator",
        headline:'Matthew is a musician living in Nashville.',
        profile:'https://avatars3.githubusercontent.com/u/43990819?s=460&v=4',
        github:'',
        linkedin:''
    },
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