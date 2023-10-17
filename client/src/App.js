// imports for login props, app structure: NavBar and ApplicationView
import { useEffect, useState } from "react";
import { tryGetLoggedInUser } from "./managers/authManager";
import NavBar from "./components/NavBar";
import ApplicationViews from "./components/ApplicationViews";

// imports or MUI and theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  // themes and sidebar related state
  const [theme, colorMode] = useMode();
  // for loggedInUser cache
  const [loggedInUser, setLoggedInUser] = useState();

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
          <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
          <ApplicationViews
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
