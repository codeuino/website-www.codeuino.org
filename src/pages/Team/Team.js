import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import {Card,Button} from 'react-bootstrap'

import './Team.css';
import BoardMembersWrapper from './BoardMembers'
import CoreContributorsWrapper from './CoreContributors'
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn.js';
import axios from 'axios';
import $ from 'jquery';
class Team extends Component {
    
    constructor(props){
        super(props);
        this.state={
            boardMembers:[],
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
            return <div class="col-xs-2 lawyer-post g-mb-50 m-2"><a href={contri.url}><img class="img-responsive full-width g-mb-25" title={contri.name} src={" "+contri.image+" "} alt="" style={{width:"10vw",height:"10vw", borderRadius:"50%"}}/></a> </div>
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
          <BoardMembersWrapper/>
        </div>
    <h2>Our Backbone</h2>
      <div class="container pt-8 pb-6" style={{display:"flex",justifyContent:"space-evenly"}}>
          <CoreContributorsWrapper/>
      </div>
            <h2>Our Awesome Contributors</h2>
            <div id="cotributors" className="container d-flex">
                <div class="row" style={{display:"flex",justifyContent:"center"}}>
                    {contrilist}
                </div>
            </div>
            </div>
    </div>
    </div>
    </div>
    <ScrollToTopBtn />
            </>
        );
    }
}



export default Team;
