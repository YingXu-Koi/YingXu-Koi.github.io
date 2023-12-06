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
      title: "Explore the Future Earth with Wander 2.0: AI Chatbot Driven by Knowledge-base Story Generation and Text-to-Image Model, CHI Interactivity'23",
      image: pic1,
      description: 'We introduce Wander 2.0, an AI chatbot that co-creates sci-fi stories through knowledge-based story generation on daily communication platforms like WeChat and Discord. Using location information from Google Maps, Wander generates narrative travelogues about specific locations (e.g. Paris) through a large-scale language model (LLM). The project also includes a real-time visualization of the Human-AI collaborations on a future map. Through journeys with visitors from all over the world, Wander demonstrates how AI can serve as a subjective interface linking fiction and reality.',
      paperLink: 'https://dl.acm.org/doi/10.1145/3544549.3583931',
      code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
  ];

  const Projects = [
    {
      title: "Research on AI-powered Creativity Support Tools for Product Conceptual Design via Participatory Design 2023 Outstanding Master's Thesis. Supervisor: Zhuo Li, Wuhan University of Technology. Co-supervisor: Jiangtao Gong, Tsinghua University",
      image: pic2,
      description: "Artificial intelligence technology has advanced significantly in recent years, particularly in generation models based on neural networks (for instance, generation adversarial networks, diffusion models). At the present time, this form of deep learning-based generation model has demonstrated significant promise in supporting designers' creative activities across a variety of domains, and research on the topic of artificial intelligence-generated content (AIGC) has drawn increasing attention. It is one of the important research directions in the academic community to develop intelligent creativity support tools for product conceptual design based on artificial intelligence technology so that they can be more widely applied in the practical work scene in the future and promote the productivity and efficiency of downstream design tasks in more product design fields. In this context, this paper takes automotive exterior design, a typical industrial product design, as an example to articulate the potential, opportunities, and challenges of introducing neural network-based generation models into creative activities in the field of product conceptual design. In this paper, an interdisciplinary research work in design, cognitive psychology, computer science, and other fields, with in-depth research in the aspects of AI-assisted product conceptual design, Human-AI interaction, Human-AI Co-creation, has been conducted.",
      paperLink: pdf1,
      // code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
    {
      title: "Chat-to-Design: AI-Assisted Personalized Fashion Design. Sinovation Ventures (Organised by Kai-Fu Lee) & Institute for AI Industry Research, Tsinghua University",
      image: pic3,
      description: "We develop a multimedia fashion chat-bot for clothes retrival and editing. In particular, we first use NLU to capture the intention from unstructured text queries. Moreover, we employ CLIP to retrieve fashion images from DeepFashion2 dataset and adapt a pre-trained Fashion-Stylegan2 model for latent inversion. As for editing, we train a StyleFlow model to modify the generated cloth according to users’ queries. This project rank the 4st in the Fashion Track of DeeCamp 2021",
      paperLink: pdf2,
      // code: 'https://youtu.be/AdQXv5GswqA?si=OAFq2IyCV-mNVUUz'
    },
  ];

  const Projects2 = [
    {
      title: "Explainable Artificial Intelligence in Autonomous Diving. DISCOVER Lab, Institute for AI Industry Research, Tsinghua University",
      image: pic4,
    },
    {
      title: "Key Technologies and Developing Prospects of Vehicle Infrastructure-Coorperated Autonomous Driving (VICAD) 2.0. Apollo, Baidu & Institute for AI Industry Research, Tsinghua University",
      image: pic5,
    },    
    {
      title: "An Educational Game Kit for Children Learning Emotions. DISCOVER Lab, Institute for AI Industry Research, Tsinghua University",
      image: pic6,
    },
  ]

  const Design = [
    {
      title: "E+ Smart Medical Service System Design. 2020 Selected Certificate, China Knowledge Center for Engineering Science and Technology",
      image: design1,
    },
    {
      title: "Transportation Design. 2019 Zhimei Scholarship, Hubei Province Artists Association",
      image: design2,
    },    
  ]

  const Activity = [
    {
      title: '2022 Organized and hosted a virtual workshop on "Human-AI Co-creation”, Supervised by Zhuohao Wu, Associate Professor, Communication University of China, and Head of design for Airbnb China',
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
            <div className='text-lg pt-2 pb-1 font-bold'>Experience (Gap Year for Research on AI)</div>
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
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600">{achievement.description}</p>
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
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-auto h-auto mb-2 rounded-xl mx-auto"
                  />
                  <p className="text-gray-600">{achievement.description}</p>
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
