import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    backgroundColor: theme.colors.background,
    alignItems: "center"
  },
  tab: {
      flexGrow: 0,
      paddingLeft: 15 
  }
});

const AppBarTab = ({ text, url }) => (
    <Link to={url} component={TouchableWithoutFeedback}>
        <Text fontWeight="bold" color="white" fontSize="subheading" style={styles.tab}>
            {text}
        </Text>
    </Link>
);

const AppBar = () => {
  return (<View style={styles.container}>
            <ScrollView horizontal >
                <AppBarTab text="Repositories" url="/"/>
                <AppBarTab text="Sign in" url="/signin"/>
            </ScrollView>
        </View>);
};

export default AppBar;