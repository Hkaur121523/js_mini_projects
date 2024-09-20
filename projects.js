function updateClock() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const year = currentDate.getFullYear();

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const paddedHours = hours < 10 ? '0' + hours : hours;
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[currentDate.getDay()];
    document.getElementById("date").textContent = ` ${day}-${month}-${year}`;
    document.getElementById("time").innerHTML = `${paddedHours}:${paddedMinutes}:${paddedSeconds} <span>${ampm}</span>`;
    document.getElementById("day").textContent = ` ${dayName}`;
  }

  setInterval(updateClock, 1000);
  updateClock();

////////////////////////////////////////


////////////////////////////////////
const table = document.querySelector(".calculator");
let input = document.querySelector(".display");
let operators = ["+", "-", "*", "/", "."];  

table.addEventListener("click", (event) => {
    let targetPoint = event.target;

    if (targetPoint.tagName === "BUTTON") {
        let buttonText = targetPoint.innerHTML;
        let oldValue = input.value;
        let lastChar = oldValue[oldValue.length - 1];  
   
        let afterLastChar = oldValue.slice(0, -1);

           if (buttonText === "C") {
            input.value = '';
        } 
             else if (buttonText === "=") {
            try {
                input.value = new Function('return ' + input.value)();
            } catch {
                input.value = "Error";
            }
        } 
        else if (operators.includes(buttonText)) {
            if (oldValue === '-') {
                return;  
            } else if (operators.includes(lastChar)) {
                
                input.value = afterLastChar + buttonText;
            } else {
                input.value += buttonText;  
            }
        } 
       
        else {
            input.value += buttonText;
        }
    }
});



///////////////////////

let allquestions = document.querySelectorAll(".faq-question");

allquestions.forEach((question, index) => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("showAns");

        ////////////////////////////////////////////////
        if (question.lastElementChild.innerHTML == "+") {
            question.lastElementChild.innerHTML = "-"

        }
        else {
            question.lastElementChild.innerHTML = "+"
        }

        ///////////////////////////////////////////////////////////
        allquestions.forEach((que, qindex) => {

            if (index != qindex) {
                que.nextElementSibling.classList.remove("showAns")
                que.lastElementChild.innerHTML = "+"
            }

        })


    });
});

///////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const generateReportBtn = document.getElementById('generateReportBtn');
    const wordCountElement = document.getElementById('wordCount');
    const charCountElement = document.getElementById('charCount');
    
   input.addEventListener('keyup', () => {
        const textValue = input.value.trim();
        const words = textValue.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const charCount = textValue.length;
        
        wordCountElement.innerText = `Words: ${wordCount}`;
        charCountElement.innerText = `Characters: ${charCount}`;
    });

    generateReportBtn.addEventListener('click', () => {
        generateReport(input.value.trim());
    });
});

function generateReport(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    
    const reportDiv = document.getElementById('report');
    reportDiv.innerHTML = `
        <h3>Text Report</h3>
        <p><strong>Word Count:</strong> ${wordCount}</p>
        <p><strong>Character Count:</strong> ${charCount}</p>
        <p><strong>Text Preview:</strong></p>
        <p>${text}</p>
    `;
    reportDiv.style.display = 'block';
}

/////////////////////////////

let userInp = document.querySelector("#userInp");
let taskBtn = document.querySelector("#taskBtn");
let task_list = document.querySelector("#task_list");

taskBtn.addEventListener("click", () => {
    let task = userInp.value.trim();

    // Only proceed if input is not empty and not the error message
    if (task !== '' && task !== "First Enter your task") {
        let newLi = `<li>
            <input type="checkbox"> ${task}
            <button class="deleteBtn">Delete</button>
        </li>`;
        task_list.innerHTML += newLi;
        userInp.value = '';  // Clear input after adding task
    } else {
        // Display error message in red and disable input/button
        userInp.value = "First Enter your task";
        userInp.style.color = "red";
        userInp.disabled = true;
        taskBtn.disabled = true;

        // Reset input text color, enable input/button, and clear error message after 2 seconds
        setTimeout(() => {
            userInp.value = '';  // Clear error message
            userInp.style.color = "black";  // Reset input text color
            userInp.disabled = false;
            taskBtn.disabled = false;
        }, 2000);
    }

    // Attach delete functionality to all delete buttons
    let deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentNode.remove();  // Remove task
        });
    });
});

///////////////////////////


