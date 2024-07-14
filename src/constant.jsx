export const Items = {
    all: {
        title: "Все",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Yeelight LED Smart Bulb",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "D-Link Omna 180 Cam",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "temp",
                iconLabel: "Температура",
                title: "Elgato Eve Degree Connected",
                subtitle: "Выключено до 17:00",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "LIFX Mini Day & Dusk A60 E27",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
        ],
    },
    kitchen: {
        title: "Кухня",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Yeelight LED Smart Bulb",
                subtitle: "Включено",
            },
            {
                icon: "temp",
                iconLabel: "Температура",
                title: "Elgato Eve Degree Connected",
                subtitle: "Выключено до 17:00",
            },
        ],
    },
    hall: {
        title: "Зал",
        items: [
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Выключено",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Выключено",
            },
        ],
    },
    lights: {
        title: "Лампочки",
        items: [
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "D-Link Omna 180 Cam",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "LIFX Mini Day & Dusk A60 E27",
                subtitle: "Включится в 17:00",
            },
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
            {
                icon: "light",
                iconLabel: "Освещение",
                title: "Philips Zhirui",
                subtitle: "Включено",
            },
        ],
    },
    cameras: {
        title: "Камеры",
        items: [
            {
                icon: "light2",
                iconLabel: "Освещение",
                title: "Xiaomi Mi Air Purifier 2S",
                subtitle: "Включено",
            },
        ],
    },
};

export const ITEM_KEYS = Object.keys(Items);
for (let i = 0; i < 6; ++i) {
    Items.all.items = [...Items.all.items, ...Items.all.items];
}


export const Events = [
    {
      icon: 'temp',
      iconLabel: 'Температура',
      title: 'Philips Cooler',
      subtitle: 'Начнет охлаждать в 16:30',
    },
    {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subtitle: 'Включится в 17:00',
    },
    {
      icon: 'light',
      iconLabel: 'Освещение',
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subtitle: 'Включится в 17:00',
    },
  ];


  export const Events2 = [
    {
      slim: true,
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Выключить весь свет в доме и во дворе',
    },
    {
      slim: true,
      icon: 'schedule',
      iconLabel: 'Расписание',
      title: 'Я ухожу',
    },
    {
      slim: true,
      icon: 'light2',
      iconLabel: 'Освещение',
      title: 'Включить свет в коридоре',
    },
    {
      slim: true,
      icon: 'temp2',
      iconLabel: 'Температура',
      title: 'Набрать горячую ванну',
      subtitle: 'Начнётся в 18:00',
    },
    {
      slim: true,
      icon: 'temp2',
      iconLabel: 'Температура',
      title: 'Сделать пол тёплым во всей квартире',
    },
  ]; 