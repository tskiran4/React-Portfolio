import "./Aboutme.scss"

const Aboutme = () => {
  return (
    <div className="About">
    <div className="wrapper">
    <h1>About Me</h1>
    <div className="underLine"></div>
    <div className="col-container container-1">
        <div className="column col-1">    
         <h2>Education</h2>
         <div className="col-box">
            <img src="/images/yello-grad-hat.png" className="grad-hat-img" alt="Grad Hat"/>
            Bachelor’s in Software Development
        </div>
         <div className="col-box">
         <img src="/images/red-grad-hat.png" className="grad-hat-img" alt="Grad Hat"/>
         Master of Computer Applications</div>
         <div className="col-box">
         <img src="/images/purple-grad-hat.png" className="grad-hat-img" alt="Grad Hat"/>
         MSc in User Experience and Interaction Design</div>
            </div>

        <div className="column col-2">

            <div className="image-bg">
                <img src="/favicon.png" alt="Avatar"></img>
            </div>
            <div className="about-text-box">
            A creative mind with 
            a passion for shaping digital experiences. With 
            a versatile skill set encompassing advanced 
            proficiency in HTML, CSS, and JavaScript, 
            coupled with expertise in tools like Photoshop, 
            Figma, and ReactJS, I bring a unique blend of 
            technical prowess and design finesse to every
             project.
            </div>
        </div>
        <div className="column col-3 card-col">
        <h2>My Skills</h2>
        <div className="skill-box">Python</div>
        <div className="skill-box">Django</div>
        <div className="skill-box">Flask</div>
        <div className="skill-box">JavaScript</div>
        <div className="skill-box">HTML/CSS</div>
        <div className="skill-box">Shopify</div>
        <div className="skill-box">ReactJS</div>
        <div className="skill-box">R Shiny</div>
        <div className="skill-box">MongoDB</div>
        <div className="skill-box">Oracle SQL</div>
        <div className="skill-box">MySQL</div>

        </div>
    </div>
    <h2>Work Experience</h2>
    <div className="col-container container-2">
    <div className="column col-1">
        <div className="work-row">
    <img src="/images/lo.png" alt="Lo Foods"/>
    <div className="work-text">
    <h2>Lo! Foods</h2>
    <h3>Web Designer / Developer Intern</h3>
    </div>
    <p>4 mos</p>
    </div>
    </div>

    <div className="column col-2">
    <div className="work-row">
    <img src="/images/emproto.png" alt="Emproto Tech"/> 
    <div className="work-text">
    <h2>Emproto</h2>
    <h3>Freelance Web Designer / Developer </h3>
    </div>
    <p>2 mos</p>
    </div>
    
    <p></p>
    </div>
    <div className="column col-3">
    <div className="work-row">
    <img src="/images/maybank.png" alt="Maybank"/>
    <div className="work-text">
    <h2>Maybank</h2>
    <h3>Product DevOps Engineer</h3>
    </div>
    <p>1yr 8mos</p>
    </div>
   
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Aboutme