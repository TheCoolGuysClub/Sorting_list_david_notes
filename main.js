let button = document.getElementById("sort");
  button.addEventListener("click",function(){
    sortList();
  })

  let button2 = document.getElementById("sort2");
  button2.addEventListener("click",function(){
    sortListBothWay();
  })


  function sortList(){
    let elements = document.getElementById("list").getElementsByTagName("li");
    console.log(elements);

    let switching = true;
    let shouldSwitch = false;
    let i = 0;
    while (switching){
      switching = false;
      for(i = 0; i < elements.length-1; i++){
        shouldSwitch = false;
        if(elements[i].innerHTML.toLowerCase()> elements[i+1].innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      }
      if(shouldSwitch){
        elements[i].parentNode.insertBefore(elements[i+1],elements[i]);
          switching = true;
      }
    }
  }



   function sortListBothWay(){
    let elements = document.getElementById("list2").getElementsByTagName("li");
    console.log(elements);

    let switching = true;
    let shouldSwitch = false;
    let i = 0;

    let dir ="ascending";
    let switchcount = 0;

    while (switching){
      switching = false;
      for(i = 0; i < elements.length-1; i++){
        shouldSwitch = false;
        if(dir === "ascending"){
          if(elements[i].innerHTML.toLowerCase()> elements[i+1].innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
          }
        }else if (dir === "descending"){
          if(elements[i].innerHTML.toLowerCase()< elements[i+1].innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
          }
        }
      }
      if(shouldSwitch){
        elements[i].parentNode.insertBefore(elements[i+1],elements[i]);
          switching = true;
          switchcount ++;
      }else if(switchcount ===0 && dir === "ascending"){
        dir = "descending";
        switching = true;
      }
    }
  }




