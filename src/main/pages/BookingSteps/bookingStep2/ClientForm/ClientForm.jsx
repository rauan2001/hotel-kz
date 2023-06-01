import React, { useState } from "react";
import axios from "axios";
import "./ClientForm.scss";
const ClientForm = ({ onClientSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/client", formData);
      const clientId = res.data.id;
      onClientSubmit(clientId);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="form-3" onSubmit={handleSubmit}>
      <label htmlFor="name">Фамилия</label>
      <input type="text"  id="name"  name="lastname" value={formData.lastname} onChange={handleChange} required/>
    <label htmlFor="name">Имя</label>
      <input   type="text" id="name" name="firstname" value={formData.firstname} onChange={handleChange} required />
      <label htmlFor="email">Эл.почта</label>
      <input  type="email"  id="email" name="email" value={formData.email}  onChange={handleChange}  required />
      <label htmlFor="phone">Телефон</label>
      <input  type="tel"   id="phone"  name="number"  value={formData.number}  onChange={handleChange}  required
      />
      <button type="submit">Заполнить</button>
    </form>
  );
};

export default ClientForm;
