import Footer from "../component/footer_components/footer";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";
import TopBar from "../component/header_component/topbar";
import ContactUs from "../component/contactus/contact_us";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { ProductProvider } from "../hooks/useProductContext";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.3434,
  lng: 80.7718,
};

const ContactPage = () => {
  return (
    <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <ContactUs />
      <LoadScript googleMapsApiKey={import.meta.env.VITE_API_URL}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <Newsletter />
      <Footer />
    </ProductProvider>
  );
};

export default ContactPage;
