import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import RequireAuth from "./../requireAuth/RequireAuth";
import Upload from "./Upload";
import Videolist from "./Videolist";
import VideoPlay from "./VideoPlay";
import Friends from "./Friends";
import PlanDetails from "./../components/PlanDetails";
import Postplan from './Postplan';
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
        path="/friends"
        element={
          <RequireAuth>
            <Friends />
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

      <Route
        path="/plan"
        element={
          <RequireAuth>
            <PlanDetails />
          </RequireAuth>
        }
      />
       <Route
        path="/postplan"
        element={
          <RequireAuth>
            <Postplan />
          </RequireAuth>
        }
      />

      
    </Routes>
  );
};

export default MainRoute;
