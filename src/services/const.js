import { 
    faSmileWink,
    faSadTear
} from '@fortawesome/free-solid-svg-icons';

const params = [
    {callback: (p1,p2) => {
        const attribute = p1.createDate ? "createDate" : "_id"; //comparando propiedad del objeto
        return (p1[attribute]<p2[attribute]) ? -1 : 1;
    }, wording: 'Most recent'},
    {callback: (p1,p2) => p1.cost - p2.cost, wording: 'Lowest price'},
    {callback: (p1,p2) => p2.cost - p1.cost, wording: 'Highest price'}
];

const coinsAlertMessage = {
    success: {
        className: 'success',
        icon: faSmileWink,
        message: 'Yay! your coins have been loaded successfully.',
    },
    error: {
        className: 'error',
        icon: faSadTear,
        message: 'Oh! something went wrong.',
    },
};

export {params, coinsAlertMessage};