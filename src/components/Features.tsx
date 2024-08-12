"use client";
import React from 'react'
import featuresData from "../data/features.json";
import { HoverEffect } from "../components/ui/card-hover-effect";

const Features = () => {
 
  const projects = [
    {
      "title": "Seamless Cutting & Trimming",
      "description": "Effortlessly remove unwanted sections and stitch together clips for a smooth, polished final product.",
      "link": "/"
    },
    {
      "title": "Color Correction & Grading",
      "description": "Enhance the visual appeal with advanced color correction and grading techniques to set the perfect tone and mood.",
      "link": "/"
    },
    {
      "title": "Audio Synchronization",
      "description": "Precisely sync audio tracks with video footage for a cohesive and professional sound experience.",
      "link": "/"
    },
    {
      "title": "Visual Effects & Transitions",
      "description": "Incorporate dynamic visual effects and transitions to elevate the storytelling and keep viewers engaged.",
      "link": "/"
    },
    {
      "title": "Text & Titles Integration",
      "description": "Add captivating text overlays and titles to emphasize key points and deliver your message effectively.",
      "link": "/"
    },
    {
      "title": "Multi-Format Exporting",
      "description": "Export your edited videos in various formats, optimized for different platforms and devices, ensuring maximum reach.",
      "link": "/"
    }
  ]
  


  return (
    <div className="max-w-5xl mx-auto px-8">
    <HoverEffect items={projects} />
  </div>
  )
}

export default Features