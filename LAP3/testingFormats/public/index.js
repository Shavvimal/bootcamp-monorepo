// props 
const App = (props) => <h1> Hello {props.name}</h1>
// Destructure 
const App = ({ name }) => <h1> Hello {name}</h1>




// anywhere you need routing e.g. app.js
import { Switch, Route } from 'react-router-dom';

// in render/return e.g. might always want header and footer, then swithc 
<>
<Header />
<Switch>
    {/* You can nest things. E.g. has route has a prop of path. Within it we nest what we want it to render. This is the 'prefered way' to do things */}

    <Route path="/news" >
        <News />
    </Route>   
   
    {/* pass render prop a function that returns some jsx. Exact path so /news doesnt match too */}
    <Route exact path="/" render={() => <h1 id="welcome">Welcome</h1>} />

    {/* wrap the Route around a component PREFERRED APPROACH WHEN USING HOOKS */}
    <Route path="/schools"><Schools select={selectSchool} /></Route>

    {/* pass a component as a prop */}
    <Route path="/instructors" component={InstructorsContainer} />

    {/* pass render a function that receives props as an argument and injects them into the returned component */}
    <Route path="/students" render={props => <StudentsContainer {...props} students={this.state.allStudents} />} />

    {/* if the url path doesn't match any this will run. Create a notfound component */}
    <Route> <NotFound404 /> </Route>
</Switch>
<Footer />
</>
