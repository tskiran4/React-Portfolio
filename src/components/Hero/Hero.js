import "./Hero.scss"
import {motion} from "framer-motion"
import Spline from "@splinetool/react-spline";



const textVariants = {
    aboutInitial: {
        x: 400,
        opacity:0,
    },
    textInitial: {
        x: -400,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
            staggerChildren: 0.1,
        },
    },

    };

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },

    };

    const splineVariants = {
        initial: {
            y: 400,
            scale:0,
            opacity:0,
        },
        animate: {
            y: 0,
            scale:1,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1,
            },
        },
    
        };
    
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="textInitial" whileInView="animate">
            <motion.h2 variants={textVariants}>Hi, I'm</motion.h2>
            <motion.p className="titleText" variants={textVariants}>Kiran</motion.p>
            <motion.div className="underLine" variants={textVariants}>
            </motion.div>
        </motion.div>
    
        
    <div className="imageContainer">
        <img src="/images/memoji.png" alt="Avatar" draggable="false"/>

        </div>
        <motion.div className="aboutContainer"variants={textVariants} initial="aboutInitial" whileInView="animate">
            {/* <h3>- A little about me</h3> */}
            <motion.h2>Front-end Developer / UIUX</motion.h2>
            <motion.div className="aboutText">
            <p>
            A creative mind with 
            a passion for shaping digital experiences. With 
            a versatile skill set encompassing advanced 
            proficiency in HTML, CSS, and JavaScript, 
            coupled with expertise in tools like Photoshop, 
            Figma, and ReactJS, I bring a unique blend of 
            technical prowess and design finesse to every
             project.
            </p>
            </motion.div>
        </motion.div>
       
    </div>
    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Developer Designer UIUX HTML CSS ReactJS Django Python
    </motion.div>
    <div className="course">
    {/* <motion.div className="box" 
    initial={{opacity:0, scale:0.7, y:200}}
    animate={{opacity:1, scale:2 , y:0}}
    transition={{duration:0.5, delay:0}}
    //whileInView={{opacity:1, scale:2}}
    drag
    dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></motion.div> */}
    <div className="box" variants={splineVariants} initial="initial" animate="animate" >
         <Spline loading="lazy" scene="https://prod.spline.design/2sldJt9Lc5J0xp9H/scene.splinecode"  />
    </div> 
    </div>
    </div>
  )
}
export default Hero