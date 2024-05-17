import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className=" mx-auto bg-white shadow-lg shadow-slate-400 rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const AboutCard = () => {
  const cardData = [
    {
      title: "Passion and Academic Background",
      description: "I have always been deeply passionate about coding and exploring new technologies. Recently, I completed a course on web development and am currently immersed in learning the famous backend technology. As a dedicated learner, I find joy in the ever-evolving world of software engineering."
    },
    {
      title: "Interests and Hobbies",
      description: "Beyond my academic pursuits, I have a few hobbies that bring balance to my life. I enjoy travelling, cooking, photography, shopping, and indulging in video games during my leisure time."
    },
    // {
    //   title: "Weakness",
    //   description: "However, I must admit that one of my weaknesses is not consistently engaging in regular exercise. It's an area I'm working on to enhance my overall well-being."
    // },
    // {
    //   title: "Limitations",
    //   description: "Another limitation I have is my inability to travel long distances. Although it may limit my physical mobility, it doesn't hinder my passion for knowledge and technology."
    // },
    {
      title: "Interests in National Affairs and Politics",
      description: "On the non-technical side, I have a keen interest in national affairs, politics, and geopolitics. Staying informed about the world around me is something I value greatly."
    },
    {
      title: "Values",
      description: "In terms of values, my deep connection with the Islamic religion is a significant part of my identity. I aspire to contribute to the field of Islamic studies and am considering pursuing higher education in this area."
    },
    {
      title: "Career Aspirations",
      description: "Looking ahead, my goal is to participate in the technological landscape through internships and eventually secure a position where I can contribute my skills and knowledge to innovative projects."
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} description={data.description} />
      ))}
    </div>
  );
};

export default AboutCard;
