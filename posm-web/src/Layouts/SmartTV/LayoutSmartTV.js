import { useState } from 'react';
import _ from 'underscore';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Container from "react-bootstrap/Container";
import './LayoutSmartTV.css';

function LayoutSmartTV(props) {

    var bounceTransition = {
        atEnter: {
            opacity: 0,
            scale: 1.2,
        },
        atLeave: {
            opacity: bounce(0),
            scale: bounce(0.8),
        },
        atActive: {
            opacity: bounce(1),
            scale: bounce(1),
        },
    },

        splitterPanes = {
            panes: [
                { size: '20%', min: '20px', collapsible: true },
                {},
                { size: '30%', min: '20px', collapsible: true }
            ],
            nestedPanes: [
                { size: '5%', collapsible: true },
                { size: '70%', collapsible: true },
                { size: '10%', collapsible: false },
                { resizable: false, collapsible: false }
            ]
        };

    const [panes, updatePanes] = useState(splitterPanes.panes);
    const [nestedPanes, updateNestedPanes] = useState(splitterPanes.nestedPanes);

    function mapStyles(styles) {
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`,
        };
    }

    function bounce(val) {
        return spring(val, {
            stiffness: 330,
            damping: 22,
        });
    }

    function onPanesChange(event) {
        updatePanes(event.newState);
    }

    function onNestedPanesChange(event) {
        updateNestedPanes(event.newState);
    }

    return (
        <div>
            <Container
                className="fullHeight"
                panes={nestedPanes}
                orientation={'vertical'}
                onChange={onNestedPanesChange}
            >
                <div className="pane-content">
                    {_.filter(_.toArray(props.children), (child) => { return child.props.className === "MenuTop"; })}
                </div>

                <Container
                    panes={panes}
                    onChange={onPanesChange}
                >
                    <div className="pane-content">
                        {_.filter(_.toArray(props.children), (child) => { return child.props.className === "MenuLeft"; })}
                    </div>
                    <div className="pane-content">
                        <AnimatedSwitch
                            atEnter={bounceTransition.atEnter}
                            atLeave={bounceTransition.atLeave}
                            atActive={bounceTransition.atActive}
                            mapStyles={mapStyles}
                            className="switch-wrapper"
                        >
                            {_.filter(_.toArray(props.children), (child) => { return child.props.className === "content"; })}
                        </AnimatedSwitch>
                    </div>
                    <div className="pane-content">
                        <h3>Inner splitter / right pane</h3>
                        <p>Resizable and collapsible.</p>
                    </div>
                </Container>


                <div className="pane-content">
                    <h3>Outer splitter / Middle pane</h3>
                    <p>Resizable only & non-collapsible.</p>
                </div>

                <div className="pane-content">
                    <h3>Outer splitter / Bottom pane</h3>
                    <p>Non-resizable and non-collapsible.</p>
                </div>
            </Container>
        </div >
    );
}

export default LayoutSmartTV;