// Write your code here
import {Link, useHistory} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const history = useHistory()

  const lightTheme = {
    bgColor: 'bg-white',
    logo:
      'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
    themeImage: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
    fontColor: 'font-blue',
  }

  const darkTheme = {
    bgColor: 'bg-dark',
    logo:
      'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
    themeImage: 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
    fontColor: 'font-white',
  }

  const onClickLogo = () => {
    history.replace('/')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const theme = isDarkTheme ? darkTheme : lightTheme

        const onChangeTheme = () => {
          // console.log('toggle triggered')
          toggleTheme()
        }

        return (
          <div className={`navbar ${theme.bgColor}`}>
            <img
              src={theme.logo}
              alt="website logo"
              className="nav-logo nav-image"
              onClick={onClickLogo}
            />
            <ul className="nav-links-container">
              <Link to="/" className={`nav-link ${theme.fontColor}`}>
                <li> Home </li>
              </Link>
              <Link to="/about" className={`nav-link ${theme.fontColor}`}>
                <li> About </li>
              </Link>
            </ul>
            <button className="theme-button" type="button" data-testid="theme">
              {' '}
              <img
                src={theme.themeImage}
                alt="theme"
                className="theme-icon nav-image"
                onClick={onChangeTheme}
              />{' '}
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
