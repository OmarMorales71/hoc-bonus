import React, { Component } from 'react'

const withLogin = (WrappedComponent) => {

    return class WithLoginComponent extends Component {

        constructor(props) {
            super(props)

            this.state = {
                loggued: false
            }

            this.verifyLogin = this.verifyLogin.bind(this)
        }

        verifyLogin() {
            setTimeout(() => {
                const loggued = Math.round(Math.random())
                this.setState({
                    loggued: loggued === 1
                })
            })
        }

        componentDidMount() {
            this.verifyLogin()
        }

        render() {
            return ( <
                WrappedComponent {...this.props }
                loggued = { this.state.loggued }
                />
            )
        }
    }
}

export default withLogin