import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Toast from "./components/toast/Toast";
import { UserState } from "./context/UserStateContext";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";

const App = () => {
  const { user, messageToast, showToast } = UserState();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toast message={messageToast} showToast={showToast} />
    </div>
  );
};

export default App;
