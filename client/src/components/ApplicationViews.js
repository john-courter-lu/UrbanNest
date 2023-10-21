import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Investors from "../scenes/investors/index.js";
import Agents from "../scenes/agents/index.js";
import Properties from "../scenes/properties/index.js";


export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <p>PathName1</p>
            </AuthorizedRoute>
          }
        />
        <Route
          path="pathName1"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <p>PathName1</p>
            </AuthorizedRoute>
          }
        />
        <Route
          path="investors"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Investors />
            </AuthorizedRoute>
          }
        />
        <Route
          path="agents"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Agents />
            </AuthorizedRoute>
          }
        />
        <Route path="properties">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <Properties />
              </AuthorizedRoute>
            }
          />
          <Route
            path="pathName2_subPath"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <p>PathName2_subPath</p>
              </AuthorizedRoute>
            }
          />
        </Route>
        <Route
          path="pathName3_AdminOnly"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <p>PathName3_AdminOnly</p>
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>More path can be added...</p>} />
    </Routes>
  );
}
