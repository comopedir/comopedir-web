const removeAccents = require("remove-accents")

module.exports.pageNameByLocation = function(state, city) {
  return `/${removeAccents(state.toLowerCase().trim())}/${removeAccents(
    city
      .replace(/\s/g, "-")
      .trim()
      .toLowerCase()
  )}`
}
