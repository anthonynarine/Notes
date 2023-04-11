import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./pages/NoteBrowse";
import Note from "./pages/Note";
import NoteCreate from "./pages/NoteCreate";
import ErrorPage from "./pages/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/note/add" element={<NoteCreate />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
