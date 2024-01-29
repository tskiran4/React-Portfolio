import "./NavBar.scss"
import {motion} from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


const NavBar = () =>  {

    const items = ["About me", "Blogs", "Works", "Contact"];
    return (
 <div className="navbar">
    <div className="wrapper">
        <span> </span>

<motion.div className="links" 
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {items.map((item) =>(

           <motion.a 
           href={`#${item}`} 
           key={item} 
           variants={itemVariants}
           whileHover={{scale:1.1}} 
           whileTap={{scale:0.95}}>
           {item}
           </motion.a>
            ))}
        </motion.div>
    </div>  
 </div>
 
    )
}
export default NavBar;