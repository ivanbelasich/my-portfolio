'use client';

import { motion } from 'framer-motion';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const [isClient, setIsClient] = useState(false);

    // Function to scroll smoothly to the 'about' section
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setIsClient(true);
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0 && window.scrollY < 150) {
                event.preventDefault();
                scrollToNextSection();
            }
        };

        if (isClient) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (isClient) {
                window.removeEventListener('wheel', handleWheel);
            }
        };

    }, [isClient]);

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden`}
            >
                {/* Particle Background */}
                {isClient && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.5, 1, 0.7],
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }
                    }}
                    className="absolute inset-0 bg-background-main z-0"
                >
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: 0
                            }}
                            animate={{
                                x: [
                                    Math.random() * window.innerWidth,
                                    Math.random() * window.innerWidth,
                                    Math.random() * window.innerWidth
                                ],
                                y: [
                                    Math.random() * window.innerHeight,
                                    Math.random() * window.innerHeight,
                                    Math.random() * window.innerHeight
                                ],
                                opacity: [0, 0.5, 0],
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut"
                            }}
                            className="absolute w-2 h-2 bg-text-main/30 rounded-full"
                        />
                    ))}
                </motion.div>}

                {/* Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        backgroundPosition: [
                            '0% 50%',
                            '100% 50%',
                            '0% 50%'
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-background-main/10 mix-blend-overlay z-1"
                />

                {/* Hero Content */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="max-w-4xl mx-auto text-center relative z-20 px-4"
                >
                    {/* Animated Title */}
                    <motion.h1
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 50,
                                letterSpacing: '-0.1em',
                                scale: 0.8
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                letterSpacing: '0em',
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                }
                            }
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        className="
            text-6xl md:text-8xl 
            font-main
            mb-4 
            bg-clip-text       
            text-text-main 
            select-none
            
          "
                    >
                        {i18next.t('hero.title')}
                    </motion.h1>

                    {/* Animated Subtitle */}
                    <motion.p
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, delay: 0.4 } } }}
                        className="
            text-3xl 
            mb-8 
            text-text-main 
            font-light 
            select-none
            font-main
          "
                    >
                        {i18next.t('hero.subtitle')}
                    </motion.p>

                    {/* Animated Action Buttons */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 }, visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    delay: 0.6
                                }
                            }
                        }}
                        className="flex justify-center space-x-6"
                    >
                        {['aboutMe', 'projects'].map((action) => (
                            <motion.a key={action} href={`#${action === 'aboutMe' ? 'about' : 'projects'}`} whileHover={{
                                scale: 1.1,
                                boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)"
                            }} whileTap={{ scale: 0.9 }} className={`
                                font-main px-8 py-3
                                ${action === 'aboutMe'
                                    ? 'bg-primary-accent text-background-main'
                                    : 'border border-primary-accent text-primary-accent'}
                                font-semibold
                                rounded-full
                                shadow-xl
                                hover:shadow-2xl
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background-main
                                `}
                            >
                                {i18next.t(`hero.${action}`)}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Floating Gradient Orbs */}
                {[
                    { top: '10%', left: '10%', from: 'blue-500', to: 'purple-600' },
                    { bottom: '20%', right: '15%', from: 'purple-500', to: 'blue-600' }
                ].map((pos, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [0.5, 1, 0.7],
                            rotate: index === 0 ? 360 : -360
                        }}
                        transition={{
                            duration: 10 + index * 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className={`
            absolute 
            w-72 
            h-72 
            bg-gradient-to-br 
            from-${pos.from}/20 
            to-${pos.to}/20 
            rounded-full 
            blur-3xl
            ${pos.top ? `top-[${pos.top}]` : `bottom-[${pos.bottom}]`}
            ${pos.left ? `left-[${pos.left}]` : `right-[${pos.right}]`}
          `}
                    />
                ))}
                <motion.button
                    onClick={scrollToNextSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.2 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="
                    absolute 
                    bottom-8 
                    z-20 
                    bg-transparent 
                    text-text-secondary 
                    p-3 
                    rounded-full 
                    border-2 
                    border-border-subtle 
                    hover:border-primary-accent
                    hover:text-text-main
                    flex
                    flex-col
                    items-center
                    cursor-pointer
                "
                >
                    <FaArrowDown className="animate-bounce" />
                </motion.button>
            </motion.div>

        </>
    );
}

