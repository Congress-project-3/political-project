import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getSenators: function() {
    return axios.get("/api/senators");
  },
  getComparison: function(first, second) {
    return axios.post("/api/comparesenators", {firstPerson: first, secondPerson: second});
  },
  getSenatorVotes: function(query) {
    return axios.post("/api/senatorvotes", {id: query});
  },
  getSenatorProfile: function(query) {
    return axios.post("/api/senatorprofile", {id: query});
  },
  findDistrict: function(query) {
    return axios.post("/api/finddistrict", {address: query});
  },
  searchDistrict: function(state, district) {
    return axios.post("/api/searchdistrict", {state: state, district: district});
},
  getSenatorbyState: function(state) {
    return axios.post("/api/searchsenatorbystate", {state: state});
},
  getAuthentication: function() {
     return axios.get("/api/google");
}
}