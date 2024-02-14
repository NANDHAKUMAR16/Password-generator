import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/CSS/CurrencyConverter.css";
import { CurrencyConverter } from './assets/Components/CurrencyConverter.jsx';


const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <CurrencyConverter />
  </>
);
