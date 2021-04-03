const check = () =>{
    if(document.getElementById("text").value && document.getElementById("textDescription").value !== ""){
        takeValues();
    }else{
        alert("please add a task");
    }
};

const takeValues = () =>{
    let text = document.getElementById("text").value;
    let textDescription = document.getElementById("textDescription").value;

    let obj = {}, objs = [];
    obj.text = text;
    obj.textDescription = textDescription;
    objs.push({ obj:obj });
    console.log(obj);

    let list = document.getElementById("list");
    let label = document.createElement("label");
    label.setAttribute("id","label");
    let itemInList = document.createElement("li");
    itemInList.setAttribute("id","item");

    label.textContent = text;
    itemInList.textContent = textDescription;
    label.appendChild(itemInList);
    list.appendChild(label);
    document.body.appendChild(list);


    document.getElementById("text").value="";
    document.getElementById("textDescription").value="";
};