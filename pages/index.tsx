import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
// import skipic from '/images/skipic.png'
// import NewsletterForm from '@/components/NewsletterForm'
// import TopTracks from 'components/TopTrack'

const MAX_DISPLAY = 3

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="inline-flex text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className=" min-w-fit">Hi 👋🏼, I'm</span>
            <span className=" pl-3 text-primary-500">
              <Typewriter
                options={{
                  strings: [
                    'Zach Daniels',
                    'a full-stack developer',
                    'an entrepreneur',
                    'a student',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 230,
                  cursor: '|',
                }}
              />
              {/* {siteMetadata.author} */}
            </span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg leading-7 text-gray-900 dark:text-gray-400">
            My name is Zach. I'm a student at Brigham Young University in the first year of my
            Masters of Information Systems Management program.
          </p>
          <p className="text-lg leading-7 text-gray-900 dark:text-gray-400">
            I have experience with web development with .NET Core at BYU - Creative Works
            Department. I also gained experience with public cloud infrastructue at USAA in 2021.
            This summer I will be going to AWS to be a part of their innovation and scaling team.
            I'm also a part of two programs next year: BYU Sandbox and the Levinthal Program.
          </p>

          {/* potentially put images here */}
          {/* <div className="mt-6 flex w-full justify-center">
            <p>asdfasd</p>
            <Image
              src="/static/images/skitrip.png"
              alt="Picture of Zach skiing"
              width="1000"
              height="1000"
            />
            <p className=" text-base text-gray-500 dark:text-gray-400">Hello</p>
          </div> */}
        </div>
        {/* Blog preview portion of index page */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Most Recent Posts
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}

      {/* <div className="py-7">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          My <span className="text-green-500">Spotify</span> Top Song
        </h1>
        <TopTracks />
      </div> */}
    </>
  )
}
