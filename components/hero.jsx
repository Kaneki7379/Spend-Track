"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const style = {
  wrapper: {
    paddingBottom: "5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem", // Approx. text-5xl
    paddingBottom: "1.5rem",
    fontWeight: 800,
    letterSpacing: "-0.05em",
    backgroundImage: "linear-gradient(to bottom right, #2563eb, #7c3aed)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    lineHeight: 1.2,
  },
  buttonGroup: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  imageWrapper: {
    marginTop: "2rem",
  },
  image: {
    borderRadius: "0.5rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    border: "1px solid #e5e7eb",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  button: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
};

const HeroSection = () => {
    const imageRef = useRef();
     useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={style.wrapper}>
      <div style={style.container}>
        <h1 style={style.heading}>
          Manage your finances <br />
          with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div style={style.buttonGroup} className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" style={style.button}>Get Started</Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" style={style.button}>Watch Demo</Button>
          </Link>
        </div>
        <div style={style.imageWrapper} className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
              style={style.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
