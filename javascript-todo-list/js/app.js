const toggleButton = (ref, btnID) =>  {
    document.getElementById(btnID).disabled = false;
}

const addItem = (e) => {

    e.preventDefault();

    if(submit.value != "Submit"){
        editItem.target.parentNode.childNodes[0].data = document.getElementById('item').value;

        submit.value = "Submit";    

        document.getElementById("item").value = "";

        document.getElementById("lblsuccess").innerHTML
            = "Text edited successfully";
            
        document.getElementById("lblsuccess").style.display = "block";

        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);

        return false;

    }

    let newItem = document.getElementById('item').value;

    if(newItem.trim() == "" || newItem.trim() == null) {
        return false
    }
    else {

        document.getElementById('item').value = "";
        
        let li = document.createElement("li");
        li.className = "list-group-item";

        let editBtn = document.createElement("button");
        editBtn.className = "btn-success btn btn-sm float-right edit";
        editBtn.appendChild(document.createTextNode("Edit"));

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-danger btn btn-sm float-right mx-2 delete";
        deleteBtn.appendChild(document.createTextNode("Delete"));

        li.appendChild(document.createTextNode(newItem));
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);    

        items.appendChild(li);

    }
    
}

const deleteItem = (e) => {

    e.preventDefault();

   if(e.target.classList.contains("delete")){
        if(confirm("Are you sure you want to delete ?")){
           let li = e.target.parentNode;
           items.removeChild(li);

           document.getElementById("lblsuccess").innerHTML = " Text Deleted successfully";
           document.getElementById("lblsuccess").style.display = "block";

           setTimeout(() => {
            document.getElementById("lblsuccess").style.display = "none";
           }, 3000);
          
        }
   }

   if(e.target.classList.contains("edit")){
        // console.log(e.target.parentNode.childNodes[0].data);
        document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
        submit.value = "Update";
        editItem = e;
   }

}
    
window.onload = () => {

    const form1 = document.querySelector('#addForm')

    let items = document.getElementById('items');
    let submit = document.getElementById('submit');

    let editItem = null;

    form1.addEventListener("submit" , addItem);
    items.addEventListener("click" , deleteItem);

}