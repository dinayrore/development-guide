/**
 * Class Based React Component --
 * Since this is a JS file there are no types yet,
 * however, since this is a class, the types can be
 * inferred from the extended property: React.Component
 */
class JsxClassComponent extends React.Component {
  render() {
    return <div>{/* add HTML here */}</div>;
  }
}

/**
 * Functional React Component --
 * Since this is a JS file there are no types yet,
 * however, in the future we will be using the type:
 * React.FC<your-component-props-here>
 *
 * Example: `const JSXDemo: React.FC<JSXProps> = () => {}`
 */
const JsxFuntionalComponent = () => {
  return <div>{/* add HTML here */}</div>;
};

/**
 * ReactDOM.render takes the JSX components that are returned above
 * and renders them in hypertext markup langauge via the document of
 * the page by the element id selected.
 */

// Render the class based component
ReactDOM.render(<JsxClassComponent />, document.getElementById("class"));

// Render the functional component
ReactDOM.render(
  <JsxFuntionalComponent />,
  document.getElementById("functional"),
);
