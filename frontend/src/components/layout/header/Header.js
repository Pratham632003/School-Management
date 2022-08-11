import {Fragment, React} from 'react';
import './Header.css';
import { useAlert } from 'react-alert';
import {logout} from "../../../actions/userAction";
import { useDispatch, useSelector } from 'react-redux';

function Header() {

  const dispatch = useDispatch();
  const alert = useAlert();

  
  const {isAuthenticated} = useSelector((state) => state.user);

  const handleOnLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
        <div className='header'>
            <div className='header__left'>
                <p className='header__name'>Scholyz</p>
            </div>
            {
                isAuthenticated &&  <div className='header__right'>
                    <p className='header__name'>{localStorage.getItem('name')}</p>
                    <p className='header__name' onClick={handleOnLogout}>Logout</p>
                </div>
            }
        </div>
        
    
    </Fragment>
  );
}

export default Header;