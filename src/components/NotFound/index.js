// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => {
  const lightHome = {
    homeBg: 'home-light',
    fontColor: 'font-black',
  }

  const darkHome = {
    homeBg: 'home-dark',
    fontColor: 'font-white',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? darkHome : lightHome

        return (
          <div className={`home-container ${theme.homeBg} `}>
            <Navbar />
            <div className="home-sec">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="notfound"
                className="home"
              />
              <h1 className={theme.fontColor}> Lost your way </h1>
              <p className={theme.fontColor}>
                We cannot seem to find the page you are looking for?
              </p>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
