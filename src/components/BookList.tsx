import { Card, CardContent, Typography } from "@mui/material";
import { Book } from "../types";

interface BookListProps {
    books: Book[];
}

export default function BookList({ books }: BookListProps) {
    return (
        <>
            {books.map((book, idx) => (
                <Card key={idx} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="body2">
                            {book.author} - {book.publisher} ({book.year}) | Discipline: {book.course} | Semestre: {book.semester}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};