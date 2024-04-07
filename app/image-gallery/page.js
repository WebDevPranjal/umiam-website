"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../_components/navbar/page';
import style from './image-gallery.module.css';
import Image from 'next/image';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch random images from Unsplash API
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random/300x200?nature');
      if (response.ok) {
        const imageURLs = [];
        for (let i = 0; i < 4; i++) {
          imageURLs.push(response.url);
        }
        setImages(imageURLs);
      } else {
        throw new Error('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  console.log(images);

  return (
    <div>
      <Navbar />
      <section className={style.gallery}>
        <h2>Gallery</h2>
        <p>
          moment is replaced by the magnetic dipole moment m; m is a vector of magnitude IA, where I is the current flowing in a loop of area A.
        </p>
        <div className={style.gallery_container}>
          <div className={style.left}>
            {/* <Image src={images[0]} alt="Gallery 1" width={300} height={200} /> */}  
          </div>
          <div className={style.middle}>
            {/* <Image src={images[1]} alt="Gallery 2" width={300} height={200} />
            <Image src={images[2]} alt="Gallery 3" width={300} height={200} /> */}
          </div>
          <div className={style.right}>
            {/* <Image src={images[3]} alt="Gallery 4" width={300} height={200} /> */}
          </div>  
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
