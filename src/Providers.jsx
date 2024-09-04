"use client";

import { ThemeProvider } from "next-themes";

// the children prop is equivalent to our whole website. So the whole website is getting wrapped by the ThemeProvider below.
const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
