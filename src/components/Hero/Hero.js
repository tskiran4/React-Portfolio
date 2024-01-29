import "./Hero.scss"
import {motion} from "framer-motion"

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
    
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <div className="textContainer">
            <h2>Hi, I'm</h2>
            <h1>Kiran</h1>
            <div className="underLine">
            </div>
        </div>
    
        
    <div className="imageContainer">
        <img src="/images/memoji.png" alt="Avatar" draggable="false"/>

        </div>
        <div className="aboutContainer">
            <h3>- A little about me</h3>
            <h2>Web Developer / UIUX</h2>
            <div className="aboutText">
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
            </div>
        </div>
       
    </div>
    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Developer Designer UIUX HTML CSS ReactJS Django Python
    </motion.div>
    <div className="course">
    <motion.div className="box" 
    initial={{opacity:1, scale:0.1, y:200}}
    animate={{opacity:1, scale:2 , y:0}}
    transition={{duration:1, delay:0.5}}
    //whileInView={{opacity:1, scale:2}}
    drag
    dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></motion.div>
    </div> 
    </div>
  )
}
export default Hero