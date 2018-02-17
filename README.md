# Blink First :eyes:

Blink First is all about transparency. It's meant to allow people to keep an eye on their representatives in Congress to see how they've voted recently and what they are currently posting on social media. There was a monumental vote on (immigration/taxes/civil rights) yesterday, and you want to know how your senator voted.

A working version of this app can currently be found [here](https://blink-first.herokuapp.com/) (deployed to Heroku).

## Pages

#### Search Votes
* Search for a specific senator's most recent votes, up to the last 24 hours.
    ![Alt text](/img/1.jpg?raw=true “Optional Title”) 
#### Compare
* Compare two senators' voting records to see their overall agreement percentage.

#### Search Senator
* Search for senators' social media and contact information based on their name or state.

#### Find District
* Search for your congressional representative and congressional district based on your address.

#### Tell us what you think!
* This is my favorite one. On this page, a user can enter their opinions on various current events/hot button issues, and that information will be submitted to a database that will be accessible by eleced officals. The purpose of this is for elected officials to see what their constituents' care the most about and how they feel about specific issue on a broader scale.

## How to install

- Clone this git repo
- From the root directory, run `yarn install`, then cd into the client folder and run `yarn install` again. 
- After that is complete, cd back into the root directory and run `yarn start`

## Dependencies/Tools

- [React.js](https://reactjs.org/)
- [Moment.js (React)](https://www.npmjs.com/package/react-moment)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Request](https://www.npmjs.com/package/request)
- [request-promise-native](https://github.com/request/request-promise-native)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Countup.js (React)](https://www.npmjs.com/package/react-countup)
- [Congressional District Finder](https://www.npmjs.com/package/congressional-district-finder)
- [Axios](https://www.npmjs.com/package/axios)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Passport](https://www.npmjs.com/package/passport)
- [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20)