"use client";

import { FaHtml5, FaCss3, FaJs, FaReact,FaFigma, FaNodeJs,  } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent,TooltipTrigger,TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description: "I am a passionate web developer with expertise in modern web technologies. I love creating dynamic and responsive web applications that provide a great user experience.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Yeabsra Abera",
        },
        {
            fieldName: "Phone ",
            fieldValue: "+251912464134",
        },
        {
            fieldName: "Email ",
            fieldValue: " Yeab920@gmail.com",
        },
        {
            fieldName: "Experiance",
            fieldValue: "2 Years",
        },
        
        {
            fieldName: "address",
            fieldValue: "Addis Ababa, Ethiopia",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Amharic, English",
        },
    ]
};

const experiance = {
    title: "Experiance",
    description: "I have worked on various projects, ranging from small websites to large web applications. My experience includes front-end and back-end development, as well as UI/UX design and SEO optimization.",
    items: [
        {
            company: "Frelance",
            position: "Web Development",
            duration: "2024 - Present"
        },
        {
            company: "Frelance",
            position: "Mobile Application Development",
            duration: "2024 - Present"
        },
        {
            company: "Eagle Coding & Robotics School",
            position: "Teaching Assistance",
            duration: "2022 - Present"
        },
        {
            company: "Frelance",
            position: "Front-End Development",
            duration: "2023 - Present"
        },
    ]
};

const education = {
    title: "Education Background",
    description: "I learn many courses In Univercity & online Platform",
    items: [
        {
            institution: "Addis Ababa University",
            degree: "Bcs of Software Engineering",
            duration: "2021-2025"
        },
        {
            institution: "FreeCodeCamp",
            degree: "Web Design",
            duration: "2023"
        },
        {
            institution: "Coursera academy",
            degree: "Website Development",
            duration: "2024"
        },
        {
            institution: "Online ourse",
            degree: "Mobile Application Development",
            duration: "2024"
        },
    ]
};
const skills = {
    title: "My Skill",
    description: " i  have a lot of Skills ",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "HTML",
        },
        {
            icon: <FaCss3/>,
            name: "CSS",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.Js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwindcss",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
    ]
};


const Resume = () => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition:{delay: 2.4, duration: 0.4, ease:"easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto ">
                <Tabs defaultValue="experiance" className="flex flex-col xl:flex-row gap-[60px] ">
                    <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
                        <TabsTrigger value="experiance">Experiance</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experiance" className="w-full">
                            <dev className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiance.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experiance.items.map((item, index) => {
                                            return(
                                                <li key={index} className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </dev>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <dev className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return(
                                                <li key={index} className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </dev>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return <li key={index} >
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                        })}
                                    </ul>
                            </div>    
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return(
                                            <li key={index} className="flex items-center justify-center xl:justify-start">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>

                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>

            </div>


        </motion.div>
    )
};

export default Resume;