import BarcodeReader from "react-barcode-reader";
import { AnimatedSwitch } from "react-router-transition";
import _ from "underscore";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";


import "./LayoutWeb.css";

function LayoutWeb(props) {
  var state = {
    //result: "No result",
    result: "",
  };

  function handleScan(data) {
    state.result = data;
  }

  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  function handleError(err) {
    console.error(err);
  }

  return (
    <div>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          {_.filter(_.toArray(props.children), (child) => {
            return child.props.className === "content";
          })}


        </AnimatedSwitch>
      <Container>
        <Row>
          <BarcodeReader onError={handleError} onScan={handleScan} />
          <p>{state.result}</p>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutWeb;
