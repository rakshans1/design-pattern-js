/*
Interviewer interface

askQuestions()
*/

class Developer {
  askQuestions() {
      console.log('Ask about design patterns!');
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log('Asking about community building')
  }
}

// Now let us create our HiringManager

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// Now any child can extend it and provide the required interviewer

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer()
  }
}

class Marketingmanager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

// and then it can be used as
const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new Marketingmanager();
marketingManager.takeInterview();