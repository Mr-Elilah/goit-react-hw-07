import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "../../index.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactOps";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
