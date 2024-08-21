'use client';

import { showToast } from "react-next-toast";

export default async function DeleteAssessment({shardId, id}) {
    const deleteAssessment = async () => {
        try {
          showToast.info('Deleting Assessment.');
          const res = await fetch(`https://cqzb53kpam.ap-southeast-2.awsapprunner.com/api/assessments/${shardId}/${id}`, {
            method: 'DELETE'
          });
          const data = await res.json();
          showToast.success('Assessment deleted successfully');
        } catch (error) {
          showToast.error('Something went wrong while deleting assessment');
          throw new Error(error);
        }
    }
    return (
        <svg onClick={()=> deleteAssessment()} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_16_11464)">
            <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#323232" />
            </g>
            <defs>
            <clipPath id="clip0_16_11464">
                <rect width="24" height="24" fill="white" />
            </clipPath>
            </defs>
        </svg>
    )
}