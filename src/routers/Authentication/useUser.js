import { useState } from 'react';

export default function useUser() {
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const userDetails = JSON.parse(userString);
        return userDetails?.user
    };
    const [user, setUser] = useState(getUser());
    const saveUser = userDetails => {
        debugger;
        sessionStorage.setItem('user', JSON.stringify(userDetails));
        setUser(userDetails.user);
    };
    return {
        setUser: saveUser,
        user
      }
}