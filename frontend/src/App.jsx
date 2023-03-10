import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { CurrentUserContextProvider } from "./contexts/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Offers from "./pages/Offers";
import DashboardAdmin from "./pages/DashboardAdmin";
import AddCook from "./pages/AddCook";
import DeleteCook from "./pages/DeleteCook";
import WorkInProgress from "./pages/WorkInProgress";
import CookList from "./pages/CookList";
import "./App.css";
import EditCook from "./pages/EditCook";

function App() {
  return (
    <CurrentUserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/addcook" element={<AddCook />} />
          <Route path="/deletecook" element={<DeleteCook />} />
          <Route path="/cooklist" element={<CookList />} />
          <Route path="/workinprogress" element={<WorkInProgress />} />
          <Route path="/editcook/:id" element={<EditCook />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContextProvider>
  );
}

export default App;
