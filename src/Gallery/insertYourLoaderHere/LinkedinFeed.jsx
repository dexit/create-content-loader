import React from 'react'
import ContentLoader from 'react-content-loader'

const LinkedinFeed = props => {
  return (
    <ContentLoader
      viewBox="0 0 380 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="60" cy="25" r="25" />
      <rect x="95" y="2" rx="5" ry="5" width="160" height="11" />
      <rect x="95" y="19" rx="5" ry="5" width="140" height="9" />
      <rect x="95" y="34" rx="5" ry="5" width="120" height="9" />

      <rect x="39" y="65" rx="5" ry="5" width="295" height="10" />
      <rect x="39" y="82" rx="5" ry="5" width="275" height="10" />

      <rect x="35" y="103" width="310" height="160" />
    </ContentLoader>
  )
}

LinkedinFeed.metadata = {
  name: 'Ritik Dixit',
  github: 'ritikdixit1',
  description: 'LinkedIn Feed',
  filename: 'LinkedinFeed',
}

export default LinkedinFeed
