import React, { Component } from 'react';
import Navbar from './NavbarComponent';

class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
 
export default Main;