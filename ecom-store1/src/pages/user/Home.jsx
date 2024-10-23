import { Link } from "react-router-dom";
import Banner from "../../components/user/home/Banner";
import Section from "../../components/user/home/Section";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Section */}
      <Section />

      {/* Nút Login và Dashboard */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ marginRight: '10px' }}>Login</button>
        </Link>
        <Link to="/dashboad">
          <button>Dashboard</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
