import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Register for the {new Date().getFullYear()} race <a href="https://raceroster.com/events/2022/57876/2022-mount-albert-sports-day-5km-runwalk/participants">HERE</a></h1>
    <h3>Run partakes first saturday of June</h3>
    <h3>Registration closes 7:00 PM night before run day</h3>
    <p>For information on bib / t-shirt pickup date and location please check our <a href="https://www.facebook.com/Mountalbert5km/">facebook page</a></p>
    <p>Further details about the run including race day schedule, prices, and more can be found on the <a href="https://www.facebook.com/Mountalbert5km/">facebook page</a>. Also check our facebook page for photos after the race!</p>
  </Layout>
)

export default IndexPage
