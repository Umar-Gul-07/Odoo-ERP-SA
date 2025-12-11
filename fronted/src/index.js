import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Utils/Store';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom CSS files from public folder
// Note: These are also linked in index.html, but importing ensures they load
import './index.css';

// Function to add CSS link if it doesn't already exist
function addCSSLink(href, id) {
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

// Import main style.css and additional CSS files from public folder
// Using process.env.PUBLIC_URL to reference public folder assets
const publicUrl = process.env.PUBLIC_URL || '';

addCSSLink(`${publicUrl}/assets/css/style.css`, 'main-style-css');
addCSSLink(`${publicUrl}/assets/plugins/icons/feather/feather.css`, 'feather-icons-css');
addCSSLink(`${publicUrl}/assets/css/bootstrap-datetimepicker.min.css`, 'datetimepicker-css');
addCSSLink(`${publicUrl}/assets/plugins/select2/css/select2.min.css`, 'select2-css');
addCSSLink(`${publicUrl}/assets/plugins/owlcarousel/owl.carousel.min.css`, 'owlcarousel-css');
addCSSLink(`${publicUrl}/assets/plugins/owlcarousel/owl.theme.default.min.css`, 'owlcarousel-theme-css');
addCSSLink(`${publicUrl}/assets/plugins/daterangepicker/daterangepicker.css`, 'daterangepicker-css');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider>
        <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
