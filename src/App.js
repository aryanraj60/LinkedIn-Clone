import React, { useEffect } from "react";
import { Sidebar, Header, Feed, Login } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { login, selectUser, logout } from "./features/user/userSlice";
import { auth } from "./utils/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log("On auth state callback running", userAuth);
      if (userAuth) {
        dispatch(
          login({
            name: userAuth.displayName,
            email: userAuth.email,
            uid: userAuth.uid,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App bg-black h-screen">
      <Header />

      <div
        className={`appBody ${
          user && "flex"
        } pt-8 px-2 gap-6 h-[calc(100vh-80px)]`}
      >
        {user ? (
          <>
            <Sidebar />
            <Feed />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;
