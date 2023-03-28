import React from 'react'
import loginImage from '../../../assets/loginImage.png'
import bgBlue from '../../../assets/bg-blue.png'
import pewLogo from '../../../assets/vector.png'
import pewLogo2 from '../../../assets/vector1.png'
import { Link } from 'react-router-dom'

const ResetPasswordComponent = (props) => {
    const {passwordValue, passwordChange, confirmValue, confirmChange, onSubmit} = props
  return (
    <>
        <div className='container-fluid d-flex justify-content- align-items-center vh-100 text-start'>
            <div className='left d-flex text-center justify-content-center align-items-center w-50'>
                <img className='' src={loginImage} alt="" />
                <img className='position-absolute' style={{opacity: '0.8'}} src={bgBlue} alt="" />
                <img className='position-absolute' style={{left: '200px', top: '150px'}} src={pewLogo} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '159px'}} src={pewLogo2} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '163px'}} src={pewLogo2} alt='/' />
                <p className='position-absolute text-white fw-semi-bold' style={{left: '230px', top: '147px'}}>Peworld</p>
                <h1 className='head-text w-25 text-start position-absolute text-white h-25 line-height-5'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div className='right w-50 me-5'>
                <h1 className='mb-5'>Reset Password</h1>
                <h3 className='fw-light'>You need to change your password to active your account</h3>
                <form className='form-group' onSubmit={onSubmit}>
                    <div className='d-flex flex-column mt-5'>
                        <label htmlFor="password">New Password</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="password" name='password' placeholder='Masukan kata sandi' value={passwordValue} onChange={passwordChange}/>
                    </div>
                    <div className='d-flex flex-column mt-2'>
                        <label htmlFor="confirmPassword">Confirmation new password</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="password" name='confirmPassword' placeholder='Konfirmasi password' value={confirmValue} onChange={confirmChange}/>
                    </div>
                    <button className='border-0 w-100 p-3 bg-warning text-white fw-semi-bold mt-3' type='submit'>Reset Password</button>
                    <p className='text-start mt-3'>Ingin kembali ke halaman login? <Link to='/login' className='text-warning text-decoration-none'>Klik Disini</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default ResetPasswordComponent