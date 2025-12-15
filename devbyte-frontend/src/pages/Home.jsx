import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/features/home/HeroSection";
import MembersSection from "@/features/home/MembersSection";
import HighlightsSection from "@/features/home/HighlightsSection";
import LearningSection from "@/features/home/LearningSection";
import ProjectsSection from "@/features/home/ProjectsSection";
import OpportunitiesSection from "@/features/home/OpportunitiesSection";
import BlogSection from "@/features/home/BlogSection";
import {
  learningData,
  projects,
  opportunities,
  carouselSlides,
} from "../features/home/HomeData";
import Button from "@/components/ui/Button";
import HeaderWrapper from "@/components/ui/Header";
import { landingpageService } from "@/services/landingpageService";

const Home = ({ navRef }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const [chunkSize, setChunkSize] = useState(3);
  const [membersSlideIndex, setMembersSlideIndex] = useState(0);
  const [membersIsTransitioning, setMembersIsTransitioning] = useState(false);
  const [members, setMembers] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await landingpageService.getMembers();
        console.log("Members fetched:", response);
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    const fetchBlogPosts = async () => {
      try {
        const response = await landingpageService.getBlogPosts();
        console.log("Blog posts fetched:", response);
        setBlogPosts(response.blogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchMembers();
    fetchBlogPosts();
  }, []);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    setCurrentIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioningRef.current) return;
      // trigger next slide and mark transitioning to avoid double-steps
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Members Carousel

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 640) setChunkSize(1); // mobile
      else if (window.innerWidth < 1024) setChunkSize(2); // tablet
      else setChunkSize(3); // desktop
    };

    updateChunkSize(); // run on mount
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  // Members carousel (3 per slide)

  const membersSlidesCount = Math.ceil(members.length / chunkSize);
  const goToNextMembers = () =>
    setMembersSlideIndex((prev) => (prev + 1) % membersSlidesCount);
  const goToPrevMembers = () =>
    setMembersSlideIndex(
      (prev) => (prev - 1 + membersSlidesCount) % membersSlidesCount
    );
  const memberChunks = [];
  for (let i = 0; i < members.length; i += chunkSize) {
    memberChunks.push(members.slice(i, i + chunkSize));
  }
  const goToMembersSlide = (index) => {
    if (membersIsTransitioning || index === membersSlideIndex) return;
    setMembersIsTransitioning(true);
    setMembersSlideIndex(index);
  };
  useEffect(() => {
    const t = setTimeout(() => setMembersIsTransitioning(false), 500);
    return () => clearTimeout(t);
  }, [membersSlideIndex]);

  return (
    <div className="relative  overflow-hidden w-full z-0 ">
      <div className="absolute top-8 left-20 w-[30%] md:h-64 h-40 bg-gradient-to-r from-[#00AEEF] to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-8 md:right-40 right-0 md:w-32 w-20 h-28 bg-gradient-to-r from-[#00C38A] to-transparent rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-var(--nav-h))]">
        <HeroSection
          carouselSlides={carouselSlides}
          currentIndex={currentIndex}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          goToSlide={goToSlide}
          navigate={navigate}
        />
        <div className="absolute bottom-20 right-0 w-[20%] h-40 bg-gradient-to-r from-[#6A5DFF] to-transparent rounded-full blur-3xl"></div>
      </div>

      <HighlightsSection />

      <MembersSection
        title="Meet Our Members"
        subtitle="A growing network of developers, designers,tech enthusiasts"
        memberChunks={memberChunks}
        membersSlideIndex={membersSlideIndex}
        goToPrevMembers={goToPrevMembers}
        goToNextMembers={goToNextMembers}
        goToMembersSlide={goToMembersSlide}
      />

      <LearningSection learningData={learningData} />

      <ProjectsSection projects={projects} />

      <OpportunitiesSection opportunities={opportunities} />

      <BlogSection blogPosts={blogPosts} />

      {/* <div className="bg-[#00AEEF]/[15%] mt-28 h-[400px] flex flex-col justify-center text-center items-center space-y-5 px-4"> */}
      <HeaderWrapper className="text-center ">
        <h1 className="text-[36px] font-bold">Join DevByte Today</h1>
        <h1 className="text-[18px] font-semibold">
          Connect, Collaborate, and Grow with developers worldwide
        </h1>
        <div className="mt-7 flex gap-3 justify-center">
          <Button
            children="Sign Up Free"
            className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
          />
          <Button
            children="Login"
            className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-500 ease-in-out"
          />
        </div>
      </HeaderWrapper>
      {/* </div> */}
    </div>
  );
};

export default Home;
