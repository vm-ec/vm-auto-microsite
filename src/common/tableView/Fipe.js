import React from 'react';

const FipeTable = ({ data, visibleRows, handleLoadMore }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleRows).map((item, index) => (
            <tr key={index}>
              <td>{item.brand || 'N/A'}</td>
              <td>{item.model || 'N/A'}</td>
              <td>{item.year || 'N/A'}</td>
              <td>{item.price || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleRows < data.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default FipeTable;