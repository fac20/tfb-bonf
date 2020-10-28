import React from 'react';
import { useTable, useSortBy } from 'react-table';
import styled from 'styled-components';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <TableStyle {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </TableStyle>
  );
};

const TableStyle = styled.table`
  border: 1px solid lightgray;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid lightgray;
  background-color: white;
  padding: 7px 7px;
`;

const Th = styled.th`
  border: 1px solid lightgray;
  background-color: rgb(255, 232, 232);
  padding: 7px 7px;
`;

export default Table;
