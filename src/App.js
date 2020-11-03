import "./App.css";
import HeaderComponent from "./components/headerComp";
import SliderComponent from "./components/sliderComp";
import SidebarComponent from "./components/sidebarComp";
import TestComponent from "./components/testComp";
import FooterComp from "./components/footerComp";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SliderComponent />
      <div className="center">
        <section id="content">
          {/*Sendind prop */}
          <TestComponent title="Test Title Prop" />
        </section>
        <SidebarComponent />
        <div className="clearfix"></div>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
