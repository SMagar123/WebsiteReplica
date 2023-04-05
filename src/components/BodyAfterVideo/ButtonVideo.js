import React from 'react'

const ButtonVideo = () => {
  return (
    <div className="button__video">
        <video autoplay>
          <source
            src="https://overflow.io/upload/o/public/home/home-atf-v3-2022.mp4?v=1680461635535"
            type="video/mp4"
          />
        </video>
      </div>
  )
}

export default ButtonVideo