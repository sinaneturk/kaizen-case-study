import './styles.promotions.scss';
import Logo from '../../asset/Daha_Daha.svg'
import UserIcon from '../../asset/Profile.svg'
import FirsatBul from '../../asset/Firsat-Bul.png'
import Promotion from '../../Components/component.promotion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'reactjs-bottom-navigation/dist/index.css'
import { useState } from 'react';
import { useEffect } from 'react';
import BottomNav from '../../Components/component.bottom-nav';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTag, setTags } from '../../redux/actions/tags';
import { setFilteredPromotions, setPromotions } from '../../redux/actions/promotions';

const Promotions = (props) => {
    const {tags, selectedTag} = useSelector(state => state.tagsReducer)
    const {promotions, selectedPromotion, filteredPromotions} = useSelector(state => state.promotionsReducer)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const dispatch = useDispatch()

    const getCarouselIndicators = (isClicked, selected, index, accessLabel)=>{
        return  <li
            onClick={()=>{selectedItemChanged(index)}}
            className={`dot ${index === selectedIndex ? "selected":selected}`}
            value={index}
            role="button"
            tabIndex="0"
            aria-label="slide item {i+1}"
            style={{backgroundColor:index === selectedIndex ? filteredPromotions[index].PromotionCardColor: "#D8D8D8"}}
            ></li>
    }

    const selectedItemChanged = (index,item)=>{
      setSelectedIndex(index)
    }

    const filterPromotions = (tag) => {
        let fPromotions = promotions;
        if(tag.Id !== "-1"){
            fPromotions = promotions.filter((promo)=>promo.Id === tag.Id);
        }

        dispatch(setFilteredPromotions(fPromotions))
        dispatch(setSelectedTag(tag))
        setSelectedIndex(0)
    }

    useEffect(async ()=>{
        dispatch(setTags())
        dispatch(setPromotions())
    },[])


    return (
        
      <div className="promotions" style={{ height:window.innerHeight}}>
          
        <div id='promotions-header-container' >
            <img src={Logo} alt="" />
           
            <div className='icon-container'>
                <button className='loginButton' >
                    Giriş Yap
                </button>
                <div style={{border:'2px solid white', 
                    width:12,
                    height:12 , 
                    borderRadius:'50%', 
                    backgroundColor:'#009639',
                    position:'relative',
                    left:44,
                }} ></div>
                <div className='user-icon-container' style={{
                    width:40,
                    height:40,
                    borderRadius:'50%',
                    backgroundColor:'#F40000',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img src={UserIcon} alt="" />
                </div>
                
            </div>
        </div>

        <div className='tags-container'>
            <div key={-1} className={`single-tag-container ${selectedTag.Id === "-1" && "selected_tag"}`} onClick={()=>{filterPromotions({Id:"-1"})}}>
                <img src={FirsatBul} className='tag-icon'/>
                <p className='tag-name'>Fırsat Bul</p>
            </div>

            {tags.map((tag,index)=>{
                var class_names = selectedTag.Id === tag.Id ? "selected_tag single-tag-container":"single-tag-container";
                return <div key={tag.Id} className={class_names} onClick={()=>{filterPromotions(tag)}}>
                    <img src={tag.IconUrl} className='tag-icon'/>
                    <p className='tag-name'>{tag.Name}</p>
                </div>
            })}
        </div>

        <div className='promotions-container' >

          {
            filteredPromotions.length > 0 ?
                (
                <Carousel
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={selectedIndex === 0 || selectedIndex===filteredPromotions.length-1 ?100: 80}
                showStatus={false}
                selectedItem={selectedIndex}
                renderIndicator={getCarouselIndicators}
                onChange={selectedItemChanged}>
                    {
                    filteredPromotions.map((promo,index)=>{return <Promotion promo={promo} key = {index}/>})
                    }
                </Carousel>
                )
            :
            <p className='noPromo'>Maalesef Gösterilecek Promosyon Yok!</p>
          }
        </div>
        <BottomNav />
    </div>
    );
  }

export default Promotions;
