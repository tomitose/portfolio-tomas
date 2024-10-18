// Importing required libraries
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Users } from "lucide-react";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Rendering the component with motion.div
  return (
    <section
      id="about"
      className="py-20 bg-black/[0.96]  bg-grid-white/[0.02]"
    >
      <div className="container mx-auto px-6 ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="heading text-3xl font-heading font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center mb-12"
          >
            I am a passionate Front-end Developer and UX/UI Designer dedicated
            to creating engaging and intuitive <br /> <span>web experiences. </span> 
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                icon: Code,
                title: "Front-end Development",
                text: "Crafting responsive and performant web applications",
                color: "text-blue-600",
              },
              {
                icon: Palette,
                title: "UX/UI Design",
                text: "Creating intuitive and visually appealing user interfaces",
                color: "text-purple",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Working effectively in teams to bring projects to life",
                color: "text-green-600",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card bg-base-100 shadow-xl bg-white p-6 shadow-md	opacity-80 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(85deg, rgb(26 6 61) 0%, rgb(20 10 59) 13%, rgb(12 8 53) 51%, rgb(22 3 33) 100%)",
                }}
              >
                <figure className="px-10 pt-10">
                  <info.icon className={`w-16 h-16 ${info.color}`} />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-white">{info.title}</h3>
                  <p className="text-white">{info.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center mt-12"
          >
            Always seeking new challenges, I strive to expand my skills and stay
            updated with the latest industry tools.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
