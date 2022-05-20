
const domtextch = (e)=>{
    domrecon(e)
}
domrecon()

function domrecon(){
    document.getElementById('domcards').innerHTML="";
    fetch("files/domdata.json")
.then(response => {
   return response.json();
})
.then(domdata => {
     domdatas = domdata;
    var dom = document.getElementById('dom_input').value;
    for (let index = 0; index < Object.keys(domdatas).length; index++) {
        
        res = domdatas[index].link.replace(/domainname/gi, dom? (dom):("You need to enter a domain name"));
        document.getElementById('domcards').innerHTML += `<div class='subcard'>
        <a class="link" href="${res}" target="_blank" >
        <div class='test'>
        <img src="${domdatas[index].img}"/>
        <p>${domdatas[index].name}</p>
        
        </div></a>
        </div>`
    }
});
}