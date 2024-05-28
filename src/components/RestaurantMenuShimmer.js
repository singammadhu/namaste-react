import Shimmer from "./Shimmer";

const RestaurantMenuShimmer = () => {
    return (
        <div className="menu p-2 text-center animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto my-6"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          {Array(4).fill("").map((_, index) => (
            <div key={index} className="my-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
          ))}
        </div>
      );
};

export default RestaurantMenuShimmer;
