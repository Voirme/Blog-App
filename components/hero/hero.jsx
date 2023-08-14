import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa"

import styles from '../hero/hero.module.scss'


const HeroComponent = () => {
  return (
    <header className={styles.header}>
      <h1>
        Join our <span>Community</span> of talented creatives to
        <div className={styles.container}>
          <div className={styles.animate}>
            <span>Create</span>
            <span>Collaborate</span>
            <span>Connect</span>
          </div>
        </div>
      </h1>
      <p>With access to <span>networking</span> events, <span>mentorship</span> programs, and online <span>resources</span>. Don&apos;t wait, start exploring your full <span>potential</span> today!</p>
      <Link href="">
        <a>
          <FaTelegramPlane />
          Join Here
        </a>
      </Link>
    </header>
  )
}

export default HeroComponent