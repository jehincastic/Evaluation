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
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim white underline pa3 pointer' onClick={() => props.onRouteChange('adminDisplay')}>Go Back</p>
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
        </div>
    );
};

export default DisplayEmployee;