import axios from "axios";
import Cookies from "js-cookie";

export const fetchAnalysis = async (setState:any): Promise<void> => {
  const getCookie = Cookies.get('token');
  try {
    const { status, data } = await axios.get('http://localhost:3005/analysis', {
      headers: {
        token: getCookie,
      },
    });

    if (status === 200) setState(data.result);

  } catch (error) {
    console.error(error);
  };
};