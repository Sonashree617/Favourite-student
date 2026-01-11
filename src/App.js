import { Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents"; 

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>Favourite Student List</h1>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/">Students</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

      {/* MAIN CONTENT */}
      <main className="content">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Favourite Student App
      </footer>
    </div>
  );
}

export default App;

