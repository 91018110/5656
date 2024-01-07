function adjustText() {
    document.getElementById('student-id').style.color = 'blue';
    document.getElementById('student-name').style.color = 'green';
}

function adjustProfile() {
    var img = document.getElementById('profile-img');
    img.style.border = '5px solid red';
    img.style.borderRadius = '50%';
}

function changeImage() {
    var img = document.getElementById('profile-img');
    img.src = 'lifestyle.jpg';
}