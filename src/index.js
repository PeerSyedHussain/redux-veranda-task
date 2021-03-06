import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store} >
        <Router>
          <Switch>  
              <Route exact path='/' component={App}/> 
          
              {/* <Route path='/add-course' component={AddCourse}/> */}
          </Switch>
        </Router>
     </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
