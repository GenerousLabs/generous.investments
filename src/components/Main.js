import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Software</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            We build software focused on human communication, coordination and
            orchestration. We take inspiration from tools like{' '}
            <a href="https://signal.org" target="_blank">
              Signal
            </a>
            ,{' '}
            <a href="https://keybase.io" target="_blank">
              Keybase
            </a>
            ,{' '}
            <a href="https://matrix.org" target="_blank">
              Matrix
            </a>{' '}
            in the space of tools like{' '}
            <a href="https://www.loomio.org" taget="_blank">
              Loomio
            </a>
            ,{' '}
            <a
              href="https://github.com/theborderland/borderland-dreams/network/members"
              target="_blank"
            >
              Dreams
            </a>{' '}
            and{' '}
            <a href="https://www.splitwise.com" target="_blank">
              SplitWise
            </a>
            .
          </p>
          <p>
            Our first product is rethink of what an address book would look like
            in the 21st century.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Values</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Our company and our software is imbued with a set of values. We seek
            to balance profit incentives with restraint and a focus on the
            common good. These values are:
          </p>
          <ul>
            <li>
              Sovereignty
              <ul>
                <li>Rhizome</li>
              </ul>
            </li>
            <li>
              Cooperation
              <ul>
                <li>Win win games</li>
              </ul>
            </li>
            <li>
              Privacy
              <ul>
                <li>Transparency</li>
                <li>Censorship resistance</li>
              </ul>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Business model</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            These values raise a key challenge. How to earn profit while
            building open, peer to peer software? Our approach is generosity. We
            believe people will crowdfund our software, and will choose to tip
            us for software they love.
          </p>
          <p>
            The unit economics of p2p are truly zero marginal cost. By focusing
            on mass market software, we believe that generosity can be a viable
            model.
          </p>
          <p>
            We are a{' '}
            <a href="https://purpose-economy.org/en/" target="_blank">
              Purpose
            </a>{' '}
            (or{' '}
            <a
              href="https://steward-ownership.com/ownership-overview-page/"
              target="_blank"
            >
              steward ownership
            </a>
            ) company.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
