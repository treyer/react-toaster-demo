import { InnerWrapper, Wrapper } from "./components";

import Header from "../../components/Header/Header";
import CodeDemo from "../../components/CodeDemo/CodeDemo";
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";
import Footer from "../../components/Footer/Footer";
import { ErrorBoundary } from "../../components/ErrorBoundary";

function MainLayout() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header />
      </InnerWrapper>
      <InnerWrapper>
        <main>
          <ErrorBoundary>
            <CodeDemo />
            <SettingsMenu />
          </ErrorBoundary>
        </main>
      </InnerWrapper>
      <InnerWrapper>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
}

export default MainLayout;
