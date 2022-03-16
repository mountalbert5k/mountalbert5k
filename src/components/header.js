import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{
        margin: `0 auto`,
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        gap: "20px",
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
      }}>
      <h4>Have questions? <FaEnvelope /> <a href="mailto:info@mountalbertsportsday5k.ca">info@mountalbertsportsday5k.ca</a></h4>
      <h4><a href="https://www.facebook.com/Mountalbert5km/"><FaFacebookSquare /></a></h4>
    </div>
    <div
      style={{
        margin: `0 auto`,
        display: "flex",
        alignItems: "center",
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StaticImage
      src="../images/5klogo.jpg"
      width={150}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="5k Logo"
      style={{ marginRight: `1.45rem` }}
    />
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#dd3333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
    <div style={{
        margin: `0 auto`,
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        gap: "60px",
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
      }}>
      <h4><Link to="/">Home</Link></h4> 
      <h4><Link to="/faq">FAQ</Link></h4>
      <h4><Link to="/volunteer">Volunteer</Link></h4>
      <h4><Link to="/sponsors">Sponsors</Link></h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
