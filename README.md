# Namaste React

# Parcel
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm in C++
- Image Optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code Splitting
- Diffrentiate Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Diffrent Dev and Prod bundles


// Build plan for app.

- Header
- - logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
- - Name of Res, star rating, cuisine, etc
- Footer
- - Copyright
- - Links
- - Address
- - Contact
 */


default export/import
default export component
import from "path"

named export import
export const component;
import {component} from "path"


useState


conditional rendering
a rendering base one the condition which is known as conditional rendering.

# useState

when we set the useState variable again its re render the whole component.
and change the only value that we modified.
reconcilation algorithm works here for to check
old and new value and only update changed value.

and also why const work in react for declaration and we change value but its not throwing error
beacause every time re render its declare the variable again with updated value thats the beauty of react. thats why we can use const also.

// whenever a state variable update react trigger a reconciliation cycle(re-render the component)


# useEffect
// if not dependency array => useEffect called on every render.
// if dependecny array is empty = [] => useEffect is called on initial render (just once).
// if dependancy array is [btnNameReact] => called everytime [btnNameReact] updated.

# 2 types of routing
client side routing - react is an cilent side routing
server side routing - make call to server side route then after getting the response load the page
