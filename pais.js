//Data 
const countries = [
    {
      value:1,
      name:"Mexico",
      states:[
        {
          value:525580683980,
          name:"AGUASCALIENTES"
        },
        {
          value:525579614320,
          name:"BAJA CALIFORNIA"
        },

        {
          value:525579614320,
          name:"BAJA CALIFORNIA SUR"
        },
        {
          value:525580684679,
          name:"CAMPECHE"
        },
        {
          value:525579614396,
          name:"COAHUILA"
        },
        {
          value:525580230675,
          name:"CDMX - ZONA NORTE"
        },
        {
          value:525580230664,
          name:"CDMX - ZONA ORIENTE"
        },
        {
          value:525579614396,
          name:"CDMX - ZONA PONIENTE"
        },
        {
          value:525580683961,
          name:"CDMX - ZONA SUR"
        },
        {
          value:525580684679,
          name:"CHIAPAS"
        },
        {
          value:525579614320,
          name:"CHIHUAHUA"
        },
        {
          value:525580683980,
          name:"COAHUILA"
        },
        {
          value:525579614320,
          name:"COLIMA"
        },
        {
          value:525579614320,
          name:"DURANGO"
        },
        {
            value:525580230675,
            name:"ESTADO DE MÉXICO"
          },
          {
            value:525580683980,
            name:"GUANAJUATO"
          },
          {
            value:525580682224,
            name:"GUERRERO"
          },
          {
            value:525579614320,
            name:"DURANGO"
          },                                      
        {
          value:525580230675,
          name:"HIDALGO"
        },
        {
            value:525580683980,
            name:"JALISCO"
          },
          {
            value:525580683980,
            name:"MICHOACÁN"
          },
          {
            value:525580683961,
            name:"MORELOS"
          },
          {
            value:525580683980,
            name:"NAYARIT"
          },
          {
            value:525579614320,
            name:"NUEVO LEÓN"
          },
          {
            value:525580230655,
            name:"OAXACA"
          },
          {
            value:525580682224,
            name:"PUEBLA"
          },
          {
            value:525580683980,
            name:"QUERÉTARO"
          },
          {
            value:525580684679,
            name:"QUINTANA ROO"
          },
          {
            value:525580683980,
            name:"SAN LUIS POTOSÍ"
          },
          {
            value:525580683980,
            name:"SINALOA"
          },
          {
            value:525579614320,
            name:"SONORA"
          },
          {
            value:525580684679,
            name:"TABASCO"
          },
          {
            value:525580230655,
            name:"TAMAULIPAS"
          },
          {
            value:525580682224,
            name:"TLAXCALA"
          },
          {
            value:525580230655,
            name:"VERACRUZ"
          },
          {
            value:525580684679,
            name:"YUCATÁN"
          },
          {
            value:525580683980,
            name:"ZACATECAS"
          },          
      ]
    },
     {
      value:2,
      name:"Bolivia",
      states:[
        {
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
        },
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