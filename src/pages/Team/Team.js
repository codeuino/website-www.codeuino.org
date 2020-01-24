import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {Card,Button} from 'react-bootstrap'
import jaskirat from './Jaskirat.jpeg';
import devesh from './Devesh.jpeg';
import shivam from './Shivam.jpeg';
import vaibhav from './Vaibhav.jpeg';
import './Team.css';
import axios from 'axios';
import $ from 'jquery';
import { Card, Icon, Image } from 'semantic-ui-react'
class Team extends Component {
    
    constructor(props){
        super(props);
        this.state={
            contributors:[]
        }
    }
    // var jsonURL = "https://s3.ap-south-1.amazonaws.com/pr-webhook-contributors-json/contributors.json";
    //     $.getJSON(jsonURL, function(json) {
    //         $.each(json, function() {
    //             var contributorDiv = "";
    //             contributorDiv += '<div class="col-xs-1 col-3xs-12 lawyer-post g-mb-50"><a href=' + this.url + '><img class="img-responsive full-width g-mb-25" src="' + this.image + '" alt=""></a> </div>';
    //             // contributorDiv += '<p class="g-fs-10 text-uppercase center-align">' + this.name + '</p>';
    //             // contributorDiv += '<a href=' + this.url + ' class="btn-u btn-u-lg btn-u-red btn-u-upper github-button"><i class="fa fa-github"></i> </a> </div>'
    //             $('#contributors').append(contributorDiv);
    //         });
    //     });
    componentDidMount(){
        var jsonURL = "https://s3.ap-south-1.amazonaws.com/pr-webhook-contributors-json/contributors.json";
        axios.get(jsonURL)
            .then((res)=>{this.setState({contributors:res.data});console.log(this.state)});
    }
    render() {
        let contributors=this.state.contributors;
        // console.log(contributors)
        var contrilist = contributors.map((contri)=>{
            return <div class="col-xs-2 lawyer-post g-mb-50"><a href={contri.url}><img class="img-responsive full-width g-mb-25" src={" "+contri.image+" "} alt="" style={{width:"10vw",height:"10vw", borderRadius:"50%"}}/></a> </div>
        })
        return (
            <>
            <div>
      <div>
            <div id="___gatsby">
		<div style={{outline:"none"}} tabindex="-1" role="group" id="gatsby-focus-wrapper">
			<div class="mt-12"></div>
            <h2>Board</h2>
        <div class="container pt-8 pb-6">
			
      <div class="row"style={{display:"flex",justifyContent:"space-between"}}>
        
			<div class="col-md-4">
				
			<Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src={jaskirat} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>Jaskirat Singh</Card.Header>
      <Card.Meta>
        <span className='date'>Founder</span>
      </Card.Meta>
      <Card.Description>
        Open Source Enthusiast.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src={devesh} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>Devesh</Card.Header>
      <Card.Meta>
        <span className='date'>Donut Maintainer</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src={vaibhav} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Vaibhav D. Aren</Card.Header>
      <Card.Meta>
        <span className='date'>Co-Founder</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src={shivam} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Shivam Luthra</Card.Header>
      <Card.Meta>
        <span className='date'>CodeBadge Maintainer</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src="https://avatars1.githubusercontent.com/u/32647423?s=460&v=4" wrapped ui={false} width={{maxWidth:"350px"}}/>
    <Card.Content>
      <Card.Header>Ayush Nagar</Card.Header>
      <Card.Meta>
        <span className='date'>CodeBadge Maintainer</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src="https://avatars1.githubusercontent.com/u/33068322?s=460&v=4" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Siddharth</Card.Header>
      <Card.Meta>
        <span className='date'>Designer</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  </div>
</div>
<h2>Our Backbone</h2>
        <div class="container pt-8 pb-6" style={{display:"flex",justifyContent:"space-evenly"}}>
			<div class="row">
			<div class="col-md-4">
				
			<Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src="https://avatars0.githubusercontent.com/u/31209617?s=460&v=4" wrapped ui={false}/>
    <Card.Content>
      <Card.Header>Rupeshia</Card.Header>
      <Card.Meta>
        <span className='date'>Core Colaborator</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src="https://avatars2.githubusercontent.com/u/34160672?s=460&v=4" wrapped ui={false} width={{maxWidth:"350px"}}/>
    <Card.Content>
      <Card.Header>Tushar</Card.Header>
      <Card.Meta>
        <span className='date'>Core Colaborator</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  <div class="col-md-4">
  <Card style={{marginBottom:"2vh",border:"0px"}}>
    <Image src="https://avatars3.githubusercontent.com/u/43990819?s=460&v=4" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Shivansh</Card.Header>
      <Card.Meta>
        <span className='date'>Core Colaborator</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div class="container" style={{display:"flex",justifyContent:"space-evenly"}}>
    <a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-github" aria-hidden="true"></i></a>
		<a class="btn btn-primary mr-1" href="https://github.com/codeuino/codebadge" role="button" style={{borderRadius:"50%",backgroundColor:" #22247A"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </div>
    </Card.Content>
  </Card>
  </div>
  </div>
  </div>
            <h2>Our Awesome Contributors</h2>
            <div id="cotributors" style={{marginLeft:"6vw",display:"flex",justifyContent:"center"}}>
                <div class="row">
                    {contrilist}
                </div>
            </div>
            </div>
    </div>
    </div>
    </div>
            </>
        );
    }
}


Team.propTypes = {
    
};


export default Team;
