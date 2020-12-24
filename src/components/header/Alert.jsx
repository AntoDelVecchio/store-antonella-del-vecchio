import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {coinsAlertMessage} from '../../services/const';

function Alert({succeed}) {
    const {className, icon, message} = coinsAlertMessage[
        succeed ? 'success' : 'error'
    ];
    return (
        <div className={`add-coins-alert ${className}`}>
            <FontAwesomeIcon className='status-icon' icon={icon} />
            <h4 className='message'>{message}</h4>
        </div>
    );
}

export default Alert;