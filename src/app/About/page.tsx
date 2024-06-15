"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutJewellery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/abouts?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  type AboutJewelleryProps = {
    children: any;
    attributes: any;
    desc: any;
  };

  return (
    <>
      <div className="bg-white bg-opacity-75">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {data?.map((item: AboutJewelleryProps, index) => (
            <div
              key={index}
              className="my-10 sm:flex sm:items-center sm:justify-center"
            >
              <div className="sm:w-2/3 selection:mr-10">
                <h2 className="text-2xl font-extrabold text-black mb-4">
                  {item.attributes.title}
                </h2>
                {/* Accessing the description */}
                {item.attributes.description.map(
                  (desc: AboutJewelleryProps, descIndex: number) => (
                    <p key={descIndex} className="text-lg">
                      {desc.children.map((child: any, childIndex: number) => (
                        <React.Fragment key={childIndex}>
                          {child.text}
                        </React.Fragment>
                      ))}
                    </p>
                  )
                )}
              </div>
              <div className="sm:w-1/3 sm:mt-0 mt-6">
                <img
                  className="w-[1000px] h-[696px] rounded"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutJewellery;
