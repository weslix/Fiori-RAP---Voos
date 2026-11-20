sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.wf.zuiflight',
            componentId: 'zc_wf_flight_completeObjectPage',
            contextPath: '/zc_wf_flight_complete'
        },
        CustomPageDefinitions
    );
});