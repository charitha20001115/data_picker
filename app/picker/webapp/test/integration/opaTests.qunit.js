sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'picker/test/integration/FirstJourney',
		'picker/test/integration/pages/tabList',
		'picker/test/integration/pages/tabObjectPage'
    ],
    function(JourneyRunner, opaJourney, tabList, tabObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('picker') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetabList: tabList,
					onThetabObjectPage: tabObjectPage
                }
            },
            opaJourney.run
        );
    }
);