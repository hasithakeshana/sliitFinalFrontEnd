import React, { Component } from 'react'


import PieChart from '../graphs/PieChart';


import CoursesChart from '../graphs/PackageChart';

export class Sample extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <PieChart></PieChart>
                    </div>
                    <div className="col-md-6">
                        <CoursesChart></CoursesChart>
                    </div>
                    
                   
                </div>
                
            </div>
        )
    }
}

export default Sample
