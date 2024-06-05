import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Router>{children}</Router>;
};

export default AppWrapper;
