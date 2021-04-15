import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register'
import ApplicationForm from '../screens/ApplicationForm'
import Main from '../screens/Main'
import Report from '../screens/Report'
import CurrentData from '../screens/CurrentData'
import PastData from '../screens/PastData'
import PastDataWeek from '../screens/PastDataWeek'
import PastDataDay from '../screens/PastDataDay'
import PastDataMonth from '../screens/PastDataMonth'

const stackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ApplicationForm: { screen: ApplicationForm },
    Main: { screen: Main },
    Report: { screen: Report },
    CurrentData: { screen: CurrentData },
    PastData: { screen: PastData },
    PastDataWeek: { screen: PastDataWeek },
    PastDataDay: { screen: PastDataDay },
    PastDataMonth: { screen: PastDataMonth },
},
    {
        defaultNavigationOptions: stackNavigatorOptions
    }
);
export default createAppContainer(AppNavigator);