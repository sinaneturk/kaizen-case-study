import {useNavigate} from "react-router-dom"
import DOMPurify from "dompurify";

function Promotion({promo}) {
    const navigate = useNavigate();
console.log("p=>", promo)
    function goToDetails(promo){
        navigate(`campaign/${promo.SeoName}/${promo.Id}`, { state: { promoId: promo.Id } })
    }

    const cleanPromoTitle= DOMPurify.sanitize( promo.Title, {
        USE_PROFILES: { html: true },
      });

    return (
    <div className='single-promotion-container' onClick={()=> {goToDetails(promo)}}>
        <div className='promo-image-logo-remainingTet-container'>
            <img src={promo.ImageUrl} className='promo-image'/>
            <div className='promo-brand-tet-container'>
                <img src={promo.BrandIconUrl}/>
                <p className='promo-remaining-tet'>{promo.RemainingText}</p>
            </div>
        </div>

        <div className='promo-title-container'>
            <div className="promoTitleDiv" dangerouslySetInnerHTML={{ __html: cleanPromoTitle }} />
    
            <p className='daha-daha-link' style={{color:promo.PromotionCardColor}} >Daha Daha</p>
        </div>

        <div className='promo-color' style={{backgroundColor:promo.PromotionCardColor}}></div>
    </div>
)
} 

export default Promotion