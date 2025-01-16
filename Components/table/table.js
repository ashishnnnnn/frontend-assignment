import React from 'react';
import "./style.css";

function Table(props) {
    const { data } = props;
    return (
        <div className='tableContainer' aria-live="polite">
            <table className='table' aria-label='Data Rendering Table'>
                <thead>
                    <tr>
                        <th scope="col">S. No.</th>
                        <th scope="col">Percentage Funded</th>
                        <th scope="col">Amount Pledged</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, index) => (
                            <tr key={index}>
                                <td>{ele["s.no"]}</td>
                                <td>
                                    {ele["percentage.funded"] ? ele["percentage.funded"] : "N/A"}
                                </td>
                                <td>
                                    {ele["amt.pledged"] 
                                        ? `$ ${ele["amt.pledged"]}` 
                                        : "N/A"}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
