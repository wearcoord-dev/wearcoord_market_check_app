import axios from "axios";
import { useState } from "react";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);
    console.log("userだよ");


    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getUsers, userProfiles, loading, error }
};
