# Development Environment
#### Node and NPM
Make sure you are using [Node 13 or higher](https://nodejs.org/en/download/)
1. Gives you access to modern Javascript syntax
2. Provides the latest `npm`
3. `Recommended 12.0.0 LTS`

#### Javascript Linting
Install ESLint in your IDE
* It assures that you are following a [basic level of Javascript coding conventions](https://eslint.org/docs/developer-guide/code-conventions)

# Git Work Flow
#### Feature branches
Leverage [feature branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) whenever you want to add a feature or fix a bug.
1. Pull the most recent master
2. Create a feature/bug branch with the following pattern `feature/[your name]/[name of feature]`
3. Example => `feature/Eric/add-new-modal` or `bug/Eric/fix-broken-navigation`

#### Commit and Push
When working on a feature make sure to commit and push your changes to the remote branch as often as possible.
* This assures that your commits are small and manageable.
* Additionally, in the event of system failure or any random that affects your local code, you will have a fairly recent backup of your code in the remote branch.

#### Before Pull Requests
Before you create a pull request, run the following commands locally:
1. `npm run lint`: to check your code for linting errors. There should be zero.
2. `npm run test`: if there are tests, they should all be passing.
3. `npm run build`: to make sure that your code will successfully build in production.

#### Pull Requests (PR)
After you have finished working on your feature or bug fix, you should [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your feature branch to the master branch.
* This PR allows you to see the difference between the current master code and the feature code that you want to merge into the master.
* This process is very important because it allows your teammates to review your code in order make sure that it is consistent with coding conventions and make potential suggestions to improve the code quality.

#### Pull Request Maximum Changes
Each PR should contain small and specific code changes. It is difficult for your teammates to review your code when they are many changes all pushed into one Pull Request. Therefore, you must absolutely abide by the following rules:
* All Pull Requests can contain at most 250 changes.
* If your PR contains more than 250 changes, you must break down this PR into smaller different PRs.

#### Review All Pull Requests
It is required that each member of your team review and comment on every PR that is created. This makes sure that:
*  You are keeping your teammates accountable for the quality of the code that they are writing.
* The code merged into your master meets the highest of standards.
* You are learning from the code that your teammates are writing.

# More Coding Conventions
#### Comment Your Code
Comments help, not only you but, others developer better understand the logic behind your code. It is essential that you comment often and frequently.
1. Single comments - used for comments that are only 1 line long
    * starts with `//`
2. Multiple comments - used for comments that are more than 1 line long
    * starts with `/**` and ends with `*/`

#### Function comments
Each and every function and class must be commented. You have to define what the function or class does, what are its parameters and what is the expected result

When commenting on functions/classes use [JSDoc conventions](http://usejsdoc.org/about-getting-started.html)
```
/**
 * Helper function that is used to make api requests
 *
 * @function
 * @param {String} url - the url being requested
 * @param {String} method - the request protocol (i.e get, post, put ...)
 * @param {Object} body - the data to send to the endpoint
 * @return {Object} the result of the api request
 */
function goFetch(url, method, body) {
    ...
}
```

#### Styles
[Do not use in-line styles](https://reactjs.org/docs/faq-styling.html) within any of the react components. Instead, give the element a `className` and define its style in the style sheet.

* Incorrect:
```
// Example.js
...
    <div style={{width: '200px', height: '100px'}} />
...
```

* Correct:
```
// Example.js
...
    <div className='example-element' />
...


// styles.css
...
.example-element {
    width: '200px';
    height: '100px';
}
...
```

#### CSS Class Names
Class names should be consistent and explicit. By following, the [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) methodology you will accomplish both.

#### File Structure
The file structure for our react components should look exactly as depicted below
```
sharedComponents
????????????|   Chart.js
|   |   Nav.js
|   |   ...
|   |  index.js
|           ???????????? export all components
pages
????????????login // component folder
???   ???   constants.js // all components strings and numbers
???   ???   index.js // the component exportables
|   |
???   ???   Login.js // the main component
???   ???   Button.js // a sub-component
???   ???   Modal.js // a sub-component
???   ???   ...
???   ???   styles.css // components styles
???   ???   index.js // exports the main component.
???   
????????????productsAvailable
    ...
```

#### Constants File
Define all strings and numbers used in a component within the `constants.js` file. Add a comment that describes the constant.
All strings variable must be in uppercase

```
/**
 * Defines the url for the database.
 *
 * @constant
 */
export const TEST_URL = 'localhost:3000';
```

* The only exception is `classNames`. These strings should be defined in the component directly.

#### Index File
Each component should have an `index.js` that looks like the following:
```
import components2 from './components2';
import components1 from './components1';
import constants from './constants';
import './styles.css'; if any



export { components1,  components2, constants};
```
