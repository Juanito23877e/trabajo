import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <h1>Tienda Virtual</h1>
            <nav>
              <ul style={{ display: 'flex', gap: '20px', justifyContent: 'center', listStyle: 'none' }}>
                <li>
                  <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
                </li>
                <li>
                  <Link to="/productos/nuevo" style={{ color: 'white', textDecoration: 'none' }}>Añadir Producto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="container" style={{ marginTop: '20px', minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productos/nuevo" element={<ProductForm />} />
            <Route path="/productos/editar/:id" element={<ProductForm />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <p> Tienda Virtual SENA juanito😊</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;