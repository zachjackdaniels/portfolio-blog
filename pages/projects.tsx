import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

;<div className="h-full w-full cursor-pointer space-y-2 rounded-lg bg-gradient-to-r from-[#a5f3fc]  to-[#3A41A4] p-[6px] duration-200 hover:scale-[1.03]">
  <div className="dark:bg-brand-black h-full rounded-lg bg-white py-4 px-6 dark:bg-black">
    <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl  md:text-2xl">
      <span className="pr-2" role="img" aria-label="wave">
        ⚙
      </span>
      Building Project
    </h1>
    <p className="text-gray-600 dark:text-gray-300">
      I'm very active on Github to create open-source projects or personal projects, sometimes I
      also contribute to open-source projects.
    </p>
  </div>
</div>
