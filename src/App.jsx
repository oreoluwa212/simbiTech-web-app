import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './utilities/Product';
import SignUp from './pages/SignupPage';
import LogIn from './pages/LoginPage';
import OpportunityPage from './pages/OpportunityPage';
import MaterialPage from './pages/MaterialLibrary';
import Settings from './pages/Settings';
import RoadmapPage from './pages/RoadMap';
import Verification from './pages/VerificationPage';
import CoursesPage from './pages/Courses';
import MentorsPage from './components/Mentors';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/overview" element={<ProductPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/opportunity-hub" element={<OpportunityPage />} />
      <Route path="/material-library" element={<MaterialPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/track-roadmap" element={<RoadmapPage />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/mentors" element={<MentorsPage />} />
    </Routes>
  );
}

export default App;