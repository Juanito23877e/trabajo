
CREATE DATABASE IF NOT EXISTS tienda_db;
USE tienda_db;

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  imagen VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES
('Laptop HP', 'Laptop HP Pavilion 15.6", Intel Core i5, 8GB RAM, 256GB SSD', 799.99, 10, 'laptop.jpg'),
('Monitor Dell', 'Monitor Dell 24" Full HD', 199.99, 15, 'monitor.jpg'),
('Teclado Logitech', 'Teclado mecánico Logitech G Pro', 129.99, 20, 'teclado.jpg');