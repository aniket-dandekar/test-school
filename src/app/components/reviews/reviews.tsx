import { Neucha } from "next/font/google";
import React from "react";

export const neucha = Neucha({
  weight: ["400"],
  subsets: ["latin"],
});

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section id="reviews" className="relative bg-[#ef8c8c] bg-opacity-90">
      <div className="p-4 md:p-12 lg:p-24  md:grid grid-cols-2 text-white desktop">
        <div
          className={`${neucha.className} p-12 self-center text-center justify-self-center text-6xl`}
        >
          REVIEWS
        </div>


        <div className="p-6 md:p-8 lg:p-12 md:min-h-60 lg:min-h-72 flex flex-col justify-between border-2 md:border-b-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            ducimus commodi, nihil delectus omnis est. Eum nobis ipsa accusamus
            minima.
          </p>
          <p>- Lorem ispusm</p>
        </div>
        <div className="p-6 md:p-8 lg:p-12 md:min-h-60 lg:min-h-72 flex flex-col justify-between border-2 md:border-r-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            ducimus commodi, nihil delectus omnis est. Eum nobis ipsa accusamus
            minima.
          </p>
          <p>- Lorem ispusm</p>
        </div>
        <div className="p-6 md:p-8 lg:p-12 md:min-h-60 lg:min-h-72 flex flex-col justify-between border-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            ducimus commodi, nihil delectus omnis est. Eum nobis ipsa accusamus
            minima.
          </p>
          <p>- Lorem ispusm</p>
        </div>
      </div>
      
    </section>
  );
};

export default Reviews;
