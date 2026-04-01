import { Typography } from "@mui/material";
import { CourseFilter } from "../components/CourseFilter";

export default function Home() {
    return (
        <>
            <Typography variant="h4" gutterBottom>Referência Bibliográficas</Typography>
            <CourseFilter />
        </>
    );
}