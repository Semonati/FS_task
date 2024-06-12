import { useCallback, useMemo, useState } from "react";
import { postImage } from "./apiService";

const HandleApi = () => {
  const [colors, setColors] = useState<string[]>();
  const handleGetMainsColors = useCallback(async (image: FormData) => {
    try {
      const result = await postImage(image);
      return setColors(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = useMemo(() => {
    return { colors };
  }, [colors]);

  return {
    value,
    handleGetMainsColors,
  };
};

export default HandleApi;
