sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.wf.zuiflight',
            componentId: 'zc_wf_flight_completeList',
            contextPath: '/zc_wf_flight_complete'
        },
        CustomPageDefinitions
    );
});