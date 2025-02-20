import axios from "axios";

export default async function fetchUsers(url, setUsers, setLoading) {
  try {
    setLoading(true);
    const response = await axios.get(url);
    setUsers(response.data.users.map((user) => user.firstName));
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
