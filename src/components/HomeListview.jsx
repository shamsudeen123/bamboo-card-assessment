import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TableBody from "../molecules/table/TableBody";
import CustomTable from "../molecules/table/Table";
import { STRINGS } from "../strings/Strings";
import { feeTableHead } from "../constants/table";
import "../css/table.css";
import { getListview } from "../axios";
import CustomSpinner from "../molecules/Spinner";

// user listview component
function HomeListview() {
  const tableHead = feeTableHead;
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // api call for fetching data from json placeholder(test api)
  useEffect(() => {
    getListview(setData, pageNumber, pageSize);
  }, [pageNumber]);

  // table body
  const TBody = () => {
    return data.map((cell) => (
      <TableBody
        {...{
          cellOne: cell.userId,
          cellTwo: cell.id,
          cellThree: cell.title.substring(0, 30),
          cellFour: cell.body.substring(0, 30),
        }}
      />
    ));
  };

  return (
    <Row className="fee-lv-container card-wrapper">
      <div className="d-flex mb-2">
        <h4>{STRINGS.LISTVIEW}</h4>
      </div>
      {data.length > 0 ? (
        <CustomTable
          {...{ tableHead, pageNumber, setPageNumber, tableBody: <TBody /> }}
        />
      ) : (
        <CustomSpinner />
      )}
    </Row>
  );
}

export default HomeListview;
