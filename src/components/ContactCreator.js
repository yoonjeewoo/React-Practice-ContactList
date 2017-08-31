import React from 'react';

class ContactCreator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: ''
		};
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

	handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    render() {
        return (
            <div>
                <p>
				<input type="text"
					   name="name"
					   placeholder="name"
					   value={this.state.name}
					   onChange={this.handleChange}/>

				<input type="text"
					   name="phone"
					   placeholder="phone"
					   value={this.state.phone}
					   onChange={this.handleChange}/>
                <button onClick={this.handleClick}>
                	Insert
                </button>
                </p>
            </div>
        );
    }
}

export default ContactCreator;
