import _ from 'lodash';
import classNames from 'classnames';
import i18n from 'i18next';
import React from 'react';
import Console from './Console';
import { Widget, WidgetHeader, WidgetContent } from '../../widget';
import './index.css';

class ConsoleWidget extends React.Component {
    state = {
        isCollapsed: false
    };

    handleClick(target, val) {
        if (target === 'toggle') {
            this.setState({
                isCollapsed: !!val
            });
        }
    }
    render() {
        let width = 360;
        let title = i18n._('Console');
        let toolbarButtons = [
            'toggle'
        ];
        let widgetContentClass = classNames(
            { 'hidden': this.state.isCollapsed }
        );

        return (
            <div {...this.props} data-component="Widgets/ConsoleWidget">
                <Widget width={width}>
                    <WidgetHeader
                        title={title}
                        toolbarButtons={toolbarButtons}
                        handleClick={::this.handleClick}
                    />
                    <WidgetContent className={widgetContentClass}>
                        <Console />
                    </WidgetContent>
                </Widget>
            </div>
        );
    }
}

export default ConsoleWidget;
