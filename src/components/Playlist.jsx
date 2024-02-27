import React from 'react'
import PlaylistTile from './PlaylistTile'

const Playlist = () => {
  return (
    <div className='border-gray-200 mt-6 rounded-lg border-2'>
        <div className='bg-gray-200'>
            <h1 className='font-bold p-8'>Projects</h1>
        </div>
        <PlaylistTile navigateLink = "/portfolio" title = "Portfolio" image = "/portfolio.png" author = "Swapnil Mishra" />
        <PlaylistTile navigateLink = "/codepen" title = "Codepen" image = "/codepen.jpg" author = "Swapnil Mishra" />
        <PlaylistTile navigateLink = "/projects" title = "Payment App" image = "/paytm.png" author = "Swapnil Mishra" />
        <PlaylistTile navigateLink = "/backroads" title = "Backroads" image = "/backroads.png" author = "Swapnil Mishra" />
    </div>
  )
}

export default Playlist