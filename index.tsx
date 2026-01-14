
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical Error: Could not find root element #root");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("React Rendering Error:", error);
    rootElement.innerHTML = `
      <div style="background: #0a0a0c; color: white; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif;">
        <div style="text-align: center; padding: 20px;">
          <h1 style="color: #ef4444;">Application Error</h1>
          <p>The portfolio failed to initialize. Please check the console for details.</p>
        </div>
      </div>
    `;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
