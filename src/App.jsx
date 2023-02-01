import { useState } from "react";
import { Background } from "./components/background";
import { Header } from "./components/header";
import "./App.css";
import { WagmiConfig } from "wagmi";
import { client } from "./utils/client";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import About from "./components/about";
import Swap from "./components/swap";
import Tokenomics from "./components/tokenomics";

const pageVariants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: "100%",
    opacity: 0,
  },
  transition: {
    duration: 2.5,
  },
};

function App() {
  return (
    <WagmiConfig client={client}>
      <Background />
      <BrowserRouter>
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </WagmiConfig>
  );
}

const PageRoutes = () => {
  const location = useLocation();
  // const [initialLocation, setInitialLocation] = useState(location);

  // if (!initialLocation) {
  //   setInitialLocation(location);
  // }
  return (
    <AnimatePresence>
      <MotionDiv>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          {/* Add more routes as needed */}
        </Routes>
      </MotionDiv>
    </AnimatePresence>
  );
};

const MotionDiv = ({ children }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
    {children}
  </motion.div>
);

export default App;
