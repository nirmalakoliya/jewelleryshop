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
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {data?.map((item: AboutJewelleryProps, index) => (
            <div
              key={index}
              className="my-10 sm:flex sm:items-center sm:justify-center sm:gap-8"
            >
              <div className="sm:w-2/3">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase">
                  {item.attributes.title}
                </h2>
                <div className="text-lg text-gray-800">
                  {item.attributes.description.map(
                    (desc: AboutJewelleryProps, descIndex: number) => (
                      <p key={descIndex}>
                        {desc.children.map((child: any, childIndex: number) => (
                          <React.Fragment key={childIndex}>
                            {child.text}
                          </React.Fragment>
                        ))}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="sm:w-1/3 mt-6 sm:mt-0">
                <img
                  className="w-full h-auto rounded-lg shadow-lg"
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
