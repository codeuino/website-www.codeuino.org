
CodeBadge is a project which takes official GitHub API into consideration and makes a fading badges graph for each organization. This project would be organization-oriented project i.e. each organization will need to serve it on a reserved route, say /codebadge. For eg: If coala wants to integrate CodeBadge, they’ll serve this project on coala.io/codebadge. Our aim is to make CodeBadge as a standard such that people start using it as a measure in order to test their skill level/track their progress in a specific community. For eg, Competitive Coding guys test their skills by asking each other what’s their rank on HackerRank / HackerEarth! Likewise, open-source contributors should start asking, **Hey! What badge did you recently earned on CodeBadge!**

### Why do we need CodeBadge?
- To track and incorporate contributors’ progress in the community or community’s progress as a whole. Making a one-stop platform to find each contributor’s progress rather than finding it separately for each contributor.
- To show the progress by awarding some really cool badges to top contributors in order to keep them connected towards the community.
- Auto-assign related issues to most active contributors using tagging to keep contributors connected.


### Features

- GitHub Heatmaps are for each person’s profile and can be observed from visiting each contributor’s profile specifically. Whereas, our aim is to show a complete fading graph for an organization, which would hence be capable of showing each contributor’s progress as well.
- There would be some pre-built badges by us as well as we offer the organization to design their own badges. This can be done by the illustrator which we are developing for this project.
- Pre-defined badges could be based on some achievement levels like Baby-Steps, Not-a-Newbie, Almost-Pro, Legendary-Committer, etc which could be awarded by setting some convention like a number of merged PRs or difficulty of issues resolved by the person.
- Creating/Integrating a bot with our platform which would auto-assign/auto-suggest related issues to the top-most active contributors of the community on the basis of tagging, like what their recent PRs were based upon.
- Admin Dashboard creation which would show notifications/cards for whosoever earned any new badge. Community Admins should have some extra privileges to award any extra badge to an extraordinary contributor say Committer-of-the-Month, Top-Contributor, GOAT(Greatest-of-all-Times), etc manually.
- The illustrator will provide the user with an interface which will help the organization to design their own badges. It has a special feature of making a sketch outline of any image which is uploaded. Once a template is uploaded by any user it will also be available to be used by other organizations. It will also provide a feature to make a shareable interface so that more than one person of an organization can work on the same badge at the same time.


## How does it work

For instance, suppose a contributor “X” has been quite active within the community by working on various PRs, opening and resolving various issues, active on chat channels but after a month “X” gets disappeared. So by using this dashboard they will have a badge interface. There will be a badge attached in front of the name of the contributor. Let the name of the badge be “Y” so this badge will have a unique color. So as the time passes like “ a day went, 1 week went, 2 weeks went, a month, etc) this badges will get keep on fading. And Every fade color will have a unique reason. For example, when a contributor made a PR, the badge appeared “Red” in color. This badge will remain in the same color as long as he/she is contributing. Assume that contributor stops contributing and has not contributed for a week so his badge will become green in color. And this will keep on notifying mainaters, Admins about their disappearing. This way the organisations will have greater eye on the contributors and can help them sustain with the community.