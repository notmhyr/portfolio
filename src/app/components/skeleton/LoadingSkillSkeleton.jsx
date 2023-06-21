import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const LoadingSkillSkeleton = () => {
  return (
    <div className="glass-blur p-3 h-[150px] flex flex-col gap-3 w-[150px] rounded-2xl">
      <LoadingSkeleton classes="h-full w-full" />

      <div className="flex justify-center items-center h-[40px]">
        <LoadingSkeleton classes="h-3 w-[65%]" />
      </div>
    </div>
  );
};

export default LoadingSkillSkeleton;
