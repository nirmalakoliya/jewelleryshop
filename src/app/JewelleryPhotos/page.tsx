"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const JewelleryPhotos = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/photos-jewelleries?populate=*`
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  type JewelleryPhotosProps = {
    attributes: any;
  };

  return (
    <>
      <section className="px-4 py-8 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              {data.length > 0 && data[0]?.attributes?.title}
            </span>
          </h1>
        </div>
      </section>

      <section className="px-4 py-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item: JewelleryPhotosProps, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.attributes.image && (
                <img
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.title}
                  className="object-cover h-64 w-full rounded-lg border bg-antiquewhite shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default JewelleryPhotos;
