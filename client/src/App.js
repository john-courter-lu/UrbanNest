// imports for login props, app structure: NavBar and ApplicationView
import { useEffect, useState } from "react";
import { tryGetLoggedInUser } from "./managers/authManager";
import ApplicationViews from "./components/ApplicationViews";

// imports or MUI and theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/Topbar.js";
import Sidebar from "./components/Sidebar.js";


function App() {
  // theme related state
  const [theme, colorMode] = useMode();
  // sidebar related state
  const [isSidebar, setIsSidebar] = useState(true);
  // for loggedInUser cache
  const [loggedInUser, setLoggedInUser] = useState();
  // for search bar's functionality in Topbar
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // user will be null if not authenticated
    tryGetLoggedInUser().then((user) => {
      setLoggedInUser(user);
    });
  }, []);

  // wait to get a definite logged-in state before rendering
  if (loggedInUser === undefined) {
    return null;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}> {/* MUI function: using custom themes */}
        <CssBaseline /> {/* MUI function: return CSS to default */}

        <div className="app">

          <Sidebar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} isSidebar={isSidebar} />

          <main className="main">

            <Topbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setIsSidebar={setIsSidebar} setSearchTerm={setSearchTerm} />

            <div className="content">
              <ApplicationViews
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
                searchTerm={searchTerm}
              />
            </div>

          </main>

        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
