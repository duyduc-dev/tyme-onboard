import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

const Modal = ({ isShowing, children, containerClassName }) => {
  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={clsx(
            "fixed inset-0 z-[999999] bg-black/80",
            containerClassName
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
