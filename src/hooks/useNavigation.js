import { useNavigate } from "react-router-dom";

const useNavigateToPage = (page) => {
  const navigate = useNavigate();
  return () => {
    navigate("/" + page);
  };
};

export default useNavigateToPage;
