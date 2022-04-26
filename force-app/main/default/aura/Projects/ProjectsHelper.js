({
    sortData: function (cmp, fieldName, sortDirection) {
        var data = cmp.get("v.projectDetails");
        var reverse = sortDirection !== 'asc';
        data.sort(this.sortBy(fieldName, reverse));
        cmp.set("v.projectDetails", data);
    },
    sortBy: function (field, reverse, primer) {
        var key = primer ?
            function(x) {return primer(x[field])} :
            function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },
    sortBy: function(component, field) {

        var sortAsc = component.get("v.sortAsc"),

            sortField = component.get("v.sortField"),

            records = component.get("v.allAccounts");

        sortAsc = sortField != field || !sortAsc;

        records.sort(function(a,b){

            var t1 = a[field] == b[field],

                t2 = (!a[field] && b[field]) || (a[field] < b[field]);

            return t1? 0: (sortAsc?-1:1)*(t2?1:-1);

        });

        component.set("v.sortAsc", sortAsc);

        component.set("v.sortField", field);

        component.set("v.allAccounts", records);

        this.renderPage(component);

    },
})
