const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
// form 
const formElement = document.getElementById('power form')
const nameInput = document.getElementById('power form')
const plInput = document.getElementById('power form')



complimentBtn.addEventListener('click', getCompliment)
// new button
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/Fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
// form
const submitPerson = (event) => {
    event.preventDefault()

    
}

fortuneBtn.addEventListener('click', getFortune)
//form 
formElement.addEventListener('submit', submitPerson)