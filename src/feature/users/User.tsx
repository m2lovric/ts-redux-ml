import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, IUser } from './userSlicer';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { auth, provider } from '../../firebase/auth';
import { app } from '../../firebase/app';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

export function User() {
  app;
  const [data, setData] = useState<IUser>({
    id: uuidv4(),
    name: '',
    age: 0,
  });
  const users = useSelector((state: RootState) => state.users.value);
  const dispatch = useDispatch();

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setData({
      id: uuidv4(),
      name: data.name,
      age: data.age,
    });
    console.log(data);
    dispatch(addUser(data));

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type='text'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type='number'
          value={data.age}
          onChange={(e) => setData({ ...data, age: parseInt(e.target.value) })}
        />
        <button>Add User</button>
      </form>

      {users &&
        users.map((el) => {
          return (
            <article key={el.id}>
              <h2>{el.name}</h2>
              <p>{el.age}</p>
            </article>
          );
        })}
    </div>
  );
}
