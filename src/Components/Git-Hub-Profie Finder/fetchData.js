import axios from "axios";

export default async function fetchGitHubUsers(
  url,
  setGitHubUsers,
  setSearching
) {
  try {
    setSearching(true);
    const response = await axios.get(url);
    setGitHubUsers(response.data.items);
  } catch (error) {
    console.log(error);
  } finally {
    setSearching(false);
  }
}
