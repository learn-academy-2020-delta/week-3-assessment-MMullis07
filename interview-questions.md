# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Destructuring an object is when you take your objects established that will normally require them to be typed as "this.state.variableName" and set it so you can drop the this.state  and simply use the variable name. It is done as such  let { variableName } = this.state 

  Researched answer: Destructuring is a way of extracting data stored in objects and arrays into a variable. It allows to keep track of your objects and probs a lot easier when you have multiple components and files that you can use them on.
  

2. What are React lifecycle methods? Provide three examples.

  Your answer: Each component in React has a lifecycle. This lifecycle has three phases: mounting, updating, and unmounting.

  Researched answer: Mounting is when you initially upload a component to React DOM. Updating is whenever a component is updated. These updates must happen to the component's 'state' or 'props'. Finally, unmounting is when a component is removed from the DOM. This is not with React's one and only built-in method 'componentWillUnmount()'.



3. What is the difference between a class and an object?

  Your answer: A class is a blueprint from which you can create the instance (objects). An object is the instance of class and allows us to use variable and mathonds within the class.

  Researched answer:
  Class: The blueprint where you can create the instance. They can be used to bind data as well as methods together. They only need to be declared once.

  Objects: An instance of a class that helps programmers use variables and mathods from inside the class. Act as a varialbe of the class. They take memory once created. They can be declared several times if needed.



4. What is the difference between a HTML div and a span?

  Your answer: The div creates a html container or section. Any code that falls within the div tag will be nestled inside a container that can easily be stylized, moved, resized and more by simply addressing the div tag. A span is an inline tag you would use on say a section of text to stylize or modify just that portion of the text.

  Researched answer: The span element is in-line and used for a small section of HTML inside a line of text. The div element is block-line which means have a line break before and after the container it creates. It helps group larger chunks of code into easily manageable sections.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: React.Fragment is used to group a chunk of code withing a class of React. 

  Researched answer: React fragments all you group a list of children components without adding any extra nodes to the DOM because they are not rendered to the DOM. It us used to return multiple elements, conditional rendering, and rendering arrays.



6. What are three options for creating responsive design?

  Your answer: Three options to create response design, 1) media queries to make the site adapt to screen size. 2) CSS flex box so things that were next to each other, stack when on a smaller screen, and 3) Having a navabar that hides to a collapsable navbar on smaller screen.

  Researched answer: One of the ways to make a responsive design is to set your viewport to equal the width of the device loading the page. It helps establish the initial dimensions for scaling purposes. You can also use the width and max-width property on images so that they are scalable without exceeding a certain size (say 100% of their original size). Some more advance sites will also either remove an image completely or replace it with a different image depending on the screen size.


7. What are props in React?

  Your answer: Props are objects/arguments passed to React components and use HTML like syntax

  Researched answer: In React props are similar to function arguments. They are also used to pass data from one component to another as parameters. They should always be passed to the constructor through the super() method.



8. What is `this` in JavaScript?

  Your answer: Refers to the object it belongs to. 

  Researched answer: In JavaScript 'this' is determined by how a function is called. It cannot be set by assignment during execution and it very well could be different each time the function is called. 



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: A ternary operator in JavaScript is a more streamlined way to do if/else statements utilizing the ? to check if the condition is met. Then you input the result if met followed by a ":" which is the "else" portion. Finally you end it with the "else" result.

  Researched answer: The ternary operator is the ONLY JS operator that takes three operands. 1) A condition followed by a question mark, 2) then the expression to execute if the condition is truthy followed a colon, finally 3) the expression to execute if it is falsy. Often used as shorthand if/else statements.



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A function without a name. It will still behave as a function normally would just with its own declared name for callback purposes.

  Researched answer: Anonymous functions are functions stored in variables so they do not require a name. They are instead invoked using the variables name rather than their own.



## Looking Ahead: Terms for Next Week
- Ruby: A dynamic, open source programming language with a focus on simplicity and productivity. It is easy to read and write. The creator Yukihiro "Matz" Matsumoto blended parts of Perl, Smalltalk, Eiffel, Ada, and Lips to form Ruby. An encouraging for us new students tidbit, he goes on to say "Ruby is simple in appearance, but is very complex inside, just like our human body". 

- Object oriented programming- A computer programming model that organizes software design around data or objects, not so much functions and logic.

- RSpec- RSpec is a unit test framework for Ruby. It is different than other xUnit frameworks because it is behavior driven development tool. Tests written in RSpec focuses on the behavior of an application. It does not care about how it works only how it behaves. 

- Instance variable- In Ruby instance variables has a name that begins with @. It's scope is confined to whatever object it refers to. They do not require a declaration. This allows them to be flexible and dynamic. 

- Ruby blocks- Ruby blocks are a way of grouping statements, and will only appear only in the source connected to the method call. It is written on the same line as the method call's last parameter. 

- Ruby hashes- Ruby hashes are a collection of *drum roll please* KEY-VALUE pairs (those things are every where!). An example in Ruby looks like: "employee" => "salary". Indexing through a a hash is done via arbitrary keys of an object type NOT an integer index. 

- `getter` and `setter` methods in Ruby
getter: Are used to GET (git it?) the value of an instance variable.

setter: Used to SET the value of of an instance variable of some class.

PERSONAL STRETCH!!

Accessor methods: their purpose is the same as that of a getter or setter
There are three types:
1) attr_reader: This generates the automatic Getter method of the given item

2) attr_writer: Generates the automatic Setter method for the given item

3) attr_accessor: Generates automatic GETTER && SETTER method for the given item.
