
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.promotion-details.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setPromotionDetail } from '../../redux/actions/promotions';
import DOMPurify from "dompurify";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";



const  PromotionDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedPromotion } = useSelector(state=>state.promotionsReducer);
  const {state} = useLocation();
  const { promoId } = state;
console.log("SELE=>", selectedPromotion)
  const cleanPromoTitle= DOMPurify.sanitize( selectedPromotion.Title, {
    USE_PROFILES: { html: true },
  });

  const cleanPromoDescription = DOMPurify.sanitize( selectedPromotion.Description, {
    USE_PROFILES: { html: true },
  });

  const cleanPromoParticipaitonText= DOMPurify.sanitize( selectedPromotion.BrandPromotionCardParticipationText, {
    USE_PROFILES: { html: true },
  });

  const goBack = () => {
    navigate(-1)
  }

  useEffect( ()=>{
    dispatch(setPromotionDetail(promoId))
  },[])

  
  let content_height = window.innerHeight - 60 ;//60 for btn heeight 20 for btn's margin-bottom
  return (
    <div className="promotion-details">
      <div className="backButton">
        <BsFillArrowLeftCircleFill
        onClick={goBack}
        size={30}
          style={{
          position:"absolute",
          left:10,
          top:15,
          zIndex:4

        }}/>
      </div>
      <div className='content-area' style={{ height:content_height,  overflowY: 'scroll', }}>

        <div className='image-container'>
          <img src={selectedPromotion.ImageUrl} className='image'/>
        </div>

        <div className='remaining-and-icon-container'>
          <img src={selectedPromotion.BrandIconUrl} className='icon'/>
          <p className='remaining-text' >{selectedPromotion.RemainingText}</p>
        </div>

        <div className='title-container' dangerouslySetInnerHTML={{ __html: cleanPromoTitle }} />

        <div className='description-container' dangerouslySetInnerHTML = {{__html:cleanPromoDescription}} />
      
      </div>

      <div className='hemen-katil-container'>
        <button className='hemen-ketil-button' dangerouslySetInnerHTML = {{__html:cleanPromoParticipaitonText}}/>
       
      </div>
    </div>
  );
    
  }

export default PromotionDetails;
