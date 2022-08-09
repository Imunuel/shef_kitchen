import './App.css'
import './pages/Favorite/Favorite.css'
import { Header } from './pages/header/Header'
import { Favorite } from './pages/Favorite/Favorite'
import { Menu } from './pages/Menu/Menu'
import { Shef } from './pages/Shef/Shef'
import { Detail } from './pages/Detail/Detail'
import Top from './pages/Top/Top'
import Footer from './pages/Footer/Footer'

import { Route, Routes } from 'react-router-dom'
import { Profile } from './pages/Profile/Profile'
import { Login } from './pages/Profile/Login'
import { ProfileRecipes } from './pages/Profile/ProfileRecipes'
import { Registration } from './pages/Profile/Registration'

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/shef" element={<Shef />} />
                    <Route path="/shef/favorite" element={<Favorite />} />
                    <Route path="/shef/recipe/:id" element={<Detail />} />
                    <Route path="/shef/top" element={<Top />} />
                    <Route path="/shef/menu" element={<Menu />} />
                    <Route path="/shef/profile" element={<Profile />} />
                    <Route
                        path="/shef/profile/recipes"
                        element={<ProfileRecipes />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
