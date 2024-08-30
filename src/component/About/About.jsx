import React from "react";
import Profile_img from "../../assets/aboutProfile.jpg";

function About() {
  return (
    <div
      id="About"
      className=" flex flex-col items-center justify-center gap-20 md:gap-10 lg:gap-20 mt-28 md:mt-28 mx-4 lg:mx-20 "
    >
      <div className="about-title relative   ">
        <h1 className=" text-4xl md:text-5xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text ">
          About Me
        </h1>
      </div>
      <div className="about-section flex flex-col md:flex-row gap-10 md:gap-20 ">
        <div className="w-1/4 h-1/4 max-w-sm max-h-32 rounded-md object-cover">
          <img
            src={Profile_img}
            alt="Your Image"
            className="rounded-md h-full w-96"
            style={{
              borderRadius: "8px",
              width: "auto",
              height: "100%",
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="about-right mt-10 md:mt-0 flex flex-col gap-10 ">
          <div className="about-para">
            <p>
              Hey there! I'm <strong>Bhagyalaxmi Padhi</strong>, a front-end
              developer with a knack for crafting responsive and visually
              captivating websites. Over the past few months, I've been honing
              my skills as an intern at{" "}
              <strong>Eunice Services Pvt. Ltd.</strong>, where I've been diving
              deep into the world of web development.
            </p>
            <p>
              I'm proficient in{" "}
              <strong>HTML, CSS, JavaScript, and React JS</strong>, and I thrive
              on bringing creative designs to life on the web. My passion lies
              in building seamless, user-friendly experiences that not only
              function flawlessly but also leave a lasting impression.
            </p>
            <p>
              Check out my projects below to see the magic I've been weaving.
              Let's create something amazing together!
            </p>
          </div>
          <div
            className="about_skills"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              className="about_skill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                className="skill_text"
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  minWidth: "100px",
                  color: "#ffffff",
                }}
              >
                HTML, CSS
              </p>
              <hr
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  width: "80%",
                  background: "linear-gradient(to top right, #38b2ac, #4299e1)",
                }}
              />
            </div>
            <div
              className="about_skill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                className="skill_text"
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  minWidth: "100px",
                  color: "#ffffff",
                }}
              >
                MUI & Tailwind CSS
              </p>
              <hr
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  width: "65%",
                  background: "linear-gradient(to top right, #48bb78, #81e6d9)",
                }}
              />
            </div>

            <div
              className="about_skill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                className="skill_text"
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  minWidth: "100px",
                  color: "#ffffff",
                }}
              >
                JavaScript
              </p>
              <hr
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  width: "70%",
                  background: "linear-gradient(to top right, #ecc94b, #ed8936)",
                }}
              />
            </div>

            <div
              className="about_skill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p
                className="skill_text"
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  minWidth: "100px",
                  color: "#ffffff",
                }}
              >
                React JS
              </p>
              <hr
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  width: "60%",
                  background: "linear-gradient(to top right, #ed64a6, #9f7aea)",
                }}
              />
            </div>
          </div>

          <div className="about-achievements flex flex-col items-center justify-center w-full my-6 md:my-10 gap-6 md:gap-10 lg:gap-20">
            <div className="about-achievement flex flex-col items-center gap-2 md:gap-4 transition duration-300 transform hover:scale-105 my-auto m-auto">
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
                10+
              </h1>
              <p className="text-sm md:text-base font-semibold">
                PROJECTS COMPLETED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
