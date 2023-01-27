import React, { useRef, useState } from 'react'




export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const inptN = useRef();
  const inptNm = useRef();
  const inptV = useRef();

  const fun = () => {
    const v_nom = inptN.current.value;
    const v_nm = inptNm.current.value;
    const v_v = inptV.current.value;
    setContacts([...contacts, { name: v_nom, number: v_nm, city: v_v }]);
    inptN.current.value = "";
    inptNm.current.value = "";
    inptV.current.value = "";

  }
  const funDelete = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
  const afficher = () => {
    document.getElementById("aff").style = "dispaly:block"
  }
  const funSort = () => {
    const sortedContacts = contacts.slice().sort((a, b) => a.city.localeCompare(b.city));
    setContacts(sortedContacts);
  }
  const [searchCity, setSearchCity] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = () => {
    const filtered = contacts.filter(contact => contact.city.toLowerCase().includes(searchCity.toLowerCase()));
    setFilteredContacts(filtered);



  }


  return (
    <div id="div_prn">
      <div id="div1">
        <h1 id="title">Contact Us </h1>
        <input type="text" placeholder='Enter Name :' ref={inptN} className="form-control" ></input><br />
        <input type="text" placeholder='Enter Number :' ref={inptNm} className="form-control"></input><br />
        <input type="text" placeholder='Enter City :' ref={inptV} className="form-control"></input><br />
        <input type="button" value="+ add contact" onClick={fun} className='button'></input> <br />
      </div><br /><br />
      <div id="div2">
        <input type="button" value="afficher les contacts" onClick={afficher} className='btn-shw'></input>
        <input type="button" onClick={funSort} className='btn-shw' value="number alphabitic "></input><br /><br />
        <input type="text" className="form-control" placeholder='chercher par city' onChange={e => setSearchCity(e.target.value)} ></input><br />
        <button onClick={handleSearch} className='btn-shr'>Search</button>
        {

          filteredContacts.map((el, i) => (
            <div key={i}>
              {el.name} {el.number} {el.city}
            </div>
          ))
        }
      </div><br />
      <div style={{ display: 'none' }} id="aff" className='abdo'>
        {
          contacts.map((el, i) => (
            <div key={i + el.name}>{el.name} {el.number} {el.city}
              <button onClick={() => funDelete(i)} className='btn-shr'>Delete</button>
            </div>
          ))}
      </div>
    </div>
  )
}