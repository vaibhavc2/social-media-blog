import { toggleLoading } from "../../store/features/loading/loadingSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const useLoading = () => {
  const loading = useAppSelector((state) => state.loadingReducer.loading);
  const dispatch = useAppDispatch();
  const setLoading = () => dispatch(toggleLoading());
  return { loading, setLoading };
};

export default useLoading;
