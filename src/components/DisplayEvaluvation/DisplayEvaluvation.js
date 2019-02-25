import React from 'react';

const DispalyEvaluvation = (props) => {
    let items = [];
    for (let i = 0; i < props.evaluvation.name.length; i++) {
        items.push(
            <tr className="stripe-dark tc">
                <td className="pa3">{props.evaluvation.name[i]}</td>
                <td className="pa3">{props.evaluvation.topic[i]}</td>
                <td className="pa3">{props.evaluvation.status[i]}</td>
                <td className="pa3">{props.evaluvation.createdOn[i]}</td>
                <td className="pa3">{props.evaluvation.updatedOn[i]}</td>
            </tr>
        )
    }
    return(
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('adminDisplay')}>Go Back</p>
                <div style={{justifyContent: 'flex-start'}}>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}>Sign Out</p>
                </div>
            </nav>
            <div className="pa4">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 white center" cellSpacing="0">
                    <thead>
                        <tr className='tc'>
                            <th className="fw6 tl tc pa3">Name</th>
                            <th className="fw6 tl tc pa3">TOPICS</th>
                            <th className="fw6 tl tc pa3">STATUS</th>
                            <th className="fw6 tl tc pa3">STARTED</th>
                            <th className="fw6 tl tc pa3">MODIFIED</th>
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

export default DispalyEvaluvation;