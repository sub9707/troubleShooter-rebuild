import React from 'react';

interface CardLayoutProps {
  children: React.ReactNode;
}

interface CardLayoutProps {
  children: React.ReactNode;
  heightMode: "full" | "auto";
  position:"sticky" | "auto";
}

function CardLayout({ children, heightMode, position }: CardLayoutProps) {
  return (
    <div className={`w-full bg-white rounded-xl shadow-md p-7 ${heightMode === "full" ? "h-full" : "h-auto"} ${position === "sticky" ? "sticky top-5":""}`}>{children}</div>
  )
}

export default CardLayout