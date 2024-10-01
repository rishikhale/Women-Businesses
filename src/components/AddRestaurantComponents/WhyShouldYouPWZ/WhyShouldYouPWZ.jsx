import globIcon from '/icons/glob.png'
import calenderIcon from '/icons/calenderIcon.png'
import restaurantIcon from '/icons/restaurantIcon.png'

import Card4 from '../../../utils/Cards/card4/Card4'

import css from './WhyShouldYouPWZ.module.css';

let WhyShouldYouPWZ = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Why should you partner with us?</div>
            <div className={css.tagLine}>We enable  you to get more revenue,boost women businesses.</div>
            <div className={css.cards}>
                <Card4 imgSrc={globIcon} title="500+ cities" tagLine="in India" />
                <Card4 imgSrc={calenderIcon} title="2.5 lakhs+" tagLine="restaurant listings" />
                <Card4 imgSrc={restaurantIcon} title="4 crore+" tagLine="monthly orders" />
            </div>
        </div>
    </div>
}

export default WhyShouldYouPWZ;