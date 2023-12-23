import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, content, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p 
          className="text-3xl font-playfair hover:font-semibold hover:text-red hover:cursor-pointer"
          onClick={() => {window.open(url, '_black')}}
        >
          {title}
        </p>
        <p className="mt-7 text-lg">
          {content}
        </p>
      </div>
      <img src={`./assets/${projectTitle}.jpg`} alt={projectTitle}/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 md:text-lg">
        Presenting a showcase of my diverse projects, each a testament to my creativity, innovation, and technical expertise.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
            text-2xl font-playfair font-semibold object-contain"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
            title="Agro-Guru" 
            content="Agro-Guru is a website connecting farmers to local markets, laboratories, and nurseries, enhancing access to essential resources for improved agricultural productivity."
            url="https://github.com/samarthsm1100"
          />
          <Project 
            title="Food-App" 
            content="The food app is a visually appealing website for restaurants crafted with Tailwind CSS, offering an aesthetically pleasing and user-friendly experience for customers."
            url="https://sm-food-app.vercel.app/"
          />

          {/* ROW 2
          <Project 
            title="Project 3" 
            content="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
            porttitor accumsan tincidunt."
          />
          <Project 
            title="Project 4" 
            content="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
            porttitor accumsan tincidunt."
          />
          <Project 
            title="Project 5" 
            content="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
            porttitor accumsan tincidunt."
          /> */}

          {/* ROW 3 */}
          <Project 
            title="E-Shopping" 
            content="The shopping cart website utilizes the useContext hook to enable users to dynamically update their cart while shopping, providing a seamless and interactive shopping experience."
            url="https://sm-shopping-cart.vercel.app/"
          />
          <Project 
            title="Workout-Buddy" 
            content="Workout Buddy, a full-stack website with user authentication, facilitates personalized fitness experiences through customizable workout plans and user profiles."
            url="https://github.com/samarthsm1100"
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
            text-2xl font-playfair font-semibold object-contain"
          >
            Engineering Efficient ServerSide Solutions.
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
