import React from "react"
import { GlobalStyle } from "../../styles/global"

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
)
