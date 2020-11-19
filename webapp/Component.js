sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/models",
	"./model/errorHandling",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/Push"
], function (UIComponent, Device, models, errorHandling, Push) {
	"use strict";
	jQuery.sap.includeScript(

		"https://maps.googleapis.com/maps/api/js?key=AIzaSyAZy__OiL7vGXxuNHeV62KtqNs3h9RS2p0",

		"includeGoogleMaps",
		function () {

		}
	);
	var navigationWithContext = {

	};

	return UIComponent.extend("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			// set the FLP model
			this.setModel(models.createFLPModel(), "FLP");

			this.setModel(new sap.ui.model.json.JSONModel({

			}), "oGlobalModel");

			// set the dataSource model
			this.setModel(new sap.ui.model.json.JSONModel({
				"uri": "/here/goes/your/serviceUrl/local/"
			}), "dataSource");

			// set application model
			var oApplicationModel = new sap.ui.model.json.JSONModel({
				"mapConfig": null
			});
			this.setModel(oApplicationModel, "applicationModel");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// delegate error handling
			//errorHandling.register(this);

			this.setModel(new sap.ui.model.json.JSONModel({

			}), "oGlobalModel");

			this.setModel(new sap.ui.model.json.JSONModel({

			}), "workorderenddate");
			
			this.globalModel = new sap.ui.model.json.JSONModel({

			});
			this.setModel(this.globalModel, "globalModel");

			// create the views based on the url/hash
			this.getRouter().initialize();

/*			if (sap.ui.Device.system.desktop) {

				Push.registerForPush();
			}*/

		},

		createContent: function () {
			var app = new sap.m.App({
				id: "App"
			});
			var appType = "App";
			var appBackgroundColor = "#FFFFFF";
			if (appType === "App" && appBackgroundColor) {
				app.setBackgroundColor(appBackgroundColor);
			}

			return app;
		},
		getContentDensityClass: function() {
			if (this._sContentDensityClass === undefined) {
				// check whether FLP has already set the content density class; do nothing in this case
				if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
					this._sContentDensityClass = "";
				} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		},

		getNavigationPropertyForNavigationWithContext: function (sEntityNameSet, targetPageName) {
			var entityNavigations = navigationWithContext[sEntityNameSet];
			return entityNavigations == null ? null : entityNavigations[targetPageName];
		}

	});

});