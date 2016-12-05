import _ from "lodash"

//NOTE: https://github.com/lodash/babel-plugin-lodash to minimise bundle size
  let filterByUser = function (uid,collection) {
    return _.filter(collection, (obj) => obj.uid == uid)
  }

  let filterByStatus = function(status,collection) {
    if (status == "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.isForAdoption == status)
  }

  let filterByAge = function(age,collection) {
    if (age == "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.age == age)
  }

  let filterByColor = function(color,collection) {
    if (color == "any") {
      return collection
    }
    return _.filter(collection, (obj) => obj.color == color)
  }

export {filterByUser, filterByStatus, filterByAge, filterByColor}
