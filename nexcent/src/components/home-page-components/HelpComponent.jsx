import React from "react";
import user from "../../assets/user.png";
import club from "../../assets/club.png";
import booking from "../../assets/booking.png";
import payment from "../../assets/payment.png";

const HelpComponent = () => {
  const helpGrid = [
    { id: 1, icon: user, heading: "2,245,341", desc: "Members" },
    { id: 2, icon: club, heading: "46,328", desc: "Clubs" },
    { id: 3, icon: booking, heading: "828,867", desc: "Event Bookings" },
    { id: 4, icon: payment, heading: "1,926,436", desc: "Payments" },
  ];
  return (
    <section className="bg-tertiary pt-20">
      <div className="flex items-center justify-evenly max-lg:flex-col py-5 max-lg:px-5 gap-y-10">
        <div className="lg:w-[50%]">
          <h1 className="text-5xl text-secondary font-medium leading-14">
            Helping a local <br />{" "}
            <span className="text-primary">business reinvent itself</span>
          </h1>
          <p className="text-secondary my-6">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          {helpGrid.map((contents) => (
            <div key={contents.id} className="flex gap-x-4 items-center">
              <img src={contents.icon} alt={contents.icon} />
              <div>
                <h3 className="text-2xl font-bold text-secondary">{contents.heading}</h3>
                <p className="text-secondary">{contents.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpComponent;
