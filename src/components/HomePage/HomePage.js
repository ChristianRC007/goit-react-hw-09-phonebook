import Container from '../Container';

import './HomePage.scss';

function HomePage() {
  return (
    <Container>
      <h1 className="title">The PhoneBook</h1>
      <p className="title__text">
        the <span className="title__word">simplest</span> phone book you can
        ever get
      </p>
      <a className="title__link" href="https://github.com/ChristianRC007">
        github.com/ChristianRC007
      </a>
    </Container>
  );
}

export default HomePage;
