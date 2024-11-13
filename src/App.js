import React from "react";
import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/about/about";
import Event from "./components/events/Events";
import Footer from "./components/footer/Footer";
import Navbar from "./components/home/navbar/Navbar";
import Register from "./components/register/register";
import Sponsors from "./components/sponsors/sponsors";
import NoPage from "./components/noPage";
import Schedule from "./components/schedule/schedule";
import Dashboard from "./components/dashboard/dashboard";
import Events from "./components/dashboard/pages/events";
import Team from "./components/dashboard/pages/team";
import EventPass from "./components/dashboard/pages/eventpass";
import DashboardDrawer from "./components/dashboard/perm-drawer";
import Welcome from "./components/home/welcome";
import BottomNav from "./components/bottomnav/BottomNav";
import EventDetail from "./components/events/EventDetail";
import Teams from "./components/Teams/Teams";
import ComingSoon from "./components/comingSoon";
import Leaderboard from "./components/leaderboard/Leaderboard";

function App() {
  const location = useLocation();
  const isWelcomePage = () => {
    return location.pathname === "/";
  };
  const isDashboard = () => {
    return location.pathname.includes("/dashboard");
  };
  const isContactDes = () => {
    return location.pathname.includes("/Contact");
  };
  const isContact = () => {
    return location.pathname.includes("/contact");
  };

  const renderFooter = () => {
    if (!isWelcomePage() && !isDashboard() && !isContact() && !isContactDes()) {
      return <Footer />;
    }
    return null;
  };

  return (
    <div className="App">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events" element={<Event />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Teams />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/dashboard" element={<DashboardDrawer />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/pass" element={<EventPass />} />
          <Route path="/dashboard/events" element={<Events />} />
          <Route path="/dashboard/team" element={<Team />} />
        </Route>
      </Routes>
      {renderFooter()}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
