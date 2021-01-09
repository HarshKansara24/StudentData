import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/Routes'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import React, { Component } from 'react';
import { Root } from 'native-base'


const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
);

export { store }
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    //Hide yellow logs
    console.disableYellowBox = true;

  }

  onRegister = (token) => {
    // this.setState({registerToken: token.token, fcmRegistered: true});
  };

  componentDidMount() {

   // EStyleSheet.build(lightTheme)
    

  }
  async componentWillMount() {

    // this.messageListener = await setupPushNotification()
}
  render() {

    return (
      <Provider store={store}>
        <Root>
        
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
};
