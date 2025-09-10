// src/pages/Login.jsx (modified)
import React, {useState} from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("student"); // New state for role
  const [mode,setMode]=useState("login");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if(mode==="login"){
        userCredential = await signInWithEmailAndPassword(auth,email,password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth,email,password);
        // Save user role and info to Firestore 'users' collection
        await setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          role: role,
          createdAt: new Date().toISOString()
        });
      }
      nav("/app");
    } catch(err){
      alert(err.message);
    }
  };

  return (
    <div style={{padding:20}}>
      <h3>{mode==="login" ? "Sign in" : "Register"}</h3>
      <form onSubmit={submit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <br />
        {mode === "register" && (
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>
        )}
        <br />
        <button type="submit">{mode==="login"?"Login":"Register"}</button>
      </form>
      <button onClick={()=>setMode(mode==="login"?"register":"login")}>
        {mode==="login" ? "Create account" : "Have an account? Login"}
      </button>
    </div>
  );
}
