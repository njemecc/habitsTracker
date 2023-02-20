import './App.css'

//components
import NavBar from './components/UI/NavBar'
import HabbitManager from './components/habbits/HabbitManager'

//router
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {

path:"/",
element:<NavBar/>,
children:[
    {
      path:"/manage-habbits",
      element:<HabbitManager/>
    }
]

},

])


function App() {
 return <RouterProvider router={router} />
}

export default App
