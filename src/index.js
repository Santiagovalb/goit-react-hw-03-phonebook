import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

import Dark from 'components/arrow/arrows';
import Headers from 'components/head/head.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Dark />
    <Headers />
  </React.StrictMode>
);
