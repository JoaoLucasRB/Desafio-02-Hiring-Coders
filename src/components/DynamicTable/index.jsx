import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import { TableWrapper } from './styles';
import { useCrud } from '../../hooks/useCrud';

function DynamicTable() {
  const {
    selectedCrud,
    crudList,
    dataList,
  } = useCrud();

  const fieldList = crudList[selectedCrud].fields;

  return (
    <TableWrapper>
      <TableContainer >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {Object.entries(fieldList).map(field =>
                <TableCell key={`header-cell-for-${field[0]}`}>{field[1].label}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((dataObj, index) => <TableRow key={`row-for-index-${index}`}>
              {Object.entries(fieldList).map(field =>
                <TableCell key={`body-cell-for-${field[0]}`}>{dataObj[field[0]]}</TableCell>
              )}
            </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}

export default DynamicTable;
