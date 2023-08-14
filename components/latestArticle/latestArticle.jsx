import Image from "next/image"
import dateFormat from 'dateformat';

import styles from "./latestArticle.module.scss"

const LatestArticleComponent = ({ article }) => {
  return (
    <div className={styles.latestArticle}>
      <div className={styles.imageContainer}>
        <Image src={article.image.url} alt="first blog" layout="fill" />
      </div>

      <div className={styles.details}>
        <div className={styles.metadata}>
          <a href="">{article.category.name}</a>
          <p>{dateFormat(article.publishedAt, "dd mmmm yyyy")}</p>
        </div>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <div className={styles.writer}>
          <div className={styles.writerProfilePicture}>
            <Image src={article.writer.profilePicture.url} alt="authorPicture" layout="fill"/>
          </div>
          <p>by {article.writer.name}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestArticleComponent