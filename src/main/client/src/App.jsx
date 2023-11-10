import LoginPage from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<LoginPage />}></Route>
              </Routes>
          </BrowserRouter>
    );
}

export default App;
