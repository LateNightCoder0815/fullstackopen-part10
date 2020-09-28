import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZEDUSER } from '../graphql/queries';

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

const AppBarTab = ({ text, url, show }) => {
    if (!show) {
        return null;
    }
    return(
    <Link to={url} component={TouchableWithoutFeedback}>
        <Text fontWeight="bold" color="white" fontSize="subheading" style={styles.tab}>
            {text}
        </Text>
    </Link>
);};

const AppBar = () => {
    const { data } = useQuery(GET_AUTHORIZEDUSER,{
        fetchPolicy: 'cache-and-network',
        });
    const loggedIn = data && data.authorizedUser;
    
    return (<View style={styles.container}>
            <ScrollView horizontal >
                <AppBarTab text="Repositories" url="/" show="true"/>
                <AppBarTab text="Sign in" url="/signin" show={!loggedIn}/>
                <AppBarTab text="Sign out" url="/signout" show={loggedIn}/>
            </ScrollView>
        </View>);
};

export default AppBar;