import React from 'react'
import './TodaysOffer.css'

const TodaysOffer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              className="youtubeVideo"
              src="https://www.youtube.com/embed/8Qbax_1szSs?si=Tyghu_KY16Xs54HZ"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
          alt="Ice Cream Offer"
          className="img-fluid"
        />

        <img
          src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800"
          alt="Special Ice Cream"
          className="img-fluid customIMGOffer"
        />
      </div>
    </>
  )
}

export default TodaysOffer