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
    let objstr = JSON.stringify(obj)
    localStorage.setItem(Description,objstr)
    add(obj)
}

function add(obj){
    let parentNode = document.getElementById('items')
    let childHTML = `<li id=${obj.Description}>${obj.expense} ${obj.cat} ${obj.Description}
                    <button onclick = remove('${obj.Description}')>delete</button>
                    <button onclick = edit('${obj.expense}','${obj.cat}','${obj.Description}')>Edit</button>
                    </li>`
    parentNode.innerHTML= parentNode.innerHTML + childHTML
}
// function add(obj){
//     let parentNode = document.getElementById('items')
//     const child = document.createElement('li')
// }
//deleting
function remove(Description){
    localStorage.removeItem(Description)
    console.log(Description)
    removefromscreen(Description)
}
//removing
function removefromscreen(Description){
    const parentNode = document.getElementById('items');
    const childNode = document.getElementById(Description)
    parentNode.removeChild(childNode);
}

function edit(expense,cat,Description){
    document.getElementById('expense').value=expense
    document.getElementById('cat').value=cat
    document.getElementById('description').value=Description
    removefromscreen(Description)
}