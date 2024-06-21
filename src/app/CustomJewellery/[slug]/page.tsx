"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/custom-jewelleries?filters[slug][$eq]=${slug}&populate[bracelets][populate]=image2`
        );
        if (response.data.data.length > 0) {
          console.log("Fetched products data:", response.data.data);
          setProducts(response.data.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <section className="pt-20 text-center overflow-hidden bg-antiquewhite">
      <div className="flex flex-wrap justify-center">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-full mb-8">
              <h2 className=" pb-4 text-xl font-bold uppercase tracking-wider">
                {product.attributes.bracelets.data.length > 0 &&
                  product.attributes.bracelets.data[0].attributes.heading2}
              </h2>
              <div className="flex flex-wrap justify-center">
                {product.attributes.bracelets.data.map((bracelet: any) => (
                  <div
                    key={bracelet.id}
                    className="w-72 p-4 m-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <div className="text-center">
                      {bracelet.attributes.image2 && (
                        <img
                          className="h-[200px] w-[200px] mx-auto"
                          src={`http://localhost:1337${bracelet.attributes.image2.data.attributes.url}`}
                          alt={bracelet.attributes.name2}
                        />
                      )}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline font-bold uppercase">
                        {bracelet.attributes.name2}
                      </h3>
                      <p className="text-green- font-bold">
                        MRP : &#8377;{bracelet.attributes.price2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-xl">Loading....</div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
