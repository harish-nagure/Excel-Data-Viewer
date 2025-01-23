import React from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom';


const DataTable = ({ data }) => {
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Call ID',
        accessor: 'Call_ID',
      },
      {
        Header: 'Date',
        accessor: 'Date',
      },
      {
        Header: 'Time',
        accessor: 'Time',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleClick = (cell) => {
    navigate('/ViewIDGraph', { state: cell.row.original });
    
  };

  return (
    <>
    <div>
        <div className="overflow-x-auto rounded-xl">
          <table
            {...getTableProps()}
            className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md text-sm text-left"
          >
            <thead className="bg-secondary text-white rounded-t-xl">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 text-xs font-bold tracking-wider uppercase"
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="rounded-b-xl">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="hover:bg-gray-200 border-b border-gray-500 last:border-none hover:font-bold"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-black-700 cursor-pointer"
                        onClick={() => handleClick(cell)}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>   
         
    </div>
    
      <button 
      onClick={()=>{navigate("/db")}}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
      >Dashboard</button>
    </>
  );
};

export default DataTable;
