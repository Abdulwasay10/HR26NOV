import { useContext, useEffect } from 'react';
import { Link, json, useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import './employeedetails.css';

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const {id} = useParams();

    const buttonStyle = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'start',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginTop: '15px',
        backgroundColor: '#f9f6ee',
        width: '1100px', // Adjust the width as needed
      };
    

    
    
    
      const getAllemployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/employeedetails/${id}`);
          console.log("response: ", response);
          console.log(allemployees);
          setallemployees(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };


    useEffect(() => {
        console.log('asdasd')
        getAllemployee()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , employeeBoolean ])
    
    return (
        <>
        <Navbars/>

            <div className='rootcontainer2'>
                <h2 className="heado">{allemployees.emloyeename}</h2>
            </div>


    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                    
                    </th>
            <th scope="col" className="px-6 py-3">
                    S#
                    </th>
                <th scope="col" className="px-6 py-3">
                    General Information
                </th>
                <th scope="col" className="px-6 py-3">
                    Data
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className="bg-white border-b">
        <th scope="col" className="px-6 py-3">
                    
                    </th>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            1.
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            Department
        </td>
        <td className="px-6 py-4">
        {allemployees.department}
        </td>

        </tr>

        {/* <tr className="bg-white border-b">
        <th scope="col" className="px-6 py-3">
                    
                    </th>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            2.
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            Name
        </td>
        <td className="px-6 py-4">
        {allemployees.employeename}
        </td>

        </tr> */}
           
        </tbody>

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                    
                    </th>
            <th scope="col" className="px-6 py-3">
                    S#
                    </th>
                <th scope="col" className="px-6 py-3">
                    Additional Information
                </th>
                <th scope="col" className="px-6 py-3">
                    Data
                </th>
            </tr>
        </thead>

        <tbody>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    1.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Age
</th>
<td className="px-6 py-4">
{allemployees.age}
</td>

</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    2.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Business Travel
</th>
<td className="px-6 py-4">
{allemployees.businessTravel}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    3.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Daily Rate
</th>
<td className="px-6 py-4">
{allemployees.dailyRate}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    4.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Distance From Home
</th>
<td className="px-6 py-4">
{allemployees.distanceFromHome}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    5.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Education
</th>
<td className="px-6 py-4">
{allemployees.education}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    6.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Education Field
</th>
<td className="px-6 py-4">
{allemployees.educationField}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    7.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Employee Count
</th>
<td className="px-6 py-4">
{allemployees.employeeCount}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    8.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Employee Number
</th>
<td className="px-6 py-4">
{allemployees.employeeNumber}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    9.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Environment Satisfaction
</th>
<td className="px-6 py-4">
{allemployees.environmentSatisfaction}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    9.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Gender
</th>
<td className="px-6 py-4">
{allemployees.gender}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    11.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Hourly Rate $
</th>
<td className="px-6 py-4">
{allemployees.hourlyRate}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    12.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Job Involvement
</th>
<td className="px-6 py-4">
{allemployees.jobInvolvement}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    13.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Job Level
</th>
<td className="px-6 py-4">
{allemployees.jobLevel}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    14.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Job Role
</th>
<td className="px-6 py-4">
{allemployees.jobRole}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    15.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Job Satisfaction
</th>
<td className="px-6 py-4">
{allemployees.jobSatisfaction}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    16.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Marital Status
</th>
<td className="px-6 py-4">
{allemployees.maritalStatus}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    17.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Monthly Income $
</th>
<td className="px-6 py-4">
{allemployees.monthlyIncome}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    18.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Monthly Rate $
</th>
<td className="px-6 py-4">
{allemployees.monthlyRate}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    19.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
No of Companies worked
</th>
<td className="px-6 py-4">
{allemployees.numCompaniesWorked}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    20.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Over 18
</th>
<td className="px-6 py-4">
{allemployees.over18}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    21.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Over Time
</th>
<td className="px-6 py-4">
{allemployees.overTime}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    22.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Salary Hike %
</th>
<td className="px-6 py-4">
{allemployees.percentSalaryHike}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    23.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Performance Rating
</th>
<td className="px-6 py-4">
{allemployees.performanceRating}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    24.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Relationship Satisfaction
</th>
<td className="px-6 py-4">
{allemployees.relationshipSatisfaction}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    25.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Standard Hours
</th>
<td className="px-6 py-4">
{allemployees.standardHours}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    26.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Stock Option Level
</th>
<td className="px-6 py-4">
{allemployees.stockOptionLevel}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    27.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Total Working Years
</th>
<td className="px-6 py-4">
{allemployees.totalWorkingYears}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    28.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Training times Last Year
</th>
<td className="px-6 py-4">
{allemployees.trainingTimesLastYear}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    29.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Work Life Balance
</th>
<td className="px-6 py-4">
{allemployees.workLifeBalance}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    30.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Years at Company
</th>
<td className="px-6 py-4">
{allemployees.yearsAtCompany}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    31.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Years In Current Role
</th>
<td className="px-6 py-4">
{allemployees.yearsInCurrentRole} 
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    32.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Years Since Last Promotion
</th>
<td className="px-6 py-4">
{allemployees.yearsSinceLastPromotion}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    33.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Years With Current Manager
</th>
<td className="px-6 py-4">
{allemployees.yearsWithCurrManager}
</td>
</tr>



</tbody>
    </table>
</div>

            <Footer/>
        </>
    );
}

export default EmployeeDetails;
