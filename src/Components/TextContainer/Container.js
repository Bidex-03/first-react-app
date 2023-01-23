import "./Container.css";

import TextContainerItem from "./TextContainerItem";
import Card from "../UI/Card";

const Container = (props) => {
  return (
    <Card className="container">
        <TextContainerItem heading = {props.items[0].heading} />
    </Card>
  );
};

export default Container;
