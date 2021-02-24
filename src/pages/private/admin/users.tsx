import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthenticationAPI } from "../../../api/user";
import { RootState } from "../../../rootState";
import { setUsers } from "../../../contexts/userContext/actions";

const Users = () => {
  const authenticationAPI: AuthenticationAPI = new AuthenticationAPI();
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => ({
    users: state.userContext.users,
  }));

  useEffect(() => {
    if (users.length <= 0) {
      const fetchData = async () => {
        const data = await authenticationAPI.getUsers();

        if (!data.isError) {
          dispatch(setUsers(data.response.data));
        }
      };

      fetchData();
    }
  }, []);

  return <div>{users.map((x) => x.email)}</div>;
};

export default Users;
