
import HomePage from "./pages/HomePage"
import App from "./app"
import UsersListPage from './pages/UsersListPage'
import adminPage from "./pages/adminPage"
//router definition change because we want to figure out which 
//component is going  to be rendered so that
// we can call the loader function attached to it 
export default [
  {
    ...App,
    routes: [
        {
        ...HomePage,
        path: "/",
        exact: true,
        
    },
    {
        ...UsersListPage,
        path: "/users",
       
      },
      {
        ...adminPage,
        path:"/admin"
    }
    ]
    
  }
     
    ]
  
    
    