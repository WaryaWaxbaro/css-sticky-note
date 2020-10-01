const id_colors = ["#c182ff",
"#ad75e5",
"#9a68cc",
"#875bb2",
"#734e99",
"#60417f",
"#4d3466"];

const note_bg = [
"#ffff66",
"#e5e55b",
"#e5e5b7",
"#FFFFCC",
"#ffffdb",
"#ffff84",
"#ffff93"
];

const btn_bg = [
"#e59400",
"#cc8400",
"#b27300",
"#ffa500",
"#ffae19",
"#ffb732",
"#ffc04c",
];

const rotation = ["-5deg", "-3deg", "-1deg", "0deg", "1deg", "3deg", "5deg"];

const random = () => {
    return Math.floor(Math.random() * 7);
}


const items = [
    {
        id: "1",
        contract_id: 45454,
        reg_num: "ABC-124",
        reservation_paid_date: "28.12.2020",
        logistics_needed: true,
        sold_car: "Tiliauto",
        lead: "Vanha asiakas",
        created_by: "Shakur Hassan",
        more_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat neque cum quibusdam nam. Libero maiores ipsam eligendi recusandae soluta unde et nulla repellendus eveniet reprehenderit debitis, nihil pariatur quae!",
    },
    {
        id: "2",
        contract_id: 8345,
        reg_num: "ABC-124",
        reservation_paid_date: "28.12.2020",
        logistics_needed: false,
        sold_car: "Oman varasto auto",
        lead: "Verkkokauppa",
        created_by: "Shakur Hassan",
        more_info: "Saepe repellat neque cum quibusdam nam. Libero maiores ipsam eligendi recusandae soluta unde et nulla repellendus eveniet reprehenderit debitis, nihil pariatur quae!",
    },
    {
        id: "3",
        contract_id: 847,
        reg_num: "ABC-124",
        reservation_paid_date: "28.09.2020",
        logistics_needed: false,
        sold_car: "Tiliauto",
        lead: "Vanha asiakas",
        created_by: "Omar Ali",
        more_info: "Libero maiores ipsam eligendi recusandae soluta unde et nulla repellendus eveniet reprehenderit debitis, nihil pariatur quae!",
    },
    {
        id: "4",
        contract_id: 8345,
        reg_num: "ABC-124",
        reservation_paid_date: "20.12.2020",
        logistics_needed: true,
        sold_car: "Oman varasto auto",
        lead: "Verkkokauppa",
        created_by: "Mursal muuse",
        more_info: "",
    }
];


let board = document.getElementById("board");
let allItems = "";
for(let item of items){
    allItems += `
    <div class="sticky__container">
    <div class="sticky__angle" style="transform: rotateZ(${rotation[random()]})">
      <div class="sticky__item" style="background-color: ${note_bg[random()]}">
        <a href="#${item.id}" class="sticky__delete-btn" style="top: ${random()}px; right: ${random()}px;">
            <div class="sticky__delete-icon"></div>
        </a>
        <p class="sticky__id" style="color: ${id_colors[random()]}">#${item.id}</p>
        <ul class="sticky__list">
            <li class="sticky__list--item">
                <span class="sticky__key">Created by:</span>
                <span class="sticky__value">${item.created_by}</span>
            </li>
            <li class="sticky__list--item">
                <span class="sticky__key">Lead:</span>
                <span class="sticky__value">${item.lead}</span>
            </li>
        <li class="sticky__list--item">
            <span class="sticky__key">Myyty auto:</span>
            <span class="sticky__value">${item.sold_car}</span>
        </li>
          <li class="sticky__list--item">
            <span class="sticky__key">Rekisterinumero:</span>
            <span class="sticky__value">${item.reg_num}</span>
          </li>
          <li class="sticky__list--item">
            <span class="sticky__key">Varausmaksu maksettu pvm:</span>
            <span class="sticky__value">${item.reservation_paid_date}</span>
          </li>
          <li class="sticky__list--item">
            <span class="sticky__key">Tarviseeko logistiikka:</span>
            <span class="sticky__value">
            ${item.logistics_needed ? '<div class="sticky__value__icon--yes"></div>' : 
            '<div class="sticky__value__icon--no"></div>'}
            </span>
          </li>
          <li class="sticky__list--item">
            <span class="sticky__key">Lisätiedot:</span>
            <span class="sticky__value"
              >${item.more_info}</span
            >
          </li>
        </ul>
        <a href="#${item.id}" class="sticky__edit-btn" style="background-color: ${btn_bg[random()]}">Edit</a>
      </div>
    </div>
  </div>
    `;
}

console.log('items ', items);
board.innerHTML = allItems;