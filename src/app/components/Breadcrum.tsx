// components/Breadcrumb.tsx
import React from "react";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div
      className="w-full h-40 flex items-center justify-center bg-center bg-cover relative"
      style={{ backgroundImage: "url('/bg-header.png')" }}
    >
      <div className="absolute inset-0"></div>
      <h1 className="relative z-10 text-white text-4xl lg:text-5xl font-semibold text-shadow">
        {title}
      </h1>
    </div>
  );
};

export default Breadcrumb;
