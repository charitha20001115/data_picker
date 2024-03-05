sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        // onPress: function(oEvent) {
        //     MessageToast.show("Custom handler invoked.");
        // }

        change: function (oEvent) {
            debugger
            var dd = oEvent.oSource.mProperties.dateValue;
            var dateObject = new Date(dd);
            // Extract the year component from the Date object
            var year = dateObject.getFullYear();
            // var day = dateObject.getDate();
            var day = dateObject.getDate().toString().padStart(2, '0');
            var dob = oEvent.mParameters.value;
            var dateComponents = dob.split('/');
            // Extract day, month, and year components
            var month = parseInt(dateComponents[0]);
            if (month < 10) {
                month = '0' + month;
            }
            // var day = parseInt(dateComponents[1]);
            // var year = parseInt(dateComponents[2]);

            // Construct the new date string in the desired format
            var newdob = year + '-' + month + '-' + day;


            var id = oEvent.oSource.getParent().getCells()[0].getText()
            var name = oEvent.oSource.getParent().getCells()[1].getText()
            var d = oEvent.oSource.getParent().getCells()[2].getText()

            // let testdata = JSON.stringify({ id: id, name: name, dob: newdob });
            let testdata = JSON.stringify({ id: "'" + id + "'", name: name, dob: newdob });


            // var url = '/odata/v4/ms/tab/' + id;
            var url = '/odata/v4/ms/tab' + '(' + 'id' + '=' +  "'" + id + "'" + ',' + 'IsActiveEntity' + '=' + 'true' + ')';
            // var url =  '/odata/v4/ms/tab/' + id + ',' + 'IsActiveEntity' + '=' + 'true' + ')';
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: testdata,
                success: function (data) {
                    debugger
                    // Handle success
                    console.log(data);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                    error.message;
                }
            })


        },
        close: function (oEvent) {
            debugger
            // var url = '/odata/v4/ms/tab/' + id;
            // MessageToast.show("UPDATED");
            // this.refresh();

        }
    };
    
});
