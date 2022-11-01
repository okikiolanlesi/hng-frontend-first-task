import "./App.css";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Hero>
        <img src="/images/profile__img.jpg" alt="profile pic" />
        <h2>Annette Black</h2>
      </Hero>
      <ShareButton>
        <img src="/images/_Avatar share button.png" alt="profile pic" />
      </ShareButton>
      <Links>
        <a href="https://twitter.com/okikiolanlesi?t=FikTfuYaY3XrXy_PLJ6U-w&s=09">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href="http://books.zuri.team">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Okikiola">
          Python Books Link
        </a>
        <a href="https://background.zuri.team">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </Links>
      <SocialLinks>
        <img src="/images/slack.png" alt="slack" />
        <img src="/images/Social icon.png" alt="github" />
      </SocialLinks>
      <Footer>
        <img src="/images/Zuri.Internship_Logo.png" alt="Zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src="/images/I4G.png" alt="I4G logo" />
      </Footer>
    </div>
  );
}

export default App;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
const ShareButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  a {
    border-radius: 0.3rem;
    background-color: #eaecf0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    text-align: center;
    text-decoration: none;
    color: #101828;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  img {
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 0.3rem;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eaecf0;
  p {
    font-size: 0.9rem;
    color: #667085;
  }
  img {
    max-width: 150px;
    max-height: 150px;
    margin: 1rem 0;
    @media (max-width: 320px) {
      margin: 0.5rem 0;
    }
  }
  @media (max-width: 642px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
