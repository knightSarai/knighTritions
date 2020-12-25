import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/WithSpinner';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)