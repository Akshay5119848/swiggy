import React, { useEffect } from "react";

const Help = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/0197ea41241d77818a1b084b1575d617b656/embed.js?skipWelcome=1&maximizable=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">Need Help?</h1>
      <p className="text-gray-700 text-lg max-w-xl text-center mb-6">
        Chat with our support bot for instant assistance, delivery updates, or common questions.
      </p>
      <div className="text-sm text-gray-500 text-center">
        Chat widget should appear at the bottom right corner.
      </div>
    </div>
  );
};

export default Help;
