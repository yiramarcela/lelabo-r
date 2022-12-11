let Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyUggDgXlKvDCJal'
});

// let base = Airtable.base('appciUYhLcwbePv4e');

var base = new Airtable({apiKey: 'keyUggDgXlKvDCJal'}).base('appciUYhLcwbePv4e');

base('Membres').select({
    // Selecting the first 3 records in Grid view:
    // maxRecords: 15,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(`${record.get('Nom')},  ${record.get('Prénom')} `);
    });

    // console.log(records)

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// console.log(base);








