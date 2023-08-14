import Image from "next/image"
import Link from "next/link"
import dateFormat from 'dateformat';

import styles from "./lastThree.module.scss"

const LastThreeArticlesComponent = ({ article }) => {
  return (
    <div className={styles.container}>
      <div className={styles.articleImage}>
        <Image src={article.image.url} alt="articleImage" layout="fill" />
      </div>
      <div className={styles.articleDetails}>
        <div className={styles.metadata}>
          <a href="">{article.category.name}</a>
          <p>{dateFormat(article.publishedAt, "dd mmmm yyyy")}</p>
        </div>
        <Link href="" passHref>
          <h3>{article.title}</h3>
        </Link>
      </div>
    </div>
  )
}

export default LastThreeArticlesComponent