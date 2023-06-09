import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles.scss';
import { useDispatch, useSelector } from "react-redux";
import authActions from './store/reducers/auth/actions';

import Header from './components/Header';

const Surveys = () => <h2>SURVEYS</h2>;
const NewSurvey = () => <h2>NEW SURVEY</h2>;
const Home = () => <h2>HOME</h2>;

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState(null);
  useEffect(()=>{
    dispatch(authActions.fetchUser())
  }, [])
  useEffect(()=> setUser(auth.user), [auth]);
  console.log(user)

    return (
      <Router>
        <Header />
        <Route path={'/surveys'} exact component={Surveys} />
        <Route path={'/surveys/new'} exact component={NewSurvey} />
        <Route path={'/'} exact component={Home} />
      </Router>
    ) 
     
    
};

export default App;