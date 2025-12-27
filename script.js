const feild=document.querySelector("#feild");
const generator=document.querySelector("#generate");
const main=document.querySelector("#main");
feild.addEventListener("click",()=>{
        const newDiv=document.createElement("div");
        newDiv.className="take_input";
        newDiv.innerHTML = `<input type="text" placeholder="Enter Field Name">
        <select class="field-type">
        <option value="string">String</option>
    <option value="integer">Integer</option>
    <option value="float">Float</option>
    <option value="boolean">Boolean</option>

    <option value="name">Name</option>
    <option value="email">Email</option>
    <option value="phone">Phone</option>
    <option value="date">Date</option>

    <option value="image_url">Image URL</option>
    <option value="file_url">File URL</option>

    <option value="object">Object</option>
    <option value="array">Array</option>
    </select>
    <button>Remove</button>
    `;
    newDiv.style.display="flex";
    newDiv.style.gap="15px";
    const input=newDiv.querySelector("input");
    input.style.fontSize="25px";
    input.style.borderRadius="4px";
    const drop=newDiv.querySelector("select");
    drop.style.borderColor="black";
    drop.style.fontSize="20px";
    const button=newDiv.querySelector("button");
    button.style.fontSize="25px";
    button.style.backgroundColor="red";
    button.style.cursor="pointer";
        main.appendChild(newDiv);
        button.addEventListener("click",()=>{
            newDiv.remove();
        })
    });


function generateValue(type) {
    switch (type) {

        // ===== Primitive =====
        case "string":
            return "sample_text";

        case "integer":
            return Math.floor(Math.random() * 1000);

        case "float":
            return parseFloat((Math.random() * 100).toFixed(2));

        case "boolean":
            return Math.random() < 0.5;

        // ===== Semantic =====
        case "name":
          const names = ["a1b2-c3d4-e5f6", "g7h8-i9j10-k11-l12", "m13n14-o15p16-q17r18"];
            return names[Math.floor(Math.random() * names.length)];

        case "email":
            return `user${Math.floor(Math.random() * 1000)}@gmail.com`;

        case "phone":
            return "9" + Math.floor(100000000 + Math.random() * 900000000);

        case "date":
            return new Date().toISOString().split("T")[0];

        // ===== File =====
        case "image_url":
            return "https://picsum.photos/200";

        case "file_url":
            return "https://example.com/sample.pdf";

        // ===== Complex =====
        case "object":
            return {
                id: Math.floor(Math.random() * 100),
                active: Math.random() < 0.5
            };

        case "array":
            return [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ];

        default:
            return null;
    }
}

    generator.addEventListener("click",()=>{
    const res={};
    const newDiv=document.querySelectorAll(".take_input");
    newDiv.forEach(div=>{
        const input=div.querySelector("input");
        const type=div.querySelector("select");
        if(!input||!type)
            return ;
        const NameValue = input.value.trim();
        const TypeValue = type.value;

        if (NameValue === "") return;

        res[NameValue] = generateValue(TypeValue);
    });
     document.querySelector("#output").textContent =
        JSON.stringify(res, null, 4);
    });

