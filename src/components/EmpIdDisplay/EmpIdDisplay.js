import React from 'react';

const EmpIdDisplay = (props) => {
    let items = [];
    for (let i = 0; i < props.topics.length; i++) {
        items.push(
            <tr className="tc stripe-dark">
                <td className="pa3">{i+1}</td>
                <td className="pa3">{props.topics[i].name}</td>
                <td className="pa3">{props.status[i].name}</td>
            </tr>
        )
    }
    const goBack = (route) => {
        items.pop();
        props.routeChange(route);
    }
    return (
        <div>
            <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('hrDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>
            <div className="pa4">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center white" cellSpacing="0">
                    <thead>
                        <tr className="tc">
                            <th className="tc fw6 tl pa3">S.NO</th>
                            <th className="tc fw6 tl pa3">Topics</th>
                            <th className="tc fw6 tl pa3">status</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy">
                        {items}
                    </tbody>
                    </table>
                </div>
            </div>
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
            </div>
        </div>
    );
};

export default EmpIdDisplay;