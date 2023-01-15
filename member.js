class Info {
    constructor(name, dob, phone, email, onboard, team) {
        this.name = name;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.onboard = onboard;
        this.team = team;
    }
}

let infor = [];

const info_data = "info_data";
function init() {
    if (localStorage.getItem(info_data) == null) {
        infor = [
            new Info('Phương Thảo', '21/10/1993', '0934500914', 'pthao@gmail.com', '01/09/2020', 'Front End'),
            new Info('Thanh Tiến', '06/07/1992', '0344130980', 'ttien@gmail.com', '01/09/2020', 'Unity'),
            new Info('Văn Tài', '31/01/1994', '0914783868', 'vtai@gmail.com', '01/07/2021', 'Unity'),
            new Info('Quỳnh Như', '12/06/2000', '0975584814', 'qnhu@gmail.com', '19/04/2022', 'Office'),
            new Info('Anh Tuấn', '20/06/1995', '0376657371', 'atuan@gmail.com', '07/02/2022', 'Back End'),
            new Info('Thanh Xuân', '13/03/1990', '0907192975', 'txuan@gmail.com', '19/04/2022', 'Quality Asurance'),
            new Info('Đức Biên', '09/01/1995', '0869181745', 'dbien@gmail.com', '25/04/2022', 'Front End'),
            new Info('Thúy Vy', '29/05/1994', '0979071150', 'tvy@gmail.com', '22/08/2022', 'Bridge Engineer'),
            new Info('Daiki Machida', '16/05/1997', '0344691403', 'daiki@gmail.com', '01/09/2020', 'Office'),
            new Info('Quốc Bảo', '06/04/1995', '0902725724', 'qbao@gmail.com', '04/05/2022', 'Back End'),
        ]
        localStorage.setItem(info_data, JSON.stringify(infor));
    } else {
        infor = JSON.parse(localStorage.getItem(info_data));
    }
}

function renderInfor() {
    let tbInfor = document.getElementById('tbInfor');
    tbInfor.innerHTML = "";
    for (let i = 0; i < infor.length; i++) {
        tbInfor.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${infor[i].name}</td>
            <td>${infor[i].dob}</td>
            <td>${infor[i].phone}</td>
            <td>${infor[i].email}</td>
            <td>${infor[i].onboard}</td>
            <td>${infor[i].team}</td>
        </tr>
        `
    }
}

function addInfor() {
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let onboard = document.getElementById('onboard').value;
    let team = document.getElementById('team').value;

    let newInfo = new Info(name, dob, phone, email, onboard, team);
    addInfor.push(newInfo);
}

renderInfor();
