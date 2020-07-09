import React, {useEffect} from 'react';
export default function ComponentName() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <div class="mt-12"></div>
      <div class="container">
        <div className="row">
          <div className="col-md-2"></div>  
          <div className="col-md-8" style={{maxWidth: "100%"}}>
              <h2 style={{"textAlign": "left"}}><b>Code of conduct</b></h2>
              <p className="text" style={{textAlign: 'justify'}}>The world we currently live in is full of technologies. Like the technical community as a whole, the Codeuino is an open Source organisation that helps to bring amazing people together to create, develop, design and make things with open technologies and share work for benefit of all.
              Codeuino Runs various technical projects which tends to bring various open source organisation at one place to build up a unity of Open Source.

              Our project is an important part of the Free Software ecosystem. We work with various projects to create high-quality solutions that span the entire software stack of world While the many Codeuino contributors develop code, smash bugs, write documentation, and help users, the Foundation acts as a guiding hand in the process and provides resources and infrastructure for existing and future building other open source Organisations.
              Codeuino is a place where we all learn, explore, teach and reflect in order to accomplish the missions.

              We have agreed upon the following Code of Conduct as a guide to our collaboration and cooperation.</p>
              <br/>
              <h2 style={{"textAlign": "left"}}><b> Be considerate</b></h2>
              <p className="text" style={{textAlign: 'justify'}}>Your work will be used by other people, and you in turn will depend on the work of others. Any decision you take will affect the users and the contributors working on particular project, So you should keep those consequences in mind while making any decision. For instance, if a user is working on some part of a project and you immediately you releases the next part of the same project then it can lead with some problems and the other user may find it difficult in concentrating on previous part which may result in either losing or getting out of track.</p>

              <h2 style={{"textAlign": "left"}}><b> Be Respectful</b></h2>
              <p className="text" style={{textAlign: 'justify'}}>Codeuino community believes in healthiness and respectfulness of every decision made. Not all of us will agree all the time, but disagreement is no excuse for unacceptable behavior and manners. We might all experience some frustration now and then, but we cannot allow that frustration to turn into a personal attack. It’s important to remember that a community where people feel uncomfortable or threatened is not a productive one. So Members should be respectfulful while conversating and adore and accept every decision made by the community or group of people. Violence, threats of violence or violent language directed against another person should not be included.</p>


              <p className="text" style={{textAlign: 'justify'}}>Be careful in the words that you choose. We are a world-wide Community of experts and potential contributors .Be kind to others. Do not insult or put down other aspirants. Harassment and other exclusionary behavior aren't acceptable. This includes, but is not limited to:</p>
              <p className="text" style={{textAlign: 'justify'}}>Violent threats or language directed against another person for any type of decision can make you dismiss from the community.</p>

              <h2 style={{"textAlign": "left"}}><b> Be careful in the words you choose</b></h2>

              <p className="text" style={{textAlign: 'justify'}}>Discriminatory jokes not allowed while talking.
                Posting sexually explicit or violent material can make you banned from this community and the issue will be raised about this. Personal insults, especially those using racist or sexist terms.
                Repeated harassment of others on the basis of color, size, shape, caste etc is not allowed. In general, if someone asks you to stop these types of behaviour , then you have to stop but if you fail to do so then you will never allowed to collaborate with this community.
                We have agreed upon the following Code of Conduct in order to maintain the unity, cooperation and collaboration.
                </p>

              <h2 style={{"textAlign": "left"}}><b>Be collaborative</b></h2>

              <p className="text" style={{textAlign: 'justify'}}>Codeuino community has various projects which works on the basis of working together and collaboration. So Collaboration is the essential part for an Open Source community. Collaboration between teams that each user have their own goal and vision which is essential; for the whole to be more than the sum of its parts, each part must make an effort to understand the whole.
              Collaboration reduces redundancy and improves the quality of our work. Internally and externally, we celebrate good collaboration. Wherever possible, we work closely with upstream projects and others in the free software community to coordinate our efforts. We prefer to work transparently and involve interested parties as early as possible.</p>

              <h2 style={{"textAlign": "left"}}>
              <b>Credit</b></h2>
              <p className="text" style={{textAlign: 'justify'}}>A good leader does not seek the limelight, but celebrates team members for the work they do. Leaders may be more visible than members of the team, good ones use that visibility to highlight the great work of others. Codeuino treats everyone equally and everyone is appreciated for every single or small change made by every contributor in the community and everyone is allowed to celebrate the success.
            </p>
            <h2 style={{"textAlign": "left"}}>
              <b>Ask for help when unsure</b>
            </h2>
            <p className="text" style={{textAlign: 'justify'}}>Nobody is expected to be perfect in this community. Asking questions early avoids many problems later, so questions are always encouraged, though they may be directed to the appropriate forum but will be appropriate. Those who are asked for assistance should be responsive and helpful.
            </p>

            <h2 style={{"textAlign": "left"}}>
              <b>Step down considerately</b>
            </h2>
            <p className="text" style={{textAlign: 'justify'}}>When somebody leaves or disengages from the project, we ask that they do so in a way that minimises disruption to the project. They should tell people they are leaving and take the proper steps to ensure that others can pick up where they left off. Moreover if the project has been created by single person that would be considered under License of that user in the community.
            </p>

            <h2 style={{"textAlign": "left"}}>
              <b>Scope.</b>
            </h2>
            <p className="text" style={{textAlign: 'justify'}}>This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. For examples if a person is representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. This code of conduct applies to all communication: this includes IRC, the mailing list, private emails and other forums such as Skype, Google+ Hangouts, other social sites, etc.
            </p>
            <p className="text" style={{textAlign: 'justify'}}>
              Some content has been taken from <a href="https://www.ubuntu.com/community/code-of-conduct">Ubuntu</a> and <a href="https://www.djangoproject.com/conduct/">Django</a> Code of Conduct. This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>. You may re-use it for your own project, and modify it as you wish.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>    
    </div>
  </div>
  );
}
