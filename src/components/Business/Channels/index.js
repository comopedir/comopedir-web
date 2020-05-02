import React from "react"
import styled from "styled-components"
import ChannelItem from "./ChannelItem"
import { breakpoints, mediaQuery } from "../../../styles/breakpoints"

const normalizeUrl = href =>
  href && !href.match(/^http(s)?:\/\//) ? `http://${href}` : href

const order = [
  "ifood",
  "rappi",
  "uberEats",
  "jamesDelivery",
  "phone",
  "whatsapp",
  "instagram",
  "website",
  "email",
]

const StyledChannelItem = styled(ChannelItem)`
  :not(:first-child) {
    margin-top: 1.6rem;
    ${mediaQuery[breakpoints.large]} {
      margin-top: 2.5rem;
    }
  }
`

const Channels = ({ channels }) => (
  <div>
    {channels
      ? channels
          .filter(c => c.value)
          .sort((a, b) => {
            if (order.indexOf(a.channel.slug) > order.indexOf(b.channel.slug)) {
              return 1
            } else {
              return -1
            }
          })
          .map(c => {
            let label, to
            switch (c.channel.slug) {
              case "phone":
                label = c.channel.name
                to = `tel:${c.value.replace(/\D*/g, "")}`
                break
              case "whatsapp":
                to = `whatsapp://send?&phone=+55${c.value.replace(/\D*/g, "")}`
                label = c.channel.name
                break
              case "instagram":
                to = c.value.replace(
                  /(\@)|((\w*\.*)?inst(r)?ag(r)?am.com(.br)?\/?)/,
                  "https://www.instagram.com/"
                )
                label = c.value
                break
              case "website":
                label = c.value.replace(/http(s?):\/\/|\/$/g, "")
                to = normalizeUrl(c.value)
                break
              case "email":
                label = c.value
                to = `mailto:${c.value}`
                break
              case "ifood":
              default:
                label = c.channel.name
                to = c.value
                break
            }
            return (
              <StyledChannelItem key={c.channel.slug} label={label} to={to} />
            )
          })
      : null}
  </div>
)

export default Channels
