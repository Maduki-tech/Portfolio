import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Koko from "../../../public/Koko.png";

export default function AboutMe() {
    const [isAnmiate, setIsAnimate] = React.useState<string>("hidden");
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
                    <div className="text-lg bg-gradient-to-br from-orange-100 to-orange-300

                        p-4 rounded-lg drop-shadow-lg lg:h-96">
                        <h1 className="pb-4 text-3xl font-bold underline underline-offset-4">
                            Who am I
                        </h1>
                        <p>
                            My Name is David, I&apos;m a software engineer based in Germany 🇩🇪.
                            I&apos;m passionate about writing clean and efficient code that is easy
                            to maintain and scale.
                        </p>
                        <br />
                        <p>
                            I love to use <strong>NeoVim</strong>, learn new technologies and build
                            stuff to help the productivity of developers and the team.
                        </p>
                        <br />
                        <p className="">
                            Also i have an excellent Co-Worker, his name is <strong>Koko</strong>{" "}
                            and he is a{" "}
                            <span
                                className="inline-block animate-bounce 
                                hover:scale-105 hover:animate-none hover:cursor-pointer hover:underline hover:ease-in"
                                onClick={() => setIsAnimate("visible")}
                            >
                                cat 🐱
                            </span>
                            .
                        </p>
                    </div>
                    <div className="lg:h-96">
                        <motion.div
                            animate={isAnmiate}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, rotate: 360 },
                            }}
                            transition={{ duration: 2 }}
                        >
                            {isAnmiate === "visible" && (
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2 }}
                                    className="drop-shadow-xl relative w-full h-full rounded-lg overflow-hidden"
                                >
                                    {/* Black cover */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                                    <Image src={Koko} alt="Koko" className="overflow-hidden rounded-lg lg:h-96" />
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
