### Project Structure
---

- A parent component is mounted onto the root in index.js.
- All other components are nested and placed under the parent component.

### Component Definition
---

- A component can be defined by either declaring a class which extends the Component class.
- A component can also be defined by declaring a function.
- Hence two possible ways of declaring a component is by a class or function.
- Every react component has to render or return something, a html that can be rendered to the dom to the screen.
- The return consists of the code that is to be rendered onto the dom, in format of jsx and not actual html code.

### JSX
---

- React will covert the jsx code into the standard React.createElement nested code behind the scenes.
- For example the className will internally be transpiled to class behind the scenes by javascript.