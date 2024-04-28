import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function CustomPagination({pageNumber, setPageNumber}) {
  const [activePage, setActivePage] = useState(1);

  // Function to handle click on pagination items
  const handlePageClick = (number) => {
    setPageNumber(number);
  };

  // Generate pagination items
  const paginationItems = [];
  for (let number = 1; number <= 5; number++) {
    paginationItems.push(
      <Pagination.Item 
        key={number} 
        active={number === pageNumber}
        onClick={() => handlePageClick(number)} // Set onClick handler to change active page
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className='d-flex justify-content-end'>
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
}

export default CustomPagination;
