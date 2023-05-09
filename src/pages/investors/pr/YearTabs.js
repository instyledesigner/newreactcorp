import React, { useState } from 'react';

const YearTabs = ({ years, setActiveYear }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index, year) => {
    setActiveTab(index);
    setActiveYear(year);
  };

  return (
    <div>
      <div className="tabs">
        {years.map((year, index) => (
          <div key={index} className={`tab ${activeTab === index ? 'active' : ''}`} onClick={() => handleClick(index, year)}>
            {year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearTabs;
