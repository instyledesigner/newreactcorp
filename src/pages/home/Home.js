import React, { useState } from 'react'
import Sliderbanner from '../../components/sliderbanner/Sliderbanner'

const Home = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <main className='_pt-4 _mt-4'>
      <Sliderbanner />

      {/* <div className="tabsMainWrapper">
        <div className="tabsLinkWrapper">
          <div
            className={toggleState === 1 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(1)}>Tab 1</div>
          <div
            className={toggleState === 2 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(2)}>Tab 2</div>
          <div
            className={toggleState === 3 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(3)}>pr/events and item page linking</div>
        </div>
        <div className="tabsContentWrapper">
          <div className={toggleState === 1 ? "tab-content active-tab-content" : "tab-content"}>https://github.com/Ziratsu/yt-react-tabs</div>
          <div className={toggleState === 2 ? "tab-content active-tab-content" : "tab-content"}>Tab 2 content</div>
          <div className={toggleState === 3 ? "tab-content active-tab-content" : "tab-content"}>
          <p>product/bod/news/event main page linking with their item pages</p>
            <p>refrence: https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/ProductDetail.js</p>
          </div>
        </div>
      </div> */}

<div className="container px-4 py-5 mb-5">
    <div className="row pt-5">
      <ul className="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link display-6 text-uppercase active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link display-6 text-uppercase" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
          <div className="row pt-5">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch _g-4 _px-3 _py-5">
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-0 display-6 lh-1 _fw-bold">Short title, long jacket</h3>
                    <small className="text-end">₹ 200</small>
                  </div>
                </div>
              </div>
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 _fw-bold">Much longer title that wraps to multiple lines</h3>
                    <small className="text-end">₹ 450</small>
                  </div>
                </div>
              </div>
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 _fw-bold">Another longer title belongs here</h3>
                    <small className="text-end">₹ 900</small>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  tabIndex={1}>
          <div className="row pt-5">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch _g-4 _px-3 _py-5">
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 _fw-bold">Another longer title belongs here</h3>
                    <small className="text-end">₹ 900</small>
                  </div>
                </div>
              </div>
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-0 display-6 lh-1 _fw-bold">Short title, long jacket</h3>
                    <small className="text-end">₹ 200</small>
                  </div>
                </div>
              </div>
              <div className="col p-0 m-0 productItem">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-0 shadow-lg">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 _fw-bold">Much longer title that wraps to multiple lines</h3>
                    <small className="text-end">₹ 450</small>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</div>


  <div className="container-fluid _px-4 py-5 mb-5 bg-secondary text-white">
  <div className="container">
    <div className="row featurette">
    <div className="col-md-7">
    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
    </div>
    <div className="col-md-5">
    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </div>
    </div>
  </div>
  </div>

  


<div className="container _px-4 py-5 mb-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Stones</h2>
    <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
    </div>
    <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        </div>
        <h3 className="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>
    </div>
  </div>




  <div className="container-fluid _px-4 py-5 mb-5 bg-light">
  <div className="container">
    <div className="row featurette">
    <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
    </div>
    <div className="col-md-5 order-md-1">
    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    </div>
    </div>
  </div>
  </div>





<div className="container _px-4 _py-5 _mb-5" id="eventGallery">
    <h2 className="pb-2 border-bottom">Event gallery</h2>
    <div className="row pt-5" data-masonry='{"percentPosition": true }'>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card p-3">
          <figure className="p-3 mb-0">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card text-bg-primary text-center p-3">
          <figure className="mb-0">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer mb-0 text-white">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has a regular title and short paragraph of text below it.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card">
          <svg className="bd-placeholder-img card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text></svg>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card p-3 text-end">
          <figure className="mb-0">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>




    </main>
  )
}

export default Home