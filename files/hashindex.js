
const hashtextch = (e)=>{
    hashrecon(e)
}
hashrecon()

function hashrecon(){
    document.getElementById('hashcards').innerHTML="";
    fetch("files/hashdata.json")
.then(response => {
   return response.json();
})
.then(hashdata => {
     hashdatas = hashdata;
    var dom = document.getElementById('hash_input').value;
    for (let index = 0; index < Object.keys(hashdatas).length; index++) {
        
        res = hashdatas[index].link.replace(/domainname/gi, dom? (dom):("You need to enter a domain name"));
        document.getElementById('hashcards').innerHTML += `<div class='subcard'>
        <a class="link" href="${res}" target="_blank" >
        <div class='test'>
        <img src="${hashdatas[index].img}"/>
        <p>${hashdatas[index].name}</p>
        
        </div></a>
        </div>`
    }
});
}