// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import CvOptions from "./components/CvOptions/CvOptions";
import LinkList from "./components/LinkList/LinkList";
import KMBotAvatar from "./components/KMBotAvatar/KMBotAvatar";
const config = {
  botName: "KMBot",
  initialMessages: [createChatBotMessage(`Hi, I am KMBot here to tell you all about K Munton, a self-taught programmer. What do you want to know?`, {
      widget: "CvOptions",
    }),  
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#C71585",
    },
    chatButton: {
      backgroundColor: "#C71585",
    },
  },
  customComponents: {
    botAvatar: (props) => <KMBotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "CvOptions",
      widgetFunc: (props) => <CvOptions {...props} />,
    },
    {
      widgetName: "CoursesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "CS50 Intro to CS",
            url:
              "https://online-learning.harvard.edu/course/cs50-introduction-computer-science",
            id: 1,
          },
          {
            text: "CS50 Web Programming in Python and JavaScript",
            url:
              "https://online-learning.harvard.edu/course/cs50s-web-programming-python-and-javascript?delta=0",
            id: 2,
          },
          {
            text: "FreeCodeCamp Courses",
            url:
              "https://www.freecodecamp.org/learn/",
            id: 3,
          },
          {
            text: "FreeCodeCamp Certificates Earned",
            url:
              "https://www.freecodecamp.org/fcce3697de9-18d2-4529-824e-95488d545aa8",
            id: 4,
          },
          {
            text: "CS50 Intro to CS Certificate",
            url:
              "https://certificates.cs50.io/39daab4f-1949-4fa1-ac3e-897f785f03ca.png?size=A4",
            id: 5,
          },
          {
            text: "CS50 Web Programming Certificate",
            url:
              "https://certificates.cs50.io/e303b258-c641-4a19-ada6-d83622bb7d7e.png?size=A4",
            id: 6,
          },
        ]
      }
    },
    {
      widgetName: "LinksLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Portfolio/blog",
            url:
              "https://panda4817.github.io/portfolio/",
            id: 1,
          },
          {
            text: "GitHub",
            url:
              "https://github.com/Panda4817",
            id: 2,
          },
          {
            text: "CodePen",
            url:
              "https://codepen.io/k_munton",
            id: 3,
          },
          {
            text: "Linkedin",
            url:
              "https://www.linkedin.com/in/kmunton/",
            id: 4,
          },
        ]
      }
    },
    {
      widgetName: "EmploymentLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Next Thing Education",
            url:
              "https://nextthing.education/",
            id: 1,
          },
          {
            text: "Tunbridge Wells Grammar School for Boys",
            url:
              "https://www.twgsb.org.uk/",
            id: 2,
          },
        ]
      }
    },
    {
      widgetName: "EducationLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "University of Cambridge PGCE",
            url:
              "https://www.educ.cam.ac.uk/courses/pgce/secondary/",
            id: 1,
          },
          {
            text: "University of Leicester BSc (Hons) Biological Sciences",
            url:
              "https://le.ac.uk/courses/biological-sciences-bsc/2020",
            id: 2,
          },
          {
            text: "Maidstone Grammar School for Girls",
            url:
              "https://www.mggs.org/",
            id: 3,
          },
        ]
      }
    },
  ],
}

export default config