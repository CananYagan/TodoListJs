let liveToastBtnDOM = document.querySelector("#liveToastBtn"); //liveToastBtnDOM.addEventListener("click", newElement);
liveToastBtnDOM.onclick = newElement;

const successToast = document.querySelector(".toast.success.hide");
const errorToast = document.querySelector(".toast.error.hide");
const toastContainer = document.querySelector(".toast-body");
let ulDOM = document.querySelector("#list");

function newElement(e) {
    let taskDOM = document.querySelector("#task");
    if (
        taskDOM.value.trim() &&
        !taskDOM.value.includes(".") &&
        !taskDOM.value.includes(" ")
    ) {
        e.preventDefault();
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `${taskDOM.value} <button type="button" class="close" onclick="deleteItem(this)" aria-label="Kapat">
        <span aria-hidden="true">&times;</span>
        </button>`;
        ulDOM.appendChild(liDOM);
        debugger;
        successToast.classList.remove("hide");
        errorToast.classList.add("hide");
        let bsAlert = new bootstrap.Toast(successToast);
        bsAlert.show();
        taskDOM.value = "";
    } else {
        successToast.classList.add("hide");
        errorToast.classList.remove("hide");
        let bsAlert = new bootstrap.Toast(errorToast);
        bsAlert.show();
    }
}
//toast.classList.remove("hide");

function addCheckedClass(liDOM) {
    liDOM.classList.add("checked");
}

function removeCheckedClass(liDOM) {
    liDOM.classList.remove("checked");
}

function deleteItem(button) {
    let liDOM = button.parentNode;
    addCheckedClass(liDOM);
    setTimeout(() => {
        ulDOM.removeChild(liDOM);
    }, 500);
}

ulDOM.addEventListener("mouseover", (e) => {
    if (e.target.localName === "li") {
        addCheckedClass(e.target);
    }
});

ulDOM.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "LI") {
        removeCheckedClass(e.target);
    }
});
