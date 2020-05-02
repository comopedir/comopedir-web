import React from "react"
import Address from "./index"

export default {
  title: "Business/Address",
}

const props = {
  street: "R. Joaquim Antunes",
  number: "108",
  complement: "Casa 2",
  district: "Pinheiros",
  city: "São Paulo",
  state: "SP",
}

export const withoutStreetAndNumber = () => (
  <Address
    address={{
      district: props.district,
      city: props.city,
      state: props.state,
    }}
  />
)

export const fullAddress = () => <Address address={props} />
