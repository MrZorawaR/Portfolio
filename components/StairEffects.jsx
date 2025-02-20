"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
const StairEffects = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed top-0  flex pointer-events-none bg-primary"
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 0, 
              transition: {duration: 0.4,delay: 1, ease: "easeInOut"}}
            }
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairEffects;
