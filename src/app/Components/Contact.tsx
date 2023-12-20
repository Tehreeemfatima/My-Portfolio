import React from "react";

export default function Contact() {
  return (
    <div className=" contact parent w-full h-screen bg-gradient-to-b from-gray-700 to-pink-900 text-white ">
      <div className="child  flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="subchild pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Sumbit the form below to get in touch with me</p>
        </div>

        <div className="child flex justify-center items-center">
          <form
            action="https://getform.io/f/45ea5889-99eb-4b57-9c84-5f95412c6565"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none"
            />
            <textarea
              rows={7}
              name="message"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-pink-600 to-pink-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
