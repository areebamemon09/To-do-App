let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addItem(this.value.trim());
        this.value = "";
    }
});

function addItem(text) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${text} <i class="delete">✖</i>`;

    // Toggle done on li click
    listItem.addEventListener("click", function(e) {
        if (!e.target.classList.contains("delete")) {
            this.classList.toggle('done');
        }
    });

    // Delete item on i click
    listItem.querySelector("i.delete").addEventListener("click", function() {
        listItem.remove();
    });

    list.appendChild(listItem);
}
