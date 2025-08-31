import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: #f8f9fa;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: #1a1a1a;
  font-size: 1rem;
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const SkillProgress = styled(motion.div) <{ width: number }>`
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  width: ${props => props.width}%;
  min-width: 0;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const AdditionalSkills = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillTag = styled(motion.span)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`;

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "AI/ML & Computer Vision",
      icon: "🤖",
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "Detectron2", level: 95 },
        { name: "Segment Anything (SAM)", level: 90 },
        { name: "GroundingDino", level: 80 },
        { name: "HuggingFace", level: 95 },
        { name: "CUDA", level: 90 }
      ]
    },
    {
      title: "Backend & Languages",
      icon: "⚙️",
      skills: [
        { name: "Java 8-22", level: 100 },
        { name: "Python 2-3.12", level: 100 },
        { name: "Spring Boot", level: 90 },
        { name: "FastAPI", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "C# ASP.NET", level: 80 },
        { name: "C++", level: 75 },
        { name: "Golang", level: 75 },
      ]
    },
    {
      title: "Frontend & Cloud",
      icon: "☁️",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "AWS", level: 95 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 80 },
        { name: "Github/Gitlab VCS", level: 100 },
        { name: "CI/CD", level: 90 }
      ]
    }
  ];

  const additionalSkills = [
    "Git & GitHub", "CI/CD", "Testing (Jest, Cypress)", "Agile/Scrum",
    "System Design", "Algorithms", "Data Structures", "Machine Learning",
    "Microservices", "Performance Optimization", "Security Best Practices",
    "Code Review", "Technical Writing", "Mentoring", "Computer Vision",
    "LLMs", "RAG Systems", "Elasticsearch", "Kafka", "MongoDB", "PostgreSQL",
    "MySQL", "Snowflake", "Jenkins", "Bash", "Linux", "Swagger", "Postman"
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Technical Skills</SectionTitle>
          <SectionSubtitle>
            A comprehensive overview of my technical expertise and proficiency levels
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
            >
              <SkillIcon>{category.icon}</SkillIcon>
              <CategoryTitle>{category.title}</CategoryTitle>

              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skill.name}>
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <SkillBar>
                    <SkillProgress
                      width={skill.level}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + (0.1 * skillIndex) }}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>

        <AdditionalSkills
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CategoryTitle>Additional Skills & Tools</CategoryTitle>
          <SkillsList>
            {additionalSkills.map((skill, index) => (
              <SkillTag
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + (0.05 * index) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsList>
        </AdditionalSkills>


      </Container>
    </SkillsSection>
  );
};

export default Skills;
