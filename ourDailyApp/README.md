# ourDailyApp

I have tried to use different ways to improve the code reusability, flexibility and complexity.

1. HOC - 
@Use case: connect() withRouter() etc.
@pros: reusability UP
@cons: flexibility DOWN as we can only pass argument / props to modify the component inside of HOC but not the HOC itself.
       complexity BAD as it involves nested component and it's call another component inside if the HOC, which the final thing that is being retured is important (jsx doesn't render function).
@suggested Use case: Use it when we don't need much flexibility, just like react building it's library with a lot of Object.freeze() Object.seal() to restrict people how to use the component.

2. RenderProp
@Use case: Context API's consumer etc.
@pros: reusability UP flexibility and complexity is better than HOC as we can now pass props to the renderPropsComponent to modify it's operation.
@cons: complexity is better but still can be improved as we are nesting component and we have to pass component (to children / prop) as function (() => <Component/>) so that the Component will now be rendered and we can postpone it to be rendered inside the renderPropComponent.

3. Context API
@props: reusability UP scope UP
We have multiple ways to define the consumer, such as using render prop style, hook style.
@cons: Abusing context API can make the code complexity and readability DOWN, because as to define the context.provider, we have to use composition which will nest the children inside of the provider.
@Suggested use cases: Use for Super huge implicit prop passing, like themeing or language settings. Due to it's incapability of high update rate.

4. customHooks
@Use case: useDispatch useSelector useState useMemo useCallback useContext etc.
@props: reusability UP complexity GOOD
It is perfect to be used to group things to build a more readable and flexible app.
@cons: It can also be used to provide functionality to the component like renderProp and others, but unlike renderProp, we are can not decide how to component to be rendered inside of the customHook file, since it is used to export important "DATA" to component and let them to decide how to render. But actually it only about the way you like to structure your codebase. It doesn't matter.

NOTES: custom Context and custom Hooks can be built to act like a reducer
=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Codebase Architecture

### Assets

Saved in -> public/images || public/videos

## Code Structure

Inside src folder

- components: Compounded Compount and the style e.g. form, card, accordion (Splitted Molecules / Organism)

- containers: Organism being composited in here in order to split the code (redability + reusability)

- hooks: Custom hooks e.g. useContent.js (Do async operation and retrieve data to return etc.)

- context: Context API files e.g. FeatureContext for Card component (Provide implicit props for a component)

- pages: Actual Page that renders Containers.

- helpers: Help to do Conditional Routing, IsUserRedirect or ProtectedRoute

- utils: Custom JavaScript only files e.g. selectionMap.js (Maybe used for doing data allocation.), also including the utils files relating to styled-components

- fixtures: json files used to drain data to the database or static data

- constants: Constant variables like Routes url are saved here.

### Context vs Custom Hooks

Custom Hooks: Use it for local states and never put it into a loop. Handle complicated state with useReducer.
@Target: Suggested to use on container layer as we can inject the state without prop drilling directly.

ContextAPI: Not that capable on dealing with high update rate stuff, so best use case will be Theme or language.
@Target: I also use it on compound component to share implicit states.

## State Management Evolvement

### Stage 1: redux + reselect<br/>
![GitHub Logo](/public/images/markdown/stageManagement/reduxReselect.jpg)

### Stage 2: Added Hooks and context<br/>
![GitHub Logo](/public/images/markdown/stageManagement/hooksContext.jpg)

Get rid of class component by using hooks in the functional component.
Stop putting everything into redux, instead of async operation (to backend) and global state.

Async operation: Make use of middleware Saga which can provide better testibility.
Global State: Custom hooks only be used for local state not global state to prevent props drilling
Why not Context API: Context API is designed to be used to low updating rate data.

## Component Design Evolvement

### Stage 1: Big chunk of component makes use of prop drilling<br/>
![GitHub Logo](/public/images/markdown/stageManagement/oldComponentDesign.jpg)<br/>
![GitHub Logo](/public/images/markdown/stageManagement/badComponent.png)<br/>
Why Bad?
1. Confusing allocation of component in the component folder. Molecules / organism are hard to be understood and define.
2. BAD flexibility, readability, not maintainable with props drilling
3. Fixed usage of component, big chunk of code in a component hard coded how people can use it.

### Stage 2: Compound Component Design Pattern
![GitHub Logo](/public/images/markdown/stageManagement/CCdp.jpg)<br/>
![GitHub Logo](/public/images/markdown/stageManagement/goodComponent.png)<br/>
How good is this?
1. Compound Component makes use of composition, so the flexibility is really good as we can import different part of the component to build UI.
2. Component parts (Jumbotron.Title / Jumbotron.Container) is compiled into the Jumbotron component jsx file and being saved as part of the Jumbotron object.
3. We use Container as a Organism but we can use it or compose a component in the page, very flexible and readable.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
