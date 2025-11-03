const zonaHoraria = -new Date().getTimezoneOffset() / 60;
const diferenciaHoras = zonaHoraria - 2; // NO CAMBIAR. Los horarios de las varibales están en UTC+2

function ajustarHora(horaStr, diff) {
  let [h, m] = horaStr.split(":").map(Number);
  h = (h + diff + 24) % 24;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function ordenarHoras(horas) {
  return horas.slice().sort((a, b) => {
    const [ha, ma] = a.split(':').map(Number);
    const [hb, mb] = b.split(':').map(Number);
    return (ha * 60 + ma) - (hb * 60 + mb);
  });
}

const eventosOriginales = [
  {
    nombre: "Svanir",
    horarios: ["00:15", "02:15", "04:15", "06:15", "08:15", "10:15", "12:15", "14:15" , "16:15", "18:15", "20:15", "22:15"],
    puntoRuta: "[&BMIDAAA=]"
  },
  {
    nombre: "Fire Elemental",
    horarios: ["00:45", "02:45", "04:45", "06:45", "08:45", "10:45", "12:45", "14:45" , "16:45", "18:45", "20:45", "22:45"],
    puntoRuta: "[&BEcAAAA=]"
  },
  {
    nombre: "Shadow Behemoth",
    horarios: ["01:45", "03:45", "05:45", "07:45", "09:45", "11:45", "13:45", "15:45" , "17:45", "19:45", "21:45", "23:45"],
    puntoRuta: "[&BPcAAAA=]"
  },
  {
    nombre: "Great Jungle Wurm",
    horarios: ["01:15", "03:15", "05:15", "07:15", "09:15", "11:15", "13:15", "15:15" , "17:15", "19:15", "21:15", "23:15"],
    puntoRuta: "[&BEEFAAA=]"
  },
  {
    nombre: "Modniir Ulgoth",
    horarios: ["00:30", "03:30", "06:30", "09:30", "12:30", "15:30", "18:30", "21:30"],
    puntoRuta: "[&BLEAAAA=]"
  },
  {
    nombre: "Admiral Taidha Covington",
    horarios: ["02:00", "05:00", "08:00", "11:00", "14:00", "17:00", "20:00", "23:00"],
    puntoRuta: "[&BKgBAAA=]"
  },
    {
    nombre: "The Shatterer",
    horarios: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
    puntoRuta: "[&BE4DAAA=]"
  },
  {
    nombre: "Megadestroyer",
    horarios: ["02:30", "05:30", "08:30", "11:30", "14:30", "17:30", "20:30", "23:30"],
    puntoRuta: "[&BM0CAAA=]"
  },
  {
    nombre: "Golem Mark II",
    horarios: ["01:00", "04:00", "07:00", "10:00", "13:00", "16:00", "19:00", "22:00"],
    puntoRuta: "[&BNQCAAA=]"
  },
    {
    nombre: "Claw of Jormag",
    horarios: ["01:30", "04:30", "07:30", "10:30", "13:30", "16:30", "19:30", "22:30"],
    puntoRuta: "[&BHoCAAA=]"
  },
  {
    nombre: "Tequatl",
    horarios: ["02:00", "05:00", "09:00", "13:30", "18:00", "21:00"],
    puntoRuta: "[&BNABAAA=]"
  },
  {
    nombre: "Triple Trouble",
    horarios: ["03:00", "06:00", "10:00", "14:30", "19:00", "22:00"],
    puntoRuta: "[&BKoBAAA=]"
  },
  {
    nombre: "Karka Queen",
    horarios: ["01:00", "04:00", "08:00", "12:30", "17:00", "20:00"],
    puntoRuta: "[&BNUGAAA=]"
  },
  {
    nombre: "Drakkar",
    horarios: ["01:05", "03:05", "05:05", "07:05", "09:05", "11:05", "13:05", "15:05", "17:05", "19:05", "21:05", "23:05"],
    puntoRuta: "[&BDkMAAA=]"
  },
  {
    nombre: "Janthir Syntri",
    horarios: ["00:30", "02:30", "04:30", "06:30", "08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30", "22:30"],
    puntoRuta: "[&BCoPAAA=]"
  },
  {
    nombre: "Hammerhart Rumble!",
    horarios: ["00:40", "02:40", "04:40", "06:40", "08:40", "10:40", "12:40", "14:40", "16:40", "18:40", "20:40", "22:40"],
    puntoRuta: "[&BJEPAAA=]"
  },
  {
    nombre: "Secrets of the Weald",
    horarios: ["01:40", "03:40", "05:40", "07:40", "09:40", "11:40", "13:40", "15:40", "17:40", "19:40", "21:40", "23:40"],
    puntoRuta: "[&BJ4PAAA=]"
  }
];

// Creacion de eventosOriginales con las horas ajustada SIN modificar la variable original
const eventosAjustados = eventosOriginales.map(evento => {
  const horariosAjustados = evento.horarios.map(hora => ajustarHora(hora, diferenciaHoras));
  return {
    ...evento,
    horarios: ordenarHoras(horariosAjustados)
  };
});

module.exports = eventosAjustados;
