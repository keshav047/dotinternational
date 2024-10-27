import React from "react";
// import Page_5_img1 from "../assets/img/Page5_img1.jpg";
// import Page_5_img2 from "../assets/img/Page5_img2.jpg";
// import Page_5_img3 from "../assets/img/Page5_img3.jpg";
// import Page_5_img4 from "../assets/img/Page5_img4.jpg";
// import Page_5_img5 from "../assets/img/Page5_img5.jpg";
import A1 from "../assets/img/01.jpg";
import A2 from "../assets/img/02.jpg";
import A3 from "../assets/img/03.jpg";
import A4 from "../assets/img/04.jpg";
import A5 from "../assets/img/05.jpg";
import A6 from "../assets/img/06.jpg";
import A7 from "../assets/img/07.jpg";
import A8 from "../assets/img/08.jpg";
import A9 from "../assets/img/09.jpg";
import A10 from "../assets/img/10.jpg";
import A11 from "../assets/img/11.jpg";
import A12 from "../assets/img/12.jpg";
import A13 from "../assets/img/13.jpg";
import A14 from "../assets/img/14.jpg";
import A15 from "../assets/img/15.jpg";
import A16 from "../assets/img/16.jpg";
import A17 from "../assets/img/17.jpg";
import A18 from "../assets/img/18.jpg";




// import A1 from "../assets/img/1.jpg";
// import A2 from "../assets/img/2.jpg";
// import A3 from "../assets/img/3.jpg";
// import A4 from "../assets/img/4.jpg";
// import A5 from "../assets/img/5.jpg";
// import A6 from "../assets/img/6.jpg";
// import A7 from "../assets/img/7.jpg";
// import A8 from "../assets/img/8.jpg";
const Page_5 = () => {
  return (
    <div className="page_5 flex flex-col items-center justify-center gap-10 w-full min-h-[100vh]  pt-[10vw] px-20" id="PROJECTS">
      <h1 className="text-5xl font-bold mb-4">OUR PROJECTS</h1>
      <div className=" flex items-center justify-evenly gap-10 flex-wrap w-[100%]  py-10">
        {[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,A16,A17,A18].map(
          (item, index) => (
            <img key={index} className="w-[45%] h-[45vh] hover:scale-[1.1] shadow-md shadow-[black] rounded-lg bg-green-300" src={item} alt="" />
          )
        )}
      </div>
    </div>
  );
};

export default Page_5;
