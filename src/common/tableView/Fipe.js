import React from 'react';

const FipeTable = ({ data, visibleRows, handleLoadMore }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          
          </tr>
        </thead>
        <tbody>
          {data?.modelos?.slice(0, visibleRows).length > 0 ? (
            data.modelos.slice(0, visibleRows).map((item, index) => (
              <tr key={index}>
                <td>{item.codigo || 'N/A'}</td>
                <td>{item.nome || 'N/A'}</td>
              </tr>
            ))
          ) : data?.length > 0 ? (
            data.slice(0, visibleRows).map((item, index) => (
              <tr key={index}>
                <td>{item.codigo ||"NA"}</td>
                <td>{item.nome || "NA"}</td>
              </tr>
            ))
          ) :  data?(
            <tr>
            <td>{data.TipoVeiculo ||"NA"}</td>
            <td>{ data.Marca ||"NA"}</td>
          </tr>
        ):(
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      {data?.modelos && visibleRows < data.modelos.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default FipeTable;