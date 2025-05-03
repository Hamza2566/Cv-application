import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Cv from './components/Cv'

const education = {
  id: Date.now(),
  company: '',
  position: '',
  startYear: '',
  endYear: '',
};

function App() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone: '',
    linkedIn:'',
    photo:'',
    education:[
      {
        id: Date.now(),
    company: '',
    position: '',
    startYear: '',
    endYear: '',

      }],
    experience:[
      {
        id: Date.now(),
        company: '',
        position: '',
        startYear: '',
        endYear: '',
      },
    ],
    skill:[{
      skill:'',
    }]
   
    
    
  })
  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
  
    // Optional: log before change
    console.log("Before:", formData);
  
    if (type === 'file' && name === 'photo') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            photo: reader.result
          }));
          console.log("Photo uploaded:", reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      if (Object.values(formData).every(val => val === null || val === undefined || val === '')) {
        console.log("Form is empty or all fields are blank — adding the first field:", name, value);
        setFormData({
          [name]: value
        });
      } else {
        console.log("Form has values — updating field:", name, value);
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        console.log("After:", {
          ...formData,
          [name]: value
        });
      }
    }
  
    console.log(formData.photo); // Will log old value (because state updates are async)
  };
  
  

  return (
    <div className="container">
      {/* <Form handleinputChange={handleChange} formData={formData} setFormData={setFormData} /> */}
      <Form formData={formData} setFormData={setFormData} handleinputChange={handleChange}/>
      <Cv value={formData} />
    </div>

  )
}


export default App