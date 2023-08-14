import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  FaHome,
  FaPalette,
  FaShoppingCart,
  FaBriefcase,
  FaList,
  FaTelegramPlane
} from 'react-icons/fa'
import logo from '../../public/logo_transparent_white_bg.png'
import navImage from '../../public/hero/undraw_profile_pic_ic-5-t.svg'


const Navbar = () => {
  const router = useRouter()
  const [navActive, setNavActive] = useState(true)

	const showNavbar = () => {
		setNavActive(!navActive)
	}

  return (
    <nav className="navbar">

      <div className="voirme">
        <Image src={logo} alt="logo"/>
      </div>

      <div onClick={showNavbar} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <section className={navActive ? "mainContainer open" : "mainContainer"}>

        <p className="icon" onClick={showNavbar}>&times;</p>

        <div className="navbarHeaderImage">
          <div className="navbarImageHeaderContainer">
            <Image className="navbarImage" src={navImage} layout="responsive" alt="navImage" />
          </div>
        </div>

        <ul className="list">
          <li className={router.pathname == "/" ? "active" : ""}>
            <FaHome className="navIcon"/>
            <Link href="/">Home</Link>
          </li>

          <li className={router.pathname == "/articles" ? "active" : ""}>
            <FaList className="navIcon"/>
            <Link href="/articles">Blog</Link>
          </li>

          <li className={router.pathname == "/gallery" ? "active" : ""}>
            <FaPalette className="navIcon"/>
            <Link href="/gallery">Gallery</Link>
          </li>

          <li className={router.pathname == "/shop"? "active" : ""}>
            <FaShoppingCart className="navIcon"/>
            <Link href="/shop">Market Place</Link>
          </li>

          <li className={router.pathname == "/careers" ? "active" : ""}>
            <FaBriefcase className="navIcon"/>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>

        <div className="profile">
          <div className="profilePictureContainer">

          </div>
          <div className="profileDetails">
            <h3>Username</h3>
            <p>Campus Name</p>
          </div>
        </div>
      </section>

      <button>
        <FaTelegramPlane className="telegramPlane"/>
        <Link className="signup" href="/">Sign Up</Link>
      </button>

    </nav>
  )
}

export default Navbar