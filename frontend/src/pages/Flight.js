import React from 'react'
import { AppDownload } from '../components/Common/AppDownload'
import Form from '../components/Flight/Form'
import MForm from '../components/Flight/MForm'


export const Flight = () => {
  return (
    <div className='flightSection'>
      
    <div className='formSection'>
        <Form/>
      </div>
      {/* <div className='appDownloadSection'>
        <AppDownload/>
      </div> */}
    </div>
  )
}
