// UnderConstruction.js
import React from "react";
// import constructionImage from "./assets/construction.png"; // Add your under construction image

const UnderConstruction = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <img src='' alt="Under Construction" className="w-64 mb-8" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Construction</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
                We're working on something awesome. Please check back later!
            </p>
            <div className="rounded-full bg-blue-500 p-4">
                <a href="/" className="text-white font-semibold text-lg hover:underline">
                    Go to Home Page
                </a>
            </div>
        </div>
    );
};

export default UnderConstruction;
