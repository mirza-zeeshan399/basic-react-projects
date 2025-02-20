import axios from "axios";

const fetchProducts = async (setData,setLoading,url) => {
  try {
    setLoading(true);
    const response = await axios.get(url);
    setData(response.data.products);
  } catch (error) {
    const { name, code, message } = error;
    console.log(name, code, message);
  } finally {
    setLoading(false);
  }
};

export default fetchProducts;
