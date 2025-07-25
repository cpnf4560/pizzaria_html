-- Schema optimizado baseado no frontend HTML
-- Criado para resolver problemas de inconsistência

-- Criar nova base de dados limpa
CREATE DATABASE IF NOT EXISTS pizzaria_nova;
USE pizzaria_nova;

-- Tabela de clientes (baseada no formulário HTML)
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    morada VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de pizzas
CREATE TABLE pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco_pequena DECIMAL(5,2) NOT NULL,
    preco_media DECIMAL(5,2) NOT NULL,
    preco_grande DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de encomendas (baseada no formulário HTML)
CREATE TABLE encomendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega ENUM('recolha', 'domicilio') NOT NULL DEFAULT 'recolha',
    hora_entrega TIME,
    taxa_entrega DECIMAL(6,2) DEFAULT 0.00,
    observacoes TEXT,
    total DECIMAL(8,2) DEFAULT 0.00,
    estado ENUM('pendente', 'preparando', 'pronto', 'entregue', 'cancelado') DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Tabela de pizzas da encomenda
CREATE TABLE encomenda_pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    encomenda_id INT NOT NULL,
    pizza_id INT NOT NULL,
    tamanho ENUM('Pequena', 'Média', 'Grande') NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(5,2) NOT NULL,
    subtotal DECIMAL(6,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (encomenda_id) REFERENCES encomendas(id) ON DELETE CASCADE,
    FOREIGN KEY (pizza_id) REFERENCES pizzas(id)
);

-- Inserir pizzas de exemplo
INSERT INTO pizzas (nome, descricao, preco_pequena, preco_media, preco_grande) VALUES
('Pizza Java Supreme', 'Com chouriço, fiambre, cogumelos e extra queijo', 15.50, 17.50, 19.50),
('Pizza Phyton Pepperoni', 'Molho picante, queijo e pepperoni', 15.00, 17.00, 19.00),
('Pizza C++ Calzone', 'Calzone fechada recheada com carne, queijo e cebola', 15.80, 17.80, 19.80),
('Pizza HTML Havaiana', 'Fiambre, ananás e queijo', 14.90, 16.90, 18.90),
('Pizza CSS Carbonara', 'Bacon, natas, cogumelos e parmesão', 15.20, 17.20, 19.20),
('Pizza Javascript Jalapeño', 'Queijo, carne picada e jalapeños', 15.30, 17.30, 19.30);

-- Inserir cliente de exemplo
INSERT INTO clientes (nome, morada, telefone, email) VALUES
('Carlos Távora', 'Rua da Vista Alegre 324', '+351 918631101', 'carlos@mysql.pt');

-- Mostrar estruturas criadas
SHOW TABLES;
SELECT 'Clientes criados:' as info;
SELECT * FROM clientes;
SELECT 'Pizzas criadas:' as info;
SELECT id, nome, preco_media FROM pizzas;
