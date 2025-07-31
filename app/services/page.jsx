"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
    {
        num : "01",
        title: "Web Development",
        description: "Building responsive and dynamic websites using the latest technologies.",
        href: ""
    },
    {
        num: "02",
        title: "Mobile App Development",
        description: "Creating user-friendly mobile applications for both Android and iOS platforms.",
        href: ""
    },
    {
        num: "03",
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user interfaces and experiences.",
        href: ""
    },
    {
        num: "04",
        title: "SEO Optimization",
        description: "Improving website visibility and search engine rankings.",
        href: ""
    },
];


const Services = () => {
    return(
        <section className="min-h-[60vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity:1,
                        transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
                >
                    {services.map((services, index) => {
                        return(
                            <div key={index}
                                className="flex-1 flex flex-col justify-center gap-4 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outlne-hover">{services.num}</div>
                                    <Link href={services.href}
                                        className="w-[60px] h-[60px] rounded-full bg-white  group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[30px] font-bold landing-none text-white group-hover:text-accent transition-all duration-500">
                                    {services.title}</h2>
                                <p className="text-white/60">{services.description}</p>

                                <div className="border-b border-white/20 w-full"></div>

                            </div>
                        );
                    })} 

                </motion.div>
            </div>

        </section>
    )
};

export default Services;