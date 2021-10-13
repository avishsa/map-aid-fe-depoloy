
import React,{useEffect, useState} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {sliderActions} from "./actions/sliderActions";
import './css/App.css';

import AppContent from './AppContent';
import Home from "./Components/Home";


export default function App (){

  const [startSession,setStartSession] =useState(true);
  const dispatch = useDispatch();
  const start = useSelector(state => state.slider.start);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSession(false);   
      dispatch(sliderActions.setStartSession());        
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return startSession&&start  ? <Home/>:<AppContent/>;
}


