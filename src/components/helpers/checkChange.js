export const checkChangeTables = (tables) => {
    const letter = {
        deletedPage : [],
        addedPage : [],
        changedPage: []
    }
    const tableYesterday = JSON.parse(tables.tableYesterday)
    const tableToday = JSON.parse(tables.tableToday)
    const urlYesterday = Object.keys(tableYesterday)
    const urlToday = Object.keys(tableToday)

    letter.deletedPage = urlYesterday.filter(url => !urlToday.includes(url))
    letter.addedPage = urlToday.filter(url => !urlYesterday.includes(url))
    letter.changedPage = urlToday.filter(url => urlYesterday.includes(url))
                                 .filter(url => tableYesterday[url] !== tableToday[url])

    return letter
}