import { BrowserRouter as Router } from "react-router-dom";

import LoginScreen from './Helpers/auth/Login'

import AdminRoutes from './Admin/Index'
import ManagerRoutes from './Manager/Index'
import EmployeeRoutes from './Employee/Index'

function App() {

  const UserInfo = 'employee'

  return (
    <Router>
      {(() => {
        switch (UserInfo) {
          case 'admin':
            return (
              <div>
                <AdminRoutes />
              </div>
            )
          case 'manager':
            return (
              <div>
                <ManagerRoutes />
              </div>
            )
          case 'employee':
            return (
              <div>
                <EmployeeRoutes />
              </div>
            )
          default:
            return (
              <div>
                <LoginScreen />
              </div>
            )
        }
      })()}
    </Router>
  )
}

export default App
