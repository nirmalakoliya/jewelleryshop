"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CustomJewellery = () => {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/custom-jewelleries?populate=*`
        );
        setData(response.data.data);
        // Fetching heading and title from the first item in the data array
        if (response.data.data.length > 0) {
          const { heading, title } = response.data.data[0].attributes;
          setHeading(heading);
          setTitle(title);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  type CustomJProps = {
    attributes: any;
  };

  return (
    <>
      <section className="p-10 sm:p-20 text-center overflow-hidden">
        <h1 className="text-4xl font-bold mb-8">{heading}</h1>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data?.map((item: CustomJProps, id) => {
            return (
              <div
                key={id}
                className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex justify-center">
                  <img
                    className="h-[200px] w-[200px]"
                    src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                    alt={item.attributes.name}
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {item.attributes.name}
                  </div>
                  <div>{item.attributes.description}</div>
                  <p className="text-base text-green-900 font-bold">
                    MRP : &#8377;{item.attributes.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CustomJewellery;
