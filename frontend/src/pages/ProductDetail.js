import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/productos/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el producto. Por favor, intente de nuevo.');
        setLoading(false);
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
      try {
        await axios.delete(`http://localhost:5000/api/productos/${id}`);
        navigate('/');
      } catch (err) {
        setError('Error al eliminar el producto. Por favor, intente de nuevo.');
        console.error('Error deleting product:', err);
      }
    }
  };

  if (loading) return <div>Cargando producto...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h2>{product.nombre}</h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <img 
            src={product.imagen || 'https://via.placeholder.com/300'} 
            alt={product.nombre} 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <p style={{ marginBottom: '15px' }}>{product.descripcion}</p>
          <p><strong>Precio:</strong> ${product.precio}</p>
          <p><strong>Cantidad:</strong> {product.stock} unidades</p>
          <div className="btn-group" style={{ marginTop: '20px' }}>
            <Link to={`/productos/editar/${product.id}`} className="btn">Editar</Link>
            <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
            <Link to="/" className="btn btn-primary">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;