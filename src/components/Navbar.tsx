import './Navbar.css'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    return (
      <nav className={`w-full ${theme === 'light' ? 'bg-background' : 'bg-gray-800'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">Online Library</span>
            </div>
  
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost">Dashboard</Button>
              <Button variant="ghost" asChild><a href='#newarrivals'>New Arrivals</a></Button>
              <Button variant="ghost" asChild><a href='#categories'>Categories</a></Button>
              <Button variant="ghost">Contact</Button>
            </div>
  
            <div className="hidden md:flex items-center space-x-2">
              <Input type="text" placeholder="Search..." className="w-48" />
              <Button variant="outline">Search</Button>
            </div>
  
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>

            {/* Dark/Light Mode Toggle Button */}
            <div className="flex items-center ml-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Button variant="ghost" className="w-full text-left">Home</Button>
            <Button variant="ghost" className="w-full text-left">Categories</Button>
            <Button variant="ghost" className="w-full text-left">New Arrivals</Button>
            <Button variant="ghost" className="w-full text-left">Contact</Button>
            <div className="flex space-x-2 mt-2">
              <Input type="text" placeholder="Search..." className="flex-1" />
              <Button variant="outline">Go</Button>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar;
