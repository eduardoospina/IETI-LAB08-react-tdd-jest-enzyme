# IETI-LAB08-react-tdd-jest-enzyme.


## AUTOR.

    - Eduardo Ospina Mejia


## CodeLab

    1. Add the following dependencies:

    	npm i -D jest enzyme @wojtekmaj/enzyme-adapter-react-17 @types/jest

![](https://i.postimg.cc/g0QH00sF/jest-1.png)



    2. Add an Enzyme Adapter to work with React ( Create a file on the root called setupTests.js, this will run before each test you write ):

    	import Enzyme from 'enzyme';
    	import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

    	Enzyme.configure({ adapter: new Adapter() });

![](https://i.postimg.cc/DZGd4KpW/jest-2.png)

![](https://i.postimg.cc/28rFyMQ6/jest-3.png)

    3. Configure jest so it knows where is the configuration file created in step 2 ( add the following value to your package.json ):

    	"jest": { 
    		"setupFilesAfterEnv": [ 
    			"<rootDir>/setupTests.js" 
    		] 
    	}

![](https://i.postimg.cc/Qxf5ttN4/jest-4.png)

    4. Create a simple test ( I'll create a test file for my App.js file ), if there is an existing App.test.js delete the content inside of it and replace it by the following:

    	import { shallow } from  "enzyme";
    	import  App  from  "./App";

    	describe("<App/>", () => {
    		it("should render correctly", () => {
    			const  wrapper = shallow(<App  />);
    			expect(wrapper).toHaveLength(1);
    		});
    	});

![](https://i.postimg.cc/qvY3s532/jest-5.png)

    5. Read further documentation on how to use enzyme and Jest to test your components (Avoid Snapshot testing, it's better instead to validate if a wrapper is in the DOM as the previous example does)

    6. Modify your existing test script like this: npm set-script test "jest"

![](https://i.postimg.cc/PxbvkfFM/jest-6.png)

    7. Install the following dev dependencies: npm i -D @babel/preset-env babel-jest, those are useful to support EcmaScript modules on your jest files.

![](https://i.postimg.cc/d3qkQMbc/jest-7.png)


    8. Create a file called .babelrc at the root directory and add the following lines:

    	{
      	"presets": [
        	"@babel/preset-env",
        	"@babel/preset-react", { "runtime": "automatic" }]
    	}

![](https://i.postimg.cc/445HLdcf/jest-8.png)



    9. Create a folder on the root directory called styleMock.js ( To mock every imported stylesheet )

    	module.exports = {}

![](https://i.postimg.cc/CLxBWgCj/jest-9.png)

![](https://i.postimg.cc/VkSSkWVv/jest-10.png)


   10.  Move your jest configuration to a file called jest.config.js and add the following lines:

    	module.exports = {
      	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
      	moduleNameMapper: {
      	"\\.(css)$":  "<rootDir>/__mocks__/styleMock.js",
      	},
    	};

![](https://i.postimg.cc/CxWRBn3N/jest-11.png)

![](https://i.postimg.cc/5tL6wN1M/jest-12.png)

    11. To run your tests run npm test, check for results and make sure those pass

![](https://i.postimg.cc/1tKXjCfC/jest-13.png)

    12. Write tests for your components

    13. Run npx jest --coverage to always check for the code coverage.

![](https://i.postimg.cc/J06n1s3j/jest-14.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
