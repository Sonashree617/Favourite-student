import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
    const { favourites, removeFavourite } = useContext(StudentContext);

    return (
        <div className="student-list-container">
            <h2>Favourite Students</h2>

            {favourites.length === 0 ? (
                <p style={{ textAlign: "center" }}>
                    No favourite students added yet
                </p>
            ) : (
                <div className="student-grid">
                    {favourites.map((student) => (
                        <div className="student-card" key={student.id}>
                            <h3>{student.name}</h3> {/* ✅ ONLY STRING */}
                            <button
                                className="remove"
                                onClick={() => removeFavourite(student)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavouriteStudents;
