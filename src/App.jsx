import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg'; // 使用require或import导入图片
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';

import img_github from './assets/github.svg';
import img_twitter from './assets/twitter.svg';
import img_csdn from './assets/csdn.svg';
import img_google_scholar from './assets/googleScholar.svg';

import pdf1 from './assets/pdf1_sv.pdf'
import pdf2 from './assets/pdf2.pdf'
import cv from './assets/Ying_Xu_CV.pdf'

import design1 from './assets/design1.png'
import design2 from './assets/design2.png'
import design3 from './assets/design3.png'
//import { Link } from 'react-router-dom';



function App() {
  // 示例数据，你需要替换成自己的信息
  const personalInfo = {
    name: 'Ying Xu',
    contact: 'yingxu@whut.edu.cn',
    location: 'Wuhan, China',
    school: 'Wuhan University of Technology',
    twitter: 'https://twitter.com/Koifish2022',
    googleScholar: cv,
    // slogan: 'A butterfly seeking freedom and uniqueness.',
    // github: 'https://github.com/YingXu-Koi',
    // csdn: 'https://blog.csdn.net/xxx',

  };

  const educations = [
    'Master of Philosophy in Industrial Design and Theory, Wuhan University of Technology, 2019.9-2023.6',
    'Bachelor of Engineering in Industrial Design, Wuhan University of Technology, 2015.9-2019.6'
  ];

  const educations2 = [
    'Research Internship in Human-Computer Interaction, Institute for AI Industry Research, Tsinghua University 2021.10-2022.4',
    'Certificate in Fashion Image Retrieval and Editing via Dialog, DeeCamp 2021 AI Training Camp, Sinovation Ventures, 2021.6-2021.8'
  ];

  const honors = [
    '2015-2016 Chinese National Scholarship, the highest level scholarship established by the central government, Rank 1st in Major',
    '2015-2016 Pacemaker to Merit Student, Wuhan University of Technology, the highest honor (top 0.1%)',
    '2015、2016 Advanced Individual who has won "Diligence and Studious"',
    '2018 Outstanding Student Cadre',
    '2019 Outstanding Graduate',
    '2019 Qualified as a Postgraduate Candidate Exempt from the National Admission Exam, Rank 2nd in Major',
    '2020 First Class Scholarship for Academic Excellence',
    '2021 Third Class Scholarship for Academic Excellence',
    "2023 Outstanding Master's Thesis",
  ];

  const awards = [
    '2019 Zhimei Scholarship, Hubei Province Artists Association',
    '2020 Selected Certificate, E+ Smart Medical Service System Design, China Knowledge Center for Engineering Science and Technology',
    '2021 Second Prize, Baidu PaddlePaddle x Wechaty AI Chatbot Creativity Competition',
  ];

  const academicAchievements = [
    {
      title: "Explore the Future Earth with Wander 2.0: AI Chatbot Driven by Knowledge-base Story Generation and Text-to-Image Model",
      subtitle: "CHI Interactivity'23",
      authors: "Yuqian Sun, Ying Xu, Chenhang Cheng, Yihua Li, Chang Hee Lee, Ail Asadipour",
      image: pic1,
      description: 'We introduce Wander 2.0, an AI chatbot that co-creates sci-fi stories through knowledge-based story generation on daily communication platforms like WeChat and Discord. Using location information from Google Maps, Wander generates narrative travelogues about specific locations (e.g. Paris) through a large-scale language model (LLM). The project also includes a real-time visualization of the Human-AI collaborations on a future map. Through journeys with visitors from all over the world, Wander demonstrates how AI can serve as a subjective interface linking fiction and reality.',
      paperLink: 'https://dl.acm.org/doi/10.1145/3544549.3583931',
      code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
  ];

  const Projects = [
    {
      title: "Research on AI-powered Creativity Support Tools for Product Conceptual Design via Participatory Design",
      subtitle: "2023 Outstanding Master's Thesis.",
      authors:"Supervisor: Zhuo Li, Wuhan University of Technology; Co-supervisor: Jiangtao Gong, Tsinghua University",
      image: pic2,
      description: "Recent advances in Artificial Intelligence (AI), especially Neural-Network-based Generation Models (NNGMs) (e.g., GANs, Diffusion Models), have demonstrated great potential in enhancing the productivity and efficiency in human creative process. Our work aims to articulate the potential of NNGMs in supporting creativity practices in industrial design domain with a case of automotive exterior design. We probed about how design professionals integrated AIs into their current design practice and how they perceived non-perfect AIs by conducting semi-structured interviews and 3 co-design workshops with 22 automotive exterior design professionals. During the workshops, the professionals designed 12 co-creative AI interfaces based on 4 categories of NNGMs (Image Synthesis, Image Editing, Image-to-image Translation, 3D Generation). We concluded by providing design insights for future researchers to develop co-creative interfaces with non-perfect AIs.",
      //paperLink: pdf1,
      // code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
  ];

  const Projects1 = [
    {
      title: "Chat-to-Design: AI-Assisted Personalized Fashion Design.",
      subtitle: "Sinovation Ventures; Institute for AI Industry Research, Tsinghua University",
      authors: "Weiming Zhuang, Chongjie Ye, Ying Xu, Pengzhi Mao, Yonggang Wen",
      image: pic3,
      description: "We develop a multimedia fashion chat-bot for clothes retrival and editing. In particular, we first use NLU to capture the intention from unstructured text queries. Moreover, we employ CLIP to retrieve fashion images from DeepFashion2 dataset and adapt a pre-trained Fashion-Stylegan2 model for latent inversion. As for editing, we train a StyleFlow model to modify the generated cloth according to users’ queries. This project rank the 4st in the Fashion Track of DeeCamp 2021",
      paperLink: pdf2,
      // code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
  ];

  const Projects2 = [
    {
      title: "Explainable Artificial Intelligence in Autonomous Diving.",
      subtitle: "DISCOVER Lab, Institute for AI Industry Research, Tsinghua University",
      image: pic4,
    },
    {
      title: "Key Technologies and Developing Prospects of Vehicle Infrastructure-Coorperated Autonomous Driving (VICAD) 2.0.",
      subtitle: "Apollo, Baidu; Institute for AI Industry Research, Tsinghua University",
      image: pic5,
    },    
    {
      title: "An Educational Game Kit for Children Learning Emotions.",
      subtitle: "DISCOVER Lab, Institute for AI Industry Research, Tsinghua University",
      image: pic6,
    },
  ]

  const Design = [
    {
      title: "E+ Smart Medical Service System Design.",
      subtitle: "2020 Selected Certificate, China Knowledge Center for Engineering Science and Technology",
      image: design1,
    },   
  ]

  const Design1 = [
    {
      title: "Transportation Design",
      subtitle: "2019 Zhimei Scholarship, Hubei Province Artists Association",
      image: design2,
    },    
  ]

  const Activity = [
    {
      title: '2022 Organized and hosted a virtual workshop on "Human-AI Co-creation”',
      subtitle: "Supervised by Zhuohao Wu, Associate Professor, Communication University of China, and Head of design for Airbnb China",
      image: design3,
    },   
  ]



  const hobbies = [
    'Swimming',
    'Cats',
    'Painting',
    'Baking',
    'Instruments Playing',
    'Language Learning (Germany B1)'
  ];

  const Interests = [
    'Human-Computer Interaction', 'Human-AI Interaction', 'Human-Centered Design', 'Industrial Design', 'Design for Social Good', 'Explainable AI'
  ];




  return (
    <div className='container w-full mx-auto'>
      <div class="flex flex-col md:flex-row gap-4">

        <div class="container basis-1/4 bg-gradient-to-b from-gray-200 rounded-xl flex-col space-y-8 p-4 max-w-sm mx-auto">
          <img  src={avatar} className="mx-auto rounded-3xl shadow-xl" />
          <div>
            <div className="text-2xl font-bold text-teal-400">{personalInfo.name}</div>
            {/* <div className="text-md font-bold text-purple-300 mt-2">{'A butterfly seeking freedom and uniqueness'}</div> */}
          </div>

          <div>
            <h2 className="text-lg font-bold">Basic Info</h2>
            <div>
              <div>{personalInfo.school}</div>
              <div>{personalInfo.location}</div>
              <div>{personalInfo.contact}</div>
              <div className='flex flex-row justify-center mt-4'>
                <a href={personalInfo.googleScholar} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_google_scholar} alt='scholar'/></a>
                <a href={personalInfo.twitter} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_twitter} alt='twitter'/></a>
                {/* <a href={personalInfo.csdn} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_csdn} alt='csdn'/></a> 
                <a href={personalInfo.github} target="_blank"><img className="w-6 h-6 mx-1 hover:shadow-lg" src={img_github} alt='github'/></a>*/}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Research Interests</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Interests.map((hobby, index) => (
                <div className="bg-slate-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>
        
          <div>
            <h2 className="text-lg font-bold">Hobbies</h2>
            <div className='grid grid-cols-2 gap-4'>
              {hobbies.map((hobby, index) => (
                <div className="bg-zinc-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className="text-lg font-bold">Courses</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Courses.map((hobby, index) => (
                <div className=" bg-neutral-300 p-2 rounded-md shadow-xl text-center overflow-hidden hover:bg-primary">{hobby}</div>
              ))}
            </div>
          </div> */}

        </div>

        <div class="container basis-3/4 rounded-xl text-left p-4 space-y-12 bg-gradient-to-b from-gray-100">
          <section className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Education</h2>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[0]}</li>
            <li className='rounded-lg hover:bg-gradient-to-r from-primary'>{educations[1]}</li>
            <div className='text-lg pt-2 pb-1 font-bold'>Research Experience</div>
            {educations2.map((ii, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{ii}</li>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Awards and Honors</h2>
            {honors.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
            <div className='text-lg pt-2 pb-1 font-bold'>Competition Awards</div>
            {awards.map((award, index) => (
              <li key={index} className='rounded-lg hover:bg-gradient-to-r from-primary'>{award}</li>
            ))}
          </section>


          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Selected Publications</h2>
            <div className="grid grid-cols-1 gap-6">
              {academicAchievements.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <a href="http://www.wander001.com/">
                    <h3 className="text-lg hover:underline font-semibold mb-2">{achievement.title}</h3>
                  </a>
                  <p className="text-red-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.authors}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600 text-justify">{achievement.description}</p>
                  <div className='flex justify-center gap-4'>
                    <a
                      href={achievement.paperLink}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      paper link
                    </a>
                    <a
                      href={achievement.code}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      video link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Research and Project Experience</h2>
            <div className="grid grid-cols-1 gap-6">
              {Projects.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <a href="https://academicresearch.notion.site/academicresearch/Research-on-AI-powered-Creativity-Support-Tools-for-Product-Conceptual-Design-via-Participatory-Desi-5698b857b6bd437d93edb0cba99f995a">
                    <h3 className="text-lg hover:underline font-semibold mb-2">{achievement.title}</h3>
                  </a>
                  <p className="text-red-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.authors}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600 text-justify">{achievement.description}</p>
                  <div className='flex justify-center gap-4'>
                  </div>
                </div>
              ))}

              {Projects1.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.authors}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600 text-justify">{achievement.description}</p>
                  <div className='flex justify-center gap-4'>
                    <a
                      href={achievement.paperLink}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pdf link
                    </a>
                  </div>
                </div>
              ))}           
              
              {Projects2.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Design Projects</h2>
            <div className="grid grid-cols-1 gap-6">              
              {Design.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                </div>
              ))}

              {Design1.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <a href="https://academicresearch.notion.site/academicresearch/Transportation-Design-Practice-76b5113ebfb846a4a88ec3cdd7c7e190">
                    <h3 className="text-lg hover:underline font-semibold mb-2">{achievement.title}</h3>
                  </a>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Activity Organized</h2>
            <div className="grid grid-cols-1 gap-6">              
              {Activity.map((achievement, index) => (
                <div key={index} className="card rounded-lg shadow-md p-4 bg-gray-100 hover:bg-gray-300">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{achievement.subtitle}</p>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                </div>
              ))}
            </div>
          </section>


        </div>
      </div>
    </div >
  );
}

export default App;
