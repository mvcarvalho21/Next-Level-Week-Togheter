import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "../src/pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from "./pages/AdminRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from "../src/contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
