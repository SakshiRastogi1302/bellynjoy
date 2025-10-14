import React from 'react'
import { Link } from 'react-router-dom'

const TagComponent = ({tags, forFoodPage}) => {
  return (
    <div className={`flex flex-wrap mt-5 + ${forFoodPage? 'justify-start' : 'justify-center'}`}>
        {tags.map((tag)=> {
          return (<Link key={tag.name} to={`/tag/${tag.name}`} className='bg-gray-300 text-blue-700 text-xs p-2 m-2 rounded-md'>{tag.name}{!forFoodPage && ` (${tag.count})`}</Link>)
        })}
    </div>
  )
}

export default TagComponent