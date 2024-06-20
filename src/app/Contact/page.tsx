import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-8 mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-100 md:grid-cols-2 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Let's talk!
            </h2>
            <p className="text-gray-700 dark:text-gray-600">
              Have a project in mind? Want to collaborate or just say hi?
            </p>
          </div>
          <img
            src="/images/contact.png"
            alt=""
            className="p-6  mx-auto h-52 md:h-64"
          />
        </div>
        <form className="flex flex-col space-y-6 px-4 md:px-0">
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full px-3 py-2 mt-1 rounded-md border"
            />
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 mt-1 rounded-md border"
            />
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full px-3 py-2 mt-1 rounded-md border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold tracking-wide text-white uppercase bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:bg-violet-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
