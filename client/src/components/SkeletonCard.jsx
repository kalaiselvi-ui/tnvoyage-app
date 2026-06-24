import React from "react";

export default function SkeletonCard() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border border-gray-200 p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex animate-pulse space-x-4">
        {/* Profile Image Placeholder */}
        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>

        {/* Text Line Placeholders */}
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded col-span-2"></div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
