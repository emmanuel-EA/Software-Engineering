import './App.css'
import NavBar from './components/NavBar4'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes4'

function App() {

    return (
        <UserProvider>
            <NavBar />
            <AppRoutes />
        </UserProvider>
    )
}

export default App
