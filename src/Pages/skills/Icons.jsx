import Marquee from "react-fast-marquee";

const Icons = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f4fe] to-[#cebef8] my-10 py-5">
        <div className="lg:max-w-6xl mx-auto">
            <h1 className="lg:text-5xl text-3xl font-bold text-center mb-8 text-indigo-600">Tools</h1>
      <Marquee pauseOnHover={true} className="space-x-10">
        <div className="w-32 bg-orange-400 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/html-5.png"
            alt="html-5"
          />
        </div>

        <div className="w-32 bg-sky-400 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/stickers/50/css3.png"
            alt="css3"
          />
        </div>
        <div className="w-32 bg-lime-200 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/tailwindcss.png"
            alt="tailwindcss"
          />
        </div>
        <div className="w-32 bg-indigo-300 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
          />
        </div>
        <div className="w-32 bg-yellow-300 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/mongo-db.png"
            alt="mongo-db"
          />
        </div>
        <div className="w-32 bg-teal-400 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/firebase.png"
            alt="firebase"
          />
        </div>
        <div className="w-32 bg-lime-300 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/figma.png"
            alt="figma"
          />
        </div>
        <div className="w-32 bg-green-400 flex justify-center mr-7 rounded-lg" >
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/color/48/javascript.png"
            alt="javascript"
          />
        </div>
        <div className="w-32 bg-sky-300 flex justify-center mr-7 rounded-lg">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/nolan/64/node-js.png"
            alt="node-js"
          />
        </div>
      </Marquee>
    </div>
    </div>
  );
};

export default Icons;
