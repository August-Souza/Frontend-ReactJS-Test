import React, { useState, useEffect } from 'react';
import api from './services/api'

import Header from './components/Header.js'

function App() {
  const [projects, setProjects] = useState(["Desenvolvimento web", "Desenvolvimento mobile"])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  async function handleProject() {
    
    const response = await api.post('projects', {
      id: "7",
      title: "Dev",
      owner: "August"
    })

    const project = response.data;

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleProject}>Add Project</button>
    </>
  );
}

export default App;
