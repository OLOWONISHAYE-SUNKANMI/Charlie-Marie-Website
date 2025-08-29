

import { Slide, Fade } from "react-awesome-reveal";

export default function Info() {
  return (
    <div className="container mx-auto px-12 py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        {/* Content Section */}
        <Slide direction="down" triggerOnce>
          <div className="w-full lg:flex-1 text-center">
            <h1 className="font-extrabold font-poppins text-2xl lg:text-5xl text-[#620000]">
              Mission Statement
            </h1>
            <p className="mt-5 lg:mt-10 font-semibold text-base lg:text-xl mb-5">
              We are committed to buillding a brighter future for posterity.
              Education is our priority till all our Children are mature.
            </p>
          </div>

          <Fade direction="down" triggerOnce>
            <div className="w-full lg:flex-1 flex justify-center">
              <img
                src="https://res.cloudinary.com/depeqzb6z/image/upload/v1755591414/undraw_education_3vwh-removebg-preview_rz4wn1.png"
                alt="info"
                className="w-full max-w-md lg:max-w-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </Fade>
        </Slide>
      </div>
    </div>
  );
}
