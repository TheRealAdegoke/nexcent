import React from "react";
import MemberImage from "../../assets/Icon.png";
import NationalImage from "../../assets/Icon (1).png";
import ClubImage from "../../assets/Icon (2).png";

const ManageComponent = () => {
  const gridColumns = [
    {
      id: 1,
      icon: MemberImage,
      heading: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      icon: NationalImage,
      heading: (
        <>
          National <br /> Associations
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      icon: ClubImage,
      heading: (
        <>
          Clubs And <br /> Groups
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="py-10">
      <div className="text-center text-secondary">
        <h2 className="text-3xl font-medium">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-secondary my-4">Who is Nextcent suitable for?</p>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-x-10 px-8">
        {gridColumns.map((gridCols) => (
          <div
            key={gridCols.id}
            className="flex flex-col items-center text-center max-lg:w-11/12 max-lg:max-w-96 mx-auto space-y-4 py-10 bg-white shadow my-4 px-5 rounded"
          >
            <img src={gridCols.icon} alt="Grid-Image" />
            <h3 className="text-secondary text-3xl font-bold">
              {gridCols.heading}
            </h3>
            <p className="text-secondary">{gridCols.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageComponent;
