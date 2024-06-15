// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, ThemeContext} from './context/ThemeContext';

const Root = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return <App />;
};

const AppWrapper = () => (
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
