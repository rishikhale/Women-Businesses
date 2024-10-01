import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular services in and around</span> <span className={css.bld}> Mumbai</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Ghatkopar" count="20" link='/jubileehills' />
            <PlacesCard place="Dadar" count="25" link='/jubileehills' />
            <PlacesCard place="Thane" count="17" link='/jubileehills' />
            <PlacesCard place="Worli" count="12" link='/jubileehills' />
            <PlacesCard place="Borivali" count="31" link='/jubileehills' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;