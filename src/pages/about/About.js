import React from 'react'
import Staticbanner from '../../components/staticbanner/Staticbanner'

const About = () => {
  return (
    <main className='pt-5 mb-5'>
      <Staticbanner 
      staticbannertitle='Responsive left-aligned hero with image' 
      staticbannerdescription='Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' 
      staticbannerimage='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' />


      <div className="container">
        <section className='py-5 mb-5 innerPageIntro text-center'>
          <p className='display-4'>We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <p>Proin sit amet imperdiet ipsum. Fusce rhoncus, magna eget mollis interdum, nibh massa fringilla sapien, a tincidunt neque tortor nec erat. Integer sodales mauris vel ante fermentum sagittis. Praesent faucibus condimentum mi in dictum. In ex tortor, luctus sed condimentum a, dignissim porta sapien. Duis vel vulputate lectus.</p>
        </section>
      </div>

      <div className='container-fluid'>
      <div className='row mb-5'>
      
      <img src="https://dummyimage.com/1920x400/000/fff" className="img-fluid m-0 p-0" alt="..." />
      </div>
      </div>


  <div className="container-fluid pt-5 mb-5">
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


    </main>
  )
}

export default About