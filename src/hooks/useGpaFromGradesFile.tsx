import axios from 'axios';
import { useState } from 'react';

const useGpaFromGradesFile = () => {
  const [notes, setNotes] = useState<number[]>([]);
  const [error, setError] = useState();

  const getGpaFromGrades = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const requestOptions = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const url = `${process.env.API_URL}/api/transform/`;
      const data = await axios.post(url, formData, requestOptions);
      const parsedData = JSON.parse(data.data);
      setNotes(parsedData?.notes);
      return parsedData?.notes;
    } catch (err) {
      setError(err);
    }
  };

  return { getGpaFromGrades, notes, error };
};

export default useGpaFromGradesFile;
