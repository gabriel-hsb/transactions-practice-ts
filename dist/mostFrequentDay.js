export default function mostFrequentDay(transactions) {
    const week = {
        Domingo: 0,
        "Segunda-feira": 0,
        "Terça-feira": 0,
        "Quarta-feira": 0,
        "Quinta-feira": 0,
        "Sexta-feira": 0,
        Sábado: 0,
    };
    for (let i = 0; i < transactions.length; i++) {
        const day = transactions[i].weekDay;
        if (day === 0)
            week.Domingo += 1;
        if (day === 1)
            week["Segunda-feira"] += 1;
        if (day === 2)
            week["Terça-feira"] += 1;
        if (day === 3)
            week["Quarta-feira"] += 1;
        if (day === 4)
            week["Quinta-feira"] += 1;
        if (day === 5)
            week["Sexta-feira"] += 1;
        if (day === 6)
            week["Sábado"] += 1;
    }
    return Object.entries(week).sort((a, b) => {
        return b[1] - a[1];
    })[0];
}
//# sourceMappingURL=mostFrequentDay.js.map