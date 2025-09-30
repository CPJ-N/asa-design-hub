import * as React from "react";

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button onClick={toggle}>
     <svg
      className="w-6 h-6 text-gray-900"  // Tailwind classes for width, height, and color
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 2 2.5 L 20 2.5"
        stroke="currentColor" // Using currentColor so it inherits text color
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 2 9.423 L 20 9.423"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 2 16.346 L 20 16.346"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </button>
);
