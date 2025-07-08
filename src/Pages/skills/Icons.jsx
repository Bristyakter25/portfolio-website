import Marquee from "react-fast-marquee";

const Icons = () => {
  const tools = [
    {
      src: "https://img.icons8.com/plasticine/100/html-5.png",
      alt: "HTML5",
      bg: "bg-orange-400",
    },
    {
      src: "https://img.icons8.com/stickers/50/css3.png",
      alt: "CSS3",
      bg: "bg-sky-400",
    },
    {
      src: "https://img.icons8.com/color/48/tailwindcss.png",
      alt: "Tailwind CSS",
      bg: "bg-lime-200",
    },
    {
      src: "https://img.icons8.com/color/48/react-native.png",
      alt: "React",
      bg: "bg-indigo-300",
    },
    {
      src: "https://img.icons8.com/color/48/mongo-db.png",
      alt: "MongoDB",
      bg: "bg-yellow-300",
    },
    {
      src: "https://img.icons8.com/color/48/firebase.png",
      alt: "Firebase",
      bg: "bg-teal-400",
    },
    {
      src: "https://img.icons8.com/color/48/figma.png",
      alt: "Figma",
      bg: "bg-lime-300",
    },
    {
      src: "https://img.icons8.com/color/48/javascript.png",
      alt: "JavaScript",
      bg: "bg-green-400",
    },
    {
      src: "https://img.icons8.com/nolan/64/node-js.png",
      alt: "Node.js",
      bg: "bg-sky-300",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f4fe] to-[#cebef8] dark:from-[#1c1242] dark:to-gray-900 mt-10 py-10 pb-10">
      <div className="lg:max-w-6xl mx-auto px-4">
        {/* <h1 className="lg:text-5xl text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-[#8CABFF]">
          Tools & Technologies
        </h1> */}

        <Marquee pauseOnHover className="space-x-10">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`w-32 h-32 ${tool.bg} flex items-center justify-center rounded-xl mx-3 shadow-lg backdrop-blur-sm bg-opacity-40 transition-all duration-300 hover:scale-110 hover:shadow-indigo-400`}
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Icons;
