import {useNavigate} from "react-router-dom"
import Portal from '../asset/PORTAL.png'
import  { ReactComponent as Explore } from '../asset/explore.svg'
import  { ReactComponent as Favorites } from '../asset/daha_wallet.svg'
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/actions/tabs";

const  BottomNav = ({promo}) => {
    const navigate = useNavigate();
    const { activeColor, passiveColor, activeTab } = useSelector(state => state.tabsReducer)
    const dispatch = useDispatch()

    const gotToCuzdan = ()  => {
        dispatch(setActiveTab("DahaWallet"))
        navigate('/daha-wallet');
    }
    const gotToExplore = ()  => {
        dispatch(setActiveTab("Home"))
        navigate('/');
    }



    return (
        <div className='bottom-navigation' >
            <div className='bottom-menu-item-container sideContainer' onClick={gotToExplore}>
                <Explore className="bottom-menu-item" fill={`${activeTab === "Home" ? activeColor : passiveColor}`}/>
                <p className={`bottomMenuText ${activeTab === "Home" ? "active" : ""}`}>Keşfet</p>
            </div>
            <div className='bottom-menu-item-container portalContainer'>
                <img  src={Portal} className="bottom-menu-item" />
            </div>
            <div className='bottom-menu-item-container sideContainer' onClick={gotToCuzdan}>
                <Favorites className="bottom-menu-item"  fill={`${activeTab === "DahaWallet" ? activeColor : passiveColor}`} />
                <p className={`bottomMenuText ${activeTab === "DahaWallet" ? "active" : ""}`}>Daha Cüzdan</p>
            </div>
        </div>
    )
} 

export default BottomNav