import React from "react"

const RestaurantTemplate = ({ pageContext }) => {
  const { data } = pageContext
  console.log("data", data)
  return <div>Restaurant</div>
}

export default RestaurantTemplate
