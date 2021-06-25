import { connect } from 'react-redux';
import { phonebookActions, phonebookSelectors } from '../../../redux/phonebook';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
