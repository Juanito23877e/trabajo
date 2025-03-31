import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/productos');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos. Por favor, intente de nuevo.');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
      try {
        await axios.delete(`http://localhost:5000/api/productos/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } catch (err) {
        setError('Error al eliminar el producto. Por favor, intente de nuevo.');
        console.error('Error deleting product:', err);
      }
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Productos disponibles</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.nombre}</h3>
              <p>{product.descripcion.substring(0, 100)}...</p>
              <p><strong>Precio:</strong> ${product.precio}</p>
              <p><strong>Cantidad:</strong> {product.stock} unidades</p>
              <div className="btn-group">
                <Link to={`/productos/${product.id}`} className="btn btn-primary">Ver</Link>
                <Link to={`/productos/editar/${product.id}`} className="btn">Editar</Link>
                <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;