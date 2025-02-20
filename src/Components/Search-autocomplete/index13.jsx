import { useEffect } from "react";
import fetchUsers from "./fetchData";
import { useState } from "react";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const url = "https://dummyjson.com/users";
  console.log(filteredUsers);

  //   searchParam.length > 1 ? setShowDropdown(true) : setShowDropdown(false);

  const handleUserChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      setShowDropdown(true);
      const filteredData =
        users && users.length
          ? users.filter((user) => {
              return user.toLowerCase().indexOf(query) > -1;
            })
          : [];
      setFilteredUsers(filteredData);
    } else {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    fetchUsers(url, setUsers, setLoading);
  }, []);

  if (loading) {
    return <h1>Loading!!!</h1>;
  }
  return (
    <div>
      <label htmlFor="search-user">Search User:</label>
      <input
        type="text"
        onChange={handleUserChange}
        placeholder="enter username"
        id="search-user"
      />
      <div className="users-wrapper">
        {showDropdown && filteredUsers.length ? (
          filteredUsers.map((user) => <h2>{user}</h2>)
        ) : (
          <h2>NO USERS!!</h2>
        )}
      </div>
    </div>
  );
};

export default SearchAutocomplete;
