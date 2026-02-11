import React from 'react'

const About = () => {
  return (
     <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>About This Project</h1>
      <p>
        Welcome! This project is designed to help you stay organized and productive by keeping track of tasks, 
        features, and improvements in one centralized place.
      </p>

      <h2>Purpose</h2>
      <p>
        The main goal of this project is to provide a clear and structured system for managing tasks. 
        Whether you're developing an app, working on a website, or managing a personal project, this platform 
        ensures nothing gets overlooked.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Track ongoing, pending, and completed tasks</li>
        <li>Organize tasks by priority and category</li>
        <li>Maintain a transparent roadmap of project progress</li>
        <li>Easy to update and maintain for teams or personal use</li>
      </ul>

      <h2>Who Can Use This</h2>
      <p>
        This project is ideal for developers, project managers, or anyone looking to manage their work efficiently. 
        It's simple enough for personal use but structured enough for team collaboration.
      </p>

      <p>We hope this tool helps you stay focused, organized, and productive!</p>
    </div>
  )
}

export default About
