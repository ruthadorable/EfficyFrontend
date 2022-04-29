
const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  var select= document.getElementsByTagName('select');
  const Module = class {
    constructor() {
  
    }
    start() {
        // Start modifying the form elements here!
        // You are allowed to add extra methods and properties to this class
        
        
        for ( let i =0;i<oppoStatus.length;i++)
        {
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(`${oppoStatus[i].STATUS}`);
            newOption.appendChild(optionText);
            newOption.setAttribute('value',optionText);
            select[0].appendChild(newOption);
        }
    }
  }
  
  const main = new Module();
  main.start();
  console.log("marche");

  function click()
  {
    var value = select[0].options[select[0].selectedIndex].value;
    console.log(value); 
    const output=document.getElementById("output");
    const text=document.createTextNode(value);
    output[0].replaceChild(text);
  
  }