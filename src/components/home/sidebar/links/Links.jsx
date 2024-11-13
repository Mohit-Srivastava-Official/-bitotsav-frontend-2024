import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    "",
    "About",
    "Events",
    "Schedule",
    "Register",
    "Developers",
    "Sponsors",
    "Dashboard",
    // "Contact",
  ];
  const getNav = (item) => {
    if (item === "Developers") return "Team";
    return item;
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          style={{ fontFamily: "Bebas Neue" }}
          href={`/${getNav(item)}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "#663399" }}
          whileTap={{ scale: 0.95 }}
        >
          {item === "" ? "Home" : item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
