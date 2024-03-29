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