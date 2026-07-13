import { useEffect, useState } from 'react'
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
        {activeTab === 'home' ? <Hero /> : null}
        {activeTab === 'work' ? (
          <ExperienceList label="work" items={workExperience} />
        ) : null}
        {activeTab === 'community' ? (
          <ExperienceList label="community" items={voluntaryExperience} />
        ) : null}
        {activeTab === 'projects' ? (
          <ProjectList label="projects" items={projects} />
        ) : null}
        {activeTab === 'hackathons' ? (
          <ProjectList label="hackathons" items={hackathons} />
        ) : null}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </EditorialLayout>
  )
}

export default App
