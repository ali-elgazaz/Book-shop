import { CiDeliveryTruck } from "react-icons/ci";
import {
  MdAutorenew,
  MdOutlineCreditScore,
  MdOutlineSupportAgent,
} from "react-icons/md";

const Policy = () => {
  return (
    <section className="container-custom">
      <div className="grid grid-cols-4 gap-15.25">
        <div className="card  text-[rgba(34,34,34,0.5)]">
          <CiDeliveryTruck className="text-3xl" />
          <h3 className="text-[18px] font-bold text-[rgba(34,34,34,1)]">
            Fast & Reliable Shipping
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="card  text-[rgba(34,34,34,0.5)]">
          <MdOutlineCreditScore className="text-3xl" />
          <h3 className="text-[18px] font-bold text-[rgba(34,34,34,1)]">
            Secure Payment
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="card  text-[rgba(34,34,34,0.5)]">
          <MdAutorenew className="text-3xl" />
          <h3 className="text-[18px] font-bold text-[rgba(34,34,34,1)]">
            Easy Returns
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="card  text-[rgba(34,34,34,0.5)]">
          <MdOutlineSupportAgent className="text-3xl" />
          <h3 className="text-[18px] font-bold text-[rgba(34,34,34,1)]">
            24/7 Customer Support
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
