import React, { useState } from 'react';
import Staticbanner from '../../../components/staticbanner/Staticbanner';
import Prdata from './Prdata';
import { Link } from 'react-router-dom';

const Prlanding = () => {

  const dataForYear2021 = Prdata['2021'];
  const prlanding2021 = dataForYear2021.map(pritem => (
    <tr key={pritem.id}>
      <td scope="col">{pritem.date}</td>
      <td scope="col">
        <Link to={`/investors/prlanding/${pritem.id}`}>
        {pritem.name}
        </Link>
      </td>
      <td scope="col">
        <Link to={pritem.document} target="_blank" rel="noopener noreferrer">
        PDF
        </Link>
      </td>
    </tr>
  ));

  return (
    <main className='pt-5 mb-5'>
      <Staticbanner 
      staticbannertitle='PR Landing banner title' 
      staticbannerdescription='The worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' 
      staticbannerimage='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' />

<div className="container-fluid pt-5 mb-5">
  <div className="container">
    <div className="row">

      <div class="table-responsive">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Document</th>
          </tr>
        </thead>
        <tbody>
          {prlanding2021}
        </tbody>
        </table>
      </div>

      </div>
      </div>
      </div>


    </main>
  )
}

export default Prlanding