'use client'
import React, { useState } from 'react';
import ReportModel from '../model/reportModel';
const Profile = () => {
    const [reportCard, setReportCard] = useState(false);

    const toggleReport = () => {
    setReportCard(!reportCard);
    };
    const closeReport= ()=>{
        setReportCard(false)
    };

    return (
    <div>
        <div className='flex flex-row h-16 justify-between items-center'>
            <div className='flex gap-4 justify-center items-center'>
                <img src="/asets/profile-picture.png" alt="" className='rounded-full flex md:w-10 md:h-10 w-8 h-8' />
                <div className='flex flex-col '>
                    <h1 className='font-bold text-base'>Labib Fauzi</h1>
                    <h1 className='font-medium text-base text-neutural'>1 jam yang lalu</h1>
                </div>
            </div>
            <button onClick={toggleReport}>
                <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
            </button>
        </div>
        {reportCard && <ReportModel onClose={closeReport}/>}
    </div>
    );
};
export default Profile;

