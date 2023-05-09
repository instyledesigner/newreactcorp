import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Staticbanner from '../../../components/staticbanner/Staticbanner';
import Prdata from './Prdata';


const Pritem = () => {

  const { pritemid } = useParams();
  const thispritem = Prdata.find((pr) => pr.id === pritemid);

  return (
    <main className='pt-5 mb-5'>
      <Staticbanner 
      staticbannertitle='PR Item banner title' 
      staticbannerdescription='The worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' 
      staticbannerimage='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' />


<div className="container-fluid pt-5 mb-5">
  <div className="container">
    <div className="row">
    
    <h2 className="featurette-heading fw-normal lh-1">
    {thispritem.name}
    </h2>
    <p className="lead">
    {thispritem.description}
    </p>
    <p className="lead">
    <Link to="/investors/prlanding">
    back to pr landing
    </Link>
    </p>

      </div>
      </div>
      </div>
      </main>
  )
}

export default Pritem