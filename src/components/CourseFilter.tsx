import { useBooks } from "../context/BookContext";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import BookList from "./BookList";

export function CourseFilter() {
    const { books } = useBooks();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");

    const courses = [...new Set(books.map(book => book.course))];
    const semesters = [...new Set(books.map(book => book.semester))].sort((a, b) => a - b);

    const filterBooks = books.filter(b =>
        (selectedCourse === "" || b.course === selectedCourse) &&
        (selectedSemester === "" || b.semester === Number(selectedSemester))
    );

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', mb: 2 }}>
                <Box>
                    <Typography variant="h5">Filtrar por Disciplina</Typography>
                    <Select
                        value={selectedCourse}
                        onChange={e => setSelectedCourse(e.target.value)}
                        sx={{ minWidth: 200 }}
                    >
                        <MenuItem value="">Todas</MenuItem>
                        {courses.map((course) => (
                            <MenuItem key={course} value={course}>{course}</MenuItem>
                        ))}
                    </Select>
                </Box>

                <Box>
                    <Typography variant="h5">Filtrar por Semestre</Typography>
                    <Select
                        value={selectedSemester}
                        onChange={e => setSelectedSemester(e.target.value)}
                        sx={{ minWidth: 200 }}
                    >
                        <MenuItem value="">Todos</MenuItem>
                        {semesters.map((semester) => (
                            <MenuItem key={semester} value={semester}>{semester}º Semestre</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>

            <BookList books={filterBooks} />
        </>
    );
}