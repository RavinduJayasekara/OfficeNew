import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TitleText from "../../components/ATComponents/TitleText";
import { DrawerActions } from "@react-navigation/native";

const MarketInfoScreen = (props) => {
  const jumpToAction = DrawerActions.jumpTo("MarketInfo");
  useEffect(() => {
    props.navigation.addListener("tabPress", () => {
      props.navigation.dispatch(jumpToAction);
    });
  }, [props.navigation]);

  return (
    <View>
      <View style={styles.headerTitle}>
        <TitleText>Colombo Stock Exchange</TitleText>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.valueContainer}>
          <View style={styles.titleContainer}>
            <TitleText>TurnOver</TitleText>
            <Text></Text>
          </View>
          <View style={styles.titleContainer}>
            <TitleText>Volume</TitleText>
            <Text></Text>
          </View>
        </View>
        <View style={styles.valueContainer}>
          <View style={styles.titleContainer}>
            <TitleText>Symbol Traded</TitleText>
            <Text></Text>
          </View>
          <View style={styles.titleContainer}>
            <TitleText>Market Status</TitleText>
            <Text></Text>
          </View>
        </View>
      </View>
      <View>
        <View></View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      {/* <View style={styles.chartContainer}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style = {{width: '90%', alignItems: 'center'}}>
            <Text>ASI INTRA DAY CHART</Text>
          </View>
          <View style = {{justifyContent: 'flex-end'}}>
            <Ionicons name="ios-menu" size={25} color={"#ccc"} />
          </View>
        </View>
      </View> */}
      <View style={styles.chartContainer}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "67%", alignItems: "flex-end" }}>
            <Text>ASI INTRA DAY CHART</Text>
          </View>
          <View style={{ width: "33%", alignItems: "flex-end" }}>
            <Ionicons name="ios-menu" size={25} color={"#ccc"} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Market Summary"
          onPress={() => {
            props.navigation.navigate("MarketSummaryStackNavigator");
          }}
        />
        <Button
          title="Top Stocks"
          onPress={() => {
            props.navigation.navigate("TopStocksStackNavigator");
          }}
        />
        <Button title="Announcements" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  titleContainer: {
    width: "50%",
  },
  chartContainer: {
    margin: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,
    height: 300,
    padding: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerTitle: {
    alignItems: "center",
    marginVertical: 10,
  },
  informationContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default MarketInfoScreen;
