// use a class selector if available
let blocks = document.querySelectorAll("pre");

let placeholder = $('<i class="fa-solid fa-clone"></i>');

blocks.forEach((block) => {

    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        block.appendChild(button);

        button.innerHTML = '<i class="fa-regular fa-clone"></i>';

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });

    }
});

async function copyCode(block, button) {
    placeholder.remove();
    placeholder = null;

    $(button).css("opacity", "1");

    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(() => {
        button.innerHTML = '<i class="fa-regular fa-clone"></i>';
        placeholder = $('<i class="fa-solid fa-clone"></i>');
    }, 700);
}

$('pre[class*="language-"] button').hover(
    function(){
        if(placeholder == null) return;
        $(this).css("opacity", "0");   
        placeholder.insertAfter($(this))
        placeholder.addClass("placeholder-button");
    },
    function(){
        if(placeholder == null) return;
        $(this).css("opacity", "1");
        placeholder.remove();
    }
)

