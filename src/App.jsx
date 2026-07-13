import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import EditorialLayout from './components/EditorialLayout'
import BottomNav from './components/BottomNav'
import Hero from './components/Hero'
import ExperienceList from './components/ExperienceList'
import ProjectList from './components/ProjectList'
import {
  workExperience,
  voluntaryExperience,
  projects,
  hackathons,
} from './data/portfolio'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <EditorialLayout>
      <main className="pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? <Hero key="home" /> : null}
          {activeTab === 'work' ? (
            <ExperienceList key="work" label="work" items={workExperience} />
          ) : null}
          {activeTab === 'volunteering' ? (
            <ExperienceList
              key="volunteering"
              label="volunteering"
              items={voluntaryExperience}
            />
          ) : null}
          {activeTab === 'projects' ? (
            <ProjectList key="projects" label="projects" items={projects} />
          ) : null}
          {activeTab === 'hackathons' ? (
            <ProjectList key="hackathons" label="hackathons" items={hackathons} />
          ) : null}
        </AnimatePresence>
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </EditorialLayout>
  )
}

export default App
