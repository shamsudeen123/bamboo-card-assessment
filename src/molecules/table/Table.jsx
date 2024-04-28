import React from "react";
import Table from "react-bootstrap/Table";
import CustomPagination from "../../molecules/Pagination";
import { Row } from "react-bootstrap";

// custom table component
function CustomTable({ tableHead, pageNumber, setPageNumber, tableBody }) {
  return (
    <>
      <Table
        className="table-container"
        bordered
        responsive
        style={{ height: 200 }}
      >
        <thead>
          <tr className="table-head">
            {tableHead.map((item) => (
              <th className="head-cell">{item.label}</th>
            ))}
          </tr>
        </thead>
        {tableBody}
      </Table>
      <Row className="p-2">
        <CustomPagination {...{ pageNumber, setPageNumber }} />
      </Row>
    </>
  );
}

export default CustomTable;
