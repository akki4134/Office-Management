import { BrowserRouter as Router } from "react-router-dom";

import LoginScreen from './Helpers/auth/Login'

import AdminRoutes from './Admin/Index'
import ManagerRoutes from './Manager/Index'

function App() {

  const UserInfo = 'manager'

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
