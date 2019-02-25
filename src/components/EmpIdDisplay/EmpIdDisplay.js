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
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => goBack('hr')}>Go Back</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}>Sign Out</p>
                </div>
            </nav>
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
        </div>
    );
};

export default EmpIdDisplay;