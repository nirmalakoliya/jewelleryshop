"use client";
import axios from "axios";
import Link from "next/link";
import React, { Key, useEffect, useState } from "react";

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
    id: Key | null | undefined;
    attributes: any;
  };

  return (
    <>
      <section className="pt-10 text-center overflow-hidden bg-antiquewhite">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              {heading}
            </span>
          </h1>
          <h2 className="text-2xl font-bold mb-4 uppercase">{title}</h2>
          <div className="flex flex-wrap justify-center">
            {data.map((item: CustomJProps) => (
              <div
                key={item.id}
                className="w-72 p-4 m-4 bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <Link href={`/CustomJewellery/${item.attributes.slug}`}>
                  <section className="block w-full">
                    <div className="text-center">
                      <img
                        className="h-48 w-48 mx-auto"
                        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                        alt={item.attributes.name}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold uppercase">
                        {item.attributes.name}
                      </h3>
                      <p>{item.attributes.description}</p>
                      <p className="text-green-800 font-bold">
                        MRP: &#8377;{item.attributes.price}
                      </p>
                    </div>
                  </section>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomJewellery;
