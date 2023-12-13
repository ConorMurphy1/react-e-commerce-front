import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './componets/Header'
import Login from './componets/Login'
import Register from './componets/Register'
import AddProduct from './componets/AddProduct'
import EditProduct from './componets/EditProduct'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1> React E-commerce</h1>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop for components */}
          <Route path="/register" element={<Register />} /> {/* Use 'element' prop for components */}
          <Route path="/add" element={<AddProduct />} /> {/* Use 'element' prop for components */}
          <Route path="/edit" element={<EditProduct />} /> {/* Use 'element' prop for components */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
