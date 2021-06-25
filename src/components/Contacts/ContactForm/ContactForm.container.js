import { connect } from 'react-redux';
import {
  phonebookOperations,
  phonebookSelectors,
} from '../../../redux/phonebook';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  allContacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onSubmit: phonebookOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
