import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App";
import { P404 } from "./app/P404";
import "./style/index.css";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<P404 />} />
        </Routes>
    </BrowserRouter>
);
