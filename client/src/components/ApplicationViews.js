import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./AuthorizedRoute";
import Login from "../scenes/auth/Login";
import Register from "../scenes/auth/Register";
import Investors from "../scenes/investors/index.js";
import Agents from "../scenes/agents/index.js";
import Properties from "../scenes/properties/index.js";
import PropertyDetails from "../scenes/properties/PropertyDetails.js";
import CreateProperty from "../scenes/properties/CreateProperty.js";
import EditProperty from "../scenes/properties/EditProperty.js";
import Bar from "../scenes/bar-chart/index.js";
import Dashboard from "../scenes/dashboard/index.js";
import Line from "../scenes/line-chart/index.js";


export default function ApplicationViews({ loggedInUser, setLoggedInUser, searchTerm, setSearchTerm }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Dashboard />
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
              <Agents loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          }
        />

        <Route path="properties">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} searchTerm={searchTerm}>
                <Properties searchTerm={searchTerm} />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":propertyId"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} setSearchTerm={setSearchTerm}>
                <PropertyDetails loggedInUser={loggedInUser} setSearchTerm={setSearchTerm} />
              </AuthorizedRoute>
            }
          />
          <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <CreateProperty loggedInUser={loggedInUser} />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":propertyId/edit"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EditProperty loggedInUser={loggedInUser} />
              </AuthorizedRoute>
            }
          />
        </Route>

        <Route
          path="bar"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <Bar />
            </AuthorizedRoute>
          }
        />

        <Route
          path="line"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <Line />
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
