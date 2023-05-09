import React from 'react';
import Staticbanner from '../../components/staticbanner/Staticbanner';

const Shareprice = () => {

  return (
    <main className='pt-5 mb-5'>
      <Staticbanner 
      staticbannertitle='PR Landing banner title' 
      staticbannerdescription='The worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' 
      staticbannerimage='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' />


      <div className="container-fluid pt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className='col'>
            <iframe className="responsive" id="ExternalWebContentExternalIFrame" 
            src="https://irs.tools.investis.com/clients/uk/easyjet1/SM7/Default.aspx?culture=en-GB" 
            allowtransparency="true" frameborder="0" scrolling="no" 
            style={{overflow:"hidden",position:"absolute !important",height:"1397px",width:"100%"}} 
            ></iframe>
            </div>
          </div>
        </div>
      </div>


    </main>
  )
}

export default Shareprice