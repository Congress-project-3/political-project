const axios = require("axios");
const router = require("express").Router();
const finder = require('congressional-district-finder');
const config = {
  headers: { 'X-API-KEY': 'WJ3l3qDKeksPtMBaQps1cGVJ1b4MT1ZqcP9C7Q3w'},
};

// ======================================================================

router.get("/senators", (req, res) => {
  axios
    .get("https://api.propublica.org/congress/v1/115/senate/members.json", config)
    .then(function(thingWeGotBack){
    	// console.log('we got this back from the api ----',thingWeGotBack.data.results[0].members)
    	const idNumber = thingWeGotBack.data.results[0].members.map((senator) => senator.first_name + " " + senator.last_name + ", id:" + senator.id);
    	// console.log(idNumber);
    	const members = thingWeGotBack.data.results[0].members
    	// console.log(thingWeGotBack.data.results[0].members[2].id);
    	// console.log(members);
    	res.json(members);
    	// return members;
	})
	    .catch(err => res.status(422).json(err));
	});

// ============================================================================

router.get("/news", (req, res) => {
  axios
    .get('https://newsapi.org/v2/everything?q=Congress&from=2018-02-10&sortBy=popularity&apiKey=78c103f8da834947bda5b373986dbac7')
    .then(function(thingWeGotBack){
        console.log("news api results " + thingWeGotBack.data.totalResults);
        console.log("article examples " + thingWeGotBack.data.articles[0].title)
        res.json(thingWeGotBack.data.articles);
    })
        .catch(err => res.status(422).json(err));
    });

// ===========================================================================

router.post("/comparesenators", (req, res) => {
	console.log("req.body", req.body)

  axios
    .get("https://api.propublica.org/congress/v1/members/" + req.body.firstPerson + "/votes/" + req.body.secondPerson + "/115/senate.json", config)
    .then(function(thingWeGotBack){
    	// console.log('we got this back from the api ----',thingWeGotBack.data.results[0].members)
    	const agreeNumber = thingWeGotBack.data.results[0];
    	console.log(agreeNumber);
    	res.json(agreeNumber);
    	
	})
	    .catch(err => res.status(422).json(err));
	});

// ===========================================================================

router.post("/senatorvotes", (req, res) => {
  console.log('req.body', req.body)

  axios
    .get("https://api.propublica.org/congress/v1/members/" + req.body.id + "/votes.json", config)
    .then(function(thingWeGotBack){
    	// console.log(thingWeGotBack.data.results[0])
    	const votes = thingWeGotBack.data.results[0]
    	console.log("votes", votes);
    	res.json(votes);
	})
	    .catch(err => res.status(422).json(err));
	});

// ===============================================================

router.post("/senatorprofile", (req, res) => {
  console.log('req.body', req.body)

  axios
    .get("https://api.propublica.org/congress/v1/members/" + req.body.id + ".json", config)
    .then(function(thingWeGotBack){
    	// console.log(thingWeGotBack.data.results[0])
    	const profile = thingWeGotBack.data.results
    	console.log("profile", profile);
    	res.json(profile);
	})
	    .catch(err => res.status(422).json(err));
	});

// ===============================================================

router.post("/finddistrict", (req, res) => {
	console.log("req.body", req.body)

  finder.getDistrictByAddress(req.body.address)
    .then(function(thingWeGotBack) {
        console.log(thingWeGotBack.isMatched); // outputs true 
        console.log(thingWeGotBack.district.name); //outputs "New York 7th" 
        console.log(thingWeGotBack.district.districtCode); //outputs "NY-07"
        res.json(thingWeGotBack) 
    })
    .catch(function (err) {
        console.log(err.message);
    });
});
	
	// =========================================================
router.post("/searchdistrict", (req, res) => {
  console.log('req.body', req.body)

  axios
    .get("https://api.propublica.org/congress/v1/members/house/" + req.body.state + "/" + req.body.district + "/current.json", config)
    .then(function(thingWeGotBack){
    	// console.log(thingWeGotBack.data.results[0])
    	const rep = thingWeGotBack.data.results[0]
    	console.log("representative", rep);
    	res.json(rep);
	})
	    .catch(err => res.status(422).json(err));
	}); 

	// ==========================================================
router.post("/searchsenatorbystate", (req, res) => {
  console.log('req.body', req.body)

  axios
    .get("https://api.propublica.org/congress/v1/members/senate/" + req.body.state + "/current.json", config)
    .then(function(thingWeGotBack){
    	// console.log(thingWeGotBack.data.results[0])
    	const senByState = thingWeGotBack.data.results
    	console.log("senator by state", senByState);
    	res.json(senByState);
	})
	    .catch(err => res.status(422).json(err));
	});       


module.exports = router;
