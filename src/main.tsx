import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";

async function deferRender() {
    if (import.meta.env.VITE_RUN_MSW === 'true') {
        const { worker } = await import('@/__mocks__/Browser');
        await worker.start();
    }
}

deferRender().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
});