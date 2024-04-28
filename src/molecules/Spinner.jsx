import Spinner from "react-bootstrap/Spinner";

// loader component
function CustomSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" />
    </div>
  );
}

export default CustomSpinner;
