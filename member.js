class Info {
    constructor(id, name, dob, phone, email, onboard, teamCode) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.onboard = onboard;
        this.teamCode = teamCode;
    }
}

let infors = [];

const info_data = "info_data";
function init() {
    if (localStorage.getItem(info_data) == null) {
        infors = [
            new Info(1, 'Phương Thảo', '1993-12-20', '0934500914', 'pthao@gmail.com', '1993-12-20', 'fe'),
            new Info(2, 'Thanh Tiến', '1993-12-20', '0344130980', 'ttien@gmail.com', '1993-12-20', 'unity'),
            new Info(3, 'Văn Tài', '1993-12-20', '0914783868', 'vtai@gmail.com', '1993-12-20', 'unity'),
            new Info(4, 'Quỳnh Như', '1993-12-20', '0975584814', 'qnhu@gmail.com', '1993-12-20', 'office'),
            new Info(5, 'Anh Tuấn', '1993-12-20', '0376657371', 'atuan@gmail.com', '1993-12-20', 'be'),
            new Info(6, 'Thanh Xuân', '1993-12-20', '0907192975', 'txuan@gmail.com', '1993-12-20', 'qa'),
            new Info(7, 'Đức Biên', '1993-12-20', '0869181745', 'dbien@gmail.com', '1993-12-20', 'fe'),
            new Info(8, 'Thúy Vy', '1993-12-20', '0979071150', 'tvy@gmail.com', '1993-12-20', 'brse'),
            new Info(9, 'Daiki Machida', '1993-12-20', '0344691403', 'daiki@gmail.com', '1993-12-20', 'office'),
            new Info(10, 'Quốc Bảo', '1993-12-20', '0902725724', 'qbao@gmail.com', '1993-12-20', 'be'),
        ]
        localStorage.setItem(info_data, JSON.stringify(infors));
    } else {
        infors = JSON.parse(localStorage.getItem(info_data));
    }
}

let teams = [
    {
        code: "be",
        name: "Back End"
    },
    {
        code: "fe",
        name: "Front End"
    },
    {
        code: "qa",
        name: "Quality Assurance"
    },
    {
        code: "brse",
        name: "Bridge Engineer"
    },
    {
        code: "unity",
        name: "Unity"
    },
    {
        code: "office",
        name: "Office"
    }
]

let inforIdUpdate;

function renderInfor() {
    let tbInfor = document.getElementById('tbInfor');
    tbInfor.innerHTML = "";
    for (let i = 0; i < infors.length; i++) {
        let team = findTeamByCode(infors[i].teamCode);
        tbInfor.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${infors[i].name}</td>
            <td>${infors[i].dob}</td>
            <td>${infors[i].phone}</td>
            <td>${infors[i].email}</td>
            <td>${infors[i].onboard}</td>
            <td>${team.name}</td>
            <td><button class="edit" onclick="handleEditClick(${infors[i].id})">edit</button> / <button class="edit" onclick="handleDeleteClick(${infors[i].id})">delete</button></td>
        </tr>
        `
    }
}

function addInfo() {
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let onboard = document.getElementById('onboard').value;
    let code = document.getElementById('team').value;

    if (name == "" || dob == "" || phone == "" || email == "" || onboard == "" || code == "") {
        alert('You need to provide information');
    } else {
        let maxIdInfo = findMaxIdInfo();
        let id;
        if (maxIdInfo == null) {
            id = 1;
        } else {
            id = maxIdInfo.id + 1;
        }
        let newInfo = new Info(id, name, dob, phone, email, onboard, code);
        infors.push(newInfo);
        localStorage.setItem(info_data, JSON.stringify(infors));
        renderInfor();
    }
    // constructor(id, name, dob, phone, email, onboard, team) {
}

function findTeamByCode(code) {
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].code == code) {
            return teams[i];
        }
    }
    return null;
}

function findMaxIdInfo() {
    if (infors.length == 0) {
        return null;
    } else {
        let max = infors[0].id;
        let indexMax = 0; // vi tri có id lớn nhất
        for (let i = 1; i < infors.length; i++) {
            if (infors[i].id > max) {
                max = infors[i].id;
                indexMax = i;
            }
        }
        return infors[indexMax];
    }
}
function findInfoById(inforId) {
    for (let i = 0; i < infors.length; i++) {
        if (infors[i].id == inforId) {
            return infors[i];
        }
    }
    return null;
}

function handleEditClick(inforId) {

    inforIdUpdate = inforId;
    let info = findInfoById(inforId);
    console.log(info);
    document.getElementById('name').value = info.name;
    document.getElementById('dob').value = info.dob;
    document.getElementById('phone').value = info.phone;
    document.getElementById('email').value = info.email;
    document.getElementById('onboard').value = info.onboard;
    document.getElementById('team').value = info.teamCode;

    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("btnUpdate").style.display = "block";
    document.getElementById("btnCancel").style.display = "block";
    localStorage.setItem(info_data, JSON.stringify(infors));
    renderInfor();
}

function handleDeleteClick(inforId) {
    let check = confirm('Are you sure?' + inforId);
    if (check == true) {
        let indexInfo = findIndexInforById(inforId);
        infors.splice(indexInfo, 1);
        localStorage.setItem(info_data, JSON.stringify(infors));
        renderInfor();
    }
}
function findIndexInforById(inforId) {
    for (let i = 0; i < infors.length; i++) {
        if (infors[i].id == inforId) {
            return i;
        }
    }
    return -1;
}

function updateInfo() {
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let onboard = document.getElementById('onboard').value;
    let code = document.getElementById('team').value;
    if (name == "" || dob == "" || phone == "" || email == "" || onboard == "" || code == "") {
        alert('You need to provide information');
    } else {
        let i = findIndexInforById(inforIdUpdate);

        infors[i].name = name;
        infors[i].dob = dob;
        infors[i].phone = phone;
        infors[i].email = email;
        infors[i].onboard = onboard;
        infors[i].teamCode = code;

        localStorage.setItem(info_data, JSON.stringify(infors));
        renderInfor();

        document.getElementById('name').value = "";
        document.getElementById('dob').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('onboard').value = "";
        document.getElementById('team').value = "";
        document.getElementById("btnAdd").style.display = "block";
        document.getElementById("btnUpdate").style.display = "none";
        document.getElementById("btnCancel").style.display = "none";
    }
}

function cancelInfo() {
    let check = confirm('Are you sure?');
    if (check == true) {
        document.getElementById('name').value = "";
        document.getElementById('dob').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('onboard').value = "";
        document.getElementById('team').value = "";
        document.getElementById("btnAdd").style.display = "block";
        document.getElementById("btnUpdate").style.display = "none";
        document.getElementById("btnCancel").style.display = "none";
    }
}

init();
renderInfor();