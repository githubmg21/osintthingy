
const iptextch = (e)=>{
    iprecon(e)
}
iprecon()

function iprecon(){
    document.getElementById('ipcards').innerHTML="";
    fetch("files/ipdata.json")
.then(response => {
   return response.json();
})
.then(ipdata => {
     ipdatas = ipdata;
    var dom = document.getElementById('ip_input').value;
    for (let index = 0; index < Object.keys(ipdatas).length; index++) {
        
        res = ipdatas[index].link.replace(/domainname/gi, dom? (dom):("You need to enter a domain name"));
        document.getElementById('ipcards').innerHTML += `<div class='subcard'>
        <a class="link" href="${res}" target="_blank" >
        <div class='test'>
        <img src="${ipdatas[index].img}"/>
        <p>${ipdatas[index].name}</p>
        
        </div></a>
        </div>`
    }
});
}