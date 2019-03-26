import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    render(){
        return (
            <div className = "main">
                <h3>Main Component</h3>
                <p>Ne debet facete aperiri usu. Sumo unum in sea. Quo id modo veniam offendit, dicunt aliquid sententiae in ius. An usu euismod definitionem, ex vel numquam aliquando adipiscing.</p>
                <p>Id ius sale appareat singulis. Cum purto dicit zril id, quo paulo equidem necessitatibus ne. Nec ea efficiendi liberavisse, no mei fabellas lobortis, vim velit denique splendide an. Case facilis in eos, ea his inani placerat urbanitas. Eu inciderint definitiones delicatissimi per, facer referrentur mel id. Discere aliquando qui eu, porro ceteros ad duo.</p>
                <p>Quo viris zril an. Quis iudicabit quo ne. Et illud doctus phaedrum sit, commune referrentur delicatissimi nam te, quas probo ignota per ne. Sea ad nobis nostrum perfecto. His sale zril eu.</p>
                <p>Sensibus quaerendum contentiones te pri, per vidit atomorum vulputate ut. Te qui debet solet homero, vis iusto tollit eloquentiam ne, ex vim mollis assentior tincidunt. Errem graece te mei, ne usu petentium dissentiet, vim fugit eligendi mediocritatem ne. Nam ne timeam voluptatum. Eu viris doctus eum.</p>
                <p>
                    This is a counter implemented using React framework. Click the button
                    below to increase counter value by one
                </p>
            <button className="counter-btn" onClick={this.props.increaseCounter}>Increase Counter</button>
            </div>
        )
    }
}
export default Main;