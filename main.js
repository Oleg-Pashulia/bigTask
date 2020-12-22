let currentIndex = 1;

const generateRowID = () => {
    currentIndex++;
    return `rowItem_${currentIndex}`
};

function addNewRow() {

    let div = document.createElement('div');
    div.setAttribute("id", generateRowID());
    div.classList.add("row");
    
    div.innerHTML = `

    <div class="times">
        <img src="photo/edit-copy-3_2020-12-09/edit-copy-3.png" alt="">
        <input type="text" placeholder="from" class="input-times from" onchange="checkInput(this)" value="">-
        <img src="photo/edit-copy-3_2020-12-09/edit-copy-3.png" alt="">
        <input type="text" placeholder="to" class="input-times to" onchange="checkInput(this)" value="">
        <div class="wrong">wrong</div>
    </div>

    <div class="days">

        <div class="days-input">
            <div class="monday">Mo</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value="0" onchange="onCheckboxChange(this)">
        </div>

        <div class="days-input">
            <div class="tuesday">Tu</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value="1" onchange="onCheckboxChange(this)">
        </div>

        <div class="days-input">
            <div class="wednesday">We</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value="2" onchange="onCheckboxChange(this)">
        </div> 

        <div class="days-input">
            <div class="thursday">Th</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value=3 onchange="onCheckboxChange(this)">
        </div>

        <div class="days-input">
            <div class="friday">Fr</div>
             <input type="checkbox" class="checkbox" name="mailId[]" value="4" onchange="onCheckboxChange(this)">
        </div>

        <div class="days-input">
            <div class="saturday">Sa</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value="5" onchange="onCheckboxChange(this)">
        </div>

        <div class="days-input">
            <div class="sunday">Su</div>
            <input type="checkbox" class="checkbox" name="mailId[]" value="6" onchange="onCheckboxChange(this)">
        </div>
    </div>

    <img src="photo/trash-copy_2020-12-09/trash-copy@2x.png" onclick="removeRow(this)" class = 'remove' alt="">` 

    document.querySelector('.container').appendChild(div);  

    refreshDisabledStates()
    
  }

function removeRow (element) {
    // const id = +element.parentElement.id.split('_').pop();

    document.getElementById(element.parentElement.id).remove();
  }

let inputTime = document.getElementsByClassName("input-times");

function checkInput(inputTime){

    let mainRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    let regExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3])$/;
    let secRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5]$/;
    let thirdRegExp = /^[0-9]:[0-5]$/;
    let fourthRegExp = /^[0-9]:[0-9][0-5]$/;
        
    if (mainRegExp.test(inputTime.value)) {

        if (fourthRegExp.test(inputTime.value)) {

            inputTime.value = '0' + inputTime.value;
            return inputTime.value;
        }
        return inputTime.value;

    } else if (regExp.test(inputTime.value)) {

        if (inputTime.value >= 10) {

            inputTime.value += ':00';

        } else if (inputTime.value < 10) {

            inputTime.value = '0' + inputTime.value + ':00';
        }
        return inputTime.value;

    } else if (secRegExp.test(inputTime.value)) {

        if(thirdRegExp.test(inputTime.value)) {

            inputTime.value = '0' + inputTime.value +'0';
            return inputTime.value; 
        
        }
        inputTime.value += '0';
        return inputTime.value; 

    } else {

        inputTime.value = "wrong"; 
        }
            
    }

function refreshDisabledStates() {
        let checkedIndexes = [];
    
        const checkboxes = document.getElementsByClassName('checkbox');
    
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                console.log(checkboxes[i].value);
                checkedIndexes.push(+checkboxes[i].value);
            }
        }
       checkedIndexes = Array.from(new Set(checkedIndexes));
    
        for (let i = 0; i < checkboxes.length; i++) {
    
            const chbx = checkboxes[i];
            chbx.disabled = !chbx.checked && checkedIndexes.includes(+chbx.value);
        }
}

function onCheckboxChange(checkbox) {
    refreshDisabledStates();
}

function onSubmit() {
    const rowListData = [];

    const rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        const rowCheckboxes = row.getElementsByClassName("checkbox");
        const days = collectCheckboxData(rowCheckboxes);
        const hoursData = row.getElementsByClassName("input-times");
        const hours = collectHourData(hoursData);

        const rowData = {
            days,
            hours
        };

    let myMap = new Map;
    myMap.set(0, 'Monday')
    myMap.set(1, 'Tuesday')
    myMap.set(2, 'Wednesday')
    myMap.set(3, 'Thursday')
    myMap.set(4, 'Friday')
    myMap.set(5, 'Saturday')
    myMap.set(6, 'Sunday')

    let wrongAll = row.getElementsByClassName('wrong');

    for (let i = 0; i<wrongAll.length; i++) {
        
        if (rowData.hours[0] >= rowData.hours[1 || rowData.hours[0] == ''] || rowData.hours[1] == '' ) {
            wrongAll[i].style.display = 'flex'
        } else {
            wrongAll[i].style.display = 'none'
            console.log ('Restaurant works', rowData.days.map( dayNumber => myMap.get(dayNumber) ), 'from', rowData.hours[0], 'to', rowData.hours[1])   
        }   
        
    }
    
        rowListData.push(rowData);
    }

    console.log(rowListData);
}

function collectHourData(hourList) {
    const hours = [];
    for (let i = 0; i<hourList.length; i++) {
        hours.push(hourList[i].value);
    }
    return hours;
}

function collectCheckboxData(checkboxList) {
    const activeDays = [];
    for (let i = 0; i < checkboxList.length; i++) {
        const chkx = checkboxList[i];
        if (chkx.checked) {
            activeDays.push(i);
        }
    }

    return activeDays;
}
