import React from 'react'

const continents = [
  {
    name: 'Asia',
    countries: [
      {
        name: 'Indonesia'
      },
      {
        name: 'Malaysia'
      },
      {
        name: 'Singapore'
      }
    ]
  },
  {
    name: 'Europe',
    countries: [
      {
        name: 'United Kingdom'
      },
      {
        name: 'France'
      },
      {
        name: 'Spain'
      }
    ]
  }
]

export default class extends React.Component {
  render() {
    return(
      <div
        className = 'container'
      >
        <div
          className = 'top-navigation'
        >
          <h1
            className = 'top-navigation-title'
          >
            Countries All Over The World
          </h1>
        </div>

        <div
          className = 'content-container'
        >
          {
            continents.map((continent, continentIndex) => (
              <a
                className = 'continent-title'
                href = {'/' + continent.name}
                key = {continent.name}
                style = {{
                  marginTop: continentIndex !== 0 ? 20 : 0
                }}
              >
                {continent.name}
              </a>
            ))
          }
        </div>
      </div>
    )
  }
}