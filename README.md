# QUESTION 2:

## List five significant features of React

i. Virtual DOM: React uses a virtual DOM (Document Object Model) which is a lightweight copy of the actual DOM. The virtual DOM is used to determine the changes that need to be made to the actual DOM, and then only those changes are applied. This approach helps to make React's rendering process faster and more efficient.

ii. Component-based architecture: React is designed around the idea of building applications as a collection of reusable components. Each component in React represents a specific part of the user interface and can be composed with other components to create more complex user interfaces.

ii. One-way data flow: React uses a unidirectional data flow, which means that data flows only in one direction – from parent components to child components. This approach helps to keep the codebase organized and easy to maintain.

iv. JSX: React uses JSX (JavaScript XML), which is a syntax extension for JavaScript. JSX allows developers to write HTML-like code inside their JavaScript files, making it easier to visualize and work with the user interface.

v. React Native: React can be used to build mobile applications using React Native. React Native allows developers to write code once and deploy it to both iOS and Android platforms, saving development time and resources.


# QUESTION 3:

## List five major advantages of React

i. Reusable components: React's component-based architecture allows developers to create reusable UI components, which can be used across multiple parts of an application. This approach helps to improve development efficiency, reduce code duplication, and make the application easier to maintain.

ii. Virtual DOM: React's use of a virtual DOM allows for efficient and optimized rendering of components, reducing the number of actual DOM updates required. This results in faster performance and a better user experience.

iii. Declarative programming: React follows a declarative programming model, where developers describe the desired state of the application and let React handle the updates to the DOM. This approach makes code easier to reason about and results in fewer bugs and errors.

iv. Large developer community: React has a large and active community of developers, who contribute to the framework, create tools and libraries, and provide support and guidance to other developers. This community helps to improve the quality of code, ensure backward compatibility, and drive innovation in the framework.

v. React Native: React can be used to build mobile applications using React Native, which allows developers to write code once and deploy it to both iOS and Android platforms. This approach saves development time and resources, while still providing a native-like user experience.


# QUESTION 4
## What is the name of the Software Engineer that created React? Also, which company owns React?

Ans: React was created by Jordan Walke, a software engineer at Facebook. He first released React as an open-source library in 2013. Since then, React has grown in popularity and has become one of the most widely used front-end frameworks for building web applications.

React is maintained by Facebook and a community of developers who contribute to its development. While React is open-source and free to use, Facebook does own the trademark for the React name and logo.


# QUESTION 5
## What are the notable differences between HTML & JSX? Give at least 3 of them

(i)Syntax: HTML uses angle brackets and attributes to define elements, while JSX uses curly braces and properties to define elements. For example, in HTML, a button element would be defined like this:
N.B In JSX, the same button element would be defined like this:
In html <button class="btn">Click me</button>
In JSX <button className="btn">Click me</button>

(ii) Attributes: HTML and JSX use different attributes to define element properties. For example, in HTML, to add a disabled property to a button element, you would use the disabled attribute:
In CSS <button disabled>Disabled button</button>
In JSX, you would define the disabled property as a boolean value within the button element's properties: <button disabled={true}>Disabled button</button>
(iii) Embedding dynamic content: In HTML, to embed dynamic content, you would use template languages such as Mustache or handlebars. In JSX, you can embed dynamic content directly within curly braces:
In JavaScript  const name = "John";
// JSX
<p>Hello, {name}!</p>
 // In CSS
 <p>Hello, John!</p>

# QUESTION 6
## Why can’t browsers read JSX?
Ans: rowsers are designed to read and render HTML, CSS, and JavaScript code. JSX, on the other hand, is a syntax extension of JavaScript and is not a native browser    language.
When JSX code is written in a JavaScript file, it needs to be transformed into regular JavaScript code that browsers can understand. This transformation process is    typically done using a tool called a transpiler or compiler. The most popular transpiler for JSX is  Babel, which converts JSX syntax into regular JavaScript syntax.   Once the JSX code has been transformed into regular JavaScript code, it can be included in an HTML file and executed by a browser as part of a web application. It's important to note that while JSX may not be directly readable by browsers, it is an important tool for building modern web applications using libraries and         frameworks like React. These tools use JSX to define the structure and behavior of web components, which are then transformed into regular JavaScript code that can be executed by browsers.

