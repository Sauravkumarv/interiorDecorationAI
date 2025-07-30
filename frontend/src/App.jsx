import React from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import FurnitureForm from "./components/FurnitureForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/Home.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        {/* Home page for "/" and "/home" */}
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/home"
          element={
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        {/* Furniture form at "/form" */}
        <Route
          path="/form"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FurnitureForm />
            </motion.div>
          }
        />
      </Routes>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;