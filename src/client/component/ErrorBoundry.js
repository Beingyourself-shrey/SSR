import React from "react";

class ErrorBoundry extends React.Component {
    state = { error: false,value:"" } 
    componentDidCatch(Error,errorInfo){
        console.log("I am in error boundry class",errorInfo);
        if(Error){
            this.setState({error:true,value:errorInfo})
        }
        else{
            this.setState({error:false,value:""})


        }
    }
    render() { 
       if(this.state.error===true) {
        return <div>{JSON.stringify(this.state.value.componentStack)} </div>
       } 
        return <div>{this.props.children}</div>
    }

}
 
export default ErrorBoundry;