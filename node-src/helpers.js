const removeAccents = require("remove-accents")

module.exports.pageNameByLocation = function(state, city) {
  return `/${removeAccents(state.toLowerCase())}/${removeAccents(
    city.replace(/\s/g, "-").toLowerCase()
  )}`
}
