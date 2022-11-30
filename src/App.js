import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountPage from "./Pages/Account/AccountPage";
import NoAccountPage from "./Pages/Account/NoAccountPage";
import ProfilePage1 from "./Pages/Account/ProfilePage1";
import ProfilePage2 from "./Pages/Account/ProfilePage2";
import ProfilePage3 from "./Pages/Account/ProfilePage3";
import WelcomePage from "./Pages/Account/WelcomePage";
import Welcomereal from "./Pages/Account/Welcomereal";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="signin-error" element={<NoAccountPage />} />
          <Route path="create-account" element={<AccountPage />} />
          <Route path="create-profile" element={<WelcomePage />}>
            <Route index element={<Welcomereal />} />
            <Route path="profile1" element={<ProfilePage1 />} />
            <Route path="profile2" element={<ProfilePage2 />} />
            <Route path="profile3" element={<ProfilePage3 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
