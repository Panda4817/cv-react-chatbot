let greetings = ["hello", "hi", "good morning", "good evening", "good afternoon", "morning", "hey", "yo", "salutations", "options", "help", "back"]

// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        for(let i=0, len=greetings.length; i<len; i++) {
            if (lowerCaseMessage.includes(greetings[i])) {
                this.actionProvider.greet()
            }
        }
        
        if (lowerCaseMessage.includes("education")){
            this.actionProvider.handleEducationList();
        }
        if (lowerCaseMessage.includes("links")){
            this.actionProvider.handleLinksList();
        }
        if (lowerCaseMessage.includes("employment")){
            this.actionProvider.handleEmploymentList();
        }
        if (lowerCaseMessage.includes("courses")){
            this.actionProvider.handleCoursesList();
        }
        if (lowerCaseMessage.includes("technical skills")){
            this.actionProvider.handleTechnicalSkills();
        }
        if (lowerCaseMessage.includes("summary")){
            this.actionProvider.handleSummary();
        }
        
       
    }
  }
  
  export default MessageParser;