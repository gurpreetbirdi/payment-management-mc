import React, { Component } from 'react';
import { connect } from 'react-redux'
import { update } from 'global-store-mc'

class PaymentManager extends Component {
    constructor() {
        super()
        this.state = {
            text: null,
            password: null
        }
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onHandleClick = () => {
        alert("Login page")
    }
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="text" onChange={(e) => this.props.dispatch(update(e.target.value))} />
                <div>

                </div>
                <div>
                    <h3>
                        PM: {this.props.data}
                    </h3>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.updateText.data
    }
}

export default connect(mapStateToProps)(PaymentManager);
