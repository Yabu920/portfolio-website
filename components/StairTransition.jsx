"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";

const ANIMATION_DURATION = 1000; // ms

const StairTransition = () => {
    const pathname = usePathname();
    const [showStairs, setShowStairs] = useState(true); // Show on first load

    useEffect(() => {
        setShowStairs(true);
        const timeout = setTimeout(() => setShowStairs(false), ANIMATION_DURATION);
        return () => clearTimeout(timeout);
    }, [pathname]); // Triggers on every route change (including reload)

    return (
        <AnimatePresence mode="wait">
            {showStairs && (
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default StairTransition;

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import Stairs from "./Stairs";


// const StairTransition = () => {
//     const pathname= (usePathname);
//     return(
//         <>
//             <AnimatePresence mode="wait">
//                 <div key={pathname}>
//                     <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
//                         <Stairs />
//                     </div>
//                     <motion.div
//                         className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
//                         initial={{ opacity: 1}}
//                         animate={{
//                             opacity: 0,
//                             transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
//                         }}
//                         exit={{ opacity: 1}}
//                     />
//                 </div>
//             </AnimatePresence>
//         </>
//     );
// };

// export default StairTransition;