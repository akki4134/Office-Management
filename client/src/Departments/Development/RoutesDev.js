import { Route, Switch } from 'react-router-dom'

import salesDashboardScreen from './Screens/DevDashboard'


function RoutesAdmin() {
    return (
        <div>
            <Switch>
                <Route path='/sales/dashboard' exact component={salesDashboardScreen} />
            </Switch>
        </div>
    )
}

export default RoutesAdmin