// --C- 1 --

document.getElementById('cardBtton-1').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog-korar jonno------

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('biyog-point').innerText = minus;

    // jog-korar-jonno----

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-1-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory1" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory1').style.display = 'none';
    })
})

function btn1Disabled() {
    document.getElementById('cardBtton-1').disabled = true;
}
// ---------------------C - 2 -----------------------------

document.getElementById('cardBtton-2').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog-korar-jonno

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('biyog-point').innerText = minus;

    // jog-korar jonno

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-2-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory2" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory2').style.display = 'none';
    })
})

function btn2Disabled() {
    document.getElementById('cardBtton-2').disabled = true;
}
// ---------------------C - 3 -----------------------------

document.getElementById('cardBtton-3').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog korar jonno

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('biyog-point').innerText = minus;

    // jog-korar jonno

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-3-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory3" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory3').style.display = 'none';
    })
})

function btn3Disabled() {
    document.getElementById('cardBtton-3').disabled = true;
}
// ---------------------C- 4 -----------------------------

document.getElementById('cardBtton-4').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog koarar jonno

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('biyog-point').innerText = minus;

    // jog korar jonno

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-4-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory4" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory4').style.display = 'none';
    })
})

function btn4Disabled() {
    document.getElementById('cardBtton-4').disabled = true;
}
// ---------------------C - 5 -----------------------------

document.getElementById('cardBtton-5').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog- korar jonno

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('biyog-point').innerText = minus;

    // jog korar jonno

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-5-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory5" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory5').style.display = 'none';
    })

})

function btn5Disabled() {
    document.getElementById('cardBtton-5').disabled = true;
}

 


// ---------------------C- 6 -----------------------------

document.getElementById('cardBtton-6').addEventListener('click', function () {
    alert('Board Update Successfully')



    // biyog korar jonno

    const taskAssi = document.getElementById('biyog-point').innerText;
    const convartedTask = parseFloat(taskAssi);
    const minus = convartedTask - 1;



    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }

    document.getElementById('biyog-point').innerText = minus;

    // jog koprar jonno

    const navBar = document.getElementById('nav-point').innerText;
    const convartedNavBar = parseFloat(navBar);
    const sum = convartedNavBar + 1;
    document.getElementById('nav-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity')

    const cardTitle1 = document.getElementById('c-6-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory6" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('popHistory6').style.display = 'none';
    })

})

function btn6Disabled() {
    document.getElementById('cardBtton-6').disabled = true;
}




