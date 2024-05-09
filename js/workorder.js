$(document).ready(function() {
    // To hide the datatable warning message
    $.fn.dataTable.ext.errMode = 'none';

    $('#myTable').DataTable({
        scrollX: true,
        Info : false,
        //option is used to define the layout and elements that should be displayed around the table.
        dom: 'Qlfrtip',
        // DataTables configuration options
        ajax: {
            url: 'workorder.json',
            dataSrc: ''
        },
        // columns: [
        //     { data: 'won' },
        //     { data: 'so' },
        //     { data: 'job_location' },
        //     { data: 'sale_type' },
        //     { 
        //         data: null,
        //         render: function(data, type, row) {
        //             if (row.start_time) {
        //                 return row.start_time;
        //             } else if (row.start_dates) {
        //                 return row.start_dates.join(', ');
        //             }
        //             return '';
        //         }
        //     },
        //     { 
        //         data: null,
        //         render: function(data, type, row) {
        //             if (row.end_time) {
        //                 return row.end_time;
        //             } else if (row.end_dates) {
        //                 return row.end_dates.join(', ');
        //             }
        //             return '';
        //         }
        //     },
        //     { data: 'status' },
        //     { 
        //         data: null,
        //         render: function(data, type, row) {
        //             if (row.skills_required) {
        //                 return row.skills_required.map(function(skill) {
        //                     return skill.skill;
        //                 }).join(', ');
        //             }
        //             return '';
        //         }
        //     },
        //     { data : 'duration_of_work'},
        //     { 
        //         data: null,
        //         render: function(data, type, row) {
        //             if (row.price_of_work) {
        //                 return row.price_of_work.total_price;
        //             }
        //             return '';
        //         }
        //     },
        //     { 
        //         data: null,
        //         render: function(data, type, row) {
        //             if (row.assigned_personnel) {
        //                 return row.assigned_personnel.map(function(person) {
        //                     return person.name;
        //                 }).join(', ');
        //             }
        //             return '';
        //         }
        //     }
        // ],
        columns: [
            { data: 'won' },
            { data: 'so' },
            { data: 'job_location' },
            { data: 'sale_type' },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render planned start datetime if available
                    return row.start_time || (row.start_dates ? row.start_dates.join(', ') : '');
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render planned end datetime if available
                    return row.end_time || (row.end_dates ? row.end_dates.join(', ') : '');
                }
            },
            { data: 'status' },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render skills required
                    return row.skills_required ? row.skills_required.map(skill => skill.skill).join(', ') : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render skills required
                    return row.skills_required ? row.skills_required.map(skill => skill.weightage).join(', ') : '';
                }
            },
            { data: 'duration_of_work'},
            { 
                data: null,
                render: function(data, type, row) {
                    // Render monthly price of work if available
                    return row.price_of_work ? row.price_of_work.monthly_price : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render total price of work if available
                    return row.price_of_work ? row.price_of_work.total_price : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render assigned personnel names
                    return row.assigned_personnel ? row.assigned_personnel.map(person => person.name).join(', ') : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render assigned personnel experiences
                    return row.assigned_personnel ? row.assigned_personnel.map(person => person.experience).join(', ') : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render assigned personnel skills
                    return row.assigned_personnel ? row.assigned_personnel.map(person => person.skill).join(', ') : '';
                }
            },
            { 
                data: null,
                render: function(data, type, row) {
                    // Render assigned personnel weightage
                    return row.assigned_personnel ? row.assigned_personnel.map(person => person.weightage).join(', ') : '';
                }
            }
        ],
        
        "pageLength": 5,
        // Enable default search filter box
        searching: true
    });
});
