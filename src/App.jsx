import EditorialLayout from './components/EditorialLayout'
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
  return (
    <EditorialLayout>
      <Hero />
      <ExperienceList label="work" items={workExperience} />
      <ExperienceList label="voluntary" items={voluntaryExperience} />
      <ProjectList label="projects" items={projects} />
      <ProjectList label="hackathons" items={hackathons} />
    </EditorialLayout>
  )
}

export default App
