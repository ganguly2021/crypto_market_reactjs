import React from "react";
import { Layout, Typography, Space } from "antd";
import { Routes, Route, Link } from "react-router-dom";

import {
  Navbar,
  News,
  CryptoDetails,
  Cryptocurrencies,
  Homepage,
  Exchanges,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Crypto Market <br />
          All rights reserved. {new Date().getFullYear()}
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
