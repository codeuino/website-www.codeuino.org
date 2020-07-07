import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const TeamCard = (props) => {
    console.log(props)
    return (
        <Card style={{marginBottom:"2vh",border:"0px"}}>
        <Image src={props.member.profile} wrapped ui={false}/>
        <Card.Content>
    <Card.Header>{props.member.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.member.post}</span>
          </Card.Meta>
          <Card.Description>
            {props.member.headline}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div class="container" style={{display:"flex",justifyContent:"space-evenly",marginTop:20}}>
             <a class="btn btn-primary mr-1" href={props.member.github} role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
            <a class="btn btn-primary mr-1" href={props.member.linkedin} role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </div>
        </Card.Content>
      </Card>
    )
}
export default TeamCard