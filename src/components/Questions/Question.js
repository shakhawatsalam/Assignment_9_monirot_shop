import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h1>How React Works?</h1>
            <p>Firstly React is a JavaScript Library.It works with user interfaces. At its vary core, React basically maintains a tree for you. This tree is able to efficient diff computations </p>
            <br />
            <h1>Props Vs State!!</h1>
            <p>Props is an Objedt which stores the value of attributes of a tag and work similar to the HIML attributes and State is a plane javaScript Object used by React to represents and information about the components's current situation.Props are used to pass data from one component to another.The state is a local data Storage that is local to the component only and connot bb pass to other components</p>
            <br />
            <h1>How UseState works?</h1>
            <p>useState is a react Hook. It's allows you to add state to function component.Whereas the state in class is always an object, with Hooks, the State can be any type .Each piece of state holds an single value, which can be, object an array, a boolean, or any other type you can imagine.</p>
        </div>
    );
};

export default Question;