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
import Dashboard from "../scenes/dashboard/index.js";
import Bar from "../scenes/bar-chart/index.js";
import Line from "../scenes/line-chart/index.js";
import Pie from "../scenes/pie-chart/index.js";
import { HomeRedirect } from "./HomeRedirect.js";


export default function ApplicationViews({ loggedInUser, setLoggedInUser, searchTerm, setSearchTerm, notificationCount, setNotificationCount }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <HomeRedirect roles={["Admin"]} loggedInUser={loggedInUser} />{/* Redirect Based on User Roles */}
            </AuthorizedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <Dashboard />
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
              <Agents loggedInUser={loggedInUser} notificationCount={notificationCount} setNotificationCount={setNotificationCount} />
            </AuthorizedRoute>
          }
        />

        <Route path="properties">
          <Route
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} searchTerm={searchTerm}>
                <Properties searchTerm={searchTerm} notificationCount={notificationCount} setNotificationCount={setNotificationCount} />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":propertyId"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser} setSearchTerm={setSearchTerm}>
                <PropertyDetails loggedInUser={loggedInUser} setSearchTerm={setSearchTerm} notificationCount={notificationCount} setNotificationCount={setNotificationCount} />
              </AuthorizedRoute>
            }
          />
          <Route
            path="create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <CreateProperty loggedInUser={loggedInUser} notificationCount={notificationCount} setNotificationCount={setNotificationCount} />
              </AuthorizedRoute>
            }
          />
          <Route
            path=":propertyId/edit"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EditProperty loggedInUser={loggedInUser} notificationCount={notificationCount} setNotificationCount={setNotificationCount} />
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
          path="pie"
          element={
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <Pie />
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
