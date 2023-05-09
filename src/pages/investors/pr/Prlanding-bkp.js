import React, { useState } from 'react';
import Staticbanner from '../../../components/staticbanner/Staticbanner';
import Prdata from './Prdata';
import { Link } from 'react-router-dom';

const Prlanding = () => {

  const [yearTabs, setyearTabs] = useState(year);

  const prlanding = Prdata.map(pritem => {
    return(
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
    )
  });

  return (
    <main className='pt-5 mb-5'>
      <Staticbanner 
      staticbannertitle='PR Landing banner title' 
      staticbannerdescription='The worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' 
      staticbannerimage='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png' />


<div className="container px-4 py-5 mb-5">
    <div className="row pt-5">
      <ul className="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link display-6 text-uppercase active" id="pills-2023-tab" data-bs-toggle="pill" data-bs-target="#pills-2023" type="button" role="tab" aria-controls="pills-2023" aria-selected="true">2023</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link display-6 text-uppercase" id="pills-2022-tab" data-bs-toggle="pill" data-bs-target="#pills-2022" type="button" role="tab" aria-controls="pills-2022" aria-selected="false">2022</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link display-6 text-uppercase" id="pills-2021-tab" data-bs-toggle="pill" data-bs-target="#pills-2021" type="button" role="tab" aria-controls="pills-2021" aria-selected="false">2021</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-2023" role="tabpanel" aria-labelledby="pills-2023-tab" tabIndex={0}>
          <div className="row pt-5">
            tab 1
          </div>
        </div>
        <div className="tab-pane fade" id="pills-2022" role="tabpanel" aria-labelledby="pills-2022-tab" tabIndex={1}>
          <div className="row pt-5">
            tab 2
          </div>
        </div>
        <div className="tab-pane fade" id="pills-2021" role="tabpanel" aria-labelledby="pills-2021-tab" tabIndex={1}>
          <div className="row pt-5">
            tab 3
          </div>
        </div>
      </div>
    </div>
</div>


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
          {prlanding}
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