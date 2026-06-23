import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import RichDad from "../assets/best seller/RichDad.png";
import best5 from "../assets/best seller/best5.jpg";

const Recommended = () => {
  return (
    <section className="container-custom text-[rgba(34,34,34,1)]">
      <h3 className="text-[27px] font-bold text-[rgba(34,34,34,1)]">
        Recommended For You
      </h3>
      <div className="Recommended-books flex items-center justify-between gap-6">
        <div className="book flex gap-9.75 p-10">
          <img src={RichDad} className="w-44" />
          <div className="content flex-1">
            <div className="info">
              <h4 className="font-bold text-[18px] text-[#222222] mb-1">
                Rich Dad And Poor
              </h4>
              <h5 className="text-[14px] text-[#22222280]">
                Author:{" "}
                <span className="text-[#222222] font-bold mb-1">
                  Robert T. Kiyosanki
                </span>
              </h5>
              <p className="text-[14px] text-[#22222280] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
            </div>

            <div className="review flex items-center justify-between">
              <div className="review-info">
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="2 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="4 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#22222233]"
                    aria-label="5 star"
                  />
                  <p className="ml-2 text-[12px]">(180Review)</p>
                </div>
                <h5>Rate: 4.2</h5>
              </div>
              <div className="price">
                <h3>$30.00</h3>
              </div>
            </div>

            <div className="btns flex mt-4 gap-4">
              <button className="btn btn-secondary py-3 px-4 flex-1 text[16px] font-semibold">
                Add To Cart <IoCartOutline className="text-xl" />
              </button>
              <button className="btn btn-outline btn-secondary">
                <FaRegHeart className="rounded-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="book flex gap-9.75 p-10">
          <img src={best5} className="w-44" />
          <div className="content flex-1">
            <div className="info">
              <h4 className="font-bold text-[18px] text-[#222222] mb-1">
                The Design Of Books
              </h4>
              <h5 className="text-[14px] text-[#22222280]">
                Author:{" "}
                <span className="text-[#222222] font-bold mb-1">
                  Debbie Berne
                </span>
              </h5>
              <p className="text-[14px] text-[#22222280] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
            </div>

            <div className="review flex items-center justify-between">
              <div className="review-info">
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="2 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#EBC305]"
                    aria-label="4 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#22222233]"
                    aria-label="5 star"
                  />
                  <p className="ml-2 text-[12px]">(210Review)</p>
                </div>
                <h5>Rate: 4.2</h5>
              </div>
              <div className="price">
                <h3>$40.00</h3>
              </div>
            </div>

            <div className="btns flex mt-4 gap-4">
              <button className="btn btn-secondary py-3 px-4 flex-1 text[16px] font-semibold">
                Add To Cart <IoCartOutline className="text-xl" />
              </button>
              <button className="btn btn-outline btn-secondary">
                <FaRegHeart className="rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
