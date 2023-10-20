// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => {
  const lightHome = {
    homeIcon: 'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
    homeBg: 'home-light',
    fontColor: 'font-black',
  }

  const darkHome = {
    homeIcon: 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
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
              <img src={theme.homeIcon} alt="home logo" className="home" />
              <h1 className={theme.fontColor}> About </h1>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
