'use strict';

var FieldWidget = React.createClass({
    displayName: 'FieldWidget',

    getDefaultProps: function getDefaultProps() {
        return {
            className: '',
            label: ''
        };
    },
    onClick: function onClick(e) {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick();
        }
    }, render: function render() {
        return React.createElement(
            'button',
            { tabIndex: '-1', className: this.props.className, onClick: this.onClick },
            this.props.label
        );
    }
});