// components/Assessment/SkeletonAssessmentHeader.js
'use client';

import React from 'react';

const SkeletonAssessmentHeader = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-8 w-1/3 rounded mb-4"></div>
      <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
    </div>
  );
};

export default SkeletonAssessmentHeader;