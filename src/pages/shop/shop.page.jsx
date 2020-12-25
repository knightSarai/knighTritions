import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
/* REDUX */
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import {updateCollectionsAsync} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner';
import CollectionOverview from '../../components/collection-overview';
import CollectionPage from '../collection';
import './shop.styles.scss';

const WithSpinnerCollectionOverView= WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage); 

function ShopPage({match, updateCollectionsAsync, isLoading}) {
    useEffect(() => {
        updateCollectionsAsync()
    
    },[updateCollectionsAsync]);

    return (
        <div className="shop-page container">
            <Route exact path={`${match.path}`} render={(props)=> <WithSpinnerCollectionOverView isLoading={isLoading} {...props} />} />
            <Route  path={`${match.path}/:collectionId`} render={(props) => <WithSpinnerCollectionPage isLoading={isLoading} {...props} />} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

export default connect(mapStateToProps, {updateCollectionsAsync})(ShopPage);