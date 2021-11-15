import { useEffect, useState } from "react";
import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({});
 
  const [isLoading, setIsLoading] = useState(true);

  const [authError, setAuthError] = useState("");

  const [admin, setAdmin] = useState(false);

  const auth = getAuth();


  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() => {
            })
            .catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
}

const loginUser = (email, password, location, history) => {
setIsLoading(true)
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.code);
      })
      .finally(()=>setIsLoading(false))
     
}


  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false)
        
    });
    return () => unsubscribed;
}, [auth])

useEffect(() => {
  fetch(`https://secure-shore-57866.herokuapp.com/users/${user.email}`)
    .then((res) => res.json())
    .then((data) => setAdmin(data.admin));
}, [user.email]);

const logOut = () => {
  setIsLoading(true)
  signOut(auth).then(() => {
      // Sign-out successful.
  }).catch((error) => {
      // An error happened.
  })
  .finally(()=>setIsLoading(false))
   
}

  return {
    user,
    isLoading,
    registerUser,
    logOut,
    loginUser,
    authError,
    admin,
  
}
}

export default useFirebase;
