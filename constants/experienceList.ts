import { ExperienceType } from '@/types/experience'

export const EXPERIENCE_LIST: ExperienceType[] = [
  {
    company: 'Ocean Ring Technologies',
    companyWebsite: 'https://oceanringtech.com/',
    companyLocation: 'Pennsylvania, USA',
    companyType: 'Software solutions company, B2B',
    role: 'Frontend Developer',
    dateFrom: 'APR 2020',
    responsibilities: [
      {
        text: 'Develop and maintain WordPress and Next.js websites to boost functionality and engagement.',
      },
      {
        text: 'Foster clear team communication to meet project goals, employ agile methods for efficient development.',
      },
    ],
    accomplishments: [
      {
        text: 'Significantly enhanced website performance and user satisfaction across multiple projects.',
      },
    ],
    mainTechStack: [
      { text: 'React.js' },
      { text: 'Next.js' },
      { text: 'WordPress' },
    ],
    current: true,
  },
  {
    company: 'Slang',
    companyWebsite: 'https://slangapp.com/',
    companyLocation: 'Boston, USA',
    companyType: 'Ed-tech, B2B2C',
    role: 'Growth Engineer',
    dateFrom: 'AGO 2022',
    dateTo: 'FEB 2024',
    responsibilities: [
      {
        text: 'Partner with Marketing to launch initiatives, providing essential analytical and technical insights.',
      },
      {
        text: 'Support the Sales team with tool management, troubleshooting, and the development of new analytics features.',
      },
      {
        text: 'Author essential documentation for the Growth department.',
      },
      {
        text: 'Manage self-directed tasks for over 20 Marketing pages, focusing on revamping the company-wide email structure and design to uphold pixel-perfect standards.',
      },
      {
        text: "Contribute to the development of the company's 2024 OKRs, ensuring growth strategies align with business goals.",
      },
      {
        text: 'Engage in projects aimed at enhancing the overall site UI/UX and performance, aiming to improve the Quality Score of campaigns.',
      },
      {
        text: "Update functionality and design, executing deployments to refresh the content of the company's blog.",
      },
    ],
    accomplishments: [
      {
        text: 'Founded and customized the Growth department to meet organizational needs.',
      },
      {
        text: "Led an 'Engineering for Non-Engineers' workshop, demystifying technical concepts and processes, and provided the team with reference materials and a technical glossary.",
      },
      {
        text: "Significantly improved the website's Homepage SEO score from around 70 to over 90.",
      },
      {
        text: 'Created a Feature Request Guide for the Marketing and Sales teams to streamline project handling processes.',
      },
      {
        text: "Developed a logic for creating landing pages with forms integrated with Salesforce, reducing dependency on Instapage, saving costs, and leveraging the website's analytics tools and performance.",
      },
    ],
    mainTechStack: [
      { text: 'React.js' },
      { text: 'TypeScript' },
      { text: 'Ruby on Rails' },
    ],
  },
  {
    company: 'Hexos Renewals',
    companyWebsite: 'https://hexosip.com/',
    companyLocation: 'North Carolina, USA',
    companyType: 'E-commerce, B2C',
    role: 'Frontend Developer',
    dateFrom: 'DEC 2021',
    dateTo: 'JUL 2022',
    responsibilities: [
      {
        text: 'Maintain, troubleshoot, and innovate with Svelte and Firebase for feature development.',
      },
      {
        text: 'Promote collaborative problem-solving and knowledge sharing through pair programming.',
      },
      {
        text: 'Apply self-management for task prioritization and agile workflow contribution.',
      },
    ],
    accomplishments: [
      {
        text: 'Pioneered solutions that closed technology gaps, enhancing user experience and boosting customer retention and satisfaction.',
      },
    ],
    mainTechStack: [{ text: 'Svelte' }, { text: 'Firebase' }],
  },
  {
    company: 'MediLine',
    companyWebsite: 'https://mediline.com.ar/',
    companyLocation: 'Mendoza, Argentina',
    companyType: 'Healthcare, B2C',
    role: 'Frontend Developer',
    dateFrom: 'NOV 2020',
    dateTo: 'DEC 2021',
    responsibilities: [
      {
        text: 'Lead React.js web development to ensure a responsive and user-friendly interface.',
      },
      {
        text: 'Focus on enhancing the mobile UI with React Native.',
      },
      {
        text: 'Provide mentorship and lead the UI website project, guiding the team to adhere to best practices.',
      },
    ],
    accomplishments: [
      {
        text: 'Established a stringent code review process, markedly reducing deployment errors and bolstering code reliability.',
      },
    ],
    mainTechStack: [{ text: 'React.js' }, { text: 'React Native' }],
  },
  {
    company: 'Vaypol',
    companyWebsite: 'https://www.vaypol.com.ar/',
    companyLocation: 'Mendoza, Argentina',
    companyType: 'E-commerce, B2C',
    role: 'Fullstack Developer',
    dateFrom: 'APR 2019',
    dateTo: 'OCT 2020',
    responsibilities: [
      {
        text: 'Refactor the frontend with React (Redux + Hooks) and Semantic-UI to boost user experience and responsiveness.',
      },
      {
        text: 'Oversee and manage project instances via AWS (EC2, ELB, CloudWatch, S3) and Sentry to ensure high availability and performance.',
      },
      {
        text: 'Implement Scrum with Jira for agile task management and enhance team coordination.',
      },
      {
        text: 'Install and configure Digital Marketing tools like Facebook Pixel and Google gtag.js to increase visibilit.y',
      },
      {
        text: 'Develop HTML email templates and manage SMTP settings for optimized email campaigns.',
      },
      {
        text: 'Conduct competitor analysis to refine website usability and the customer journey.',
      },
    ],
    accomplishments: [
      {
        text: 'Enhanced online presence and sales through the integration of Schema.org and Facebook Pixel.',
      },
      {
        text: 'Achieved a 100% SEO score on the Homepage, boosting search visibility.',
      },
      {
        text: "Improved UX with targeted design changes based on Hotjar's user behavior analysis.",
      },
    ],
    mainTechStack: [{ text: 'React.js' }, { text: 'Ruby on Rails' }],
  },
]
