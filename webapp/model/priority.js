var typ1e1;
sap.ui.define(["sap/ui/base/Object",
	"sap/ui/model/odata/ODataModel",
	"sap/m/MessageBox",
], function (Object, ODataModel, MessageBox) {
	"use strict";
	return Object.extend("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.model.priority", {
		constructor: function (oParentView) {
			this._oParentView = oParentView;
		},

		priority: function () {
			var typ1e = this._oParentView.byId("prio12").getSelectedKey();
			

			if (typ1e === "1") {
				typ1e1 = "VERY_HIGH";
				var sPath = "/PriorityF4Set?$filter=PriorityText eq '" + typ1e1 + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
					
						var start = (oData.results[0].RequiredStartDate);

						var end = oData.results[0].RequiredEndDate;

						oController._oParentView.byId("enddate").setValue(oData.results[0].RequiredEndDate);
						oController._oParentView.byId("startdate").setValue(oData.results[0].RequiredStartDate);
							oController._oParentView.byId("malfunstart").setValue(oData.results[0].RequiredStartDate);

						var oModel = oController._oParentView.getModel();
						oModel.setProperty(sPath, oData);

					}
				});
			} else if (typ1e === "2") {
				typ1e1 = "HIGH";
				var sPath = "/PriorityF4Set?$filter=PriorityText eq '" +typ1e1+ "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
					
						var start = oData.results[0].RequiredStartDate;
						var end = oData.results[0].RequiredEndDate;

						oController._oParentView.byId("enddate").setValue(oData.results[0].RequiredEndDate);
						oController._oParentView.byId("startdate").setValue(oData.results[0].RequiredStartDate);
							oController._oParentView.byId("malfunstart").setValue(oData.results[0].RequiredStartDate);

						var oModel = oController._oParentView.getModel();
						oModel.setProperty(sPath, oData);

					},
				});
			}else if (typ1e === "3") {
				typ1e1 = "MEDIUM";
				var sPath = "/PriorityF4Set?$filter=PriorityText eq '" +typ1e1+ "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
					
						var start = oData.results[0].RequiredStartDate;
						var end = oData.results[0].RequiredEndDate;

						oController._oParentView.byId("enddate").setValue(oData.results[0].RequiredEndDate);
						oController._oParentView.byId("startdate").setValue(oData.results[0].RequiredStartDate);
							oController._oParentView.byId("malfunstart").setValue(oData.results[0].RequiredStartDate);

						var oModel = oController._oParentView.getModel();
						oModel.setProperty(sPath, oData);

					},
				});
			}
			else if (typ1e === "4") {
				typ1e1 = "LOW";
				var sPath = "/PriorityF4Set?$filter=PriorityText eq '" +typ1e1+ "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
					
						var start = oData.results[0].RequiredStartDate;
						var end = oData.results[0].RequiredEndDate;

						oController._oParentView.byId("enddate").setValue(oData.results[0].RequiredEndDate);
						oController._oParentView.byId("startdate").setValue(oData.results[0].RequiredStartDate);
							oController._oParentView.byId("malfunstart").setValue(oData.results[0].RequiredStartDate);

						var oModel = oController._oParentView.getModel();
						oModel.setProperty(sPath, oData);

					},
				});
			}
		},
		high: function () {

		}

	});

});