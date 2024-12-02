import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web and mobile applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and React Native, as well as back-end technologies like FastAPI and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = 'In addition to my work, I am pursuing a Master’s degree in Advanced Electric Systems, which complements my passion for technology and problem-solving.\n' +
    '\n' +
    'Outside of work and academics, I lead an active and multifaceted life. As a trail runner and hybrid athlete, I combine trail marathons, calisthenics, and gym workouts to maintain peak physical fitness. I’m also an avid chess player and puzzle enthusiast, enjoying activities that challenge my strategic and analytical thinking.\n' +
    '\n' +
    'I dedicate time to volunteer efforts, organizing events with a student group and teaching mathematics to children as a side hustle, blending my passion for mentoring with earning extra income. When it’s time to unwind, I enjoy watching films and series on Netflix, playing video games, or diving into a good book. I also love hiking, traveling, and cheering at hockey matches, fueling my sense of adventure and community spirit.'

export const EDUCATION = [
  {
    year: "2024 - Present",
    degree: "Master's degree",
    study: "Advanced Electrical Systems",
    description: `Universitatea Transilvania din Brașov`,
  },
  {
    year: "2020 - 2024",
    degree: "Bachelor's degree",
    study: "Electrical Engineering and Computers",
    description: `Universitatea Transilvania din Brașov`,
  },
];
export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Junior Frontend Developer",
    company: "STEEPSOFT AI",
    description: `As a Junior Developer with two years of experience, I have built a solid foundation in front-end development and am expanding my skills to encompass back-end technologies, aiming to transition into a full-stack developer role.

I specialize in creating responsive, user-friendly interfaces using ReactJS, React Native, and Typescript, with an eye for modern design implemented through TailwindCSS. My experience includes mobile app development with Ionic and working collaboratively in version-controlled environments using GitLab.

Recently, I’ve been enhancing my back-end expertise by working with FastAPI and PostgreSQL, enabling me to contribute to building robust and scalable APIs and managing efficient databases. I thrive on learning new technologies and enjoy tackling challenges across the full stack, ensuring seamless integration between the front-end and back-end systems.`,
    technologies: [
      "ReactJS",
      "ReactNative",
      "Typescript",
      "TailwindCSS",
      "FastAPI",
      "PostgreSQL",
      "Gitlab",
    ],
  },
];

export const PROJECTS = [
  {
    title: "BurnsHelp",
    image: project1,
    description:
      "Burnshelp is an app meant for doctors to track their patiens state who have suffered from burns with a sophisticated 3D Model. Responsibilities: Responsible for the frontend of the app. Contributed to the development of Burnshelp, an application designed to assist doctors in monitoring the recovery progress of patients with burn injuries using advanced 3D modeling techniques. Played a pivotal role in the interdisciplinary team responsible for integrating medical expertise with software solutions to enhance patient care and monitoring. Led the development of a sophisticated 3D modeling feature that accurately represents burn-affected areas, facilitating a more comprehensive understanding of patient conditions. Implemented a secure and HIPAA-compliant database to manage patient data, ensuring privacy and confidentiality while enabling real-time updates on patient status. Developed user-friendly interfaces for doctors to input, update, and visualize patient data easily, improving the efficiency of medical consultations and treatment planning.",
    technologies: ["ReactJS", "Typescript", "Ionic", "Gitlab", "TailwindCSS"],
  },
  {
    title: "WakeZ",
    image: project2,
    description:
      "WakeZ is an app where using your mobile phone and a smart watch, the app will monitor and alter the electrical activity of the brain during sleep by inducing subliminal stimuli in the form of vibrations to increase sleep quality. Responsibilities: Responsible for the frontend of the app. Collaborated on the innovative WakeZ project, an app designed to improve sleep quality by modulating brainwave activity through subliminal stimuli, using a combination of mobile devices and smartwatches. Played a key role in the research and development team, focusing on understanding the effects of vibrational stimuli on sleep patterns and brain wave activity. Engineered the core functionality that enabled precise monitoring of users' sleep stages through integration with smartwatch sensors, ensuring accurate data collection for tailored stimuli delivery. Developed the algorithm for inducing optimal subliminal vibrations at specific sleep intervals, aiming to enhance the overall quality of sleep without disrupting the natural sleep cycle. Implemented a feature within the app that allows users to customize the intensity and pattern of vibrations to suit individual comfort and response levels.",
    technologies: [
      "ReactNative",
      "Typescript",
      "FastAPI",
      "PostgreSQL",
      "Expo",
      "Gitlab",
    ],
  },
];
