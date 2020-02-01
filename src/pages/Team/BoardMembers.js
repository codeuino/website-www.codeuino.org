import React from 'react'
import TeamCard from './TeamCard'
import jaskirat from './Jaskirat.jpeg';
import devesh from './Devesh.jpeg';
import shivam from './Shivam.jpeg';
import vaibhav from './Vaibhav.jpeg';
import './TeamCardWrapper.css'
var BoardMembers = [
    {
        name:"Jaskirat Singh",
        post:"Founder",
        headline:'Matthew is a musician living in Nashville.',
        profile:jaskirat,
        github:'',
        linkedin:''
    },
    {
        name:"Devesh",
        post:"Donut Maintainer",
        headline:'Matthew is a musician living in Nashville.',
        profile:devesh,
        github:'',
        linkedin:''
    },
    {
        name:"Vaibhav D. Aren",
        post:"Co-Founder",
        headline:'Matthew is a musician living in Nashville.',
        profile:vaibhav,
        github:'',
        linkedin:''

    },
    {
        name:"Shivam Luthra",
        post:"CodeBadge Maintainer",
        headline:'Matthew is a musician living in Nashville.',
        profile:shivam,
        github:'',
        linkedin:''

    },
    {
        name:"Ayush Nagar",
        post:"CodeBadge Maintainer",
        headline:'Matthew is a musician living in Nashville.',
        profile:'https://avatars1.githubusercontent.com/u/32647423?s=460&v=4',
        github:'',
        linkedin:''

    },
    {
        name:"Siddharth",
        post:"Designer",
        headline:'Matthew is a musician living in Nashville.',
        profile:'https://avatars1.githubusercontent.com/u/33068322?s=460&v=4',
        github:'',
        linkedin:''

    },
]
const InjectedJSX = BoardMembers.map((member,index) => {
    return <TeamCard member={member}/>
})
const BoardMembersWrapper = () => {
    return (
        <div className="grid">
            {InjectedJSX}
        </div>
    )
}
export default BoardMembersWrapper