import CallToAction from "../components/CallToAction";
import Chicago from "../components/Chicago";
import CustomersSay from "../components/CustomersSay";
import Specials from "../components/Specials";

const HomePage = () => {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomersSay/>
      <Chicago />
    </div>
  );
};

export default HomePage;
