#### Activity -- Avoid Artificial Tabindex
Every interactive element of a webpage receives keyboard focus as a user navigates the page via the tab key. `tabindex` is an HTML attribute that can alter the focus of elements on the page. Utilizing an artifical `tabindex` - assigning the `tabindex` attribute to anything greater than zero - can disrupt the logical sequence of navigating a web page.

#### Instructions
Alter the `index.html` file provided in the root level public directory to complete the following:

1. Remove the artificial `tabindex` attribute to create a more logical sequence of navigating the web page.

> **Hint:** Use the keyboard tab key to navigate the page and fix the `tabindex`
