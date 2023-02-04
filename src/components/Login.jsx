import React, { useState } from "react";
import LinkedInLogo from "../assests/LinkedIn_Logo.png";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      auth.signInWithEmailAndPassword(email, password).catch((e) => {
        if (
          e.message.includes(
            "There is no user record corresponding to this identifier"
          )
        ) {
          alert("You are not registered user! Please click on register now!");
        }
      });
    } else {
      alert("Please Enter a valid email and password.");
    }
  };

  const registerUser = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          console.log("User created", userAuth);
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: photoUrl,
            })
            .then(() => {
              console.log("User updated", userAuth);
              dispatch(
                login({
                  name: userAuth.user.displayName,
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  photoUrl: userAuth.user.photoURL,
                })
              );
            });
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      alert("Please Enter a valid email and password.");
    }
  };

  return (
    <div className="h-full flex justify-center">
      <div className="pt-10">
        <img src={LinkedInLogo} className="w-80" />
        <form className="flex flex-col gap-3 pt-5">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Full Name (Required if Registering)"
            className="w-full h-14 outline-none rounded-xl px-2 bg-inherit border-2 border-gray-800 text-white"
          />
          <input
            placeholder="Profile Pic Url (optional)"
            onChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
            value={photoUrl}
            className="w-full h-14 outline-none  rounded-xl px-2 bg-inherit border-2 border-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full h-14 outline-none  rounded-xl px-2 bg-inherit border-2 border-gray-800 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="w-full h-14 outline-none  rounded-xl px-2 bg-inherit border-2 border-gray-800 text-white"
          />
          <button
            type="submit"
            onClick={handleLogin}
            className="py-4 rounded-lg text-lg text-white bg-blue-700"
          >
            Sign In
          </button>
          <div className="flex justify-center">
            <p className="text-white text-lg">
              Not a Member?{" "}
              <span
                onClick={registerUser}
                className="text-blue-600 pl-1 font-medium cursor-pointer"
              >
                Register Now
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
