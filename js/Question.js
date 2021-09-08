class Question {

  constructor() {

    this.greeting = createElement("h2");

    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    
   //Create a input box to enter the number

   this.number = createElement('h1')
   this.input2 = createInput("Enter Your Number Here....");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)

    this.question = createElement('h3');
    this.question1 = createElement('h4');
    this.question2 = createElement('h4');
    this.question3 = createElement('h4');
    this.question4 = createElement('h4');
    this.input = createElement('h2');
    

    this.message = createElement("h2")

    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.number.hide();
    this.input2.hide();
    this.message.hide();
    this.greeting.hide();
    //Add hide() for questions, options & input box


    
  


  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What start and end with the letter 'E', but has only one latter ?");
    this.question.position(150,70);

    this.question1.html("1: Everyone");
    this.question1.position(150,100);

    this.question2.html("2: Envelope");
    this.question2.position(150,120);

    this.question3.html("3: Estimate");
    this.question3.position(150,140);

    this.question4.html("4: Example");
    this.question4.position(150,160);

    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(350, 230);
    this.greeting.position(270, 320);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      var message = `
      </br>Thank You, Your Answer Has Been Submitted`;
      this.greeting.html(message);
      this.input.name = this.input.value();
    })


  }
  
}