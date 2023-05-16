import axios from "axios";

export const fetchAnalysis = async (setState:any): Promise<void> => {
  try {
    const { status, data } = await axios.get('http://localhost:8002/analysis');

    if (status === 200) setState(data.result);

  } catch (error) {
    console.error(error);
  };
};