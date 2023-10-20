// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
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

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const theme = isDarkTheme ? darkTheme : lightTheme

        const onChangeTheme = () => {
          console.log('toggle triggered')
          toggleTheme()
        }

        return (
          <div className={`navbar ${theme.bgColor}`}>
            <img
              src={theme.logo}
              alt="nav logo"
              className="nav-logo nav-image "
            />
            <div className="nav-links-container">
              <Link to="/" className={`nav-link ${theme.fontColor}`}>
                <h1> Home </h1>
              </Link>
              <Link to="/about" className={`nav-link ${theme.fontColor}`}>
                <h1> About </h1>
              </Link>
            </div>
            <img
              src={theme.themeImage}
              alt="theme-change-icon"
              className="theme-icon nav-image"
              onClick={onChangeTheme}
            />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
