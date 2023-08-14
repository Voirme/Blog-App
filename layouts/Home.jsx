import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagramSquare, FaTwitter, FaLinkedin, FaFacebook, FaChevronRight } from 'react-icons/fa'
import { members } from '../resources/members'

import HeroComponent from "../components/hero/hero"
import LatestArticleComponent from "../components/latestArticle/latestArticle";
import LastThreeArticlesComponent from "../components/lastThreeArticles/lastThreeArticles"

// image assets
import aboutImage from '../public/about_us.jpeg'
import collaboration from '../public/students-1.jpg'
import artist from '../public/artist.jpg'
// import production from '../public/production.mp4'

import styles from '../styles/Home.module.scss'

const HomeLayout = ({ articles }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showDetails2, setShowDetails2] = useState(false)
  const [showDetails3, setShowDetails3] = useState(false)
  const lastThreeArticles = articles.slice(1)

  const openDetails = () => {
    setShowDetails(!showDetails)
  }

  const openDetails2 = () => {
    setShowDetails2(!showDetails2)
  }

  const openDetails3 = () => {
    setShowDetails3(!showDetails3)
  }

  return (
    <div>
      <main className={styles.main}>
        <section className="header">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="blob three"></div>
          <div className="blob four"></div>

          <HeroComponent />

          <div className="images">
            <div className="circleOne">
              <Image className="image" src={collaboration} alt="" priority={true}/>
            </div>
            <div className="circleTwo">
              <Image src={artist} alt=""/>
            </div>
            <div className="circleThree">
              <video className="video" autoPlay loop muted src="https://res.cloudinary.com/dopqgcnbm/video/upload/v1673336022/production_ID_3945486_1_qyd1qk.mp4" style={{width: "250px", height: "250px"}} />
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <h3>Our Services</h3>
          <h2>What Our Platform <span>Provides</span></h2>
          <div className={styles.line}></div>

          <div className={styles.servicesContainer}>
            <div className={styles.creatives}>
              <Image src={"https://res.cloudinary.com/dopqgcnbm/image/upload/v1674208219/pexels-karolina-grabowska-4471894_ntdyjn.jpg"} layout="fill" alt="creatives" />
              <div className={styles.clickable}>
                <h2>For The Creatives</h2>
                <p onClick={openDetails}>View Details</p>
              </div>
              <div className={showDetails ? styles.showDetails : styles.creativeDetails}>
                <h3>For The Creatives</h3>
                <ul>
                  <li>Become a Voirme Creative</li>
                  <li>Get access to our creative groups and mentors</li>
                  <li>Start working and Collaborating on Projects</li>
                  <li>Get displayed on various Voirme affiliated platforms</li>
                </ul>
                <p onClick={openDetails}>close</p>
              </div>
            </div>
            <div className={styles.creatives}>
              <Image src={"https://res.cloudinary.com/dopqgcnbm/image/upload/v1674210615/pexels-brett-sayles-1340502_byjnzm.jpg"} layout="fill" alt="customers"/>
              <div className={styles.clickable}>
                <h2>For Our Customers</h2>
                <p onClick={openDetails2}>View Details</p>
              </div>
              <div className={showDetails2 ? styles.showDetails : styles.creativeDetails}>
                <h3>For Our Customers</h3>
                <ul>
                  <li>Get in touch with us</li>
                  <li>Describe to us your needs</li>
                  <li>We match you with the perfect creative team from our community</li>
                  <li>Start creating magic together</li>
                </ul>
                <p onClick={openDetails2}>close</p>
              </div>
            </div>
            <div className={styles.creatives}>
              <Image src={"https://res.cloudinary.com/dopqgcnbm/image/upload/v1674209700/pexels-hannah-gibbs-949274_cwefyy.jpg"} layout="fill" alt="customers"/>
              <div className={styles.clickable}>
                <h2>More Services</h2>
                <p onClick={openDetails3}>View Details</p>
              </div>
              <div className={showDetails3 ? styles.showDetails : styles.creativeDetails}>
                <h3>More Services</h3>
                <ul>
                  <li>Brand Growth and management services</li>
                  <li>Photography and Videography</li>
                  <li>Events Planning and Coordination</li>
                </ul>
                <p onClick={openDetails3}>close</p>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.blog}>
          <h2>Check our Blog</h2>

          <div className={styles.blogContent}>
            <LatestArticleComponent article={articles[0]} />

            <div className={styles.others}>
              {
                lastThreeArticles.map((article) => {
                  return (
                    <LastThreeArticlesComponent article={article} key={article.id}/>
                  )
                })
              }
            </div>
          </div>
        </section>


        <section className={styles.about} id="about">
          <h2>Who we Are</h2>
          <div className={styles.summary}>
            <div className={styles.aboutDetails}>
              <p>
                VoirMe is a platform designed to create, develop and maintain partnerships with residents, campus students and university staff. It serves to create a community of  entrepreneurs and creatives who can gain by providing a platform for online shopping of products and services that help encourage and foster entrepreneurship and philanthropy. The platform will have products and services ranging from mens and women&apos;s clothes and shoes, designer clothes, art portraits, journalism services, advertisement of business ventures and managing businesses among other innovative commodities. Our brand and community members will also be taking part in outreach programs and events such as donation drives that help the less privileged in society.
              </p>
              <p>
                We target universities, colleges, and the surrounding occupants to create a network around the country of a platform aimed towards solving the unemployment dilemma while also encouraging talent and enabling students to take initiative with their ideas and skills.
              </p>
              <p>
                VoirMe purposefully aims to serve the students and locals by majoring in finding the best deals while also prioritizing quality to satisfy our customers. Our image is built upon engaging the students more and creating options and means to jumpstart careers. The core of VoirMe is to create a sense of pride and worth within our communities. Students and locals will have a common platform to boost their talents and businesses. VoirCulture will provide a fresh perspective of the students in the eyes of the locals to point out their symbiotic relationship.
              </p>
            </div>
            <div className={styles.aboutImageContainer}>
              <Image className={styles.image} layout="fill" src={aboutImage} alt="aboutPicture" />
            </div>
          </div>
          <div className="blob five"></div>
        </section>

        <section className={styles.team}>
          <h2>Meet the Team</h2>

          <div className={styles.teamContainer}>
            {
              members.map(member => (
                <div key={member.id} className={styles.teamMember}>
                  <div className={styles.memberPicture}>
                    <Image src={`${member.image}`} className={styles.member} alt="memberPicture" layout="fill" />
                  </div>
                  <div className={styles.memberDetails}>
                    <h3>{member.name}</h3>
                    <h4>{member.position}</h4>
                    <p>{member.about}</p>
                  </div>
                  <div className={styles.memberSocials}>
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagramSquare style={{ color: "#E845AE"}}/>
                    </a>

                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook style={{ color: "#0080F6"}}/>
                    </a>

                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter style={{color: "#1A83CC"}}/>
                    </a>

                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin style={{color: "blue"}}/>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="blob six"></div>
        </section>
      </main>
    </div>
  )
}

export default HomeLayout