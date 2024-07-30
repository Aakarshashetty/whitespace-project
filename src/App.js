import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";


function App() {
  return (
    <div className="bg-primary-color-one text-white h-auto">
      <div>
       <Header/>
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
      </div>
    </div>
  );
}

export default App;
