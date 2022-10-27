import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import RequireAuth from "./../requireAuth/RequireAuth";
import Upload from "./Upload";
import Videolist from "./Videolist";
import VideoPlay from "./VideoPlay";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/upload"
        element={
          <RequireAuth>
            <Upload />
          </RequireAuth>
        }
      />

      <Route
        path="/videolist"
        element={
          <RequireAuth>
            <Videolist />
          </RequireAuth>
        }
      />

      <Route
        path="/videoplay/:id"
        element={
          <RequireAuth>
            <VideoPlay />
          </RequireAuth>
        }
      />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default MainRoute;
