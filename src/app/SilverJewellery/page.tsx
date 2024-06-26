"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SilverJewellery = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const [silverData, setSilverData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/silver-jewelleries?populate[bracelets][populate]=*`
        );
        if (response.data.data.length > 0) {
          console.log("Fetching Silver Product data", response.data.data);
          setSilverData(response.data.data);
        } else {
          setSilverData([]);
        }
      } catch (error) {
        console.log("Error fetching SilverData:", error);
      }
    };
    fetchData();
  }, [slug]);

  type SilverDataProips = {
    id: any;
    attributes: any;
  };

  return (
    <>
      <section className="pt-10 text-center overflow-hidden bg-antiquewhite">
        <div className="flex flex-wrap justify-center">
          {silverData.length > 0 ? (
            silverData.map((silverDatas: SilverDataProips) => (
              <div key={silverDatas.id} className="w-full mb-8">
                <h2 className="pb-4 text-xl font-bold uppercase tracking-wider">
                  {silverDatas.attributes.Heading3}
                </h2>
                <div className="flex flex-wrap justify-center">
                  {silverDatas.attributes.bracelets.data.map(
                    (bracelet: SilverDataProips) => (
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

export default SilverJewellery;
