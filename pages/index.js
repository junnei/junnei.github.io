import Head from 'next/head'
import Container from '../components/container'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Dates from '../components/date'
import Intro from '../components/intro'
import { Navbar } from '../components/Navbar.jsx';

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
const dateNow = (year+'-'+((month>=10)?month:('0'+month))+'-'+((day>=10)?day:('0'+day)));

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar/>
      <Container>
        <Intro />
      </Container>
      <section className="mx-5vw my-5vh text-4xl font-bold">
        <p>Blog.</p>
      </section>
      <section className='mx-5vw my-5vh'>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={'/blog'}>
              <a>blog</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Dates dateString={dateNow} />
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
/*

          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}