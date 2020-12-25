import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../WithSpinner';
import CollectionOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);