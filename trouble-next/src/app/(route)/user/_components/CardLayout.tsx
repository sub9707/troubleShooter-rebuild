import React from 'react';

interface CardLayoutProps {
  children: React.ReactNode;
}

interface CardLayoutProps {
  children: React.ReactNode;
  heightMode: "full" | "auto";
}

function CardLayout({ children, heightMode }: CardLayoutProps) {
  return (
    <div className={`w-full bg-white rounded-xl shadow-md p-7 ${heightMode === "full" ? "h-full" : "h-auto"}`}>{children}</div>
  )
}

export default CardLayout