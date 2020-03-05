import React, { Component } from 'react';
import axios from "axios";
export class TwitterFeeds extends Component {
    constructor(props){
        super(props);
        this.state={
            tweets:[]
        }
        
    }

    componentDidMount(){
          axios.get("https://cors-anywhere.herokuapp.com/https://tweet-help.herokuapp.com/tweets",{params:{username:"codeuino"}})
            .then(res=>{
                let tweets = res.data.tweets
                this.setState({'tweets':tweets})
            })
            .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                <h2>Latest Updates</h2>
                <div class="container">
                    <div class="row" style={{justifyContent:"space-around"}}>
                        {
                            this.state.tweets.map((content,index)=>{
                                let url="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fcodeuino%2Fstatus%2F"+content[5];
                                console.log(url)
                                return <iframe border="0" scrolling="no" frameborder="0" height="300" src={url} ></iframe>
                                }
                            )
                        }
                    </div>
                    <br/>
                    <a href="https://twitter.com/codeuino" class="shadow lift mr-1" style={{color:"#22247A"}}><u>Read More on Twitter</u></a>
                </div>
            </div>
        );
    }
}

export default TwitterFeeds;
