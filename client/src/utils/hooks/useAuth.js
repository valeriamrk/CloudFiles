import { useSelector } from "react-redux";

const useAuth = () => {
  // const { email, token, id } = useSelector((state) => state.auth);
  const savedUser = localStorage.getItem("user");
  console.log(savedUser);

  // return {
  //   isAuth: !!email,
  //   email,
  //   token,
  //   id,
  // };
  return { isAuth: !!savedUser };
};

export { useAuth };
