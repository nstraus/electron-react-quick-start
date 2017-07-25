import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, Button, ButtonGroup, DropdownItem } from 'reactstrap';
import COLORS from '../colors/colors';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorDropdownOpen: false
        };
        this.toggleColorDropdown = this.toggleColorDropdown.bind(this);
    }

    toggleColorDropdown() {
        this.setState( {
            colorDropdownOpen: !this.state.colorDropdownOpen
        } );
    }

    render(){
        return (
					<div className="toolbar">
							<ButtonGroup>
									<Button onClick={ this.props.onBoldClick }>Bold</Button>
									<Button onClick={ this.props.onItalicClick }>Italic</Button>
									<Button onClick={ this.props.onUnderlineClick }>Underline</Button>
									<ButtonDropdown isOpen={ this.state.colorDropdownOpen } toggle={ this.toggleColorDropdown }>
											<DropdownToggle caret>
													Colors
											</DropdownToggle>
											<DropdownMenu>
													{ COLORS.map(( type, index ) =>
															<DropdownItem key={ index } onClick={ () => this.props.toggleColor(type.style) } >
																<p style={{color: type.style}}>{ type.label }</p>
															</DropdownItem>
													) }
											</DropdownMenu>
									</ButtonDropdown>
							</ButtonGroup>
					</div>
        );
    }
}

export default Toolbar;
