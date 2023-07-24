import Alert from "./Alert";
import ListGroup from "./ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ["Shanghai", "Nanjing", "Hangzhou", "Jinhua", "Lanxi"];
  return (
    <div>
      <Alert>
        Warning <span>Man</span>
      </Alert>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
