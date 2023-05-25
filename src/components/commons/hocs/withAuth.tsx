import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export const withAuth = (Component: any) => (props: any) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    async function getToken() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인이 필요한 페이지 입니다.");
          router.push("/fleamarket/login");
        }
      }
    }
    getToken();
  }, []);
  return <Component {...props} />;
};
