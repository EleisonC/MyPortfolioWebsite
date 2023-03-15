/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { Experince, Skill, PageInfo, Project, Social } from '@/typings'
import { fetchExperince } from '@/utils/fetchExperince'
import { fetchSkills } from '@/utils/fetchSkill'
import { fetchProject } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'



type Props = {
  pageInfo: PageInfo;
  experince: Experince[];
  skills: Skill[];
  projects: Project[]
  socials: Social[]
}


export default function Home({pageInfo, experince, skills, projects, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <Head>
        <title>CHRISTOPHER'S PORTFOLIO</title>
      </Head>

      <Header socials={socials}/>
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className='snap-center'>
        <Experience experiences={experince}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experince: Experince[] = await fetchExperince();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experince,
      skills,
      projects,
      socials
    },
    revalidate: 100
  }
}
