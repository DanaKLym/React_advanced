import "./App.css";
import ControlledForm from "./ControlledForm";
import DessertsList from "./DessertsList";
import Form from "./Form";
import ComponentStateManagement from "./ComponentStateManagement";
import StateHookPractice from "./StateHookPractice";
import FetchingData from "./FetchingData";
import CustomHooks from "./CustomHooks";
import ReactAPI from "./ReactAPI";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <Form/>
      <ControlledForm />
      <ComponentStateManagement />
      <StateHookPractice />
      <FetchingData />
      <CustomHooks />
      <ReactAPI/>
    </div>
  );
}

export default App;
