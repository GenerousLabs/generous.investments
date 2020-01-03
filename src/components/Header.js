import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Genrous</h1>
        <p>GeneroUS is a slightly different type of company.</p>
        <p>
          We build{' '}
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('software')
            }}
          >
            software
          </a>
          . That software is imbued with a set of{' '}
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('values')
            }}
          >
            values
          </a>
          . Our{' '}
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('businessmodel')
            }}
          >
            business model
          </a>
          is generosity. We are seeking{' '}
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('investment')
            }}
          >
            investment
          </a>
          .
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('software')
            }}
          >
            Software
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('values')
            }}
          >
            Values
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('businessmodel')
            }}
          >
            Business Model
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('investment')
            }}
          >
            Investment
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
