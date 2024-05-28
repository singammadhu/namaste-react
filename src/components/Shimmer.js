const Shimmer = () => {
    return (
      <div className="body p-4">
        <div className="filter flex flex-wrap">
          <div className="search m-4 p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="search-box border border-solid border-gray-300 w-full h-10 bg-gray-200 animate-pulse rounded"></div>
            <div className="px-4 py-2 bg-gray-200 m-4 w-32 h-10 animate-pulse rounded-lg"></div>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <div className="px-4 py-2 bg-gray-200 w-48 h-10 animate-pulse rounded-lg"></div>
          </div>
        </div>
  
        <div className="flex flex-wrap">
          {Array(12).fill("").map((_, index) => (
            <div key={index} className="m-4 p-4 w-[250px] h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
  
        <div className="load-more m-4 p-4 flex justify-center">
          <div className="px-4 py-2 bg-gray-200 w-32 h-10 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  