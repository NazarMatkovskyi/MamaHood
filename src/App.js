import Form from "./components/form/Form";
import Header from "./components/header/Header";

import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import Support from "./components/support/Support";
import Training from "./components/training/Training";
import FooterOne from "./components/footerOne/FooterOne";
import Footer from "./components/footer/Footer";
// import Training from "./components/training/Training";


function App() {
  return (
    <div >
            <Navbar />
            <Header />
            <Support />
            <Training/>
            <Post />
            <FooterOne />
            <Form />
            <Footer />
    </div>
  );
}

export default App;
