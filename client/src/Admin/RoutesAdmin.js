import { Route, Switch } from 'react-router-dom'

import adminDashboardScreen from './Screens/Dashbord'
import adminAddManagersScreen from './Screens/AddManager'
import adminListManagersScreen from './Screens/ListManagers'

function RoutesAdmin() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={adminDashboardScreen} />
                <Route path='/admin/addmanager' exact component={adminAddManagersScreen} />
                <Route path='/admin/managers' exact component={adminListManagersScreen} />
            </Switch>
        </div>
    )
}

export default RoutesAdmin
