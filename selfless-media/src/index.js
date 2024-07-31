import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const selfless = document.getElementById('root');
const rooot = createRoot(selfless);

rooot.render(<App />, document.getElementById('root'));
