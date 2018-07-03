># Welcome to the Newcomers Guide !!!
 
 
>*Codeuino* is a non-profit organization that helps to bring amazing people together to create, develop, design and make things with Open Technologies and share work for the benefit of all.
Our project is an important part of Free Software Ecosystem. We work with other free projects to create high-quality solutions that span the entire software stack. While the many *Codeuino* contributors develop code, smash bugs, write documentation, and help users, the Foundation acts as a guiding hand in the process and provides resources and infrastructure. It steers releases, determines what software is officially part of the project, and acts as an official face of the *Codeuino* Project to the outside world, through it delegates most of its authority to specialized teams. Therefore, this guide would help you to become an integral part of the Community.
 
 >## **Working with Codeuino**

>Everyone in the *Codeuino* community is expected to follow our Code of Conduct. To become part of the *Codeuino* developers team, there are a few steps you need to complete. The newcomer process is as follows:

>You will start as a newcomer, which is kind of a trial. If you complete the following tasks, you will become a developer at *Codeuino*:-

>1. Read the issues.
>2. Before Solving, leave a comment suggesting your will.
>3. After being assigned the issue, solve the same.
>4. Send the Pull Request to the **“master”** branch.
>5. After the merge is successful, review the pull request.

>**Note:-** After you have solved an issue, please don’t take up any more, until assigned.

>Make sure you follow the steps as mentioned, and hence it will make you familiar with the workflow of the organization. Also, you would successfully be able to contribute to the community.

>### Step 1. Familiarize, Communicate and Get Involved with the Community
 
>>To get started, the first step is to meet the community. We use **Slack** to communicate, and there the helpful community will guide you. Slack is an instant messaging service used by developers and users of **Github**. Slack uses chat rooms, where developers can join in and can talk about a particular topic.
>>*Codeuino* has two types of chat rooms (channels) – **Meeting channel** and **General channel.**

>>**Meeting chat room** is related to a specific details and **General chat rooms** is related to general discussion topics like conferences, workshops and it is here where we welcome Newcomers and guide them. This is the main chat room of *Codeuino*. Everything related to conferences and off topics are discussed here.

>>The list of all available chat rooms are available here - channel list. But before joining the community, here are few things that you should keep in mind.

>>>1. Only log into Slack using your GitHub account.
>>>2. It will be appreciated if your Github username and slack username is same which will make easier for all to identify you.
>>>3. Do not mention users unrelated to a particular issue/question. This also means you should not mention the person that was last online. For example, mentioning someone on a Github issue will subscribe them to that issue, even if they don’t want to be a part of the discussion. However, mentioning someone is okay if they really need to see your message.
>>>4. Don’t repeatedly mention people in an ongoing conversation. 
>>>5. You should ask someone before mentioning them.

>>Now you are ready to join *Codeuino* community at *Codeuino* Slack. The newcomers would be greeted by our Slack bot which will invite you to introduce yourself to the team.

>>**Note:-** If you have questions, make sure they are precise and have the proper documentation style. You must feel free to contact us on Slack while you encounter any problem.

>>Also, we use **Hangouts**, to conduct our discussions and for video conferencing. So you must have an account on the same. Also, we recommend you that our Organization Team is always there for your help, but irrelevant doubts will create unnecessary confusion during discussions.
 
>### Step 2. Proposing a Project 

>>If you have some interesting ideas about a new project that you think our organization should work upon, you are most welcome to do so. To propose a new project follow the steps mentioned below :-

>>1. We have created a different channel **#newproject** on Slack for our organization where you can propose your project. In this channel we have the team which decides the projects that our organization should work upon.
>>2. If your project is unanimously accepted by the team then you will be allowed to create issues regarding your project. But until then, you cannot do so.
>>3. As soon the project is accepted you will be the official admin of that project and you will be free to create issues. You are allowed to assign the issue to anyone you feel worthy( if the one is interested to do it ). Please do not mention anyone without a reason.
>>4. Also, you can then label the issue as **“Work In Progress” (wip)**, so that others do not work on it.
>>5. Remember to close the issue as soon as it is solved. 

>### Step 3. Working on the Issue

>>Help is always welcome, be it any form, whether it is working on the documentation process or solving an issue. It is the best way to get along with the community. You can view all the issues on our GitHub Organization.

>>**Important !!** You need to be logged in before you follow the issues link. They will give you a glimpse of what it’s like to work with us and what the workflow is like.
 
>>Also, for those who are new to Git and GitHub, our guidelines will help you throughout the process.
 
>>**Cloning our GitHub repository:-** The **git clone** command is used to copy an existing Git repository from a server to the local machine. To clone our git repository follow these steps in your terminals:-

>>>1. **cd < path where you would like the clone to create a directory >**
>>>2. copy and paste this code into your terminals for cloning our website code. Similarly just change the link to clone the other repositories **git clone https://github.com/Codeuino/website-www.Codeuino.org.git**
 
