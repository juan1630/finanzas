import "./App.css";
import { AuthRoutes } from "./routes/authRoutes";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AuthRoutes />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
