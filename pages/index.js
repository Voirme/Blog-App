import { gql } from 'graphql-request'
import { hygraph } from "../resources/DbConnection"

import HomeLayout from "../layouts/Home"


const QUERY = gql`{
  articles(orderBy: publishedAt_DESC, first: 4) {
    id
    title
    writer {
      name
      profilePicture {
        url
      }
    }
    category {
      id
      name
    }
    publishedAt
    image {
      url
    }
    description
  }
}`



const Home = ({ articles }) => {

  return(
    <div>
      <HomeLayout articles={articles} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const { articles } = await hygraph.request(QUERY)

  return {
    props: {
      articles
    }
  }
}