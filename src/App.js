import "./App.css";
import SimpleSelect from "./components/SimpleSelect";
import SimpleSnackbar from "./components/SimpleSnackbar";
import SimpleDialog from "./components/SimpleDialog";
import SimpleAutocomplete from "./components/SimpleAutocomplete";

function App() {
  return (
    <div className="App">
      <SimpleSelect />
      <SimpleSnackbar />
      <SimpleDialog />
      <SimpleAutocomplete />
    </div>
  );
}

export default App;
