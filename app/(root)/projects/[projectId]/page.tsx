import React from 'react'

const page = ({params}: {params: {projectId: string}}) => {
  return (
    <div>
      <h1>{params.projectId}</h1>
    </div>
  )
}


export default page
