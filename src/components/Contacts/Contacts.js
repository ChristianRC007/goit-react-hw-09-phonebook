import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from '../Container';

export default function Contacts() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
