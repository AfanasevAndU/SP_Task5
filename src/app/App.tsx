import Router from "./Router.tsx";
import store from "../store/store.ts";
import { Provider } from "react-redux";
import { Header } from "../shared/ui/header/header.tsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
