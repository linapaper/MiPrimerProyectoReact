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
    userName: 'HelmerTorrez',
    name: 'Helmer Torrez',
    isFollowing: false
  },
  {
    userName: 'tswiftperu',
    name: 'Taylor Swift Perú',
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