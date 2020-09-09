import React, {useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const OrderListScreen = (props) => {

  const jumpToAction = DrawerActions.jumpTo("MarketInfo");
  useEffect(() => {
    props.navigation.addListener("tabPress", () => {
      props.navigation.dispatch(jumpToAction);
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>OrderListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderListScreen;
