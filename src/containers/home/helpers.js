const imageBlock = {
  type: 'photo',
  imageUrl: 'https://cdn.wallpapersafari.com/80/57/pXlSF4.jpg'
}

const contactDetails = [
  {
    id: 'contact-detail-1',
    label: 'Phone: ',
    detail: '+92 300 1234567',
  },
  {
    id: 'contact-detail-2',
    label: 'Email: ',
    detail: 'my-name@gmail.com'
  },
  {
    id: 'contact-detail-3',
    label: 'Web: ',
    detail: 'urlofyourwebsite.com'
  },
  {
    id: 'contact-detail-4',
    label: 'GitHub: ',
    detail: 'https://github.com/user-name'
  },
  {
    id: 'contact-detail-5',
    label: 'LinkedIn: ',
    detail: 'urlofyourlinkedin.com'
  },
];

const bio = {
  type: 'bio',
  name: 'Name Surname',
  designation: 'Your Designation Here',
  headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing…',
  contactDetails,
};

const experienceBlock = {
  type: 'experience',
  backgroundExperience: false,
};

const experienceDetails = [
  {
    id: 'experience-detail-1',
    startingYear: '2017',
    endingYear: 'Present',
    designation: 'Senior Software Engineer',
    companyName: 'Facebook Inc',
  },
  {
    id: 'experience-detail-2',
    startingYear: '2014',
    endingYear: '2017',
    designation: 'Mid Software Engineer',
    companyName: 'Google Inc',
  },
  {
    id: 'experience-detail-3',
    startingYear: '2011',
    endingYear: '2014',
    designation: 'Junior Software Engineer',
    companyName: 'Microsoft Corporation',
  },
  {
    id: 'experience-detail-4',
    startingYear: '2011',
    endingYear: '2014',
    designation: 'Junior Software Engineer',
    companyName: 'Microsoft Corporation',
  },
];

const experienceBlockDetails = {
  type: 'experienceDetails',
  backgroundExperienceDetails: true,
  experienceDetails,
};

const educationBlock = {
  type: 'education',
  backgroundEducation: true,
};

const educationDetails = [
  {
    id: 'education-detail-1',
    startingYear: '2014',
    endingYear: '2012',
    designation: 'Masters',
    companyName: 'University Name',
  },
  {
    id: 'education-detail-2',
    startingYear: '2012',
    endingYear: '2008',
    designation: 'Bachelors',
    companyName: 'University Name',
  },
  {
    id: 'education-detail-3',
    startingYear: '2008',
    endingYear: '2006',
    designation: 'Intermediate',
    companyName: 'Institute Name',
  },
  {
    id: 'education-detail-4',
    startingYear: '2008',
    endingYear: '2006',
    designation: 'Intermediate',
    companyName: 'Institute Name',
  },
];

const educationBlockDetails = {
  type: 'educationDetails',
  backgroundEducationDetails: false,
  educationDetails,
};

const skillsBlock = {
  type: 'skills',
  backgroundSkills: false,
};

const skillsDetails = [
  {
    id: 'skills-detail-1',
    label: 'HTML5',
    rating: 3,
  },
  {
    id: 'skills-detail-2',
    label: 'CSS',
    rating: 2,
  },
  {
    id: 'skills-detail-3',
    label: 'JavaScript',
    rating: 1,
  },
  {
    id: 'skills-detail-4',
    label: 'React',
    rating: 2,
  },
  {
    id: 'skills-detail-5',
    label: 'Redux',
    rating: 3,
  },
  {
    id: 'skills-detail-6',
    label: 'Thunk',
    rating: 2,
  },
  {
    id: 'skills-detail-7',
    label: 'Saga',
    rating: 2,
  },
  {
    id: 'skills-detail-8',
    label: 'StyledComponents',
    rating: 1,
  },
  {
    id: 'skills-detail-9',
    label: 'HTML5',
    rating: 2,
  },
  {
    id: 'skills-detail-10',
    label: 'HTML5',
    rating: 3,
  },
];

const skillsBlockDetails = {
  type: 'skillsDetails',
  backgroundSkillsDetails: true,
  skillsDetails,
};

export const homeData = [
  imageBlock,
  bio,
  experienceBlock,
  experienceBlockDetails,
  educationBlock,
  educationBlockDetails,
  skillsBlock,
  skillsBlockDetails,
];
