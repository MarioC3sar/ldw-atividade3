import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Container, AppBar, Toolbar, Button} from "@mui/material";
import { BooksProvider} from "./context/BookContext";
import Home from './pages/Home';
import Course from './pages/Course';

export default function App(){
    return (
        <BooksProvider>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/">Inicio</Button>
                        <Button color="inherit" component={Link} to="/cursos">Filtrar por Diciplinas</Button>
                    </Toolbar>
                </AppBar>
                <Container sx={{ marginTop: 4}}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/cursos" element={<Course/>} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </BooksProvider>
    );
}