import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          © 2024 Gyűjtő Robert. All Rights Reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
