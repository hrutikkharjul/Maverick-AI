import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ModerateText } from './pages/ModerateText';
import { Results } from './pages/Results';
import { About } from './pages/about';
import { Features } from './pages/features';
import { Pricing } from './pages/pricing';
import { Contributors } from './pages/Contributors';
import { Mission } from './pages/mission';
import { Team } from './pages/team';
import { Global } from './pages/global';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/global" element={<Global />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/moderate-text" element={<ModerateText />} />
          <Route path="/results" element={<Results />} />
        </Routes>

        {/* Background Decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl transform rotate-12 opacity-30" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-500/20 to-purple-500/20 blur-3xl transform -rotate-12 opacity-30" />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;