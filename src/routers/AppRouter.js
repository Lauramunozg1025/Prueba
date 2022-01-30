import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Registro from "../components/Registro";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </Router>
        </div>
    );
}