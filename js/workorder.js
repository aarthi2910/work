$(document).ready(function() {
    //To hide the datatable warning message
    $.fn.dataTable.ext.errMode = 'none';
    $('#myTable').DataTable({
        // DataTables configuration options
        ajax: {
            url: 'workorder.json',
            dataSrc: ''
        },
        columns: [
            { data: 'won' },
            { data: 'so' },
            { data: 'job_location' },
            { data: 'sale_type' },
            { data: 'start_time' },
            { data: 'end_time' },
            { data: 'status' }
        ],
        "pageLength": 5,
        // Enable default search filter box
        searching: true
    });
});