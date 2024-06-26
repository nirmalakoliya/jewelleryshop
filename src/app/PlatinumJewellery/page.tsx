"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PlatinumJewellery = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [platinumData, setPlatinumData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/platinum-jewelleries?populate[bracelets][populate]=*`
        );
        if (response.data.data.length > 0) {
          console.log("Fetching Platinum data", response.data.data);
          setPlatinumData(response.data.data);
        } else {
          setPlatinumData([]);
        }
      } catch (error) {
        console.log("Error fetching PlatinumData", error);
      }
    };
    fetchData();
  }, [slug]);

  type PlatinumDataProps = {
    id: any;
    attributes: any;
  };

  return (
    <>
      <section className="pt-10 text-center overflow-hidden">
        <div className="flex flex-wrap justify-center">
          {platinumData.length > 0 ? (
            platinumData.map((platinumDatas: PlatinumDataProps) => (
              <div key={platinumDatas.id} className="w-full mb-8">
                <h2 className="pb-4 text-lg font-bold uppercase tracking-wider">
                  {platinumDatas.attributes.Heading4}
                </h2>
                <div className="flex flex-wrap justify-center">
                  {platinumDatas.attributes.bracelets.data.map(
                    (bracelet: PlatinumDataProps) => (
                      <div
                        key={bracelet.id}
                        className="w-72 p-4 m-4 bg-gray-100 rounded-lg shadow-md"
                      >
                        <div className="text-center">
                          {bracelet.attributes.image2 && (
                            <img
                              className="h-[200px] w-[200px] mx-auto"
                              src={`http://localhost:1337${bracelet.attributes.image2.data.attributes.url}`}
                              alt={bracelet.attributes.image2}
                            />
                          )}
                        </div>
                        <div className="mt-4">
                          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline font-bold uppercase">
                            {bracelet.attributes.name2}
                          </h3>
                          <p className="font-bold">
                            MRP : &#8377;{bracelet.attributes.price2}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-xl">Loading....</div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlatinumJewellery;
