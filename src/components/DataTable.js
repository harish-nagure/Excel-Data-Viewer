import React from 'react';
import { useTable } from 'react-table';

const DataTable = ({ data }) => {
  // Define columns for Call ID, Date, and Time
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
  console.log(tableInstance);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="overflow-x-auto rounded-xl ">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md text-sm text-left"
      >
        <thead className="bg-secondary text-white rounded-t-xl">
          {headerGroups.map((headerGroup) => (

            <tr  key={headerGroup.id}>

              {headerGroup.headers.map((column) => (
                <th
                  className="px-6 py-3 text-xs font-bold tracking-wider uppercase">
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
              <tr key={row.id}
                className="hover:bg-gray-100 border-b border-gray-200 last:border-none rounded-lg"
              >
                {row.cells.map((cell) => (
                  <td
                    className="px-6 py-4 whitespace-nowrap text-black-700 rounded-lg"
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
  );
};

export default DataTable;
