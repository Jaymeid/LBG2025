import { Main } from "../../components/styled/Main.styled";
import {
  StyledCareerImage,
  StyledHeaderContainer,
  StyledJobContainer,
  StyledJobDescription,
  StyledJobsRow,
  StyledJobTitle,
  StyledSectionHeader,
} from "./CareersPage.styled";
import earlyCareersImage from "../../assets/earlyCareers.jpg";

const earlyCareerJobs = [
  {
    jobTitle: "Software Engineering Intern",
    jobDescription:
      "Gain hands-on experience developing real-world applications and collaborating with senior engineers.",
  },
  {
    jobTitle: "Marketing Assistant",
    jobDescription:
      "Support the marketing team in campaign execution, social media management, and content creation.",
  },
  {
    jobTitle: "Junior Data Analyst",
    jobDescription:
      "Analyze datasets, create visualizations, and assist in deriving insights to guide business decisions.",
  },
  {
    jobTitle: "Customer Support Representative",
    jobDescription:
      "Act as the first point of contact for customers, resolving issues and providing excellent service.",
  },
];

const midLevelJobs = [
  {
    jobTitle: "Project Manager",
    jobDescription:
      "Oversee project timelines, manage cross-functional teams, and ensure successful delivery of client objectives.",
  },
  {
    jobTitle: "Software Engineer",
    jobDescription:
      "Design, build, and maintain scalable software systems while contributing to code reviews and technical decisions.",
  },
  {
    jobTitle: "Marketing Strategist",
    jobDescription:
      "Develop and implement data-driven marketing strategies to drive brand awareness and customer engagement.",
  },
  {
    jobTitle: "Operations Analyst",
    jobDescription:
      "Optimize internal processes, analyze performance metrics, and support strategic operational improvements.",
  },
];

const seniorLevelJobs = [
  {
    jobTitle: "Senior Software Architect",
    jobDescription:
      "Lead the design of complex software systems, set engineering standards, and mentor development teams.",
  },
  {
    jobTitle: "Director of Marketing",
    jobDescription:
      "Oversee company-wide marketing strategy, manage department leads, and drive brand growth at scale.",
  },
  {
    jobTitle: "Head of Product",
    jobDescription:
      "Define product vision and strategy, align teams around roadmaps, and ensure market success through execution.",
  },
  {
    jobTitle: "Chief Financial Officer (CFO)",
    jobDescription:
      "Lead financial planning and risk management, provide executive-level insights, and guide long-term fiscal strategy.",
  },
];

export default function CareersPage() {
  return (
    <Main>
      <StyledHeaderContainer>
        <StyledSectionHeader>Early Careers</StyledSectionHeader>
      </StyledHeaderContainer>
      <StyledJobsRow>
        {earlyCareerJobs.map((item) => (
          <StyledJobContainer>
            <StyledCareerImage src={earlyCareersImage} />
            <StyledJobTitle>{item.jobTitle}</StyledJobTitle>
            <StyledJobDescription>{item.jobDescription}</StyledJobDescription>
          </StyledJobContainer>
        ))}
      </StyledJobsRow>

      <StyledHeaderContainer>
        <StyledSectionHeader>Mid Level Careers</StyledSectionHeader>
      </StyledHeaderContainer>
      <StyledJobsRow>
        {midLevelJobs.map((item) => (
          <StyledJobContainer>
            <StyledCareerImage src={earlyCareersImage} />
            <StyledJobTitle>{item.jobTitle}</StyledJobTitle>
            <StyledJobDescription>{item.jobDescription}</StyledJobDescription>
          </StyledJobContainer>
        ))}
      </StyledJobsRow>

      <StyledHeaderContainer>
        <StyledSectionHeader>Senior Level Careers</StyledSectionHeader>
      </StyledHeaderContainer>
      <StyledJobsRow>
        {seniorLevelJobs.map((item) => (
          <StyledJobContainer>
            <StyledCareerImage src={earlyCareersImage} />
            <StyledJobTitle>{item.jobTitle}</StyledJobTitle>
            <StyledJobDescription>{item.jobDescription}</StyledJobDescription>
          </StyledJobContainer>
        ))}
      </StyledJobsRow>
    </Main>
  );
}
