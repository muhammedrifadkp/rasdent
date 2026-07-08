"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="transformations" className="before-after-section section-padding bg-pattern gradient-bg-teal-mint">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '48px' }}>
          <span className="badge">Transformation</span>
          <h2 className="section-title">Smile Makeover Results</h2>
          <p className="section-subtitle">
            Drag the slider to compare the teeth alignment and aesthetic whitening before and after our dental treatments.
          </p>
        </div>

        <div className="before-after-wrapper">
          <div className="slider-container">
            {/* After Image (Background) */}
            <div className="slider-image-wrapper">
              <Image
                src="/after.webp"
                alt="Teeth and smile after orthodontic treatment"
                width={1200}
                height={896}
                className="slider-image"
                priority
              />
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="slider-image-wrapper"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <Image
                src="/before.webp"
                alt="Teeth and smile before orthodontic treatment"
                width={1200}
                height={896}
                className="slider-image"
                priority
              />
            </div>

            {/* Floating Labels */}
            <div className="slider-label slider-label-before">Before</div>
            <div className="slider-label slider-label-after">After</div>

            {/* Drag Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="slider-range-input"
              aria-label="Before and after comparison slider"
            />

            {/* Slider Line & Handle Divider */}
            <div className="slider-divider" style={{ left: `${sliderPos}%` }}>
              <div className="slider-handle">
                <div className="slider-handle-arrows">
                  <div className="slider-handle-arrow slider-handle-arrow-left"></div>
                  <div className="slider-handle-arrow slider-handle-arrow-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
