//Data 
const countries = [
  {
    value:1,
    name:"México",
    states:[
      {
        value:525580683980,
        name:"Aguascalientes"
      },
      {
        value:525579614320,
        name:"Baja california"
      },

      {
        value:525579614320,
        name:"Baja california sur"
      },
      {
        value:525580684679,
        name:"Campeche"
      },
      {
        value:525579614396,
        name:"Coahuila"
      },
      {
        value:525580230675,
        name:"CDMX - zona norte"
      },
      {
        value:525580230664,
        name:"CDMX - zona oriente"
      },
      {
        value:525579614396,
        name:"CDMX - zona poniente"
      },
      {
        value:525580683961,
        name:"CDMX - zona sur"
      },
      {
        value:525580684679,
        name:"Chiapas"
      },
      {
        value:525579614320,
        name:"Chihuahua"
      },
      {
        value:525580683980,
        name:"Coahuila"
      },
      {
        value:525579614320,
        name:"Colima"
      },
      {
        value:525579614320,
        name:"Durango"
      },
      {
          value:525580230675,
          name:"Estado de México"
        },
        {
          value:525580683980,
          name:"Guanajuato"
        },
        {
          value:525580682224,
          name:"Guerrero"
        },
        {
          value:525579614320,
          name:"Durango"
        },                                      
      {
        value:525580230675,
        name:"Hidalgo"
      },
      {
          value:525580683980,
          name:"Jalisco"
        },
        {
          value:525580683980,
          name:"Michoacán"
        },
        {
          value:525580683961,
          name:"Morelos"
        },
        {
          value:525580683980,
          name:"Nayarit"
        },
        {
          value:525579614320,
          name:"Nuevo león"
        },
        {
          value:525580230655,
          name:"Oaxaca"
        },
        {
          value:525580682224,
          name:"Puebla"
        },
        {
          value:525580683980,
          name:"Querétaro"
        },
        {
          value:525580684679,
          name:"Quintana roo"
        },
        {
          value:525580683980,
          name:"San luis potosí"
        },
        {
          value:525580683980,
          name:"Sinaloa"
        },
        {
          value:525579614320,
          name:"Sonora"
        },
        {
          value:525580684679,
          name:"Tabasco"
        },
        {
          value:525580230655,
          name:"Tamaulipas"
        },
        {
          value:525580682224,
          name:"Tlaxcala"
        },
        {
          value:525580230655,
          name:"Veracruz"
        },
        {
          value:525580684679,
          name:"Yucatán"
        },
        {
          value:525580683980,
          name:"Zacatecas"
        },          
    ]
  },
   {
    value:2,
    name:"Bolivia",
    states:[
     /*  {
        value:591,
        name:"Santa Cruz"
      },
      {
        value:591,
        name:"Cochabamba"
      },
      {
        value:591,
        name:"La Paz"
      }, */
    ]
  },
  {
      value:3,
      name:"Colombia",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    },
    {
      value:3,
      name:"Chile",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    },
    {
      value:3,
      name:"Ecuador",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    },
    {
      value:3,
      name:"Guatemala",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    },
    {
      value:3,
      name:"Panamá",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    },
    {
      value:3,
      name:"Perú",
      states:[
/*           {
          value:591,
          name:"Santa Cruz"
        }, */
/*           {
          value:591,
          name:"Cochabamba"
        }, */
/*           {
          value:591,
          name:"La Paz"
        }, */
      ]
    }
]

// Bolivia, Colombia, Chile, Ecuador, Guatemala, México, Panamá y Perú


  //Defines variables
  let myModal = new bootstrap.Modal(document.getElementById("myModal"))
  let myInfo = new bootstrap.Modal(document.getElementById("prueba"))
  let dropdownStates = document.getElementById("dropdownStates")
  let dropdownCountries = document.getElementById("dropdownCountries")
  let ancleWord = document.getElementById("ancleWord")
  let state = document.getElementById('state')
  
  //On load the page
 window.onload = () => {
   /* myModal.show() */
    fillDropdownCountries()
    fillDropdownStates(countries[0])
  } 
  
  function openModal() {
    myModal.show()
  }

  function openInfo() {
    myInfo.show()
  }
  
  //Event that verify the dropdown
  dropdownStates.addEventListener("change", (e) => {
    let numbers = parseInt(e.target.value)
    let stateWord= e.target.selectedOptions[0].text;
    //Change the state in description
    if(stateWord ==='Estado')
      state.innerText= 'Mexico'
    else
      state.innerText= stateWord
    if(numbers ===0) return
    //Change the href and hide the modal
    let link = `https://wa.me/${numbers}?text=¡Hola!, me gustaría conocer más sobre la HONOR MagicBook X 14.`
    ancleWord.setAttribute("href", link)
    window.open(link)
    myModal.hide()
  });
  
  //Event that verify the dropdown Countries
  dropdownCountries.addEventListener("change", (e) => {
    let country = e.target.selectedOptions[0].text;
    let arrStates = countries.find(e =>e.name == country)
    fillDropdownStates(arrStates)
  })
  
  
  
  //Dropdown Country
  function fillDropdownCountries(){
    countries.map(country =>{
      let option = new Option(country.name, country.value)
      dropdownCountries.appendChild(option)
    })
  }
  
  //Dropdown States
  function fillDropdownStates(arrStates = []){
    dropdownStates.textContent = ""
    let firstOption = new Option("Selecciona un estado", "000")
    dropdownStates.appendChild(firstOption)
    arrStates.states.map(state =>{
      let option = new Option(state.name, state.value)
      dropdownStates.appendChild(option)
    })
  }