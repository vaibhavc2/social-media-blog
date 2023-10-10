import { Loader } from "../../components";
import { useLoading } from "../../hooks";

type Props = {};

const Home = ({}: Props) => {
  const { loading } = useLoading();

  return !loading ? <div>Home</div> : <Loader />;
};

export default Home;
