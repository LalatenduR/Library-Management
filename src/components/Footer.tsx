import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-muted text-muted-foreground py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="mb-4 md:mb-0 text-center">
            &copy; 2025 Online Library. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-foreground">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-foreground">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-foreground">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer