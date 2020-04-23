import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    this is a practice for next.js
                </p>
            </section>
			<section>
				<h2 className={utilStyles.headingLg}>Blog</h2>
        		<ul className={utilStyles.list}>
          			{allPostsData.map(({ id, date, title }) => (
            			<li className={utilStyles.listItem} key={id}>
							<Link href="/posts/[id]" as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
          			))}
        		</ul>
			</section>
			<section>
				<h2 className="title">
                    Read <Link href="/posts/first-post"><a>this page!</a></Link>
                </h2>
			</section>
        </Layout>
    )
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}