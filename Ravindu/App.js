import React, { useState } from "react";
import { View, Button, Text, FlatList } from "react-native";

const App = () => {
  const [array, setArray] = useState([]);

  const loginRequestResult = () => {
    return fetch("http://192.168.1.12:8080/atsweb/login", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "action=login&format=json&txtUserName=lakmini&txtPassword=Pass@word12",
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  };

  // const accountSum = () => {
  //   return fetch(
  //     "http://192.168.1.12:8080/atsweb/client?action=getClientAccountSummary&format=json&account=NBS/822473270-VN/0&exchange=CSE&broker=&accStmtdate=2020-06-03&accStmtEnddate=2020-06-06&clientAnctId=44393",
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => console.error(error));
  // };

  const accountSummaryHandler = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        let string = request.responseText;
        let replaceString = string.replace(/'/g, '"');
        let object = JSON.parse(replaceString);
        setArray(object.watchListName);
      } else {
        console.warn("error" + "\n\n\n");
      }
    };

    request.open(
      "GET",
      "http://192.168.1.12:8080/atsweb/watch?action=getCustomWatches&format=json&exchange=CSE",
      true
    );
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    request.send();
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Button title="login" onPress={loginRequestResult} />
      <Button title="accSummary" onPress={accountSummaryHandler} />

      <FlatList
        data={array}
        renderItem={(itemData) => {
          <View>
            <Text>{itemData.item.watchListName}</Text>
          </View>;
        }}
      />
    </View>
  );
};

export default App;
