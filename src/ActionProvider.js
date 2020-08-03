// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, What do you want know about K Munton?", 
        {
          widget: "CvOptions"
        }
      );
      this.updateChatbotState(greetingMessage)
    }

    handleLinksList = () => {
      const message = this.createChatBotMessage(
        "Here are links to my portfolio, GitHub, CodePen and Linkedin.",
        {
          widget: "LinksLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleCoursesList = () => {
      const message = this.createChatBotMessage(
        "Courses Completed: Harvard University - CS50 Introduction to Computer Science and Web Programming in Python and JavaScript, FreeCodeCamp - Responsive Web Design, JavaScript Algorithms and Data Structures, Front End Libraries",
        {
          widget: "CoursesLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleEmploymentList = () => {
      const message = this.createChatBotMessage(
        "2018-present: Teacher at Next Thing Education. 2014-2018: Science Teacher at Tunbridge Wells Grammar School for Boys.",
        {
          widget: "EmploymentLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleEducationList = () => {
      const message = this.createChatBotMessage(
        "2013-2014: PGCE Secondary Science with Biology at University of Cambridge. 2010-2013: BSc (Hons) 2:1 Biological Science at University of Leicester. 2005-2010:  3 A levels (Maths, Biology and Chemistry) AAB and 9 GCSEs A*-Bs at Maidstone Grammar School for Girls",
        {
          widget: "EducationLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleTechnicalSkills = () => {
      const message = this.createChatBotMessage(
        "Python, JavaScript, Django, Flask, React, jQuery, Bash, HTML, CSS, Sass, Bootstrap 4, Git, VS Code, Travis CI, SQL, SQLite, PostgreSQL, Learned about Docker",
      );
  
      this.updateChatbotState(message);
    };

    handleSummary = () => {
       const message = this.createChatBotMessage(
         "Teaching computer science to children sparked my own enthusiasm for coding. CS50's introduction to computer science and web programming courses took me through an application’s life cycle of designing, developing ideas, building, testing and deploying. The best aspects of programming I think are problem-solving and technical creativity. Teaching for the past 6 years involved creativity when delivering new material and analysing information to evaluate teaching styles. I am hardworking and a fast learner; in the last few months I have learnt Python, JavaScript and various tools and frameworks. I am passionate about this career change so I am developing and learning new skills everyday. I will also bring excellent interpersonal and communication skills to my new career as a developer."
       );
       this.updateChatbotState(message);
    }
      
    updateChatbotState(message) {
     
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here
    // actually manipulates the top level state of the Chatbot, so it's
    // important that we make sure that we preserve the previous state.
     
        
      this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
}
  
  export default ActionProvider;