import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/comic_sans_ms-webfont.ttf';
import './fonts/comic_sans_ms-webfont.woff';
import './fonts/comic_sans_ms-webfont.woff2';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
