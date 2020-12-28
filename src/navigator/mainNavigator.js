import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen216433Navigator from '../features/BlankScreen216433/navigator';
import BlankScreen116429Navigator from '../features/BlankScreen116429/navigator';
import BlankScreen016425Navigator from '../features/BlankScreen016425/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen216433: { screen: BlankScreen216433Navigator },
BlankScreen116429: { screen: BlankScreen116429Navigator },
BlankScreen016425: { screen: BlankScreen016425Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
