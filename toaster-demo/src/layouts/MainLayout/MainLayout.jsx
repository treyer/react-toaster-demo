import { InnerWrapper, Wrapper } from "./components";

import Header from "../../components/Header/Header";
import CodeDemo from "../../components/CodeDemo/CodeDemo";
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header />
      </InnerWrapper>
      <InnerWrapper>
        <main>
          <CodeDemo />
          <SettingsMenu />
        </main>
      </InnerWrapper>
      <InnerWrapper>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
}

export default MainLayout;
