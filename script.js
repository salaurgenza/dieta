/* =======================
   VARIABILI GLOBALI
======================= */
let currentWeek = 1;
let userFactor = 1;

const weeks = {
    1: {
        Lun: { colazione: { nome: "Yogurt greco + mirtilli", qta: "170 g + 80 g" }, spuntino: { nome: "Mela", qta: "150 g" }, pranzo: { nome: "Riso integrale + salmone + broccoli", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Mandorle", qta: "20 g" }, cena: { nome: "Vellutata di zucca + pane integrale", qta: "250 g + 50 g" } },
        Mar: { colazione: { nome: "Porridge avena + mela", qta: "50 g + 100 g" }, spuntino: { nome: "Kiwi", qta: "150 g" }, pranzo: { nome: "Quinoa + ceci + zucchine", qta: "80 g + 100 g + 200 g" }, merenda: { nome: "Cioccolato fondente", qta: "20 g" }, cena: { nome: "Omelette + spinaci", qta: "2 uova + 200 g" } },
        Mer: { colazione: { nome: "Pane integrale + avocado", qta: "60 g + 80 g" }, spuntino: { nome: "Yogurt", qta: "125 g" }, pranzo: { nome: "Farro + lenticchie + carote", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Frutti di bosco", qta: "100 g" }, cena: { nome: "Pesce azzurro + verdure grigliate", qta: "150 g + 250 g" } },
        Gio: { colazione: { nome: "Smoothie banana + spinaci", qta: "120 g + 50 g" }, spuntino: { nome: "Pera", qta: "150 g" }, pranzo: { nome: "Riso basmati + pollo + insalata", qta: "80 g + 130 g + 200 g" }, merenda: { nome: "Noci", qta: "20 g" }, cena: { nome: "Zuppa di legumi", qta: "250 g" } },
        Ven: { colazione: { nome: "Yogurt + fragole + chia", qta: "170 g + 100 g + 10 g" }, spuntino: { nome: "Arancia", qta: "180 g" }, pranzo: { nome: "Pasta integrale + verdure", qta: "80 g + 250 g" }, merenda: { nome: "Mandorle", qta: "20 g" }, cena: { nome: "Salmone + zucchine", qta: "140 g + 250 g" } },
        Sab: { colazione: { nome: "Uova strapazzate + pane", qta: "2 uova + 50 g" }, spuntino: { nome: "Banana", qta: "120 g" }, pranzo: { nome: "Orzo + sgombro + finocchi", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Yogurt", qta: "125 g" }, cena: { nome: "Minestrone + legumi", qta: "300 g + 100 g" } },
        Dom: { colazione: { nome: "Pancake avena + frutti di bosco", qta: "60 g + 80 g" }, spuntino: { nome: "Mela", qta: "150 g" }, pranzo: { nome: "Riso + tacchino + verdure", qta: "80 g + 130 g + 250 g" }, merenda: { nome: "Cioccolato fondente", qta: "20 g" }, cena: { nome: "Vellutata carote + pane", qta: "250 g + 40 g" } }
    },
    2: {
        Lun: { colazione: { nome: "Yogurt + pera", qta: "170 g + 150 g" }, spuntino: { nome: "Mandorle", qta: "20 g" }, pranzo: { nome: "Cous cous integrale + ceci + verdure", qta: "80 g + 100 g + 250 g" }, merenda: { nome: "Mela", qta: "150 g" }, cena: { nome: "Uova + spinaci", qta: "2 uova + 200 g" } },
        Mar: { colazione: { nome: "Porridge + banana", qta: "50 g + 120 g" }, spuntino: { nome: "Kiwi", qta: "150 g" }, pranzo: { nome: "Riso + sgombro + broccoli", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Noci", qta: "20 g" }, cena: { nome: "Vellutata di piselli", qta: "300 g" } },
        Mer: { colazione: { nome: "Pane integrale + avocado", qta: "60 g + 80 g" }, spuntino: { nome: "Yogurt", qta: "125 g" }, pranzo: { nome: "Farro + pollo + zucchine", qta: "80 g + 130 g + 200 g" }, merenda: { nome: "Frutti di bosco", qta: "100 g" }, cena: { nome: "Pesce bianco + verdure", qta: "150 g + 250 g" } },
        Gio: { colazione: { nome: "Smoothie frutta + zenzero", qta: "200 g" }, spuntino: { nome: "Pera", qta: "150 g" }, pranzo: { nome: "Quinoa + lenticchie + carote", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Mandorle", qta: "20 g" }, cena: { nome: "Zuppa di legumi", qta: "250 g" } },
        Ven: { colazione: { nome: "Yogurt + mela", qta: "170 g + 150 g" }, spuntino: { nome: "Arancia", qta: "180 g" }, pranzo: { nome: "Pasta integrale + verdure", qta: "80 g + 250 g" }, merenda: { nome: "Cioccolato fondente", qta: "20 g" }, cena: { nome: "Salmone + finocchi", qta: "140 g + 200 g" } },
        Sab: { colazione: { nome: "Uova + pane", qta: "2 uova + 50 g" }, spuntino: { nome: "Banana", qta: "120 g" }, pranzo: { nome: "Orzo + sgombro", qta: "80 g + 120 g" }, merenda: { nome: "Yogurt", qta: "125 g" }, cena: { nome: "Minestrone", qta: "300 g" } },
        Dom: { colazione: { nome: "Pancake integrali", qta: "2 medi" }, spuntino: { nome: "Mela", qta: "150 g" }, pranzo: { nome: "Riso + tacchino + verdure", qta: "80 g + 130 g + 250 g" }, merenda: { nome: "Noci", qta: "20 g" }, cena: { nome: "Vellutata zucca", qta: "300 g" } }
    },
    3: {
        Lun: { colazione: { nome: "Yogurt + mirtilli", qta: "170 g + 80 g" }, spuntino: { nome: "Kiwi", qta: "150 g" }, pranzo: { nome: "Riso + pollo + broccoli", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Mandorle", qta: "20 g" }, cena: { nome: "Zuppa di lenticchie", qta: "250 g" } },
        Mar: { colazione: { nome: "Porridge + frutti di bosco", qta: "50 g + 80 g" }, spuntino: { nome: "Pera", qta: "150 g" }, pranzo: { nome: "Quinoa + salmone + zucchine", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Cioccolato fondente", qta: "20 g" }, cena: { nome: "Omelette + spinaci", qta: "2 uova + 200 g" } },
        Mer: { colazione: { nome: "Pane integrale + avocado", qta: "60 g + 80 g" }, spuntino: { nome: "Yogurt", qta: "125 g" }, pranzo: { nome: "Farro + lenticchie + carote", qta: "80 g + 120 g + 200 g" }, merenda: { nome: "Frutti di bosco", qta: "100 g" }, cena: { nome: "Pesce bianco + verdure", qta: "150 g + 250 g" } },
        Gio: { colazione: { nome: "Smoothie banana + spinaci", qta: "120 g + 50 g" }, spuntino: { nome: "Mandorle", qta: "20 g" }, pranzo: { nome: "Riso basmati + tacchino + zucchine", qta: "80 g + 130 g + 200 g" }, merenda: { nome: "Mela", qta: "150 g" }, cena: { nome: "Zuppa di legumi", qta: "250 g" } },
        Ven: { colazione: { nome: "Yogurt + mela", qta: "170 g + 150 g" }, spuntino: { nome: "Arancia", qta: "180 g" }, pranzo: { nome: "Pasta integrale + verdure", qta: "80 g + 250 g" }, merenda: { nome: "Noci", qta: "20 g" }, cena: { nome: "Salmone + finocchi", qta: "140 g + 200 g" } },
        Sab: { colazione: { nome: "Uova strapazzate + pane", qta: "2 uova + 50 g" }, spuntino: { nome: "Banana", qta: "120 g" }, pranzo: { nome: "Orzo + sgombro", qta: "80 g + 120 g" }, merenda: { nome: "Yogurt", qta: "125 g" }, cena: { nome: "Minestrone + legumi", qta: "300 g + 100 g" } },
        Dom: { colazione: { nome: "Pancake avena + frutti di bosco", qta: "60 g + 80 g" }, spuntino: { nome: "Mela", qta: "150 g" }, pranzo: { nome: "Riso + pollo + verdure", qta: "80 g + 130 g + 250 g" }, merenda: { nome: "Cioccolato fondente", qta: "20 g" }, cena: { nome: "Vellutata zucca", qta: "300 g" } }
    }
};

/* =======================
   CAMBIO SETTIMANA
======================= */
function loadWeek(week) {
    currentWeek = week;

    // evidenzia bottone attivo
    document.querySelectorAll(".weekBtn").forEach(btn =>
        btn.classList.remove("active")
    );
    document.querySelectorAll(".weekBtn")[week - 1].classList.add("active");

    renderTable();
}

/* =======================
   AGGIORNA FACTOR DA UTENTE
======================= */
function updateFactor() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altezza = parseFloat(document.getElementById("altezza").value);
    const sesso = document.getElementById("sesso").value;
    const sport = parseInt(document.getElementById("sportSlider").value);

    // BMR Mifflin-St Jeor (30 anni standard)
    let bmr = sesso === "M" ? 10 * peso + 6.25 * altezza - 5 * 30 + 5 : 10 * peso + 6.25 * altezza - 5 * 30 - 161;

    // moltiplicatore attività fisica
    const activityMultiplier = [1, 1.15, 1.3][sport];

    userFactor = (bmr / 1650) * activityMultiplier; // normalizzato su fabbisogno standard

    renderTable();
}

/* =======================
   RENDER TABELLA
======================= */
function renderTable() {
    const tbody = document.getElementById("dietBody");
    tbody.innerHTML = "";

    const week = weeks[currentWeek];

    for (let day in week) {
        const m = week[day];
        tbody.innerHTML += `
            <tr>
                <td><strong>${day}</strong></td>
                <td>${formatMeal(m.colazione)}</td>
                <td>${formatMeal(m.spuntino)}</td>
                <td>${formatMeal(m.pranzo)}</td>
                <td>${formatMeal(m.merenda)}</td>
                <td>${formatMeal(m.cena)}</td>
            </tr>
        `;
    }
}

/* =======================
   FORMAT PASTO
======================= */
function formatMeal(meal) {
    const qta = meal.qta.replace(/\d+/g, n => Math.round(n * userFactor));
    return `${meal.nome}<br><small>${qta}</small>`;
}

/* =======================
   LISTA SPESA
======================= */
function generateShoppingList() {
    const week = weeks[currentWeek];
    const list = {};

    for (let day in week) {
        for (let mealName in week[day]) {
            const mealObj = week[day][mealName];
            const text = mealObj.qta;

            text.replace(/(\d+)\s*(g|uova|medi)?/gi, (_, n, unit) => {
                unit = unit || "g";
                const key = `${mealObj.nome} (${unit})`;
                const val = Math.round(n * userFactor);
                list[key] = (list[key] || 0) + val;
            });
        }
    }

    const ul = document.getElementById("shoppingList");
    ul.innerHTML = "";
    for (let item in list) {
        ul.innerHTML += `<li>${item}: ${list[item]}</li>`;
    }

    document.getElementById("shoppingModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeShoppingModal() {
    document.getElementById("shoppingModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

/* =======================
   AVVIO
======================= */
updateFactor(); // calcola userFactor e renderizza tabella