>>*To clone any other repository:-* Go to that GitHub repository. Click on clone and download, copy the link and paste in the place such as:-
**git clone < copy your link here >**
 
>>Now pick an issue which isn’t assigned and which you would like to fix. Leave a comment that you would like to work on that particular issue. This way we don’t have multiple people working on the same issue at the same time. After this, you can start working on it.
 

>>**Caution:-** You should never work on an issue without being assigned. Also take up the issue, only when you know what the problem is and how to solve it.

>>You shouldn’t close any pull request, instead mark them as *work in progress(wip)*.


>### Step 4. Forking and Testing the Modifications
 
>>You should first fork the repository by visiting the official repository of *Codeuino* and clicking on the button **Fork**. This step is needed only once.
 
>>**Important:-**  It is important that you **DO NOT** make your changes on the master branch
of your forked repository as you cannot have two pull requests using the same branch name. Therefore, if your fork’s master has been used in a pull request and you decide to work on a different issue you will have to branch eventually. Differently every new commit that you make on your master branch will get attached to the initial pull request and that will result in altering the purpose of that request.
 
>>You can create a branch per set of changes. To do that run:
**$ git checkout -b branchname**
where your branch name can be anything other than master. The scope is your forked repository. The branch name will be shown on pull request.Before pushing the pull request, you must test your changes with some concrete examples. 
 
>### Step 5. Making Commits
 
>>Now that you’ve solved the issue and have tested it, and you think it is ready to be merged, create a commit and push it to your fork, using:
**$ git push -u myfork &lt;branchname&gt**
where myfork is the name of your fork that you added at the previous step.

>>When writing a commit message:-
>>>1.    Give a one line summary of the change.
>>>2.    Explain the issue you have solved.
>>>3.    When problem is in an issue add “Fixes #654”
>>>4.    Also mention the hash if the problem was introduced in the previous commit.

>### Step 5. Sending a Pull Request

>>Now that your commit has been sent to your fork, it is time to create a Pull Request. You can do this by accessing your fork on GitHub and clicking New Pull Request.
 
>>**Note:-** Comments are always welcomed, as the readability of the code becomes easy for the other developers.
  
>>**Creating a Pull Request:-** If you've forked a repository and made changes to the fork, you can ask that the upstream repository accept your changes by creating a pull request.
 
>>**Note:** To open a pull request in a public repository, you must have write access to the head or the source branch or, for organization-owned repositories, you must be a member of the organization that owns the repository to open a pull request.

>>>1. Navigate to the original repository you created your fork from.
>>>2. To the right of the Branch menu, click **New pull request**.
>>>3. On the Compare page, click **compare across forks**.
>>>4. Confirm that the base fork is the repository you'd like to merge changes into. Use the base branch drop-down menu to select the branch of the upstream repository you'd like to merge changes into.
>>>5. Use the head fork drop-down menu to select your fork, then use the compare branch drop-down menu to select the branch you made your changes in.
>>>6. Type a title and description for your pull request.
>>>7. If you do not want to allow anyone with push access to the upstream repository to make changes to your PR, deselect **Allow edits from maintainers**.
>>>8. Click **Create pull request**.
 


>### Step 6. Review

>>After creating a Pull Request, your PR moves to the review process. The reviewer will either:-

>>>1. Merge your pull request.
>>>2. Merge your pull request with their own changes.
>>>3. Ask you to make changes.
>>>4. Close your pull request, by giving necessary reasons.
 
>>**Note:-** It is highly recommended that you review other contributor’s PR, as it will enhance your knowledge about the issue and your chances of becoming a developer will increase.
 
>>You can resolve simple merge conflicts that involve competing line changes on *Github*.
>>>1. Under your repository name, click Pull requests.
>>>2. In the "Pull Requests" list, click the pull request with a merge conflict that you'd like to resolve.
>>>3. Near the bottom of your pull request, click **Resolve conflicts**.
>>>4. Decide if you want to keep only your branch's changes, keep only the other branch's changes, or make a brand new change, which may incorporate changes from both branches. Delete the conflict markers <<<<<<<, =======, >>>>>>> and make the changes you want in the final merge.
>>>5. If you have more than one merge conflict in your file, scroll down to the next set of conflict markers and repeat steps four and five to resolve your merge conflict.
>>>6. Once you've resolved all the conflicts in the file, click **Mark as resolved**.
>>>7. Once you've resolved all your merge conflicts, click **Commit merge**. This merges the entire base branch into your head branch.
>>>8. To merge your pull request, click **Merge pull request**. For more information about other pull request merge options, see "Merging a pull request”.

>>**Note:-** for any other queries regarding git refer the book whose link is https://goalkicker.com/GitBook/ .

>***Hope that Helps !!!***
 

