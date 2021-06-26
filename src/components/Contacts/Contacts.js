import { phonebookSelectors } from '../../redux/phonebook';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from '../Container';
import Modal from '../Modal';

export default function Contacts() {
  const { isOpen } = useSelector(phonebookSelectors.getEditorValues);
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
      {isOpen && <Modal />}
    </Container>
  );
}
