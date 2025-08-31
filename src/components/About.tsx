import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: #f8f9fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const AboutTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Timeline = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin-bottom: 2rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 30px;
    bottom: -30px;
    width: 2px;
    background: #e0e0e0;
  }
  
  &:last-child::before {
    display: none;
  }
`;

const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #667eea;
  margin-right: 1.5rem;
  margin-top: 8px;
  flex-shrink: 0;
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineYear = styled.div`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const TimelineItemTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const AchievementHighlight = styled.span`
  color: #FFD700;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #FFD700;
  text-underline-offset: 3px;
`;

const ShowMoreButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showMoreExperience, setShowMoreExperience] = useState(false);

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            A passionate software engineer with a love for elegant code and innovative solutions
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          <AboutContent
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutTitle>Who I Am</AboutTitle>
            <AboutText>
              I'm the Head of AI/ML at Moara.io and Full Stack Engineer by trade with a strong foundation in computer science and a passion for building
              scalable AI solutions and enterprise applications. My journey in tech began with curiosity about how things work,
              and it has evolved into a leadership role in AI/ML, specializing in computer vision, LLMs, and full-stack development.
            </AboutText>
            <AboutText>
              I believe in writing clean, maintainable code and staying at the forefront of AI/ML technologies.
              When I'm not coding, you'll find me fine-tuning transformer models, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </AboutText>

            <StatsGrid>
              <StatItem
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <StatNumber>5+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <StatNumber>100+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatItem>
            </StatsGrid>
          </AboutContent>

          <Timeline
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TimelineTitle>Professional Experience</TimelineTitle>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>August 2025 - Present</TimelineYear>
                <TimelineItemTitle>Head of AI/ML - Moara.io</TimelineItemTitle>
                <TimelineDescription>
                  Built retrieval + summarization stack (Elasticsearch + transformers/Hugging Face), improving Top-3 precision ~28% and cutting P95 search latency ~37%. Designed LLM guardrails with RAG citation binding, achieving ~99.9% factuality coverage. Scaled multi-tenant AWS stack with isolated environments and CI/CD, enabling daily zero-downtime releases.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>April 2025 - August 2025</TimelineYear>
                <TimelineItemTitle>Senior AI/ML Fullstack Engineer - AutoHDR</TimelineItemTitle>
                <TimelineDescription>
                  Built secure, full-stack annotation platform on AWS using CVAT (19 Docker containers, EC2, Traefik) with React + MySQL. Fine-tuned transformer models for Computer Vision and Generative AI. Led redesign of image-segmentation pipelines using Meta's SAM v2, Detectron2, and GroundingDino. Wrote CUDA-safe, multi-process training code for fast GPU inference.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>July 2024 - April 2025</TimelineYear>
                <TimelineItemTitle>Full Stack Software Developer - Signature Performance, Inc.</TimelineItemTitle>
                <TimelineDescription>
                  Enhanced VA's audit review system, improving operational efficiency for over 2,000 daily audits using Java Spring Boot, AngularJS, JSP, JUnit, and SQL. Led microservice projects creating new RESTful APIs. Developed dispute notification system increasing auditor productivity by 30% through streamlined workflows.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>December 2022 - June 2024</TimelineYear>
                <TimelineItemTitle>Full Stack Software Engineer - The Western Union</TimelineItemTitle>
                <TimelineDescription>
                  Developed and demoed to CEO the Money Delivery Tracking Journey API and UI that secured funding for WU's Austin Branch. Used Spring and Couchbase with Kafka streaming data, mapped to path/locale using Camunda, displayed as ReactJS progress accordion. Led enterprise microservice applications driving $1B+ annual revenue using AWS ECS, CloudWatch, Java Spring, React, Docker, and Jenkins.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            {!showMoreExperience && (
              <motion.div
                style={{ textAlign: 'center', marginTop: '1rem' }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <ShowMoreButton
                  onClick={() => setShowMoreExperience(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More Experience
                </ShowMoreButton>
              </motion.div>
            )}

            {showMoreExperience && (
              <motion.div
                style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ShowMoreButton
                  onClick={() => setShowMoreExperience(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Less
                </ShowMoreButton>
              </motion.div>
            )}

            {showMoreExperience && (
              <>
                <TimelineItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineYear>June 2022 - December 2022</TimelineYear>
                    <TimelineItemTitle>Full Stack System Software Engineer - Reynolds and Reynolds Company</TimelineItemTitle>
                    <TimelineDescription>
                      Managed end-to-end application development and delivery for clients, leveraging cutting-edge industry-standard tools. Streamlined data extraction from local government websites and Google search results. Optimized web scrapers using multithreading tools, reducing application runtime by 88%. Collaborated with development SMEs through PMD to collect and document product requirements.
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineYear>December 2020 - June 2022</TimelineYear>
                    <TimelineItemTitle>Software Developer - Sobah Systems</TimelineItemTitle>
                    <TimelineDescription>
                      Developed custom software for private clients, focusing on scraping, cleaning, and storing large data from over 45,000 wiki URLs per day (Python, Beautiful Soup 4, PostgreSQL, Multithreading). Full Stack development (C#, JavaScript, ASP.NET Core, SQL) for web applications used by thousands of customers. Worked on main company product used in over 80% of car dealerships in North America.
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineYear>2018 - Present</TimelineYear>
                    <TimelineItemTitle>Founder & Software Developer - GhostTech Enterprise</TimelineItemTitle>
                    <TimelineDescription>
                      Founded boutique freelancing venture to build creative, custom-tailored software solutions. Specialize in Python for unique technical challenges, from automating workflows to developing data pipelines and backend systems. Designed and deployed AI-powered chatbots for Discord platforms, tailored to client-specific use cases. Provide one-on-one consulting delivering scalable solutions in database architecture, API integration, automation, and intelligent agents.
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              </>
            )}






          </Timeline>
        </ContentGrid>

        <motion.div
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Education</SectionTitle>
            <SectionSubtitle>
              Academic achievements and educational background
            </SectionSubtitle>
          </SectionHeader>

          <Timeline style={{ maxWidth: '800px', margin: '0 auto' }}>
            <TimelineTitle>Academic Journey</TimelineTitle>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>Post Graduate Program</TimelineYear>
                <TimelineItemTitle>AI & ML: Business Applications - University of Texas at Austin</TimelineItemTitle>
                <TimelineDescription>
                  Business Applications focus, Austin, TX
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2020 - 2022</TimelineYear>
                <TimelineItemTitle>M.S. Computer Science - Lamar University, Beaumont, TX</TimelineItemTitle>
                <TimelineDescription>
                  4.00 GPA, Rank 1, published thesis, specializing in algorithms and software engineering. Graduate Assistant, President's List every semester. <AchievementHighlight>Outstanding Graduate Student of the Year - name permanently engraved on plaque in Computer Science Department display case.</AchievementHighlight>
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2016 - 2020</TimelineYear>
                <TimelineItemTitle>B.S. Computer Science - Lamar University, Beaumont, TX</TimelineItemTitle>
                <TimelineDescription>
                  Bachelor's degree in Computer Science. President's List and Dean's List awards, active member of Lamar ACM, and tutored fellow students in programming and computer science concepts.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
