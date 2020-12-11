function myFunction() {
    var div = document.createElement('div');
    
    div.innerHTML = `<div class="createdShedule">

    <div class="times">
        <img src="photo/edit-copy-3_2020-12-09/edit-copy-3.png" alt="">
        <input type="text" placeholder="from" class="input-times">-
        <img src="photo/edit-copy-3_2020-12-09/edit-copy-3.png" alt="">
        <input type="text" placeholder="to" class="input-times">
    </div>

    <div class="days">

        <div class="days-input">
            <div class="monday">Mo</div>
            <input type="checkbox" class="check">
        </div>

        <div class="days-input">
            <div class="tuesday">Tu</div>
            <input type="checkbox" class="check">
        </div>

        <div class="days-input">
            <div class="wednesday">We</div>
            <input type="checkbox" class="check">
        </div> 

        <div class="days-input">
            <div class="thursday">Th</div>
            <input type="checkbox" class="check">
        </div>

        <div class="days-input">
            <div class="friday">Fr</div>
             <input type="checkbox" class="check">
        </div>

        <div class="days-input">
            <div class="saturday">Sa</div>
            <input type="checkbox" class="check">
        </div>

        <div class="days-input">
            <div class="sunday">Su</div>
            <input type="checkbox" class="check">
        </div>
    </div>

    <img src="photo/trash-copy_2020-12-09/trash-copy@2x.png" onclick="removeRow(this)" class = 'remove' alt="">
</div>` 

    document.querySelector('.dex').appendChild(div);     
  }

function removeRow (input) {
    input.parentNode.remove()
  }