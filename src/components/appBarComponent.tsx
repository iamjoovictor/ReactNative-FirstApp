import React, { useState } from "react";
import { AppBar, IconButton, ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/appBarStyles";
import { View } from "react-native";
import { screens, screensNamed } from "../constants/constants";

export function AppBarComponent(props) {
  const [valid, setValid] = useState(false)

  function changeScreen(value) {
    props.setScreen(value)
  }

  return (
    <View style={styles.viewAppBar}>
      <AppBar
        color="blue"
        style={styles.appbar}
        title="Aplicativo Teste"
        centerTitle={true}
        leading={props => (
          <IconButton
            icon={props => <Icon name="menu" {...props} />}
            {...props}
            onPress={() => {
              setValid(prevState => !prevState)
            }}
          >
          </IconButton>
        )}
      />
      {valid && screens.map((element, index) => {
        return (
          <View 
            style={styles.viewListItem}
            key={index}
          >
            {
              (props.screen !== element) && (
                <View style={styles.viewListItem}>
                  <ListItem
                    title={screensNamed[element]}
                    onPress={() => {
                      setValid(false)
                      changeScreen(element)
                    }}
                  />
                </View>
              )
            }
          </View>
        )
      })}
    </View>
  );
}