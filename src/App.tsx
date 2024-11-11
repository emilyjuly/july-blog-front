import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './context/UserContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProtectedRoute from './components/Helper/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';

import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
import NotFound from './components/Helper/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="perfil/:user/:id" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
