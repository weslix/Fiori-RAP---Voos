sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'br/com/wf/zuiflight/test/integration/FirstJourney',
		'br/com/wf/zuiflight/test/integration/pages/zc_wf_flight_completeList',
		'br/com/wf/zuiflight/test/integration/pages/zc_wf_flight_completeObjectPage'
    ],
    function(JourneyRunner, opaJourney, zc_wf_flight_completeList, zc_wf_flight_completeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('br/com/wf/zuiflight') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezc_wf_flight_completeList: zc_wf_flight_completeList,
					onThezc_wf_flight_completeObjectPage: zc_wf_flight_completeObjectPage
                }
            },
            opaJourney.run
        );
    }
);