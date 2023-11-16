
import Frontend from "../assets/images/web-development.svg";
import Backend from "../assets/images/web-development 1.svg";
import Productdesign from "../assets/images/frontend.svg";
import Feature1 from "../assets/images/featured-one.svg";
import Feature2 from "../assets/images/featured-two.svg";
import Feature3 from "../assets/images/featured-three.svg";
import { 
  backend, 
  businessBook, 
  cleanCode, 
  emotionalPic, 
  frontendBook, 
  mentor1, 
  mentor2, 
  mentor3, 
  product, 
  selfDiscipline, 
  softwareBook, 
  time, 
  webdev 
} from "../assets";


const data =[
  {
  'image': Frontend,
  'title':'Frontend Development',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'by Adedapo Opemipo',
  'featureimg': Feature1,
  'rating': 5
  },
  {
  'image': Backend,
  'title':'Backend Development',
    'materialtitle':'Frontend Dev Interview FAQs',
  'author':'by Adedapo Opemipo',
  'featureimg': Feature2,
    'rating': 3.5

  },
  {
  'image': Productdesign,
  'title':'Product design(UI/UX)',
    'materialtitle':'Backend Dev Interview FAQs',
  'author':'by Adedapo Opemipo',
  'featureimg': Feature3,
    'rating': 4
  }
]

const softSkillData =[
  {
   'image': emotionalPic,
   'title':'Emotional Intelligence',
   'materialtitle':'Build your Mental Ability',
   'author':'by Sandra Igwe',
   'featureimg': Feature1,
   'rating': 5
  },
  {
   'image': time,
   'title':'Time Management',
    'materialtitle':'Treasure of Time',
   'author':'by Christabel Hokkins',
   'featureimg': Feature2,
    'rating': 3.5
  
  }
]

const booksData = [
  {
    'image': softwareBook,
    'field': 'Software Engineering',
    'author': 'by Ian Summervile'
  },
  {
    'image': backend,
    'field': 'Backend Development',
    'author': 'by Daniels Smithsonian'
  },
  {
    'image': frontendBook,
    'field': 'Frontend Development',
    'author': 'by Jack Lawson'
  },
  {
    'image': product,
    'field': 'Product Design',
    'author': 'by Dolce Daniels'
  },
  {
    'image': selfDiscipline,
    'field': 'Habits',
    'author': 'by Hassan Javid'
  }
  
] 

const completedBooks = [
  {
    'image': businessBook,
    'title': 'She Mean Business',
    'author': 'by Carrie Green'
  },
  {
    'image': cleanCode,
    'title': 'Clean Code',
    'author': 'by Robert C Martin'
  },
  {
    'image': webdev,
    'title': 'Web Development By Beginners',
    'author': 'by White Belt Mastery'
  },

]

const progressData = [
  {
      'count': 4,
      'name': 'Courses'
  },
  {
      'count': 1,
      'name': 'Completed'
  },
  {
      'count': 1,
      'name': 'Certificates'
  },
  {
      'count': 2,
      'name': 'Applications'
  },
  {
      'count': 0,
      'name': 'Jobs'
  }
]

const mentors = [
  {
  'image': mentor3,
  'title':'Frontend Development',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Adedapo Opemipo',
  'featureimg': mentor3,
  'rating': 5
  },
  {
  'image': mentor2,
  'title':'Mobile App Development',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Mabel Adaeze',
  'featureimg': mentor2,
  'rating': 5
  },
  {
  'image': mentor1,
  'title':'Product Design',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Betty Bakare',
  'featureimg': mentor1,
  'rating': 5
  },
  {
  'image': mentor2,
  'title':'Data Analysis',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Adedapo Opemipo',
  'featureimg': mentor2,
  'rating': 5
  },
  {
  'image': mentor3,
  'title':'CyberSecurity',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Shawn Louis',
  'featureimg': mentor3,
  'rating': 5
  },
  {
  'image': mentor2,
  'title':'Data Analysis',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Adedapo Opemipo',
  'featureimg': mentor2,
  'rating': 5
  },
  {
  'image': mentor1,
  'title':'Product Design',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Betty Bakare',
  'featureimg': mentor1,
  'rating': 5
  },
  {
  'image': mentor3,
  'title':'CyberSecurity',
  'materialtitle':'Software Dev Interview FAQs',
  'author':'Shawn Louis',
  'featureimg': mentor3,
  'rating': 5
  },
]

export { progressData, data, softSkillData, booksData, completedBooks, mentors };


