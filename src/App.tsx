import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ["Shanghai", "Nanjing", "Hangzhou", "Jinhua", "Lanxi"];
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Warning</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
