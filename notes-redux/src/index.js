import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Note from "./pages/Note";
import NoteCreate from "./pages/NoteCreate";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import NoteBrowse from "./pages/NoteBrowse";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
{/* app component will wrap all other routes here */}
          <Route path="/" element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/add" element={<NoteCreate />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
