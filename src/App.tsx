import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import IPhone16ProMax1 from "./imports/IPhone16ProMax1";
import IPhone16ProMax2 from "./imports/IPhone16ProMax2";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "details">("home");

  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const [direction, setDirection] = useState(1);

  const navigateToDetails = () => {
    setDirection(1);
    setCurrentPage("details");
  };

  const navigateToHome = () => {
    setDirection(-1);
    setCurrentPage("home");
  };

  return (
    <div className="h-full w-full overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-full h-full max-w-[440px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <IPhone16ProMax1 onNavigate={navigateToDetails} />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
            >
              <IPhone16ProMax2 onNavigate={navigateToHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
