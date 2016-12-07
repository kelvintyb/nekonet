import _ from "lodash"
import base from "../base.js"

//NOTE: https://github.com/lodash/babel-plugin-lodash to minimise bundle size

//NOTE: all filter functions differ only in semantic naming
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

  let findById = (id, collectionUrl) => {
    return base.database().ref(`${collectionUrl}/${id}`)
  };

  let updateById = (id, collectionUrl, data) => {
    let updates = {};
    updates[`${collectionUrl}/${id}`] = data;
    base.database().ref().update(updates);
  }

  let filterCollectionByKeys = (keyArray, collection) => {
    let result = {};
    keyArray.forEach((key) => {
      for (var collectionKey in collection) {
        if (key === collectionKey) {
          result[key] = collection[collectionKey]
        }
      }
    })
    return result;
  }


export {filterByUser, filterByStatus, filterByAge, filterByColor, findById, updateById}
