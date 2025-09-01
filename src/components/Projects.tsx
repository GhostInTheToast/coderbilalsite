import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: white;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#667eea' : '#e0e0e0'};
  background: ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    color: ${props => props.active ? 'white' : '#667eea'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
  }
  
  &.secondary {
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: white;
    }
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff6b6b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Array<{
    id: number;
    title: string;
    description: string;
    tech: string[];
    category: string;
    image: string;
    bgColor: string;
    github: string;
    featured?: boolean;
  }> = [
      {
        id: 1,
        title: "GhostCoder V2",
        description: "An AI coding assistant that connects to local Ollama servers to generate actual code and modify files directly. Unlike other AI assistants that just explain things, GhostCoder is designed to write, modify, and understand code with agentic behavior.",
        tech: ["Python", "Ollama", "AI/ML", "CLI", "Code Generation", "File Processing"],
        category: "ai-ml",
        image: "👻",
        bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        github: "https://github.com/GhostInTheToast/GhostCoderV2",
        featured: true
      },
      {
        id: 2,
        title: "GhostTech Port Scanner",
        description: "A fast multithreaded TCP port scanner written in Python. Scans targets for open ports, grabs service banners, and exports results in JSON/CSV formats. Features threaded scanning, custom port ranges, and banner grabbing for HTTP/HTTPS services.",
        tech: ["Python", "Networking", "Multithreading", "TCP/IP", "Security", "JSON/CSV Export"],
        category: "backend",
        image: "🔍",
        bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        github: "https://github.com/GhostInTheToast/GhostTechPortScanner",
        featured: true
      },
      {
        id: 3,
        title: "Well & Gas Data Scraper",
        description: "A comprehensive solution for scraping well data based on API numbers, inserting data into SQLite database, and serving through Flask API. Includes scraping, database insertion, and API endpoints with retry mechanisms and throttling protection.",
        tech: ["Python", "Flask", "SQLite", "Web Scraping", "API Development", "Database Design"],
        category: "fullstack",
        image: "⛽",
        bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        github: "https://github.com/GhostInTheToast/WellAndGasScraper",
        featured: true
      },
      {
        id: 4,
        title: "GroupForHDR",
        description: "Automatically groups real estate bracketed photos by shared EXIF metadata for HDR blending via ML models. Groups photos based on focal length, aperture, dimensions, timestamps, and exposure compensation for professional photography workflows.",
        tech: ["Python", "Image Processing", "EXIF Metadata", "HDR Photography", "ML Models", "Real Estate"],
        category: "ai-ml",
        image: "📸",
        bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        github: "https://github.com/GhostInTheToast/GroupForHDR",
        featured: false
      },
      {
        id: 5,
        title: "ExifHarvester",
        description: "High-performance local EXIF metadata extraction pipeline using native Python multiprocessing. Recursively scans nested folders, extracts metadata with Pillow, and stores results in scalable .jsonl format. Built for speed and scale without cloud dependencies.",
        tech: ["Python", "Multiprocessing", "EXIF", "Pillow", "Parallel Processing", "File Systems"],
        category: "backend",
        image: "🔄",
        bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        github: "https://github.com/GhostInTheToast/ExifHarvester",
        featured: false
      },
      {
        id: 6,
        title: "LeetCode Solutions",
        description: "A comprehensive collection of my LeetCode problem solutions demonstrating algorithmic thinking, data structure knowledge, and problem-solving approaches. Shows continuous learning and practice in competitive programming and technical interviews.",
        tech: ["Python", "Java", "Algorithms", "Data Structures", "Problem Solving", "Competitive Programming", "Technical Interviews"],
        category: "ai-ml",
        image: "🧮",
        bgColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        github: "https://github.com/GhostInTheToast/Leetcode",
        featured: false
      }
    ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML & Computer Vision' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & Data' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            A collection of my recent work, showcasing various technologies and problem-solving approaches
          </SectionSubtitle>
        </SectionHeader>

        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <ProjectImage bgColor={project.bgColor}>
                  {project.image}
                  {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>

                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      View Code
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
