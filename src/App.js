import "./App.css";
import EmployeeList from "./Components/EmployesList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper"></div>
        </div>
        <EmployeeContextProvider>
          <EmployeeList />
        </EmployeeContextProvider>
      </div>
    </>
  );
}

export default App;
