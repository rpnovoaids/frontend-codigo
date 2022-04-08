import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faStar} from '@fortawesome/free-solid-svg-icons';
import '../styles/css/Reviews.css';
import avatar1 from '../assets/avatars/avatar-1.png';
import avatar2 from '../assets/avatars/avatar-2.png';
import avatar3 from '../assets/avatars/avatar-3.png';


const Reviews = () => {
    return ( 
        <section className="reviews">
            
            <div className="reviews-container">
                <h2 className='reviews__title'>Reviews</h2>
                <div className="reviews__border"></div>

                <div className="reviews__reviews-container">
                    <div className="reviews__reviews-review">
                        <div className="reviews__reviews-review__testimonials">
                            <img className='reviews__reviews-review__photo' src={avatar1} alt="" />
                            <div className="reviews__reviews-review__name">
                                Laura Escalante
                            </div>
                            <div className="reviews__reviews-review__stars">
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />

                            </div>
                            <p className='reviews__reviews-review__description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur debitis animi error delectus labore modi eaque odit dicta doloremque? Rem facilis suscipit vel libero obcaecati, magni nisi eveniet assumenda quos?
                            </p>
                        </div>
                    </div>


                    <div className="reviews__reviews-review">
                        <div className="reviews__reviews-review__testimonials">
                            <img className='reviews__reviews-review__photo' src={avatar2} alt="" />
                            <div className="reviews__reviews-review__name">
                                Jorge Muñoz
                            </div>
                            <div className="reviews__reviews-review__stars">
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />

                            </div>
                            <p className='reviews__reviews-review__description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur debitis animi error delectus labore modi eaque odit dicta doloremque? Rem facilis suscipit vel libero obcaecati, magni nisi eveniet assumenda quos?
                            </p>
                        </div>
                    </div>

                    <div className="reviews__reviews-review">
                        <div className="reviews__reviews-review__testimonials">
                            <img className='reviews__reviews-review__photo' src={avatar3} alt="" />
                            <div className="reviews__reviews-review__name">
                                Alexandra Flores
                            </div>
                            <div className="reviews__reviews-review__stars">
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />

                            </div>
                            <p className='reviews__reviews-review__description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur debitis animi error delectus labore modi eaque odit dicta doloremque? Rem facilis suscipit vel libero obcaecati, magni nisi eveniet assumenda quos?
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>


     );
}
 
export default Reviews;