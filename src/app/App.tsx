import Router from "./Router.tsx";
import store from "../store/store.ts";
import { Provider } from "react-redux";
import { Header } from "../shared/ui/header/header.tsx";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../shared/ui/sidebar/sidebar.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
