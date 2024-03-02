import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/CSS/CurrencyConverter.css";
import { PasswordGenerator } from './assets/Components/PasswordGenerator.jsx';


const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <PasswordGenerator />
  </>
);
