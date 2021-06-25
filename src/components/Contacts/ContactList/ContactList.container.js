import { connect } from 'react-redux';
import {
  phonebookOperations,
  phonebookSelectors,
} from '../../../redux/phonebook';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getFilteredContacts(state),
  isLoading: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onDeleteContact: phonebookOperations.deleteContact,
  getContacts: phonebookOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
