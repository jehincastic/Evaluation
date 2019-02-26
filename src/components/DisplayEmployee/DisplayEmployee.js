import React from 'react';

const DisplayEmployee = (props) => {
    let items = [];
    for (let i = 0; i < props.admin.employeeId.length; i++) {
        items.push(
            <tr className="tc stripe-dark">
                <td className="pa3">{i+1}</td>
                <td className="pa3">{props.admin.employeeId[i]}</td>
                <td className="pa3">{props.admin.employeeName[i]}</td>
            </tr>
        )
    }
    return (
        <div>
            <p className='actionButton f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('adminDisplay')}><i className='fa fa-arrow-circle-o-left fa-2x goBackIcon'></i></p>            
            <div className="pa4">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center white" cellSpacing="0">
                    <thead>
                        <tr className="tc">
                            <th className="tc fw6 tl pa3">S.NO</th>
                            <th className="tc fw6 tl pa3">EMPLOYEE ID</th>
                            <th className="tc fw6 tl pa3">EMPLOYEE NAME</th>
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

export default DisplayEmployee;