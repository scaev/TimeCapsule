import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewPostPage from "../NewPostPage/NewPostPage";
import PostHistoryPage from "../PostHistoryPage/PostHistoryPage";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Router>
        <Container maxWidth='xl'>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={ <Navigate to="/posts" />} />
            <Route path="/posts" element={<PostHistoryPage />} />
              <Route path="/posts/new" element={<NewPostPage />} />
              <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
          </Container>
          </Router>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
