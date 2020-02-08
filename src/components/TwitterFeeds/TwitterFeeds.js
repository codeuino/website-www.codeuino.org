import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const TwitterFeeds = () => {
    return (
        <div class="container" style={{justfyContent:"space-evenly"}}>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="codeuino"
            />
      </div>
    );
}

export default TwitterFeeds;
