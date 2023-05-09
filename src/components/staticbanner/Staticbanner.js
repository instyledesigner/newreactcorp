import React from 'react'

const Staticbanner = ({ staticbannertitle, staticbannerdescription, staticbannerimage }) => {
  return (
    <div className="container-fluid bg-secondary text-white mb-5">
        <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 _py-5">
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={staticbannerimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{staticbannertitle}</h1>
            <p className="lead">{staticbannerdescription}</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Staticbanner