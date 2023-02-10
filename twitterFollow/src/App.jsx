import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'linapaper',
    name: 'Lina Paola Perdomo',
    isFollowing: true,
  },
  {
    userName: 'iGirliCode',
    name: 'Karoli.js',
    isFollowing: false
  },
  {
    userName: 'viviana_tes',
    name: 'Viviana',
    isFollowing: true
  },
  {
    userName: 'teffcode',
    name: 'Estefany Aguilar',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
