import { useEffect, useState } from "react";
import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({});
 
  const [isLoading, setIsLoading] = useState(true);

  const [authError, setAuthError] = useState("");

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

// const signInWithGoogle = (location, history) => {
//   setIsLoading(true);
//   signInWithPopup(auth, googleProvider)
//       .then((result) => {
//           // const user = result.user;
//           setAuthError('');
//       }).catch((error) => {
//           setAuthError(error.message);
//       }).finally(() => setIsLoading(false));
// }


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
  
}
}

export default useFirebase;
