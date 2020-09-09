import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

import HeaderButton from "../components/ATComponents/HeaderButton";

import MarketInfoScreen from "../screens/MarketInfo/MarketInfoScreen";
import OrderListScreen from "../screens/OrderList/OrderListScreen";
import PortfolioSummaryScreen from "../screens/PortfolioSummary/PortfolioSummaryScreen";
import SelectedWatchScreen from "../screens/SelectedWatch/SelectedWatchScreen";
import AccountSummaryScreen from "../screens/More/AccountSummaryScreen";
import ChartScreen from "../screens/More/ChartScreen";
import SettingsScreen from "../screens/More/SettingsScreen";

const MarketInfoStack = createStackNavigator();

const MarketInfoStackNavigator = (props) => {
  return (
    <MarketInfoStack.Navigator>
      <MarketInfoStack.Screen
        name="MarketInfoScreen"
        component={MarketInfoScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </MarketInfoStack.Navigator>
  );
};

const TopStocksStack = createStackNavigator();

const TopStocksStackNavigator = () => {
  return (
    <TopStocksStack.Navigator>
      <TopStocksStack.Screen
        name="TopStocksTabNavigator"
        component={TopStocksTabNavigator}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </TopStocksStack.Navigator>
  );
};

const OrderListStack = createStackNavigator();

const OrderListStackNavigator = () => {
  return (
    <OrderListStack.Navigator>
      <OrderListStack.Screen
        name="OrderListScreen"
        component={OrderListScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </OrderListStack.Navigator>
  );
};

const PortfolioSummaryStack = createStackNavigator();

const PortfolioSummaryStackNavigator = () => {
  return (
    <PortfolioSummaryStack.Navigator>
      <PortfolioSummaryStack.Screen
        name="PortfolioSummaryScreen"
        component={PortfolioSummaryScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </PortfolioSummaryStack.Navigator>
  );
};

const SelectWatchStack = createStackNavigator();

const SelectWatchStackNavigator = () => {
  return (
    <SelectWatchStack.Navigator>
      <SelectWatchStack.Screen
        name="SelectedWatchScreen"
        component={SelectedWatchScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </SelectWatchStack.Navigator>
  );
};

const AccountSummaryStack = createStackNavigator();

const AccountSummaryStackNavigator = () => {
  return (
    <AccountSummaryStack.Navigator>
      <AccountSummaryStack.Screen
        name="AccountSummaryScreen"
        component={AccountSummaryScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </AccountSummaryStack.Navigator>
  );
};

const ChartStack = createStackNavigator();

const ChartStackNavigator = () => {
  return (
    <ChartStack.Navigator>
      <ChartStack.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </ChartStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </SettingsStack.Navigator>
  );
};

const DefaultTab = createBottomTabNavigator();

const DefaultTabNavigator = (props) => {
  return (
    <DefaultTab.Navigator initialRouteName={props.route.params.routeScreen}>
      <DefaultTab.Screen
        name="MarketInfoStackNavigator"
        component={MarketInfoStackNavigator}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="ios-contact" size={23} color={"#ccc"} />;
          },
        }}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("MarketInfo");
          },
        })}
      />
      <DefaultTab.Screen
        name="SelectWatchStackNavigator"
        component={SelectWatchStackNavigator}
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="chart-line" size={23} color={"#ccc"} />;
          },
        }}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("SelectedWatch");
          },
        })}
      />
      <DefaultTab.Screen
        name="OrderListStackNavigator"
        component={OrderListStackNavigator}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="ios-list" size={23} color={"#ccc"} />;
          },
        }}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("OrderList");
          },
        })}
      />
      <DefaultTab.Screen
        name="PortfolioSummaryStackNavigator"
        component={PortfolioSummaryStackNavigator}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="ios-briefcase" size={23} color={"#ccc"} />;
          },
        }}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("PortfolioSummary");
          },
        })}
      />
    </DefaultTab.Navigator>
  );
};

const DefaultDrawer = createDrawerNavigator();

const DefaultDrawerNavigator = () => {
  return (
    <DefaultDrawer.Navigator>
      <DefaultDrawer.Screen
        initialParams={{ routeScreen: "MarketInfoStackNavigator" }}
        name="MarketInfo"
        component={DefaultTabNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="ios-contact" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        initialParams={{ routeScreen: "OrderListStackNavigator" }}
        name="OrderList"
        component={DefaultTabNavigator}
        options={{
          drawerIcon: () => {
            return <FontAwesome5 name="chart-line" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        initialParams={{ routeScreen: "PortfolioSummaryStackNavigator" }}
        name="PortfolioSummary"
        component={DefaultTabNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="ios-briefcase" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        initialParams={{ routeScreen: "SelectWatchStackNavigator" }}
        name="SelectedWatch"
        component={DefaultTabNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="ios-list" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        name="TopStocksStackNavigator"
        component={TopStocksStackNavigator}
        options={{
          drawerIcon: () => {
            return <AntDesign name="like2" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        name="AccountSummaryStackNavigator"
        component={AccountSummaryStackNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="ios-wallet" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        name="ChartStackNavigator"
        component={ChartStackNavigator}
        options={{
          drawerIcon: () => {
            return <FontAwesome5 name="chart-area" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
      <DefaultDrawer.Screen
        name="SettingsStackNavigator"
        component={SettingsStackNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="ios-settings" size={23} color={"#ccc"} />;
          },
          unmountOnBlur: true,
        }}
      />
    </DefaultDrawer.Navigator>
  );
};

export default DefaultDrawerNavigator;
