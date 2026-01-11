import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const students = [
    { id: 1, name: "Muruga" },
    { id: 2, name: "Sona" },
    { id: 3, name: "Krishna" },
    { id: 4, name: "Sujay" },
    { id: 5, name: "Ajay" },
    { id: 6, name: "Jay" },
    { id: 7, name: "Shree" },
    { id: 8, name: "Krishna" },
    { id: 9, name: "Sujay" },
    { id: 10, name: "Rukku" },
    { id: 11, name: "Mani" },
    { id: 12, name: "Arul" },
];

function StudentList() {
    const { favourites, addToFavourite } = useContext(StudentContext);

    return (
        <div className="student-list-container">
            <h2>Student List</h2>

            <div className="student-grid">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <h3>{student.name}</h3>
                        <button
                            className="add"
                            onClick={() => addToFavourite(student)}
                            disabled={favourites.some(f => f.id === student.id)}
                        >
                            {favourites.some(f => f.id === student.id)
                                ? "Added"
                                : "Add to Favourite"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default StudentList
