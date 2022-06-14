function start_desighning(){
    name= document.getElementById("name").value ;
    localStorage.setItem("key_name",name);
    number= document.getElementById("number").value;
    localStorage.setItem("key_number",number)
    window.location= "next.html";
}