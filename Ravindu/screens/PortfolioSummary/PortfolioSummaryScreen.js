import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const PortfolioSummaryScreen = (props) => {
  const jumpToActions = DrawerActions.jumpTo("PortfolioSummary");

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("tabPress", (e) => {
      e.preventDefault();
      props.navigation.dispatch(jumpToActions);
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View>
      <Text>PortfolioSummaryScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PortfolioSummaryScreen;
