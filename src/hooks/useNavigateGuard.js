import { useNavigate } from "react-router";
import { useEffect } from "react";

/**
 * 지정된 상태에 따라 경로를 보내는 커스텀 훅입니다.
 * @param target
 * @param state
 */

const useNavigateGuard = (target, state) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (state) {
      navigate(target, { replace: true });
    }
  }, []);
};

export default useNavigateGuard;
