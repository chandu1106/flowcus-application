// src/App.jsx (add a call to get token)
import React, {useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { requestPermissionAndGetToken } from "./firebase"; // Import the function
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function App(){
  useEffect(() => {
    // Check for auth state and request token once
    const unsub = onAuthStateChanged(auth, user => {
      if(user) {
        requestPermissionAndGetToken();
      }
    });
    return () => unsub();
  }, []);
  
  // ... rest of your code
}
