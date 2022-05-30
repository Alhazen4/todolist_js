var num = 0;

function addList() {
    
    var ul = document.getElementById("ul");
    var input = document.getElementById("input").value;

    const ck = document.createElement("input");
    ck.setAttribute("type", "checkbox");
    ck.setAttribute("id", "ck" + num);
    ck.setAttribute("onclick", "cek(" + num + ")");
    
    const lb = document.createElement("label");
    lb.setAttribute("id", "lb" + num);
    lb.setAttribute("for", "ck" + num);
    lb.innerHTML = input;
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.setAttribute("class", "span");

    const x = document.createTextNode("\u00D7");
    
    span.appendChild(x);
    span.setAttribute("class", "btn_x");
    span.setAttribute("id", "btn" + num);
    span.setAttribute("onclick", "rmv_func(" + num + ")");

    li.appendChild(ck);
    li.appendChild(lb);

    li.appendChild(span);
    ul.appendChild(li);
    num++;
}

function cek(i) {
    
    var ck = document.getElementById('ck' + i);
    var lb = document.getElementById('lb' + i);

    if (ck.checked == true)
    {
        lb.style.textDecoration = "line-through";
    }
    else
    {
        lb.style.textDecoration = "none";
    }
}

function rmv_func(j) {
    var ck = document.getElementById("ck" + j);
    ck.parentElement.style.display = "none";
}