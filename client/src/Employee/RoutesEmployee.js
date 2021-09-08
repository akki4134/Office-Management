import { Route, Switch } from 'react-router-dom'

import empDashboardScreen from './Screens/EmpDashboard'

function RoutesAdmin() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={empDashboardScreen} />
            </Switch>
        </div>
    )
}

export default RoutesAdmin
