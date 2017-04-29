

    
    const form = document.getElementById('registrar');
    const input = form.querySelector('input');
    
    const mainDiv= document.querySelector('.main');
     const ul = document.getElementById('invitedList');
    
    //create filter div
    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckbox=document.createElement('input');
    
    filterLabel.textContent = "Hide those who haven't responded";
    filterCheckbox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);
    filterCheckbox.addEventListener('change', (e) => {
      //check to see if the box is checked
      const isChecked = e.target.checked;
      const lis = ul.children;
      if(isChecked) {
        for (let i = 0; i < lis.length; i++) {
          let li = lis[i];
          if(li.className === 'responded'){
              li.style.display = '';
          } else {
            li.style.display = 'none';                        
          }
        }
      } else {
        for (let i = 0; i < lis.length; i++) {
          let li = lis[i];
          li.style.display= ''; 
        }                         
      }
    });
    
    
    //create list items 
    function createLI(text) {
      
      function createElement (elementName, property, value) {
       const element = document.createElement(elementName);
       element[property] = value;
       return element;
      }
      
      function appendToLI(elementName, property, value){
         const element = createElement(elementName, property, value);
      li.appendChild(element);
        return element;
      }
      
       const li = document.createElement('li');
      appendToLI('span', 'textContent', text);
      appendToLI('label', 'textContent',            'Confirmed')
      .appendChild(createElement('input','type', 'checkbox'));
       appendToLI('button','textContent','Edit');
      appendToLI('button','textContent','remove');
        return li;
      
    };
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value;
      input.value = '';
      const li = createLI(text);
      ul.appendChild(li);
//      if (text ===''){
//        alert('please enter a valid name');
//        
//      }
    });
      
    ul.addEventListener('change' , (e) =>{
      const checkbox = event.target;
      const checked = checkbox.checked;
      const listItem = checkbox.parentNode.parentNode;
      
      if(checked) {
        listItem.className = 'responded';
      }else {
        listItem.className = '';
      }
      
    });
      
      //click handler to delete names
      
    ul.addEventListener('click' , (e) => {
      if(e.target.tagName === 'BUTTON'){
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const action = button.textContent.toLowerCase();
        const nameActions = {
          remove: () => {
          ul.removeChild(li);
          },
          edit:  () => {
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input,span);
          li.removeChild(span);
          button.textContent = 'save';
          },
          save:  () => {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent =input.value;
            li.insertBefore(span,input);
            li.removeChild(input);
            button.textContent = 'edit';
          }
        }
     // select and run action in button's name
        nameActions[action]();  
      
       
      }
    });  

    
  