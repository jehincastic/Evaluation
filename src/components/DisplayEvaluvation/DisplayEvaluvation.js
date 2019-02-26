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
            <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('adminDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>            
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
            <div>
                <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('login')}><i className='fa fa-power-off fa-2x signOutIcon'></i></p>
            </div>
        </div>
    );
};

export default DispalyEvaluvation;