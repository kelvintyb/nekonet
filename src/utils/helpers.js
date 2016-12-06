import _ from "lodash"
import base from "../base.js"

//NOTE: https://github.com/lodash/babel-plugin-lodash to minimise bundle size
  let filterByUser = function (uid,collection) {
    return _.filter(collection, (obj) => obj.uid === uid)
  }

  let filterByStatus = function(status,collection) {
    if (status === "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.isForAdoption === status)
  }

  let filterByAge = function(age,collection) {
    if (age === "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.age === age)
  }

  let filterByColor = function(color,collection) {
    if (color === "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.color === color)
  }

  let findById = (id, collectionName) => {
    //use id to grab user/cat/chatroom obj from root db
    // http://stackoverflow.com/questions/35552571/how-to-use-firebase-query-equaltovalue-key
  };
  let updateById = (id, collectionName, data) => {
    //use id to update user/cat/chatroom obj with new data
  }


export {filterByUser, filterByStatus, filterByAge, filterByColor, findById, updateById}
