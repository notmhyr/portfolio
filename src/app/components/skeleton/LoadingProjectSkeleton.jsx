import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const LoadingProjectSkeleton = () => {
  return (
    <div className="glass-blur p-4 h-[360px] flex flex-col gap-4 w-full rounded-2xl">
      <LoadingSkeleton classes="h-full w-full" />

      <div className="flex justify-center items-center h-[70px]">
        <LoadingSkeleton classes="h-4 w-[50%]" />
      </div>
    </div>
  );
};

export default LoadingProjectSkeleton;
