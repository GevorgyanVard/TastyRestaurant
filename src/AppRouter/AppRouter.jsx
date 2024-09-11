import { Route, Routes } from "react-router-dom"
import Layout from "../Pages/Layout/Layout"
import HomePage from "../Pages/HomePage/HomePage"
import MenuPage from "../Pages/MenuPage/MenuPage"
import SpecialtiesPage from "../Pages/Specialties/SpecialtiesPage"
import ReservationPage from "../Pages/Reservation/ReservationPage"
import BlogPage from "../Pages/BlogPage/BlogPage"
import EachBlog from "../Pages/EachBlog/EachBlog"
import AboutPage from "../Pages/AboutPage/AboutPage"
import ContactPage from "../Pages/ContactPage/ContactPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="specialties" element={<SpecialtiesPage />} />
                <Route path="reservation" element={<ReservationPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:id" element={<EachBlog />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter