import ListGroup from "./ListGroup";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const items = ["Shanghai", "Nanjing", "Hangzhou", "Jinhua", "Lanxi"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
