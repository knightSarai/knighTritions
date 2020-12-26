import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
/* REDUX */
import {connect} from 'react-redux';
import {updateCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';
import './shop.styles.scss';


function ShopPage({match, updateCollectionsStart}) {
    useEffect(() => {
        updateCollectionsStart()
    
    },[updateCollectionsStart]);

    return (
        <div className="shop-page container">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}



export default connect(null, {updateCollectionsStart})(ShopPage);