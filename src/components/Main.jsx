import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignOut from './SignOut';
import RepositoryView from './RepositoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signout" exact>
          <SignOut />
        </Route>
        <Route path="/repo/:id" exact>
          <RepositoryView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </SafeAreaView>
  );
};

export default Main;