 function getFormvalue(event) {
      event.preventDefault(); 
      const form =  event.target;
      const fname = form.fname.value.trim();
      const lname = form.lname.value.trim();
      alert(`${fname} ${lname}`);
      return false; 
    }
