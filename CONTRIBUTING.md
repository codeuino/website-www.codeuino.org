
# Contributing to Codeuino

🎉 First off, thanks for taking the time to contribute! This project would not be possible without people like you. 🎉

## How Can I Contribute?


#### Project requirements

- [NodeJS](https://nodejs.org) (v8.10 or higher)
- [npm](https://www.npmjs.com) (v4 or higher)
- [yarn](https://yarnpkg.com) (v1 or higher)

#### Local setup

### Installing depencencies and running the app
You should have `node` installed in your system.  
* Fork the repository

* Clone the repository 
  `git clone https://github.com/<username>/website-www.codeuino.org.git`
  where \< username \> is your username

* Install create-react-app
  `npm install -g create-react-app`

* `cd website-www.codeuino.org`

* `npm install`

* `npm start`


This will:
1. Install all JavaScript dependencies.

You can then access the website at [http://localhost:3000](http://localhost:3000).



## Submitting an Issue

Did you notice a bug? Do you have a feature request? Please file an issue [here on GitHub](https://github.com/codeuino/website-www.codeuino.org/issues).

## Something Else?

Want to talk about something but can't find a home for it here? Head to our [Slack Channel](http://slack.codeuino.org/) to discuss everything from feedback and ideas to questions and random musings.

## How to update your local master branch
* First of all add upstream remote. You can add upstream like
```bash
git remote add upstream https://github.com/codeuino/website-www.codeuino.org.git
```
* Now fetch the updated master branch
```bash
git fetch upstream
```
* Now merge fetch code to your local branch master
```bash
git merge upstream/master
```
