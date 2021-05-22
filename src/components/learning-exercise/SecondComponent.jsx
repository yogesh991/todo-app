import React, {Component} from 'react';

class SecondComponent extends Component {
    render (){
      return (
        <div name="secondComponent">
          SecondComponent is class Component
        </div>  
      );
    }
  }

export class AdditionalComponent extends Component {
    render (){
        return (
        <div name="additionalComponent">
            AdditionalComponent is class Component
        </div>  
        );
}
} 
export default SecondComponent;  