import React from "react";

import { MdTimer } from "react-icons/md";
import { FaBusAlt, FaMoneyCheck } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";

const StatsData = [
  {
    icon: <FiWifi color="#047bf1" />,
    title: "5G Network options",
    desc: "Browsering with ligthening speed",
  },
  {
    icon: <FaBusAlt color="#f3a82e" />,
    title: "Awesome First Tour",
    desc: "Access to see our Amazing outdoor activities",
  },
  {
    icon: <MdTimer color="#f34f2e" />,
    title: "Fastest support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FaMoneyCheck color="#3af576" />,
    title: "Best Deals",
    desc: "We offer the best prices",
  },
];

export default StatsData;
