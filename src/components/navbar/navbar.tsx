import React, { Component } from 'react'
import navStyles from "./navbar.module.scss"
const BASE_URL = "https://pdp-movies-78.onrender.com/api"
export default class Navbar extends Component {
  render() {
    return (
      <div className={navStyles.navbar}>
        <h2 className={navStyles.logo}>Vidle</h2>
        <h6 className={navStyles.login}>Login</h6>
        <h6 className={navStyles.register}>Register</h6>
      </div>
    )
  }
}
