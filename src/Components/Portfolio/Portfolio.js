import React, { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

function Portfolio({ projectList }) {
  const filterListBtn = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const [filteredList, setFilteredList] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));
    
    e.target.classList.add('active');

    const select = e.target.textContent;
    
    if (select === 'All') {
      setFilteredList(projectList);
    } else {
      setFilteredList(
        projectList.filter(item => item.category === select)
      );
    }

    setSelected(select);

    console.log(select);
  }

  return (
    <div className='container'>
      <Toolbar 
        filters={filterListBtn}
        selected={selected}
        onSelectFilter={filter}
      />

      <div className='gallery'>
        <ProjectList projects={filteredList} /> 
      </div>
    </div>
    );
}

export default Portfolio;
