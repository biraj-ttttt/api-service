function showResult(e){
    alert("Form submitted successfully");
    //    e.preventDefault();  // Prevent the default form submission          
    // let name= document.getElementById("Name").ariaValueMax;
    // let name2= document.querySelector("Name").ariaValueMax;

    // alert(name);
    // alert(name2);

    // console.log(name,name2);
}
function showResult(event) {
    // 1. Prevent the default form submission behavior.
    // Without this, the page would reload when you click submit.
    event.preventDefault();

    // 2. Get the input elements by their IDs.
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('Email');

    // 3. Get the values from the input elements.
    const userName = nameInput.value;
    const userEmail = emailInput.value;

    console.log(userEmail)
    console.log(userName)
    // 4. Get the paragraph element where you want to display the result.
    const resultParagraph = document.getElementById('result');

    // 5. Update the text content of the paragraph.
    resultParagraph.textContent = `Name: ${userName}, Email: ${userEmail}`;
    // Optional: You can also clear the input fields after submission
    // nameInput.value = '';
    // emailInput.value = '';
}