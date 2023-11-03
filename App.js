                                //    FUNCTION BASED COMPONANT
/*function App(){
   return(
    <h1>This is my first componant</h1>
   )
}

export default App*/

/*import React,{Component} from "react";
    class App extends Component{
        render(){
            return(
                <>
                 <h1>Class Component 1</h1>
                 <h1>Class Component 2 </h1>
                </>
                )
        }
    }

    export default App*/

    /*function App(props){
        console.log(props.age);
         return(
            <>
            <h2>User Name: {props.name}</h2>
            <h3>Age :{props.Age}</h3>
            </>
         )}
         export default App*/

        //  import User from "./User"

        //  function App(props){
        //     return(
        //     <>
        //     <h2>App componant</h2>
        //     <User name="Anjali"/>
        //     <hr/>
        //     <User name="Monali"/>
        //     <hr/>
        //     <User name="Anu"/>
        //     <hr/>
        //     <User name="Bob"/>
        //     <hr/>
            
            
        //     </>
        //  )}
        //  export default App


        //  CLASS BASED COMPONANT--------------------------------------------------------------------------------------------------------

import React,{Component} from "react";
        
        class App extends Component{
            render(){
                console.log(this.props.name);
                return(
                    <>
                    <h1>App Componant- {this.props.name}</h1>
                    </>
                )
            }
        }

        export default App







