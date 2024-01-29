import {motion} from "framer-motion"
const Test = () => {
  return (
    <div className="course">
    <motion.div className="box" 
    initial={{opacity:1, scale:0.5}}
    transition={{duration:2, delay:0.5}}
    whileInView={{opacity:1, scale:2}}
    drag
    ></motion.div>
    </div>
    
  )
}

export default Test