import NavigationBar from "../components/NavigationBar";
import ContactForm from "../components/ContactForm";
const Contact=()=>{
return(
   <div>
    <NavigationBar/>
    <section>
        <h1 className="text-center">Contact Us Today</h1>
        <ContactForm/>
    </section>
   </div>
)
}

export default Contact;