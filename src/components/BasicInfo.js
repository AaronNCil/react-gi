import React from 'react';

class Basicinfo extends React.Component {
    render() {
        return (
            <div className="information">
                <ul>
                    <li>{this.props.person.name}</li>
                    <li>{this.props.person.number}</li>
                    <li>{this.props.person.dob}</li>
                </ul>
            </div>
        );
    }
}

export default Basicinfo;