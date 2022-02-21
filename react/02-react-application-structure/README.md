## React Application Structure

The structure of a react application is as follows: 

> project-root  
>> public  
>>> fonts/      
>>> images/  
>>> favicon.ico   
>>> index.html      

>> src  
>>> components  
>>>> Component  
>>>>> Component.tsx  
>>>>> Component.css    

>> App.js

> README.md  

The `project-root/` is the parent directory for React applications. It typically is titled with the project name.

The `public/` directory houses all of our React application HTML, images, and icons. These resources are public, because they are shared across multiple parts of the app.

The `components/` directory is used to organize more complex React application components. Some apps forego the use of a components directory. It is good practice to organize your components.

### Getting Started
The application we are working with is rather simple and may not have needed it's components to be broken down in such a manner, however, for this lesson you will need to move files and change references in order to get our app rendering again.

1. Use a static server to render `./project-root/public/index.html`
2. Note the application renders as is, but it is best practice to have all of our components organized in the components directory. 
3. Move the other project components into the `components/` directory (`Button.js` & `Header.js`). 
4. Note our application no longer renders in the browser.
5. Fix the references for these files in index.html. 


### What's Next
Hooray! 🎉  
Now you know the structure and how to organize components within a React App!

From now on we will be using TS and React, as well as several other packages, which we will manage with `yarn` and get started with the `create-react-app` React application boilerplate.

#### Recommended Plugins 
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
