import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { SampleData } from '../interfaces/samples';

export const fetchAnalysis = async (setState: any): Promise<void> => {
  const getToken = Cookies.get('token');

  try {
    const { status, data } = await axios.get('http://localhost:3005/analysis', {
      headers: {
        token: getToken,
      },
    });

    if (status === 200) setState(data.result);
  } catch (error) {
    console.error(error);
  }
};

export const getAnalysisByName = async (setState: any, optionValue: string): Promise<void> => {
  try {
    const getToken = Cookies.get('token');

    const { status, data } = await axios.get(
      `http://localhost:3005/agent/${optionValue}`, {
        headers: {
          token: getToken,
        },
      },
    );

    if (status === 200) setState(data.result);
  } catch (error) {
    console.error(error);
  }
};

export const createAnalysis = async (sampleData: SampleData): Promise<void> => {
  try {
    const getToken = Cookies.get('token');

    const { status } = await axios.post('http://localhost:3005/createSample', sampleData, {
      headers: {
        token: getToken,
      },
    });
    if (status === 201) {
      toast.success('Amostragem adicionada');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAnalysisById = async (id: string, setState: any): Promise<void> => {
  try {
    const getToken = Cookies.get('token');

    const { status, data } = await axios.get(
      `http://localhost:3005/analysis/${id}`, {
        headers: {
          token: getToken,
        },
      },
    );
    if (status === 200) setState(data.result);
  } catch (error) {
    console.error(error);
  }
};

export const updateAnalysis = async (sampleData: SampleData | null, id: string): Promise<void> => {
  try {
    const getToken = Cookies.get('token');
    const { status } = await axios.put(`http://localhost:3005/updateSamples/${id}`, sampleData, {
      headers: {
        token: getToken,
      },
    });
    if (status === 200) {
      toast.success('Amostra atualizada com sucesso');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    console.error(error);
  }
};
