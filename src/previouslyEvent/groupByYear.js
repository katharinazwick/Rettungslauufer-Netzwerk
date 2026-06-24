export function groupByYear(events) {
    const grouped = {};

    events.forEach(event => {
        const year = new Date(event.date).getFullYear();

        if (!grouped[year]) {
            grouped[year] = [];
        }

        grouped[year].push(event);
    });
    return grouped;
}