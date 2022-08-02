const btn= document.getElementById('btn').addEventListener('click',adding)

function adding(e){
    e.preventDefault();
    let expense = document.getElementById('expense').value
    let Description = document.getElementById('description').value
    let cat = document.getElementById('cat').value

    let obj={
        Description : Description,
        cat : cat,
        expense : expense
    }
    axios.post('https://crudcrud.com/api/307637b61d654f9491f2065a99ebf28d/expenses',obj)
    .then((response)=>{
        add(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function add(u){
    let parentNode = document.getElementById('items')
    let childHTML = `<li id=${u._id}>${u.expense} ${u.cat} ${u.Description}
                    <button onclick = remove('${u._id}')>delete</button>
                    <button onclick = edit('${u.expense}','${u.cat}','${u.Description}')>Edit</button>
                    </li>`
    parentNode.innerHTML= parentNode.innerHTML + childHTML
}
function remove(userid){
    localStorage.removeItem(userid)
    axios.delete(`https://crudcrud.com/api/307637b61d654f9491f2065a99ebf28d/expenses/${userid}`)
    removefromscreen(userid)
}
//loading on screen

window.addEventListener('DOMContentLoaded',()=>{

    axios.get('https://crudcrud.com/api/307637b61d654f9491f2065a99ebf28d/expenses')
            .then((response)=>{
                for(let i=0;i<response.data.length;i++){
                    add(response.data[i])
                }
            } )
            .catch(err=>console.log(err))
})
//removing
function removefromscreen(userid){
    const parentNode = document.getElementById('items');
    const childNode = document.getElementById(userid)
    parentNode.removeChild(childNode);
}

function edit(expense,cat,Description){
    document.getElementById('expense').value=expense;
    document.getElementById('cat').value=cat;
    document.getElementById('description').value = Description;
    remove(userid)
    axios.post(`https://crudcrud.com/api/307637b61d654f9491f2065a99ebf28d/expenses/${userid}`,{
        fname : fname,
        Phone : Phone,
        emailid : emailid
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
