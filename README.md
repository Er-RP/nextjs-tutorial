# Next JS

## Dynamic routing 
[slug] act as a dynamic segamant catcher in url.

e.x :

/blog/post1 --> post1 is dynamic
/blog/post2 --> post2 is dynamic

## Routes Grouping

(auth) used to group the routes under a one folder. Routing system will exclude the grouping folder.

e.x : 
/auth/login ---> wrong 
/login ---> correct

## Layouts
1. A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render.
2. The root layout is defined at the top level of the **app** directory and applies to all routes. This layout is **required** and must contain html and body tags, allowing you to modify the initial HTML returned from the server.

e.x :
Navbar and Footer

## Loading UI
1. The special file **loading.js** helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads.

e.x : 
Added loading.js file at the app directory root level.

## Error UI
1. The **error.js **file convention allows you to gracefully handle unexpected runtime errors in nested routes.
2. Error components must be Client Components.
3. **error.js** boundaries do not catch errors thrown in **layout.js** or **template.js** components of the **same segment**. 

## Not Found UI
1. The **not-found** file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI

## Images
1. NextJS in build Image component will take care of the responsiveness.
2. There are two ways to use Image component.

## Hydration Error and solutions
1. UseEffect - Update the state after initial rendering and show the client componet if state is true.
2. Dynamic import the component with ssr false
3. Using supressHydrationWarning attribute on HTML element