"use client";
import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/home-pages?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  type HomeBannerProps = {
    text: ReactNode;
    children: any;
    attributes: any;
    paragraph: any;
    listItem: any;
  };

  return (
    <div className="h-screen bg-gray-100 relative overflow-hidden">
      {data?.map((item: HomeBannerProps, index) => (
        <div
          key={index}
          className="relative h-full flex flex-col justify-center"
        >
          {/* Image */}
          <img
            className="absolute inset-0 object-cover w-full h-full z-0"
            src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto p-4 md:p-8 lg:p-12 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase text-yellow-500">
                {item.attributes.heading}
              </h1>

              <p className="text-lg sm:text-xl text-white">
                {item.attributes.name}
              </p>
              <div className="mt-4">
                {item.attributes.description.map(
                  (paragraph: any, index: number) => (
                    <p key={index} className="text-base my-2 text-white">
                      {paragraph.children.map((child: any, index: number) => (
                        <span key={index}>{child.text}</span>
                      ))}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
