import bannerImage from '../../assets/banner image/Coding.gif'
const Banner = () => {
    const handleDownload = () => {
        const resumePath = '/Resume of Bristy Akter.pdf'; 
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Bristy_Akter_Resume.pdf'; 
        link.click();
    };
  return (
    <div className="hero bg-[#F5EFFF] pt-16 pb-10 mt-20">
      <div className="lg:flex justify-between lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="w-[350px] bg-[#F5EFFF] lg:ml-20 ml-10 rounded-lg shadow-2xl"
        />
        <div className="lg:w-[600px] w-[380px] mx-auto ">
            <div className='my-5'>
          <p className="py-4 text-2xl font-semibold ">This is me</p>
          <h1 className="text-5xl text-indigo-600 font-bold my-3">Bristy Akter</h1>
          <p className="lg:text-xl text-[16px] mb-5 ">A passionate Front-End Developer specializing in creating intuitive, responsive, and visually stunning web experiences. Let’s build the web, one pixel at a time!</p>

          <button onClick={handleDownload} className="btn bg-purple-800 text-white hover:bg-blue-700">Download Resume</button>
          </div>
          {/* social links */}
          <div className='flex gap-x-3 my-5'>
          <a href="https://github.com/Bristyakter25"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
          <a href="https://www.facebook.com/aazeen.zaira/"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-circled--v1.png" alt="facebook-circled--v1"/></a>
          <a href="https://www.linkedin.com/"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
          <a href="https://x.com/?lang=en"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx.png" alt="twitterx"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
