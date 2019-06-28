import { LOAD_HOME_DATA } from '../constants';

const initialState = {
  homeData: [
    {
      type: '',
      imageUrl: ''
    },
    {
      type: '',
      name: '',
      designation: '',
      headline: '',
      contactDetails: [
        {
          id: '',
          label: '',
          detail: '',
        },
      ],
    },
    {
      type: '',
      backgroundExperience: false,
    },
    {
      type: '',
      backgroundExperienceDetails: true,
      experienceDetails: [
        {
          id: '',
          startingYear: '',
          endingYear: '',
          designation: '',
          companyName: '',
        },
      ],
    },
    {
      type: '',
      backgroundEducation: true,
    },
    {
      type: '',
      backgroundEducationDetails: false,
      educationDetails: [
        {
          id: '',
          startingYear: '',
          endingYear: '',
          designation: '',
          companyName: '',
        },
      ],
    },
    {
      type: '',
      backgroundSkills: false,
    },
    {
      type: '',
      backgroundSkillsDetails: true,
      skillsDetails: [
        {
          id: '',
          label: '',
          rating: 0,
        },
      ],
    },
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_HOME_DATA:
      return { ...state, homeData: action.payload };
    default:
      return state;
  };
};
