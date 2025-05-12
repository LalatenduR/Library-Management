import './App.css'
import Homepage from './pages/Homepage'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider,createBrowserRouter} from "react-router"
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'


function App() {

  const route=createBrowserRouter([
    {
      path:"/login",
      element:
      <div>
        <Loginpage/>
      </div>
    },
    {
      path:"*",
      element:
      <div>
        <Homepage/>
      </div>
    },
    {
      path:"/signup",
      element:
      <div>
        <Signuppage/>
      </div>
    },
    {
      path:""
    }
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={route}/>
    </ThemeProvider>
  )
}

export default App
