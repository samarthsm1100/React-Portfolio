import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experiences" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Experiences
        </p>
        <LineGradient width="md:ml-0 md:w-2/5" />
        <p className="mt-10 md:text-lg">
          Outlined below is information pertaining to my academic credentials and active participation in a professional club.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute  before:top-[-200px] md:before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-school"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-lg text-center pr-2 font-semibold text-deep-blue">Sanjay Ghoadawat<br/> Olympaid Academy</p>
          <hr className="bg-white my-1 "/>
          <p className="text-center text-xl ">
            Completed my 9th to 12th grades, concurrently undertaking JEE Mains and CET preparation, within the framework of this academy.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-180px] md:before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-clg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-lg text-center pr-2 font-semibold text-deep-blue">Pune Institute Of<br/>Computer Technology</p>
          <hr className="bg-white my-1 "/>
          <p className="text-center text-xl">
            I am pursuing a Bachelor's degree in Computer Engineering at this institution, with an expected culmination of my studies in 2025.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-180px] md:before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-pasc"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-xl">
            My involvement in the PASC club has honed my leadership and communication skills, providing valuable real-world experience in both domains.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
