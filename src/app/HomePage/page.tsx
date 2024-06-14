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
    category: any;
    listItem: any;
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover bg-center text-center overflow-hidden">
          {data?.map((item: HomeBannerProps, index) => {
            return (
              <div key={index}>
                <img
                  className="block select-none mx-auto bg-gray-300 transition duration-300 w-2400 h-1600"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=""
                />
                <div className="max-w-3xl mx-auto">
                  <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                      <h1 className="text-gray-900 font-bold text-3xl mb-2">
                        {item.attributes.heading}
                      </h1>
                      <p className="text-slate-400 hover:text-sky-950 font-bold underline decoration-pink-500 text-xs mt-2">
                        {item.attributes.name}
                      </p>
                      {item.attributes.description.map(
                        (paragraph: HomeBannerProps, index: number) => (
                          <p key={index} className="text-base my-2 text-left">
                            {paragraph.children.map((child: any) => child.text)}
                          </p>
                        )
                      )}
                      <div className="font-bold my-5 text-lg">
                        {item.attributes.category}
                      </div>

                      {item.attributes.categoryDesc.map(
                        (category: HomeBannerProps, index: number) => (
                          <div key={index}>
                            {category.children.map(
                              (listItem: HomeBannerProps, index: number) => (
                                <div key={index}>
                                  {listItem.children.map(
                                    (child: HomeBannerProps, index: number) => (
                                      <p
                                        key={index}
                                        className="my-3 border border-gray-300 rounded text-gray-950 mt-4 text-left "
                                      >
                                        {child.text}
                                      </p>
                                    )
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
