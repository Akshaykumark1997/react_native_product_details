import React, { createContext, useState, ReactNode } from 'react';

interface Images {
  main: string;
  sub1: string;
  sub2: string;
}

interface ImageContextType {
  images: Images;
  setImages: React.Dispatch<React.SetStateAction<Images>>;
}

export const MainImageContext = createContext<any>(null);


