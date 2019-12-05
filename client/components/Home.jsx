import React from 'react'

import AddMahi from './AddMahi'

const categories = [
  { key: 'af', id: 1, categoryName: 'Afghanistan' },
  { key: 'ax', id: 2, categoryName: 'Aland Islands' },
  { key: 'al', id: 3, categoryName: 'Albania' },
  { key: 'dz', id: 4, categoryName: 'Algeria' },
  { key: 'as', id: 5, categoryName: 'American Samoa' },
  { key: 'ad', id: 6, categoryName: 'Andorra' }
]

const Home = () => (


  <div>
    <h1>This is Home </h1>
    <AddMahi categories={categories} />
  </div>
)

export default Home
