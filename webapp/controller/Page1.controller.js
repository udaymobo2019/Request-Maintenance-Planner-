var oModelJson;
var Quagga, cc_aDataj = [],
	ci_att1 = [],
	oModelccd, cc_oTable, passarray = [],
	Palntarray = [],
	cc_aDat, comboo, notifynum, NewPass, FinalMat, comboo1, damage, loca, equip;
var maps, tech, result, directionsDisplay, directionsService, map, google, PlantPath, table, arrayOfItems = [],
	combhusb, descript, reported, notnum,
	obj;
var arr2 = [],
	arr1 = [],
	arr3 = [],
	arr4 = [];
var Latitude1, Longitude1, Latitude2, Longitude2, newmap;
var fun_loc, prior, planplant, mainloca, plangrp, mainplant, reportby, notitype;
var descripNoti, nameNoti;
var lat1, lng1, llong1, geocoder1, marker4, directionsDisplay, directionsService, prio, oModel13;
var ci_attach1, base64_marker, baseval = [],
	ci_obj1, ci_att1 = [];
var dbpdfflag;
var tableprior;
var yetprior;
var base644;
var priorsave, notifsave, priorhigh, notifsaveopen;

sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./Dialog3", "./Dialog2",
	"sap/ui/model/odata/ODataModel",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/UploadCollectionParameter",
	"./utilities",
	"sap/ui/core/routing/History",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/notificationF4",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/posting",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/priority",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/pdfmake",
	"com/sap/build/ba293bd41-us_1/mobileRequestMaintenanceV5BNewdash/model/vfsfonts",
	"./QuickView1",
	"./QuickView2"
], function (BaseController, MessageBox, Dialog3, Dialog2, ODataModel, JSONModel, MessageToast, UploadCollectionParameter, Utilities,
	History,
	notificationF4,
	posting, priority, pdfmake, vfsfonts, QuickView1, QuickView2) {
	"use strict";

	return BaseController.extend("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.controller.Page1", {

		PDF: function (oEvent) {
			this.getView().getModel("viewModel").setProperty("/busy", true);
			var id = this.getView().getId("image");
		//	var text = this.getView().getModel("globalModel").getProperty("/barItem");
			//JsBarcode(".barcode", text);

		//	var base64 = document.getElementById(id + "--image").src;

			this.object = [];
			this.objectcode = [];
			this.damage = [];
			this.damagecode = [];
			this.cause = [];
			this.causecode = [];
			this.nottype = this.getView().byId("notifif4").getSelectedKey();
			var notif = ':	' + this.nottype;
			this.text = this.getView().byId("text").getValue();
			this.descrip = this.getView().byId("descript").getValue();
			var descripto = ':	' + this.descrip;
			var notifNumber = ':	' + notnum;
			this.func1 = this.getView().byId("productInput").getValue();
			var functional = ':	' + this.func1;
			this.prio = this.getView().byId("prio12").getSelectedKey();
			if (this.prio === "1") {
				tableprior = "Very High";
				yetprior = ':	' + tableprior;
			} else if (this.prio === "2") {
				tableprior = "High";
				yetprior = ':	' + tableprior;
			} else if (this.prio === "3") {
				tableprior = "Medium";
				yetprior = ':	' + tableprior;
			} else if (this.prio === "4") {
				tableprior = "Low";
				yetprior = ':	' + tableprior;
			}
			var reqsta = this.getView().byId("startdate").getValue();
			var yy1 = reqsta.slice(6, 10);
			var mm1 = reqsta.slice(3, 5);
			var dat1 = reqsta.slice(0, 2);
			this.reqir_star = yy1 + '-' + mm1 + '-' + dat1;
			var starty = ':	' + this.reqir_star;
			var reqend = this.getView().byId("enddate").getValue();
			var yy2 = reqend.slice(6, 10);
			var mm2 = reqend.slice(3, 5);
			var dat2 = reqend.slice(0, 2);
			this.reqir_end = yy2 + '-' + mm2 + '-' + dat2;
			var endy = ':	' + this.reqir_end;
			this.name = this.getView().byId("report").getValue();
			var names = ':	' + this.name;
			var tableid = this.getView().byId("idProductsTable");
			var that = this;
			var tablelength = tableid.getItems().length;
			console.log("TableLenth :", tablelength);
			for (var i = 0; i < tablelength; i++) {
				var rows = tableid.getItems()[i];
				this.object.push(rows.getCells()[0].getText());
				this.objectcode.push(rows.getCells()[1].getText());
				this.damage.push(rows.getCells()[2].getText());
				this.damagecode.push(rows.getCells()[3].getText());
				this.cause.push(rows.getCells()[4].getText());
				this.causecode.push(rows.getCells()[5].getText());
			}
			var externalDataRetrievedFromServer = [];
			for (var i = 0; i < tablelength; i++) {
				var obt = {
					Object: this.object[i],
					ObjectCode: this.objectcode[i],
					DamageCodegroup: this.damage[i],
					Damage: this.damagecode[i],
					Cause: this.cause[i],
					CauseCode: this.causecode[i]
				};
				externalDataRetrievedFromServer.push(obt);
			}

			function buildTableBody(data, columns) {
				var body = [];
				body.push(columns);
				data.forEach(function (row) {
					var dataRow = [];
					columns.forEach(function (column) {
						dataRow.push(row[column].toString());
					})
					body.push(dataRow);
				});
				return body;
			}

			function table(data, columns) {
				return {
					table: {
						headerRows: 1,
						body: buildTableBody(data, columns)
					}
				};
			}

			var dd = {
				content: [{
						alignment: 'right',
						orientation: 'p',
						format: [612, 792],
						columns: [{

							}, {

								image: 'data:image/jpeg;base64,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sd52WLJGkdzIWeCPqCT9D/D91IH0RFZtPRw6dPp4o4hA7O1l2r+vJPMiIi7HOIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPLBSpwXLNyGtHHYtdvvyADuk7Rpuz9dDwF6kRAREQEREBERAREQEREBERAREQEREBa+ziMZYykOTno15bsDe2Kd7AXsHk6B+nyVsEQEREBERAXlio04r816OvE21M0MklDf1PA+AT9dL1IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=',
								width: 200,
								height: 165,
								fit: [100, 100],

							},

						]
					}, {
						alignment: 'left',
						columns: [{
								text: '\n Notification Report',
								style: 'header',

							}, {
								text: '',
							}, {

								text: '\n 5151 Head Quarters Drive,\n #215, Plano,\n TX 75024',
								fontSize: 9,
								bold: false,
								alignment: 'right',

							},

						]
					},

					// // }, 
					// {
					// 	alignment: 'left',
					// 	columns: [{
					// 			width: 200,
					// 			height: 165,
					// 			fit: [100, 100],
					// 		}

					// 	]

					// },
					'_______________________________________________________________________________________________',

					{
						text: '\n  Maintenance Notification is used to notify maintenance department about an abnormal or exceptional situation in technical objects in plant area.'
					}, {
						text: '\n Notification Info',
						style: 'header'
					}, {
						text: '\n'
					},

					{
						style: 'tableExample',
						table: {
							heights: 30,
							widths: 'auto',

							/* body: [
							// [{text: 'Notification Type', style: 'tableHeader'},{text: 'Priority', style: 'tableHeader'},{text: 'Description', style: 'tableHeader'},{text: 'Start Date', style: 'tableHeader'},{text: 'End Date', style: 'tableHeader'},{text: 'Reported By', style: 'tableHeader'}],
							// [
							// this.nottype,tableprior,this.descrip,this.reqir_star,this.reqir_end,this.name

							// ]
							['Notification Type','Vishal'],
							],*/
							body: [
								['Notification', notifNumber],
								['Description', descripto],
								['Notification Type', notif],
								['Priority', yetprior],
								['Technical Object', functional],
								['Start Date', starty],
								['End Date', endy],
								['Reported By', names],
							],

						},
						layout: 'noBorders'
					},

					'_______________________________________________________________________________________________',

					{
						alignment: 'right',
						columns: [{
							text: '',

						}, {
							text: ''
						}, {
							text: '\nMobolutions \n     +1 469 294 0660',

						}]
					},
				],
				styles: {
					header: {
						fontSize: 15,
						bold: true,
						alignment: 'justify'
					}
				}

			}
			var text = oEvent.getSource().mProperties.text;
			if (text === "Mail") {
				this.getView().getModel("viewModel").setProperty("/busy", false);
				dbpdfflag = dd;
				//	pdfMake.createPdf(dbpdfflag).open();
				pdfMake.createPdf(dbpdfflag).getBase64(
					function (encodedString) {
						base644 = encodedString;
						this.mail(base644);
					}.bind(this) // To bind the callback with the actual context
				);
				var data1 = base644;
			} else {
				this.getView().getModel("viewModel").setProperty("/busy", false);
				dbpdfflag = dd;
				pdfMake.createPdf(dbpdfflag).open();
				pdfmake.createPdf(dbpdfflag).download("Sample");
			}

		},

		handleRouteMatched: function (oEvent) {
			this.viewModel = new JSONModel({
				busy: false,
				delay: 0,

			});
			this.getView().setModel(this.viewModel, "viewModel");
			this.a10 = 0;
			//****************reported by *********************//**GITHUB Comment/////

			this.Type();
			this.reportedBy();

			var designation = window.location.origin;
			if (designation === "https://flpnwc-ba293bd41.dispatcher.us1.hana.ondemand.com") {
				this.getView().byId("Dashboard").setVisible(true);
			} else {
				this.getView().byId("Dashboard").setVisible(false);
			}
		},
		Type: function () {
			this.F4Values.read("/NotificationTypSet", {
				success: function (oData, oResponse) {
					this.getView().getModel("oGlobalModel").setProperty("/type", oData.results);
				}.bind(this)
			});
			this.prior();
		},
		prior: function () {
			var oCont = this;
			var sPath = "/PrioritySet";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					/*var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = oCont.getView().byId("prio12");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{PriorityType}",
						text: "{PriorityDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});*/
					this.getView().getModel("oGlobalModel").setProperty("/PrioritySet", oData.results);

				}.bind(this)
			});
		},
		mail: function (base644) {
			var a = sap.ui.core.Fragment.byId("results", "tab3").getItems()
			var mailtext = a[0].getCells()[1].getText();
			Email.send({
				Host: "smtp.gmail.com",
				Username: "mobolutionsdemo@gmail.com",
				Password: "Mobo@2050",
				To: ['mobolutionsdemo@gmail.com','sam.mobolutions.com','ashish.khandelwal@mobolutions.com'],
				From: "mobolutionsdemo@gmail.com",
				Subject: mailtext,
				Body: "<html><h3>Please find the below New Maintanance Request Details</h3><br><h4>Note:This is an auto-generated mail , Kindly do not reply on this mail.</h4></br><br><h4>Thank you</h4></br></html>",
				Attachments: [{
					name: "Notification.pdf",
					data: base644
				}]
			}).then(function () {
				this.getView().getModel("viewModel").setProperty("/busy", false);
				var msg = 'Mail has been sent';
				MessageToast.show(msg);
			}.bind(this));

		},
		message: function () {
			MessageBox.alert("The quantity you have reported exceeds the quantity planed.");
		},
		icontabchange: function (oEvent) {
			var icontab = this.getView().byId("byp");
			var mKey = oEvent.getParameters().key;
			if (mKey === "plantby") {

				var plant = sap.ui.core.Fragment.byId("techfragment", "main").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
				sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);
				var tableres = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
				tableres.destroyItems();

			} else if (mKey === "costby") {
				var plant = sap.ui.core.Fragment.byId("techfragment", "cost").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
				sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);
				var tableres = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
				tableres.destroyItems();
			} else if (mKey === "funby") {
				var plant = sap.ui.core.Fragment.byId("techfragment", "functech").setValue("");
				var materialtype = sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(false);
				var materialtype = sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(true);
				var tableres = sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);

			} else if (mKey === "equby") {
				var plant = sap.ui.core.Fragment.byId("techfragment", "equip").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(true);
				sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);
				var tableres = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
				tableres.destroyItems();
			}
		},

		HomeButton: function () {

			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Do you want to exit?", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation Message",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						// notify user
						if (oAction == "YES") {
							//alert("clicked");
							sap.m.URLHelper.redirect(
								"https://dashboarddesigngrunt-ba293bd41.dispatcher.us1.hana.ondemand.com/index.html?hc_reset#/PM"
							);
							//window.location = "https:flpnwc-ba293bd41.dispatcher.us1.hana.ondemand.com/sites?siteId=2129522a-cfca-48cc-8961-c21762d0cb8b#Create_Notification_08032019-Display"
							//oRouter = sap.ui.core.UIComponent.getRouterFor(this);

							//oRouter.navTo("Login");

						} else(oAction == "NO");

						{
							//	alert("no actions")
						}
					}
				});

			/*	window.location.replace(
					"https://dashboarddesign-ba293bd41.dispatcher.us1.hana.ondemand.com/index.html?hc_reset#/PM"
				);*/

		},

		addRow: function () {

			var inputinfo = this.getView().byId("productInput").getValue();
			if (inputinfo == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select technical object", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {

				var a1 = sap.ui.core.Fragment.byId("tablefragment", "technical1").setValue("");
				var a2 = sap.ui.core.Fragment.byId("tablefragment", "objectcode").setValue("");
				sap.ui.core.Fragment.byId("tablefragment", "objectcode").setEditable(false);
				var a3 = sap.ui.core.Fragment.byId("tablefragment", "damage").setValue("");
				var a4 = sap.ui.core.Fragment.byId("tablefragment", "damagecode").setValue("");
				sap.ui.core.Fragment.byId("tablefragment", "damagecode").setEditable(false);
				var a5 = sap.ui.core.Fragment.byId("tablefragment", "cause").setValue("");
				var a6 = sap.ui.core.Fragment.byId("tablefragment", "causecode").setValue("");
				sap.ui.core.Fragment.byId("tablefragment", "causecode").setEditable(false);
				var len = this.getView().byId("idProductsTable");
				this.iItems = len.getItems().length;
				//	alert(this.iItems);
				this.a10 = this.iItems + 1;
				var a7 = sap.ui.core.Fragment.byId("tablefragment", "item12").setValue(this.a10);
				//alert(a7)

				table.open();
				this.codGrp();
				this.DamcoGrp();
				this.causeF4();
			}

		},

		tableok: function () {
			var oCont = this;
			var a1 = sap.ui.core.Fragment.byId("tablefragment", "technical1").getValue();
			var a2 = sap.ui.core.Fragment.byId("tablefragment", "objectcode").getValue();
			var a3 = sap.ui.core.Fragment.byId("tablefragment", "damage").getValue();
			var a4 = sap.ui.core.Fragment.byId("tablefragment", "damagecode").getValue();
			var a5 = sap.ui.core.Fragment.byId("tablefragment", "cause").getValue();
			var a6 = sap.ui.core.Fragment.byId("tablefragment", "causecode").getValue();
			var a7 = sap.ui.core.Fragment.byId("tablefragment", "item12").getValue();
			if (a1 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select code group", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (a2 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select object part", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (a3 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select damage code group", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (a4 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select damage part", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (a5 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select cause code ", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else if (a6 == '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Select cause code group", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {

				var obj = {
					object: a1,
					objectcode: a2,
					damage: a3,
					damagecode: a4,
					cause: a5,
					causecode: a6,
					itemnumber: a7

				};
				arr1.push(obj);
				arr2 = {
					"arr2": arr1
				};
				oModel = new sap.ui.model.json.JSONModel(arr2);
				var t1 = oCont.getView().byId("idProductsTable");
				t1.setModel(oModel);
				var titems1 = new sap.m.ColumnListItem({
					cells: [
						new sap.m.Text({
							text: "{itemnumber}"
						}), new sap.m.Text({
							text: "{object}"
						}), new sap.m.Text({
							text: "{objectcode}"
						}), new sap.m.Text({
							text: "{damage}"
						}), new sap.m.Text({
							text: "{damagecode}"
						}), new sap.m.Text({
							text: "{cause}"
						}), new sap.m.Text({
							text: "{causecode}"
						}),
						new sap.m.Button({
							//	icon: "sap-icon://edit",
							text: "Edit",
							tooltip: "Edit",
							type: sap.m.ButtonType.Transparent,
							press: function (oArg) {
								oCont.editItem(oArg);
							}
						}),

						new sap.m.Button({
							//	icon: "sap-icon://delete",
							text: "Delete",
							tooltip: "Delete",
							type: sap.m.ButtonType.Transparent,
							press: function (oArg) {
								oCont.deleteItem(oArg);
							}
						})

					]
				});

				t1.bindItems("/arr2", titems1);
				table.close();
			}

		},

		deleteItem: function (oArg) {
			var that = this;
			var itemTable = that.getView().byId("idProductsTable");
			var value = oArg.getSource().getParent().getBindingContext().getPath();
			var valueind = value.split("/");
			that.index = valueind[2];
			var ind = +that.index + +1;
			var rowlen = itemTable.getItems().length;
			if (rowlen <= ind) {
				var row1 = +rowlen - +1;
				var itemnum = itemTable.getItems()[row1].getCells()[0].getText();
				var itemlast = itemnum - +1;
				var itemnum = itemTable.getItems()[row1].getCells()[0].setText(itemlast);
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();
				var delItem = d.arr2[that.index].Item;
				d.arr2.splice(that.index, 1);
			} else {
				for (var i = ind; i <= rowlen - +1; i++) {
					var itemnum = itemTable.getItems()[i].getCells()[0].getText();
					var itemlast = itemnum - +1;
					var itemnum = itemTable.getItems()[i].getCells()[0].setText(itemlast);
				}
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();
				var delItem = d.arr2[that.index].Item;
				d.arr2.splice(that.index, 1);
			}

		},
		editItem: function (oArg) {
			var that = this;
			var value = oArg.getSource().getParent().getBindingContext().getPath();
			var valueind = value.split("/");
			that.index = valueind[2];
			var itemTable = this.getView().byId("idProductsTable");
			var rowlen = itemTable.getItems().length;
			that.index = Number(that.index);
			for (var indexVal = 0; indexVal < rowlen; indexVal++) {

				if (indexVal === that.index) {

					var item = itemTable.getItems()[indexVal].getCells()[0].getText();
					var codegroup = itemTable.getItems()[indexVal].getCells()[1].getText();
					var objectpart = itemTable.getItems()[indexVal].getCells()[2].getText();
					var damagegroup = itemTable.getItems()[indexVal].getCells()[3].getText();
					var damage = itemTable.getItems()[indexVal].getCells()[4].getText();
					var cause = itemTable.getItems()[indexVal].getCells()[5].getText();
					var causecode = itemTable.getItems()[indexVal].getCells()[6].getText();

					sap.ui.core.Fragment.byId("editTablefragment", "item12").setValue(item);
					sap.ui.core.Fragment.byId("editTablefragment", "technical1").setValue(codegroup);
					sap.ui.core.Fragment.byId("editTablefragment", "objectcode").setValue(objectpart);
					sap.ui.core.Fragment.byId("editTablefragment", "damage").setValue(damagegroup);
					sap.ui.core.Fragment.byId("editTablefragment", "damagecode").setValue(damage);
					sap.ui.core.Fragment.byId("editTablefragment", "cause").setValue(cause);
					sap.ui.core.Fragment.byId("editTablefragment", "causecode").setValue(causecode);

				} else {

				}

			}

			this.edit.open();
			that.codGrp1();
			that.DamcoGrp1();
			that.causeF41();
			that.objcode111();
			that.damage1();
			that.cause1();

		},
		itemTableCloseEdit: function () {

			var that = this;
			var edItem = sap.ui.core.Fragment.byId("editTablefragment", "item12").getValue();
			var edcodegrp = sap.ui.core.Fragment.byId("editTablefragment", "technical1").getValue();
			var edobjectpart = sap.ui.core.Fragment.byId("editTablefragment", "objectcode").getValue();
			var eddamagegrp = sap.ui.core.Fragment.byId("editTablefragment", "damage").getValue();
			var eddamage = sap.ui.core.Fragment.byId("editTablefragment", "damagecode").getValue();
			var edcause = sap.ui.core.Fragment.byId("editTablefragment", "cause").getValue();
			var edcausegrp = sap.ui.core.Fragment.byId("editTablefragment", "causecode").getValue();

			var itemTable = that.getView().byId("idProductsTable");
			var rowlen = itemTable.getItems().length;

			for (var indexVal = 0; indexVal < rowlen; indexVal++) {

				if (indexVal === that.index) {
					itemTable.getItems()[indexVal].getCells()[0].setText(edItem);
					itemTable.getItems()[indexVal].getCells()[1].setText(edcodegrp);
					itemTable.getItems()[indexVal].getCells()[2].setText(edobjectpart);
					itemTable.getItems()[indexVal].getCells()[3].setText(eddamagegrp);
					itemTable.getItems()[indexVal].getCells()[4].setText(eddamage);
					itemTable.getItems()[indexVal].getCells()[5].setText(edcause);
					itemTable.getItems()[indexVal].getCells()[6].setText(edcausegrp);
					that.edit.close();
				} else {

				}
			}
		},
		codGrp: function () {
			this.code = sap.ui.core.Fragment.byId("tablefragment", "technical1");
			var sPath = "/CodeGroupSet?$filter=Catalog eq 'B'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "technical1");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		codGrp1: function () {
			this.code = sap.ui.core.Fragment.byId("editTablefragment", "technical1");
			var sPath = "/CodeGroupSet?$filter=Catalog eq 'B'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "technical1");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		DamcoGrp: function () {

			this.damg = sap.ui.core.Fragment.byId("tablefragment", "damage");
			var sPath = "/CodeGroupSet?$filter=Catalog eq ''";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "damage");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		DamcoGrp1: function () {
			this.damg = sap.ui.core.Fragment.byId("editTablefragment", "damage");
			var sPath = "/CodeGroupSet?$filter=Catalog eq ''";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "damage");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		causeF4: function () {

			var causeF4 = sap.ui.core.Fragment.byId("tablefragment", "cause");
			var sPath = "/CodeGroupSet?$filter=Catalog eq '5'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "cause");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		causeF41: function () {

			var causeF4 = sap.ui.core.Fragment.byId("editTablefragment", "cause");
			var sPath = "/CodeGroupSet?$filter=Catalog eq '5'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					var oModelj = new sap.ui.model.json.JSONModel();
					oModelj.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "cause");
					t5.setModel(oModelj);
					var oItems = new sap.ui.core.ListItem({
						key: "{CodeGrp}",
						text: "{CodeGrp}:{CodeGroupDes}"
					});
					t5.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},

		cancelT: function () {

			table.close();

		},

		tech_change1: function () {
			//	sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
			//	sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
			var Flcoc = sap.ui.core.Fragment.byId("techfragment", "functech").getSelectedKey();
			var subfloc = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getValue();

			console.log("tech_change1", Flcoc);
			var sPath = "/SubFunLocSet?$filter=SupFLoc eq '" + Flcoc + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					ocont.count = oData.results.length;
					console.log("ocont.count :", ocont.count);

					if (ocont.count == '0') {

						jQuery.sap.require("sap.m.MessageBox");
						sap.m.MessageBox.alert("Sub functional location not available for the functional location " + Flcoc, {
							title: "Information",
							onClose: null
						});

						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);

						sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(false);

						sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(false);

						sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);

					} else {

						//		alert("else");

						sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(true);

						sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "subfunctech").setValue("");
						sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);

						console.log("oDataequp :", oData);
						var c4Model = new sap.ui.model.json.JSONModel();
						c4Model.setData(oData);
						var t5 = sap.ui.core.Fragment.byId("techfragment", "subfunctech");
						t5.setModel(c4Model);
						var vescombo = sap.ui.core.Fragment.byId("techfragment", "subfunctech");
						var oItems = new sap.ui.core.ListItem({
							key: "{FLoc}",
							text: "{FLoc} {FLocDes}"
						});
						vescombo.bindAggregation("items", {
							path: '/results',
							template: oItems

						});

					}
				}

			});

		},
		techok2: function () {

			var funcmb = sap.ui.core.Fragment.byId("techfragment", "functech").getValue();
			var funinp = this.getView().byId("productInput").setValue(funcmb);
			this.getView().getModel("globalModel").setProperty("/barItem", funcmb);
			tech.close();
			this.getView().byId("link").setVisible(false);
			this.getView().byId("link1").setVisible(true);
		},
		techok3: function () {

			var subfun = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getValue();
			var funinp = this.getView().byId("productInput").setValue(subfun);
			this.getView().getModel("globalModel").setProperty("/barItem", subfun);
			tech.close();
			this.getView().byId("link").setVisible(false);
			this.getView().byId("link1").setVisible(true);
		},
		clear: function () {
			var del = this.getView().byId("idProductsTable");
			arr1 = [];
			arr2 = [];
			del.destroyItems();

		},
		tech_change: function () {

			//	sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);

			//	sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
			var oController = this;
			var Flcoc = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getSelectedKey();
			console.log("tech_change", Flcoc);
			var table = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			var oModel = new ODataModel("/sap/opu/odata/sap/ZpM_F4_SRV/", true);
			oModelJson = new sap.ui.model.json.JSONModel();
			var sPath = "/SubFunctionalLocationSet?$filter=FunctionalLocation eq'" + Flcoc + "'";
			oModel.read(sPath, {
				//filters: [new sap.ui.model.Filter("SupFLoc", sap.ui.model.FilterOperator.EQ, '1032-LABS')], //"K1-B01-1")],
				success: function (oData, oResponse) {
					var countse = oData.results.length;
					if (countse == '0') {

						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);

						sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(true);

						sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(true);

						sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(false);

					} else {

						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok4").setVisible(true);

						// console.log("Function oModel:", oData);
						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({

							cells: [
								new sap.m.Text({
									text: "{SuperiorFunctionalLocation}"
								}),
								new sap.m.Text({
									text: "{SuperiorFunctionalLocationDes}"
								})

							]
						});

						table.setModel(oModelJson);
						table.bindItems("/results", oTemplate);

					}

				}

			});

			// var Flcoc = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getSelectedKey();
			// alert(Flcoc)
			// var t1 = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			// var oFilters = [new sap.ui.model.Filter("SupFLoc", sap.ui.model.FilterOperator.EQ, "Flcoc")];

			// //			t1.setModel(oModel);

			// var titems1 = new sap.m.ColumnListItem({
			// 	cells: [new sap.m.Text({
			// 			text: "{SupFLoc}",

			// 		}), new sap.m.Text({
			// 			text: "{FLoc}"
			// 		})

			// 	]
			// });

			// //		t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
			// t1.bindItems({
			// 	path: '/SubFunLocSet',
			// 	parameters: {
			// 		operationMode: "Default"
			// 	},
			// 	template: titems1,
			// 	filters: oFilters
			// });
			/*	var sPath = "/EquipmentF4Set?$filter=FunctionalLocation eq '" + Flcoc + "'";
				var eModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				eModel.read(sPath, {

					success: function (oData, oResponse) {
						console.log("Equipment Data(based on FL):: ", oData);
					}
				});*/

		},
		onDelCon: function (oArg) {
			/*	var row = oEvent.getSource().getParent();
			row.getParent().removeItem(row);*/
			var tabellength = this.getView().byId("idProductsTable").getItems();
			var deleteRecord = oArg.getSource().getBindingContext().getObject();
			console.log(deleteRecord, "deleteRecord");
			for (var i = 0; i < arr1.length; i++) {
				if (arr1[i] == deleteRecord) {
					arr1.splice(i, 1); //removing 1 record from i th index.
					oModel13.refresh();
					break; //quit the loop
				}
			}

		},
		ci_handleDelete: function (oEvent) {
			var path = oEvent.getParameter('listItem').getBindingContext().getPath();
			var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
			var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

			var Data = list_ID.getModel();

			var d = Data.getData();
			d.splice(idx, 1);
			Data.setData(d);
		},

		techok: function () {

			var tableid = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			var item = sap.ui.core.Fragment.byId("techfragment", "technical_detail").getSelectedItem();
			var tablelength = tableid.getSelectedItems().length;
			this.getView().getModel("globalModel").setProperty("/barItem", item);
			console.log("TableLenth :", tablelength);
			if (tablelength == '0') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.warning(
					"Select technical object", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {
				for (var i = 0; i < tablelength; i++) {
					var rows = tableid.getSelectedItems()[i];
					var item = rows.getCells()[0].getText();

					var desc = rows.getCells()[1].getText();
					this.getView().getModel("globalModel").setProperty("/barItem", item);

					var item1 = this.getView().byId("productInput").setValue(item + ' ' + desc);

				}
				tech.close();
				this.getView().byId("link").setVisible(false);
				this.getView().byId("link1").setVisible(true);
			}

		},
		techok4: function () {

			var tableid = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			var item = sap.ui.core.Fragment.byId("techfragment", "technical_detail").getSelectedItem();
			var tablelength = tableid.getSelectedItems().length;
			this.getView().getModel("globalModel").setProperty("/barItem", item);
			console.log("TableLenth :", tablelength);
			if (tablelength == '0') {

				var subtech = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getValue();
				this.getView().byId("productInput").setValue(subtech);
				tech.close();
				this.getView().byId("link").setVisible(false);
				this.getView().byId("link1").setVisible(true);

			} else {
				for (var i = 0; i < tablelength; i++) {
					var rows = tableid.getSelectedItems()[i];
					var item = rows.getCells()[0].getText();

					var desc = rows.getCells()[1].getText();

					var item1 = this.getView().byId("productInput").setValue(item + ' ' + desc);
					this.getView().getModel("globalModel").setProperty("/barItem", item);

				}
				tech.close();
				this.getView().byId("link").setVisible(false);
				this.getView().byId("link1").setVisible(true);
			}
		},
		techok1: function () {

			var eqipcmb = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();
			var key = sap.ui.core.Fragment.byId("techfragment", "equip").getSelectedKey();
			this.getView().getModel("globalModel").setProperty("/barItem", key);
			var eqiitem = this.getView().byId("productInput").setValue(eqipcmb);
			tech.close();
			this.getView().byId("link").setVisible(true);
			this.getView().byId("link1").setVisible(false);
		},
		clearfilter: function () {

			var plant = sap.ui.core.Fragment.byId("techfragment", "main").setSelectedKey("");
			//	var techObj = this.getView().byId("productInput").setValue("");
			var cost = sap.ui.core.Fragment.byId("techfragment", "cost").setSelectedKey("");
			var func = sap.ui.core.Fragment.byId("techfragment", "functech").setSelectedKey("");
			var subfunc = sap.ui.core.Fragment.byId("techfragment", "subfunctech").setSelectedKey("");
			var equip = sap.ui.core.Fragment.byId("techfragment", "equip").setSelectedKey("");
			sap.ui.core.Fragment.byId("techfragment", "technical_detail").destroyItems();
			sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);

		},

		canceltecch: function () {
			sap.ui.core.Fragment.byId("techfragment", "technical_detail").destroyItems();
			tech.close();
		},

		priority1: function () {
			var oView = this.getView();
			prio = new priority(oView, this.getOwnerComponent());
			prio.priority();
		},
		equichange: function () {
			sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);
			//	var eqiitem = this.getView().byId("productInput").setValue(eqipcmb);
			sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(true);
			sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
		},
		funclocBind: function () {
			var funloc = sap.ui.core.Fragment.byId("techfragment", "functech");
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			oModel.read('/FunctionalLocAllDataSet', {
				//	filters: ofilters,
				success: function (oData, oResponse) {

					this.getView().getModel("globalModel").setProperty("/FunctionalLocation", oData.results);
					var leng = oData.results.length;

					var FunctionalLocation = oData.results[0].FunctionalLocation;
					var Text = oData.results[0].Text;
					var dups = [];
					var arr3 = oData.results.filter(function (el) {
						if (dups.indexOf(el.FunctionalLocation) == -1) {
							dups.push(el.FunctionalLocation);
							return true;
						} else if (dups.indexOf(el.Text) == -1) {
							dups.push(el.Text);
							return true;
						}
						return false;
					});
					var arr11 = {
						"arr11": arr3
					};
					console.log("arr11:" + arr11);
					var oItems = new sap.ui.core.ListItem({
						key: "{FunctionalLocation}",
						text: "{FunctionalLocation}-{FunctionalLocationDesc}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr11);
					oModel.setSizeLimit(1000);
					funloc.setModel(oModel);
					funloc.bindItems("/arr11", oItems);
					this.geoMap();
				}.bind(this),

			});
		},

		_onSegmentedButtonItemPress: function (oEvent) {
			var techniacl_obj = this.getView().byId("productInput").getValue();
			this.funclocBind();
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude;
					this.currentloc = this.longitude + ";" + this.latitude + ";0";
					this.getView().getModel("globalModel").setProperty("/currentloc", this.currentloc);

				}.bind(this));
			} else {
				MessageToast.show("Geolocation is not supported by this browser.");
			}

		},
		onClickSpot: function (evt) {
			//	var location = evt.oSource.mAggregations.tooltip;
			var desc = evt.oSource.mProperties.labelText;
			//var technical = location +""+desc;
			var sPath = "/SubFunLocSet?$filter=SupFLoc eq '" + location + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					this.getView().getModel("globalModel").setProperty("/subFuncLocation", oData.results);
				}.bind(this)
			});
			this.getView().byId("productInput").setValue(desc);
			maps.close();
			this.getView().byId("link").setVisible(false);
			this.getView().byId("link1").setVisible(true);

		},
		onSelectionChange: function (oEvent) {
			var a = oEvent.mParameters.mParameters.listItem.mProperties.title;
		},

		geoMap: function () {
			var test = this.getView().getModel("globalModel").getProperty("/FunctionalLocation");
			var oGeoMap = sap.ui.core.Fragment.byId("maps", "GeoMap");
			var oMapConfig = {
				"MapProvider": [{
					"name": "GMAP",
					"Source": [{
						"id": "s1",
						"url": "https://mt.google.com/vt/x={X}&y={Y}&z={LOD}"
					}]
				}],
				"MapLayerStacks": [{
					"name": "DEFAULT",
					"MapLayer": {
						"name": "layer1",
						"refMapProvider": "GMAP",
						"opacity": "1",
						"colBkgnd": "RGB(255,255,255)"
					}
				}]
			};
			oGeoMap.setMapConfiguration(oMapConfig);
			oGeoMap.setRefMapLayerStack("DEFAULT");
			oGeoMap.setInitialPosition(this.longitude + ";" + this.latitude + ";0");
			oGeoMap.setZoomlevel(12);
			var oVBI = new sap.ui.vbm.GeoMap({
				vos: [new sap.ui.vbm.Spots({
					items: [new sap.ui.vbm.Spot({
						position: "20;0;0"
					})]
				})]
			});
			var data = test.map(function (item) {
				if (item.Latitude == "") {
					item.location = "";
				} else {
					var latitude = item.Latitude.slice(0, 7);
					var longitude = item.Longitude.slice(0, 7);
					item.location = longitude + ";" + latitude + ";0";
					item.type = "Success";
					return item;
				}
			});
			this.getView().getModel("globalModel").setProperty("/possarray", data);
			// var bapiret = [{
			// 	"Position": this.longitude + ";" + this.latitude + ";0",
			// 	"tooltip": "Current Position",
			// 	"text": "Current",
			// 	"type": "Warning"
			// }, {
			// 	"Position": "80.2707;13.0827;0",
			// 	"tooltip": "0006-MOBO",
			// 	"text": "0006-MOBO",
			// 	"type": "Success"
			// }, {
			// 	"Position": "80.2101;13.0850;0",
			// 	"tooltip": "0006-MOBO-0001",
			// 	"text": "0006-MOBO-0001",
			// 	"type": "Warning"

			// }, {
			// 	"Position": "79.8083;11.9416;0",
			// 	"tooltip": "PL01",
			// 	"text": "PL01",
			// 	"type": "Error",
			// }, {
			// // 	"Position": "78.1198;9.9252;0",
			// 80.211;
			// 13.013;
			// 0
			// 	"tooltip": "PL01-FSF",
			// 	"text": "PL01-FSF",
			// 	"type": "Warning",
			// }, {
			// 	"Position": "78.7047;10.7905;0",
			// 	"tooltip": "PL01-FSF-SD",
			// 	"text": "PL01-FSF-SD",
			// 	"type": "Error",
			// }, {
			// 	"Position": "78.0766;10.9601;0",
			// 	"tooltip": "PL01-FSF-SD-01",
			// 	"text": "PL01-FSF-SD-01",
			// 	"type": "Error"

			// }, {
			// 	"Position": "76.9558;11.0168;0",
			// 	"tooltip": "PL02",
			// 	"text": "PL02",
			// 	"type": "Success"

			// }];

			//	this.getView().getModel("globalModel").setProperty("/possarray", bapiret);
			maps.open();
		},

		clo: function () {

			maps.close();
		},
		ok: function () {

			tech.close();

		},

		_onFileUploaderChange: function () {
			//	alert("ppp")
			var oFileuploader = this.getView().byId("ci_fileUploader1");

			ci_attach1 = this.getView().byId("UploadCollection");
			var len = oFileuploader.length;
			var sFilename = oFileuploader.getValue();

			//	baseval = [" "," "," "," "," "];
			var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];
			console.log(file)

			var base64_marker = 'data:' + file.type + ';base64,';

			var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
			console.log("filename : " + filename);
			var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
			console.log("fileext : " + fileext);
			var sfileext = fileext.substring(0, 3);
			console.log("sfileext : " + sfileext);
			var tsfileext = sfileext.toUpperCase();
			console.log("tsfileext : " + tsfileext);
			var that = this;
			if (file) {
				var reader = new FileReader();

				reader.onload = function (readerEvt) {
					var binaryString = readerEvt.target.result;
					var base64 = btoa(binaryString);
					console.log("base64 : " + base64);

					oFileuploader.setValue();
					baseval.push(base64);
					console.log(baseval);
					var ci_obj1 = {
						Name: filename,
						Ext: tsfileext,
						Base64: base64
					};
					ci_att1.push(ci_obj1);

					console.log(ci_att1.length);
					var oModel = new sap.ui.model.json.JSONModel(ci_att1);
					console.log(ci_att1);
					console.log(ci_att1[0].Base64);
					ci_attach1.setModel(oModel);
					var oItems = new sap.m.ObjectListItem({
						icon: {
							path: "Ext",
							formatter: function (subject) {
								var lv = subject;
								if (lv === 'TXT') {
									return "sap-icon://document-text";
								} else if (lv === 'JPEG' || lv === 'PNG' || lv === 'BMP' || lv === 'JPG') {
									return "sap-icon://attachment-photo";
								} else if (lv === 'PDF') {
									return "sap-icon://pdf-attachment";
								} else if (lv === 'DOC') {
									return "sap-icon://doc-attachment";
								} else if (lv === 'XLS') {
									return "sap-icon://excel-attachment";
								} else if (lv === 'MP3') {
									return "sap-icon://attachment-audio";
								} else if (lv === 'XLSX') {
									return "sap-icon://excel-attachment";
								} else if (lv === 'PPT') {
									return "sap-icon://ppt-attachment";
								} else {
									return "sap-icon://document";
								}

							}
						},
						title: "{Name}.{Ext}",
						type: "Active",
					});
					ci_attach1.bindItems("/", oItems);
					that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

					/*var	ci_att11 = that.getView().getModel("oGlobalModel").getProperty("/ci_att1");
			console.log(ci_att11,"array");*/

				};

			};

			reader.readAsBinaryString(file);

		},

		test1: function () {
			var oView = this.getView();
			var post = new posting(oView, this.getOwnerComponent());
			post.test1();
		},

		DMS: function () {
			//	alert("SMD")
			var that = this;

			that.ci_att1 = that.getView().getModel("oGlobalModel").getProperty("/ci_att1");
			console.log("Array", ci_att1);
			var oUploadCollection = that.getView().byId("UploadCollection");

			var arr1 = [];
			var arrp = [];
			var count = that.ci_att1.length;
			console.log("count :", count);

			for (var i = 0; i < count; i++) {
				var dmsdata = {
					"DocType": that.ci_att1[i].Ext,
					"FileName": that.ci_att1[i].Name,
					"Base64": that.ci_att1[i].Base64

				};
				arr1.push(dmsdata);
			}
			var obj = {
				"d": {
					"ProcessName": "Notification",
					"Description": descripNoti,
					"Username": nameNoti,
					"NotificationNo": notnum,
					"To_DMSItems": arr1,
				}
			};
			arrp.push(obj);

			console.log(obj);
			var oModel1 = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
			var sPath = "/DMS_HeaderSet";

			oModel1.create(sPath, obj, {
				success: function (oData, oResponse) {
					that.getView().getModel("viewModel").setProperty("/busy", false);
					console.log(oData);

					var msg = oData.ReturnMessage;
					var typ = oData.ReturnType;
					console.log(typ, "type");
					if (typ == "S") {
						/*jQuery.sap.require("sap.m.MessageBox");
						sap.m.MessageBox.confirm(msg, {
							icon: sap.m.MessageBox.Icon.SUCCESS,
							title: "Success",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction == "OK") {
									window.location.reload();
								}
							}
						});
*/
						MessageToast.show(msg);
					} else {
						/*sap.m.MessageBox.warning(msg, {
							icon: sap.m.MessageBox.Icon.WARNING,
							title: "Warning",
							actions: [sap.m.MessageBox.Action.OK],

							onClose: function (oAction) {

								if (oAction == "OK") {
									window.location.reload();

								}
							}

						});*/
						MessageToast.show(msg);

					}

				}
			});

		},

		handleValueHelp: function () {

			this.getView().getModel("oGlobalModel").setProperty("/barCode", "");

			var notiftype1 = this.getView().byId("notifif4").getSelectedKey();
			if (notiftype1 === '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select notification type", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {

				sap.ui.core.Fragment.byId("techfragment", "cost").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "equip").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "functech").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "main").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "sfl").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "subfunctech").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);
				sap.ui.core.Fragment.byId("techfragment", "subfunctech").setValue("");
				sap.ui.core.Fragment.byId("techfragment", "technical_detail").destroyItems();

				var oCont = this;
				var cost = sap.ui.core.Fragment.byId("techfragment", "cost");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/CostCenterMasterF4Set', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var CostCenter = oData.results[0].CostCenter;
						var Description = oData.results[0].CostCenterDes;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.CostCenter) == -1) {
								dups.push(el.CostCenter);
								return true;
							} else if (dups.indexOf(el.Description) == -1) {
								dups.push(el.Description);
								return true;
							}
							return false;
						});
						var arr9 = {
							"arr9": arr
						};
						console.log("arr9:" + arr9);
						var oItems = new sap.ui.core.ListItem({
							key: "{CostCenter}",
							text: "{CostCenter}-{CostCenterDes}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr9);
						oModel.setSizeLimit(1500);
						cost.setModel(oModel);
						cost.bindItems("/arr9", oItems);

					},

				});
				var oCont = this;
				var sPath = "/EquipmentF4Set";
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						var c4Model = new sap.ui.model.json.JSONModel();
						c4Model.setSizeLimit(5600);
						c4Model.setData(oData);
						var t5 = sap.ui.core.Fragment.byId("techfragment", "equip");
						t5.setModel(c4Model);
						var vescombo = sap.ui.core.Fragment.byId("techfragment", "equip");
						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNo}",
							text: "{EquipmentNo} {Text}",

						});
						vescombo.bindAggregation("items", {
							path: '/results',
							template: oItems
						});
					}
				});

				var oCont = this;
				var oModel1 = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var sPath = "/CostCenterMasterF4Set";
				oModel1.read(sPath, {
					success: function (oData, oResponse) {
						var c4Model12 = new sap.ui.model.json.JSONModel();
						c4Model12.setSizeLimit(5600);
						c4Model12.setData(oData);
						var t5 = sap.ui.core.Fragment.byId("techfragment", "cost");
						t5.setModel(c4Model12);
						var vescombo = sap.ui.core.Fragment.byId("techfragment", "cost");
						var oItems = new sap.ui.core.ListItem({
							key: "{CostCenter}",
							text: "{CostCenter}-{CostCenterDes}",

						});
						vescombo.bindAggregation("items", {
							path: '/results',
							template: oItems
						});
					}
				});

				var funloc = sap.ui.core.Fragment.byId("techfragment", "functech");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/FunctionalLocAllDataSet', {
					//	filters: ofilters,
					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);
						var FunctionalLocation = oData.results[0].FunctionalLocation;
						var Text = oData.results[0].Text;

						console.log("FunctionalLocation:" + FunctionalLocation)
						console.log("Description:" + Text)
						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.FunctionalLocation) == -1) {
								dups.push(el.FunctionalLocation);
								return true;
							} else if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};
						console.log("arr11:" + arr11);
						var oItems = new sap.ui.core.ListItem({
							key: "{FunctionalLocation}",
							text: "{FunctionalLocation} {FunctionalLocationDesc}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(1000);
						funloc.setModel(oModel);
						funloc.bindItems("/arr11", oItems);

					},

				});

				tech.open();
			}

		},
		list: function () {
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Do you want to manage notification?", {
					//	        icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Warning Message",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						// notify user
						if (oAction == "YES") {
							//alert("clicked");
							sap.m.URLHelper.redirect(
								"https://managenotify-ba293bd41.dispatcher.us1.hana.ondemand.com/webapp/test/testFLPService.html?hc_reset#BUILD-prototype "
							);
							//window.location = "https:flpnwc-ba293bd41.dispatcher.us1.hana.ondemand.com/sites?siteId=2129522a-cfca-48cc-8961-c21762d0cb8b#Create_Notification_08032019-Display"
							//oRouter = sap.ui.core.UIComponent.getRouterFor(this);

							//oRouter.navTo("Login");

						} else(oAction == "NO");

						{
							//	alert("no actions")
						}
					}
				});

		},

		attachpost: function (oEvent) {
			var sUploadedFileName = oEvent.getParameter.fileName;
			//	alert(sUploadedFileName)
			setTimeout(function () {
				var oUploadCollection = this.byId("UploadCollection");

				for (var i = 0; i < oUploadCollection.getItems().length; i++) {
					if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
						oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
						break;
					}
				}

				// delay the success message in order to see other messages before
				MessageToast.show("Event uploadComplete triggered");
			}.bind(this), 8000);
		},
		onChange: function (oEvent) {
			var oUploadCollection = oEvent.getSource();
			// Header Token
			var oCustomerHeaderToken = new UploadCollectionParameter({
				name: "x-csrf-token",
				value: "securityTokenFromModel"
			});
			oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
			MessageToast.show("Event change triggered");
		},

		_onSegmentedButtonItemPress1: function () {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog2(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},
		_onButtonPress: function () {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog2(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},
		_onLinkPress: function () {

			var adata = [{
				name: "Check the Condition of Technical Object"
			}, {
				name: "Check the Malfunction"
			}, ];
			var notes = "";
			for (var i = 0; i < adata.length; i++) {
				notes = notes + adata[i].name + "\n \n";
			}

			this.getView().byId("text").setValue(notes);

		},
		org: function () {
			var type = this.getView().byId("notifif4").getSelectedKey();

			if (type === type) {
				this.getView().byId("prio12").setEnabled(true);
				this.getView().byId("descript").setEnabled(true);
				this.getView().byId("text").setEnabled(true);
				this.getView().byId("startdate").setEnabled(true);
				this.getView().byId("enddate").setEnabled(true);
				this.getView().byId("report").setEnabled(true);
				this.getView().byId("breakdown").setEnabled(true);
				this.getView().byId("malfunstart").setEnabled(true);
				this.getView().byId("TP6").setEnabled(true);
				this.getView().byId("malfunend").setEnabled(true);
				this.getView().byId("TP7").setEnabled(true);
				this.getView().byId("ci_fileUploader1").setEnabled(true);
				this.getView().byId("mapRmt").setEnabled(true);
				this.getView().byId("barRmt").setEnabled(true);
				this.getView().byId("linkId").setEnabled(true);
				this.getView().byId("addButton").setEnabled(true);
				this.getView().byId("lable").setVisible(true);
				this.getView().byId("breakdown").setVisible(true);
				this.getView().byId("creat").setEnabled(true);

				this.getView().byId("sav").setEnabled(true);
			}

		},
		reportedBy: function () {
			var cost = this.getView().byId("report");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read('/ReportedBySet', {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var ReportBy = oData.results[0].ReportBy;

					console.log("ReportBy:" + ReportBy)

					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.ReportBy) == -1) {
							dups.push(el.ReportBy);
							return true;
						}
						return false;
					});
					var arr9 = {
						"arr9": arr
					};
					console.log("arr9:" + arr9);
					var oItems = new sap.ui.core.ListItem({
						key: "{ReportBy}",
						text: "{ReportBy}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr9);
					oModel.setSizeLimit(900);
					cost.setModel(oModel);
					cost.bindItems("/arr9", oItems);

				},

			});
		},
		plant: function () {
			sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
			sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
			var oController = this;
			var plant = sap.ui.core.Fragment.byId("techfragment", "main").getSelectedKey();
			console.log("plant", plant);
			var table = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
			oModelJson = new sap.ui.model.json.JSONModel();
			var sPath = "/MasterF4HelpSet?$filter=Plant eq'" + plant + "'";
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					ocont.count = oData.results.length;
					console.log("ocont.count :", ocont.count);
					if (ocont.count == '0') {
						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);
					} else {
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(true);
						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({
							cells: [
								new sap.m.Text({
									text: "{FunctionalLocation}"
								}),
								new sap.m.Text({
									text: "{Text}"
								})
							]
						});
						table.setModel(oModelJson);
						table.bindItems("/results", oTemplate);

					}

				}

			});

			/*	alert("plant");

				var plant = sap.ui.core.Fragment.byId("techfragment", "main").getSelectedKey();
				console.log("plant", plant);
				var sPath = "/PlantF4Set?$filter=SupFLoc eq '" + plant + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var ocont = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						ocont.count = oData.results.length;
						alert("ocont.count", ocont.count);

						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({

							cells: [
								new sap.m.Text({
									text: "{FLoc}"
								}),
								new sap.m.Text({
									text: "{FLoc}"
								})

							]
						});
						table.setModel(oModelJson);
						table.bindItems("/results", oTemplate);

					}

				});*/

			/*			var plant = sap.ui.core.Fragment.byId("techfragment", "main").getSelectedKey();
						var t1 = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
						var oFilters = [new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, plant)];*/

			//			t1.setModel(oModel);

			/*			var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Text({
									text: "{FunctionalLocation}",

								}), new sap.m.Text({
									text: "{Text}"
								})

							]
						});*/

			//		t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
			/*			t1.bindItems({
							path: '/MasterF4HelpSet',
							parameters: {
								operationMode: "Default"
							},
							template: titems1,
							filters: oFilters
						});*/

			/*	var plant = sap.ui.core.Fragment.byId("techfragment", "main").getSelectedKey();

				var sPath = "/MasterF4HelpSet?$filter=Plant eq '" + plant + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				//	 var ocont = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						var count = oData.results.length;
						console.log("oData :", oData)
						var c4Model = new sap.ui.model.json.JSONModel();
						c4Model.setData(oData);
						var t5 = sap.ui.core.Fragment.byId("techfragment", "functech");
						t5.setModel(c4Model);
						var vescombo = sap.ui.core.Fragment.byId("techfragment", "functech");
						var oItems = new sap.ui.core.ListItem({
							key: "{FunctionalLocation}",
							text: "{FunctionalLocation}"
						});
						vescombo.bindAggregation("items", {
							path: '/results',
							template: oItems

						});

					},
				});*/

		},
		pool: function (oEvent) {
			var grp = oEvent.getSource().getSelectedKey();
			//	alert(grp);
			var sPath = "/ObjectPartF4Set?$filter=CodeGroup eq '" + grp + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("oData :", oData)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = ocont.getView().byId("objcode");
					t5.setModel(c4Model);
					var vescombo = ocont.getView().byId("objcode");
					var oItems = new sap.ui.core.ListItem({
						key: "{PartOfObject}",
						text: "{PartOfObject}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems

					});

				},
			});

		},
		objcode: function () {
			sap.ui.core.Fragment.byId("techfragment", "techok2").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok1").setVisible(false);
			sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
			sap.ui.core.Fragment.byId("techfragment", "techok3").setVisible(false);
			var oController = this;
			var cost = sap.ui.core.Fragment.byId("techfragment", "cost").getSelectedKey();
			console.log("cost", cost);
			var table = sap.ui.core.Fragment.byId("techfragment", "technical_detail");
			var oModel = new ODataModel("/sap/opu/odata/sap/zpm_f4_srv/", true);
			oModelJson = new sap.ui.model.json.JSONModel();

			var sPath = "/CostCenterMasterF4Set?$filter=CostCenter eq'" + cost + "'and FunLocFlag eq 'X'";
			var ocont = this;
			oModel.read(sPath, {
				//filters: [new sap.ui.model.Filter("SupFLoc", sap.ui.model.FilterOperator.EQ, '1032-LABS')], //"K1-B01-1")],
				success: function (oData, oResponse) {

					ocont.count = oData.results.length;
					console.log("ocont.count :", ocont.count);
					//	alert("ocont.count", ocont.count);

					if (ocont.count == '0') {

						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(false);
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(false);

					} else {
						sap.ui.core.Fragment.byId("techfragment", "techok").setVisible(true);
						//		alert("else");

						sap.ui.core.Fragment.byId("techfragment", "technical_detail").setVisible(true);

						oModelJson.setData(oData);
						var oTemplate = new sap.m.ColumnListItem({

							cells: [
								new sap.m.Text({
									text: "{FunctionalLocation}"
								}),
								new sap.m.Text({
									text: "{FunctionalLocationDesc}"
								})

							]
						});
						table.setModel(oModelJson);
						table.bindItems("/results", oTemplate);

					}

				}

			});

		},
		objcode11: function () {
			sap.ui.core.Fragment.byId("tablefragment", "objectcode").setEditable(true);
			var object = sap.ui.core.Fragment.byId("tablefragment", "technical1").getSelectedKey();
			var sPath = "/CodeGroupSet?$filter=Catalog eq 'B' and CodeGrp eq '" + object + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "objectcode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("tablefragment", "objectcode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				}
			});
		},
		objcode111: function () {
			var object = sap.ui.core.Fragment.byId("editTablefragment", "technical1").getValue();
			var obj = object.split(":");
			var object1 = obj[0];
			var sPath = "/CodeGroupSet?$filter=Catalog eq 'B' and CodeGrp eq '" + object1 + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "objectcode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("editTablefragment", "objectcode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				}
			});
		},

		damage: function () {
			sap.ui.core.Fragment.byId("tablefragment", "damagecode").setEditable(true);
			var damage = sap.ui.core.Fragment.byId("tablefragment", "damage").getSelectedKey();
			//var sPath = "/DamageF4Set?$filter=Problem eq '" + damage + "'";

			var sPath = "/CodeGroupSet?$filter=Catalog eq '' and CodeGrp eq '" + damage + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "damagecode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("tablefragment", "damagecode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				},
			});

		},

		damage1: function () {
			var damage = sap.ui.core.Fragment.byId("editTablefragment", "damage").getValue();
			var dama = damage.split(":");
			var dam = dama[0];
			//var sPath = "/DamageF4Set?$filter=Problem eq '" + damage + "'";

			var sPath = "/CodeGroupSet?$filter=Catalog eq '' and CodeGrp eq '" + dam + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "damagecode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("editTablefragment", "damagecode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				},
			});

		},
		cause: function () {
			sap.ui.core.Fragment.byId("tablefragment", "causecode").setEditable(true);
			var cause = sap.ui.core.Fragment.byId("tablefragment", "cause").getSelectedKey();
			//alert(cause)
			var sPath = "/CodeGroupSet?$filter=Catalog eq '5' and CodeGrp eq '" + cause + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("tablefragment", "causecode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("tablefragment", "causecode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				},
			});

		},
		cause1: function () {
			var cause = sap.ui.core.Fragment.byId("editTablefragment", "cause").getValue();
			var caus = cause.split(":");
			var cau = caus[0];
			//alert(cause)
			var sPath = "/CodeGroupSet?$filter=Catalog eq '5' and CodeGrp eq '" + cau + "'";
			var oModel = new ODataModel('/sap/opu/odata/sap/zpm_f4_srv/', true);
			var ocont = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					console.log("Count :", count)
					var c4Model = new sap.ui.model.json.JSONModel();
					c4Model.setData(oData);
					var t5 = sap.ui.core.Fragment.byId("editTablefragment", "causecode");
					t5.setModel(c4Model);
					var vescombo = sap.ui.core.Fragment.byId("editTablefragment", "causecode");
					var oItems = new sap.ui.core.ListItem({
						key: "{ValuationCode}",
						text: "{ValuationCode}:{CodeGroupDes}"
					});
					vescombo.bindAggregation("items", {
						path: '/results',
						template: oItems
					});
				},
			});

		},
		cancel: function () {
			this.edit.close();
		},
		_onTableDelete: function (oEvent) {

			var oSource = oEvent.getParameter("listItem");
			var oSourceBindingContext = oSource.getBindingContext();

			return new Promise(function (fnResolve, fnReject) {
				if (oSourceBindingContext) {
					var oModel = oSourceBindingContext.getModel();
					oModel.remove(oSourceBindingContext.getPath(), {
						success: function () {
							oModel.refresh();
							fnResolve();
						},
						error: function () {
							oModel.refresh();
							fnReject(new Error("remove failed"));
						}
					});
				} else {
					oSource.getParent().removeItem(oSource);
				}
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});
			/*	var deleteRecord = oArg.getSource().getBindingContext().getObject();
				for (var i = 0; i < this.cc_aDatad.length; i++) {
					if (this.cc_aDatad[i] == deleteRecord) {

						this.cc_aDatad.splice(i, 1); //removing 1 record from i th index.
						oModelccd.refresh();
						break; //quit the loop
					}
				}*/

		},
		_onUploadCollectionUploadComplete: function (oEvent) {

			var oFile = oEvent.getParameter("files")[0];
			var iStatus = oFile ? oFile.status : 500;
			var sResponseRaw = oFile ? oFile.responseRaw : "";
			var oSourceBindingContext = oEvent.getSource().getBindingContext();
			var sSourceEntityId = oSourceBindingContext ? oSourceBindingContext.getProperty("") : null;
			var oModel = this.getView().getModel();

			return new Promise(function (fnResolve, fnReject) {
				if (iStatus !== 200) {
					fnReject(new Error("Upload failed"));
				} else if (oModel.hasPendingChanges()) {
					fnReject(new Error("Please Save your Changes, first"));
				} else if (!sSourceEntityId) {
					fnReject(new Error("No source entity key"));
				} else {
					try {
						var oResponse = JSON.parse(sResponseRaw);
						var oNewEntityInstance = {};

						oNewEntityInstance[""] = oResponse["ID"];
						oNewEntityInstance[""] = sSourceEntityId;
						oModel.createEntry("", {
							properties: oNewEntityInstance
						});
						oModel.submitChanges({
							success: function (oResponse) {
								var oChangeResponse = oResponse.__batchResponses[0].__changeResponses[0];
								if (oChangeResponse && oChangeResponse.response) {
									oModel.resetChanges();
									fnReject(new Error(oChangeResponse.message));
								} else {
									oModel.refresh();
									fnResolve();
								}
							},
							error: function (oError) {
								fnReject(new Error(oError.message));
							}
						});
					} catch (err) {
						var message = typeof err === "string" ? err : err.message;
						fnReject(new Error("Error: " + message));
					}
				}
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onUploadCollectionChange: function (oEvent) {

			var oUploadCollection = oEvent.getSource();
			var aFiles = oEvent.getParameter('files');

			if (aFiles && aFiles.length) {
				var oFile = aFiles[0];
				var sFileName = oFile.name;

				var oDataModel = this.getView().getModel();
				if (oUploadCollection && sFileName && oDataModel) {
					var sXsrfToken = oDataModel.getSecurityToken();
					var oCsrfParameter = new sap.m.UploadCollectionParameter({
						name: "x-csrf-token",
						value: sXsrfToken
					});
					oUploadCollection.addHeaderParameter(oCsrfParameter);
					var oContentDispositionParameter = new sap.m.UploadCollectionParameter({
						name: "content-disposition",
						value: "inline; filename=\"" + encodeURIComponent(sFileName) + "\""
					});
					oUploadCollection.addHeaderParameter(oContentDispositionParameter);
				} else {
					throw new Error("Not enough information available");
				}
			}

		},
		_onUploadCollectionTypeMissmatch: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.warning(
					"The file you are trying to upload does not have an authorized file type (JPEG, JPG, GIF, PNG, TXT, PDF, XLSX, DOCX, PPTX).", {
						title: "Invalid File Type",
						onClose: function () {
							fnResolve();
						}
					});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		_onUploadCollectionFileSizeExceed: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
					title: "File Too Large",
					onClose: function () {
						fnResolve();
					}
				});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		save: function () {
			var techfuneqi = this.getView().getModel("oGlobalModel").getProperty("/techobjfunequ");
				

			var prio1 = this.getView().byId("prio12").getSelectedKey();

			var notif = this.getView().byId("notifif4").getSelectedKey();

			var type = this.getView().byId("notifif4").getSelectedKey();

			if (type === 'M2') {
				var put1 = [];

				var down = this.getView().byId("breakdown").mProperties.selected;
				if (down === true) {

					breakd = "X";

				} else {
					breakd = "";
				}

				//	eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getSelectedKey();

				var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();
				var barcode_equip = this.getView().getModel("oGlobalModel").getProperty("/barCode");
				var openvarpost = this.getView().getModel("oGlobalModel").getProperty("/openvarpost");
				if (openvarpost === true) {
					var techObj = this.getView().byId("productInput").getValue();
					var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();
					var eqispace = eqi.split(" ");
					var check = techObj.split(" ");
					var funcorequipment = check[0];
					if (funcorequipment === "Functional") {
						var func = check[1];
						this.eqi = "";
					} else if (funcorequipment === "Equipment") {
						var func = "";
						this.eqi = check[1];
					} else if (eqi === "") {
						var func = check[0];
					} else {
						this.eqi = eqispace[0];
					}

				} else {
					if (eqi === "") {

						var func1 = this.getView().byId("productInput").getValue();
						var SplitTotalFoot = func1.split(" ");
						var func = SplitTotalFoot[0];

						if (eqi === "" && barcode_equip === undefined) {
							var func1 = this.getView().byId("productInput").getValue();
							var SplitTotalFoot = techfuneqi.split(" ");
							var func = SplitTotalFoot[0];
						} else {

							var equipment = barcode_equip.split(" ");
							this.eqi = equipment[0];

						}

					} else {

						var func = "";
						if (eqi === "") {

							var equipment = barcode_equip.split(" ");
							this.eqi = equipment[0];

						} else {

							this.getView().byId("productInput").setValue(eqi);
							var equipment = eqi.split(" ");
							this.eqi = equipment[0];

						}
					}
				}
				var text = this.getView().byId("text").getValue();
				descripNoti = this.getView().byId("descript").getValue();
				var arrayOfItems = [];
				var arrayOfCause = [];
				var message = true;
				/*var func1 = this.getView().byId("productInput").getValue();
				var SplitTotalFoot = func1.split(" ")
				var func = SplitTotalFoot[0];*/

				var notif = this.getView().byId("notifif4").getSelectedKey();
				var prio = this.getView().byId("prio12").getSelectedKey();
				nameNoti = this.getView().byId("report").getValue();
				var tech = this.getView().byId("productInput").getSelectedKey();
				var today = new Date();
				console.log("today1", today);
				var dd = String(today.getDate()).padStart(2, '0');
				console.log("dd", dd);
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				console.log("mm", mm);
				var yyyy = today.getFullYear();
				console.log("yyyy", yyyy);
				today = yyyy + '-' + mm + '-' + dd + 'T' + '00' + ':' + '00' + ':' + '00';
				console.log("today2", today);
				var reqsta = this.getView().byId("startdate").getValue();
				var yy1 = reqsta.slice(6, 10);
				var mm1 = reqsta.slice(3, 5);
				var dat1 = reqsta.slice(0, 2);
				var reqir_star = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
				var reqend = this.getView().byId("enddate").getValue();
				var yy2 = reqend.slice(6, 10);
				var mm2 = reqend.slice(3, 5);
				var dat2 = reqend.slice(0, 2);
				var reqir_end = yy2 + '-' + mm2 + '-' + dat2 + 'T' + '00' + ':' + '00' + ':' + '00';
				var malfuncstart = this.getView().byId("malfunstart").getValue();
				var date = malfuncstart.slice(0, 2);
				var month = malfuncstart.slice(3, 5);
				var year = malfuncstart.slice(6, 10);
				var malfuncstartdate = year.concat(month, date);
				console.log("malfuncstartdate", malfuncstartdate)
				var malfuncend = this.getView().byId("malfunend").getValue();
				if (malfuncend == '') {
					var malfuncenddate = "00000000";
				} else {
					var date = malfuncend.slice(0, 2);
					var month = malfuncend.slice(3, 5);
					var year = malfuncend.slice(6, 10);
					var malfuncenddate = year.concat(month, date);
					console.log("malfuncenddate", malfuncenddate)

				}

				var malstarttime = this.getView().byId("TP6").getValue();
				if (malstarttime == '') {
					//	alert("if malstarttime")

					var malstarttime1 = "000000";

					//	alert(malstarttime1)
				} else {
					//	alert("else malstarttime")

					var ss1 = malstarttime.slice(6, 8);
					var mmm = malstarttime.slice(3, 5);
					var hh = malstarttime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malstarttime1 = hh.concat(mmm, ss1);
					//	alert("malstarttime1", malstarttime1);
				}
				/*			var ss1 = malstarttime.slice(6, 8);
							var mmm = malstarttime.slice(3, 5);
							var hh = malstarttime.slice(0, 2);
							var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
				//alert(malstarttime1)
				//////////////////// MALFUNCTION sTART TIME ///////////////////////////

				//////////////////// MALFUNCTION END TIME ///////////////////////////
				var malendtime = this.getView().byId("TP7").getValue();
				if (malendtime == '') {
					//	alert("if malendtime")

					var malendtime1 = "000000";

					//	alert(malendtime1)
				} else {
					//	alert("else malendtime")

					var ss1 = malendtime.slice(6, 8);
					var mmm = malendtime.slice(3, 5);
					var hh = malendtime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malendtime1 = hh.concat(mmm, ss1);
					//	alert("malendtime1", malendtime1);

					/*	var ss1 = malendtime.slice(6, 8);
						var mmm = malendtime.slice(3, 5);
						var hh = malendtime.slice(0, 2);
						var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/

				}
				//////////////////// MALFUNCTION END TIME ///////////////////////////

				var tableid = this.getView().byId("idProductsTable");
				var eqpChg = this.getView().byId("equiptInp").getValue();
				//	alert(eqpChg)
				if (notif == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select notification type.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else if (func1 == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select technical object.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (prio == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select priority.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_star == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select requierd start date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_end == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select requierd end date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (descripNoti == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please write description.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (malfuncstart == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select malfunction start date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				}
				/*else if (malstarttime == '') {
							var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
							MessageBox.error(
								"Please select Malfunction Start Time.", {
									styleClass: bCompact ? "sapUiSizeCompact" : ""
								}
							);

						}*/
				else if (nameNoti == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select reporter.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else {
					var that = this;

					sap.m.MessageBox.show(
						"Do you want to create notification ?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation Message",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								// notify user
								if (oAction == "YES") {
									//	that.getView().getModel("viewModel").setProperty("/busy", true);
									var tablelength = tableid.getItems().length;
									console.log("TableLenth :", tablelength);
									for (var i = 0; i < tablelength; i++) {
										var rows = tableid.getItems()[i];
										var itemnumber = rows.getCells()[0].getText();
										var object1 = rows.getCells()[1].getText();
										var object2 = object1.split(":");
										var object = object2[0];
										var objectcode1 = rows.getCells()[2].getText();
										var objectcode2 = objectcode1.split(":");
										var objectcode = objectcode2[0];
										var damage1 = rows.getCells()[3].getText();
										var damage2 = damage1.split(":");
										var damage = damage2[0];
										var damagecode1 = rows.getCells()[4].getText();
										var damagecode2 = damagecode1.split(":");
										var damagecode = damagecode2[0];
										var causegroup1 = rows.getCells()[5].getText();
										var causegroup2 = causegroup1.split(":");
										var causegroup = causegroup2[0];
										var causecode = rows.getCells()[6].getText();
										var causetext = causecode.split(":");
										var causecode1 = causetext[0];
										var causetext = causetext[1];

										var obj = {
											"ImNotifType": " ",
											"Refobjectkey": " ",
											"ItemSortNo": "0001",
											"Descript": "",
											"DCodegrp": object,
											"DCode": objectcode,
											"DlCodegrp": damage,
											"DlCode": damagecode,
											"Assembly": "T-FS101",
											"AssemblyExternal": " ",
											"AssemblyGuid": " ",
											"AssemblyVersion": " ",
											"StartPoint": " ",
											"EndPoint": " ",
											"LinearLength": " ",
											"LinearUnit": " ",
											"LinearUnitIso": " ",
											"FirstOffsetTypeCode": " ",
											"FirstOffsetValue": " ",
											"FirstOffsetUnit": " ",
											"FirstOffsetUnitIso": " ",
											"SecondOffsetTypeCode": " ",
											"SecondOffsetValue": " ",
											"SecondOffsetUnit": " ",
											"SecondOffsetUnitIso": " ",
											"Equipment": this.eqi,
											"FunctLoc": " ",
											"MarkerStartPoint": " ",
											"MarkerDistanceStartPoint": " ",
											"MarkerEndPoint": " ",
											"MarkerDistanceEndPoint": " ",
											"MarkerDistanceUnit": " ",
											"MarkerDistanceUnitIso": " "
										};

										console.log("obj", obj);

										arrayOfItems.push(obj);
										var causeObj = {
											ItemKey: itemnumber,
											CauseKey: "",
											CauseCodeGrp: causegroup,
											CauseCode: causecode1,
											CauseText: causetext
										};

										console.log("causeObj", causeObj);

										arrayOfCause.push(causeObj);
										console.log(arrayOfCause);

									}

									var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
									var postdata = {
										"NotifNo": " ",
										"Equipment": this.eqi,
										"FunctLoc": func,
										"Priority": prio,
										"Desstdate": today,
										"Desenddate": reqir_end,
										"ShortText": descripNoti,
										"SysStatus": " ",
										"PmWkctr": "",
										"UserSt": " ",
										"Userstatus": " ",
										"Planplant": "",
										"Maintroom": " ",
										"Plsectn": " ",
										"Maintloc": "",
										"Breakdown": breakd,
										"Strmlfndate": malfuncstartdate,
										"Endmlfndate": malfuncenddate,
										"Strmlfntime": malstarttime1,
										"Endmlfntime": malendtime1,
										"Unit": " ",
										"Plangroup": "",
										"Maintplant": "",
										"Reportedby": nameNoti,
										"PersonResponsible": " ",
										"NotifType": notif,
										"CreatedBy": "",
										"Notiftime": "000000",
										"NotifDate": today,
										"Abcindic": " ",
										"Sortfield": " ",
										"BusArea": " ",
										"CoArea": " ",
										"Costcenter": " ",
										"WbsElement": " ",
										"Type": " ",
										"Message": " ",
										"LongText": text,
										"ToItems": arrayOfItems,
										"ToCause": arrayOfCause,
										"ToReturn": [{
											"Type": "",
											"Message": " "
										}]
									};
									console.log("postdata", postdata);
									this.resulttab = sap.ui.core.Fragment.byId("results", "tab3");
									var that = this;
									var sPath = "/NotificationCreatHeaderSet";
									oModel3.create(sPath, postdata, {
										success: function (oData, oResponse) {
											that.getView().getModel("viewModel").setProperty("/busy", false);
											//	that.getView().getModel("globalModel").setProperty("/mailText", oData.ToReturn.results[0].Message);
											var tablen = oData.ToReturn.results.length;
											for (var j = 0; j < tablen; j++) {

												var Type = oData.ToReturn.results[j].Type;
												var msg1 = oData.ToReturn.results[0].Message;
												//	that.getView().getModel("globalModel").setProperty("/mailText", msg1);
												// if it a mobile device
												if (sap.ui.Device.system.desktop) {

													var HCPAccount, serverHost, deliveryAddress, oSubscription;

													deliveryAddress = "/Push_notification/" +
														"restnotification/application/com.sap.webide.x8411b485718e4ef78ed9781f49d0b561";
													oSubscription = {
														"alert": msg1,
														"data": "Test message sent from Web IDE"
													};
													var payload = JSON.stringify(oSubscription);
													$.ajax({
														url: deliveryAddress,
														type: "POST",
														contentType: "application/json",
														dataType: "json",
														data: payload,
														success: function (data, textStatus, jqxhr) {

														},
														error: function (jqxhr, textStatus, errorThrown) {

														}
													});

												}

												if (Type === "I") {

													Type = "Information";

												} else if (Type === "S") {
													//	that.PDF();
													Type = "Success";
													sap.ui.core.Fragment.byId("results", "mail").setVisible(true);
													sap.ui.core.Fragment.byId("results", "pdf").setVisible(true);
													sap.ui.core.Fragment.byId("results", "okay").setVisible(true);
													sap.ui.core.Fragment.byId("results", "cansucc").setVisible(false);

												} else if (Type === "E") {

													Type = "Error";  
													sap.ui.core.Fragment.byId("results", "mail").setVisible(false);
													sap.ui.core.Fragment.byId("results", "pdf").setVisible(false);
													sap.ui.core.Fragment.byId("results", "okay").setVisible(false);
													sap.ui.core.Fragment.byId("results", "cansucc").setVisible(true);

												} else if (Type === "W") {

													Type = "Warning";

												}

												var retrun = oData.ToReturn.results[j].Message;
												//	that.getView().getModel("globalModel").setProperty("/mailText", retrun);

												notnum = retrun.slice(13, 21);
												notifynum = ':	' + notnum;

												var obj = {
													Type2: Type,
													Message: retrun
												};

												put1.push(obj);
												console.log("result", put1);

											} //loop end

											result.open();

											var oTemplate = new sap.m.ColumnListItem({

												cells: [
													new sap.m.Text({
														text: "{Type2}"
													}),
													new sap.m.Text({
														text: "{Message}"
													})
												]
											});

											that.oModelJson = new sap.ui.model.json.JSONModel();
											that.oModelJson.setData({
												tabdata1: put1
											});
											that.resulttab.setModel(that.oModelJson);
											that.resulttab.bindItems("/tabdata1", oTemplate);

											// if it a mobile device
											/*		if (sap.ui.Device.system.desktop) {
												this.subscribeForPushNotifications(Message);
											}
*/
										}
									});
								}
							}.bind(this)
						});

				};
			} else {

				var down = this.getView().byId("breakdown").mProperties.selected;
				if (down === true) {

					breakd = "X";

				} else {
					breakd = "";
				}

				//	alert("Posting");

				var today = new Date();
				console.log("today", today)

				/*var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getSelectedKey();
				this.getView().byId("equiptInp").setValue(eqi);
				this.eqpCh = eqi;*/
				var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();
				var barcode_equip = this.getView().getModel("oGlobalModel").getProperty("/barCode");
				var openvarpost = this.getView().getModel("oGlobalModel").getProperty("/openvarpost");
				
				if (openvarpost === true) {
					var techObj = this.getView().byId("productInput").getValue();
					var eqi = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();
					var eqispace = eqi.split(" ");
					var check = techfuneqi.split(" ");
					var funcorequipment = check[0];
					if (funcorequipment === "Functional") {
						var func = check[1];
						this.eqi = "";
					} else if (funcorequipment === "Equipment") {
						var func = "";
						this.eqi = check[1];
					} else if (eqi === "") {
						var func = check[0];
					} else {
						this.eqi = eqispace[0];
					}

				} else {
					if (eqi === "") {
						var func1 = this.getView().byId("productInput").getValue();
						var SplitTotalFoot = func1.split(" ");
						var func = SplitTotalFoot[0];

						if (eqi === "" && barcode_equip === undefined) {
							var func1 = this.getView().byId("productInput").getValue();
							var SplitTotalFoot = func1.split(" ");
							var func = SplitTotalFoot[0];
						} else {

							var equipment = barcode_equip.split(" ");
							this.eqi = equipment[0];

						}
					} else {

						var func = "";
						if (eqi === "") {

							var equipment = barcode_equip.split(" ");
							this.eqi = equipment[0];

						} else {

							this.getView().byId("productInput").setValue(eqi);
							var equipment = eqi.split(" ");
							this.eqi = equipment[0];

						}
					}
				}
				var text = this.getView().byId("text").getValue();
				//	alert(text)
				descripNoti = this.getView().byId("descript").getValue();
				//	alert(text);
				var arrayOfItems = [];
				var arrayOfCause = [];
				var put1 = [];
				var message = true;
				/*var func1 = this.getView().byId("productInput").getValue();
				var SplitTotalFoot = func1.split(" ")
				var func = SplitTotalFoot[0];*/

				console.log("act_valu1 :", func1)
				var notif = this.getView().byId("notifif4").getSelectedKey();
				var prio = this.getView().byId("prio12").getSelectedKey();
				nameNoti = this.getView().byId("report").getValue();
				var tech = this.getView().byId("productInput").getSelectedKey();

				var malfuncstart = this.getView().byId("malfunstart").getValue();
				console.log("malfuncstart", malfuncstart)
				var date = malfuncstart.slice(0, 2);
				var month = malfuncstart.slice(3, 5);
				var year = malfuncstart.slice(6, 10);
				var malfuncstartdate = year.concat(month, date);
				console.log("malfuncstartdate", malfuncstartdate)

				//	var yy1 = malfuncstart.slice(6, 10);
				//	var mm1 = malfuncstart.slice(3, 5);
				//	var dat1 = malfuncstart.slice(0, 2);
				//	var malfuncstartdate = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
				//	console.log("malfuncstartdate", malfuncstartdate)
				//////////////////// MALFUNCTION START TIME ///////////////////////////
				var malstarttime = this.getView().byId("TP6").getValue();

				if (malstarttime == '') {
					//	alert("if malstarttime")

					var malstarttime1 = "000000";

					//	alert(malstarttime1)
				} else {
					//	alert("else malstarttime")

					var ss1 = malstarttime.slice(6, 8);
					var mmm = malstarttime.slice(3, 5);
					var hh = malstarttime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malstarttime1 = hh.concat(mmm, ss1);
					//	alert("malstarttime1", malstarttime1);

					/*					var ss1 = malstarttime.slice(6, 8);
										var mmm = malstarttime.slice(3, 5);
										var hh = malstarttime.slice(0, 2);
										var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/

				}

				/*	var ss1 = malstarttime.slice(6, 8);
					var mmm = malstarttime.slice(3, 5);
					var hh = malstarttime.slice(0, 2);
					var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
				//	console.log("malstarttime1", malstarttime1)
				//////////////////// MALFUNCTION START TIME ///////////////////////////
				//////////////////// MALFUNCTION END TIME ///////////////////////////
				var malendtime = this.getView().byId("TP7").getValue();

				if (malendtime == '') {
					//	alert("if malendtime")

					var malendtime1 = "000000";

					//	alert(malendtime1)
				} else {
					//	alert("else malendtime")

					var ss1 = malendtime.slice(6, 8);
					var mmm = malendtime.slice(3, 5);
					var hh = malendtime.slice(0, 2);
					//	var malstarttime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';

					var malendtime1 = hh.concat(mmm, ss1);
					//	alert("malendtime1", malendtime1);

					/*					var ss1 = malendtime.slice(6, 8);
										var mmm = malendtime.slice(3, 5);
										var hh = malendtime.slice(0, 2);
										var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';
										console.log("malendtime1", malendtime1)*/
				}
				//////////////////// MALFUNCTION END TIME ///////////////////////////
				/*				var ss1 = malendtime.slice(6, 8);
								var mmm = malendtime.slice(3, 5);
								var hh = malendtime.slice(0, 2);
								var malendtime1 = 'PT' + hh + 'H' + mmm + 'M' + ss1 + 'S';*/
				//	console.log("malendtime1", malendtime1)

				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();
				today = yyyy + '-' + mm + '-' + dd + 'T' + '00' + ':' + '00' + ':' + '00';
				//	alert(today);
				var reqsta = this.getView().byId("startdate").getValue();
				//	alert(reqsta)
				var yy1 = reqsta.slice(6, 10);
				var mm1 = reqsta.slice(3, 5);
				var dat1 = reqsta.slice(0, 2);
				var reqir_star = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
				//	alert(reqir_star)
				var reqend = this.getView().byId("enddate").getValue();
				//	alert(reqend);
				var yy2 = reqend.slice(6, 10);
				var mm2 = reqend.slice(3, 5);
				var dat2 = reqend.slice(0, 2);
				var reqir_end = yy2 + '-' + mm2 + '-' + dat2 + 'T' + '00' + ':' + '00' + ':' + '00';
				var tableid = this.getView().byId("idProductsTable");
				var that = this;
				//////////////////// MALFUNCTION END DATE ///////////////////////////
				var malfuncend = this.getView().byId("malfunend").getValue();
				if (malfuncend == '') {
					//	alert("if malfuncend")

					var malfuncenddate = "00000000";

					//	alert(malfuncenddate)
				} else {
					//	alert("else malfuncend")

					var date = malfuncend.slice(0, 2);
					var month = malfuncend.slice(3, 5);
					var year = malfuncend.slice(6, 10);
					var malfuncenddate = year.concat(month, date);
					console.log("malfuncenddate", malfuncenddate)

					/*	var yy1 = malfuncend.slice(6, 10);
						var mm1 = malfuncend.slice(3, 5);
						var dat1 = malfuncend.slice(0, 2);
						var malfuncenddate = yy1 + '-' + mm1 + '-' + dat1 + 'T' + '00' + ':' + '00' + ':' + '00';
						alert(malfuncenddate);*/
				}
				//////////////////// MALFUNCTION END DATE ///////////////////////////

				if (notif == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select notification type.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				} else if (func1 == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select technical object.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (prio == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select priority.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_star == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select requierd start date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (reqir_end == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select requierd end date.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (descripNoti == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please write description.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else if (nameNoti == '') {
					var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Please select reporter.", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);

				} else {

					sap.m.MessageBox.show(
						"Do you want to create notification ?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation Message",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								// notify user
								if (oAction == "YES") {
									this.getView().getModel("viewModel").setProperty("/busy", true);
									var tablelength = tableid.getItems().length;
									console.log("TableLenth :", tablelength);
									for (var i = 0; i < tablelength; i++) {
										var rows = tableid.getItems()[i];
										var itemnumber = rows.getCells()[0].getText();
										var object1 = rows.getCells()[1].getText();
										var object2 = object1.split(":");
										var object = object2[0];
										var objectcode1 = rows.getCells()[2].getText();
										var objectcode2 = objectcode1.split(":");
										var objectcode = objectcode2[0];
										var damage1 = rows.getCells()[3].getText();
										var damage2 = damage1.split(":");
										var damage = damage2[0];
										var damagecode1 = rows.getCells()[4].getText();
										var damagecode2 = damagecode1.split(":");
										var damagecode = damagecode2[0];
										var causegroup1 = rows.getCells()[5].getText();
										var causegroup2 = causegroup1.split(":");
										var causegroup = causegroup2[0];
										var causecode = rows.getCells()[6].getText();
										var causetext = causecode.split(":");
										var causecode1 = causetext[0];
										var causetext = causetext[1];

										var causetext = causecode.split(":");
										//alert(causetext);
										//console.log(descr)
										var causecode1 = causetext[0];
										var causetext = causetext[1];
										//alert(causecode1)
										//alert(causetext)

										var obj = {
											"ImNotifType": " ",
											"Refobjectkey": " ",
											"ItemSortNo": "0001",
											"Descript": "",
											"DCodegrp": object,
											"DCode": objectcode,
											"DlCodegrp": damage,
											"DlCode": damagecode,
											"Assembly": "T-FS101",
											"AssemblyExternal": " ",
											"AssemblyGuid": " ",
											"AssemblyVersion": " ",
											"StartPoint": " ",
											"EndPoint": " ",
											"LinearLength": " ",
											"LinearUnit": " ",
											"LinearUnitIso": " ",
											"FirstOffsetTypeCode": " ",
											"FirstOffsetValue": " ",
											"FirstOffsetUnit": " ",
											"FirstOffsetUnitIso": " ",
											"SecondOffsetTypeCode": " ",
											"SecondOffsetValue": " ",
											"SecondOffsetUnit": " ",
											"SecondOffsetUnitIso": " ",
											"Equipment": this.eqi,
											"FunctLoc": " ",
											"MarkerStartPoint": " ",
											"MarkerDistanceStartPoint": " ",
											"MarkerEndPoint": " ",
											"MarkerDistanceEndPoint": " ",
											"MarkerDistanceUnit": " ",
											"MarkerDistanceUnitIso": " "
										};

										console.log("obj", obj);

										arrayOfItems.push(obj);

										//**************************Cause item set *********************************//						
										var causeObj = {
											ItemKey: itemnumber,
											CauseKey: "",
											CauseCodeGrp: causegroup,
											CauseCode: causecode1,
											CauseText: causetext
										};
										arrayOfCause.push(causeObj);
									}

									var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
									var postdata = {
										"NotifNo": " ",
										"Equipment": this.eqi,
										"FunctLoc": func,
										"Priority": prio,
										"Desstdate": today,
										"Desenddate": reqir_end,
										"ShortText": descripNoti,
										"SysStatus": " ",
										"PmWkctr": "",
										"UserSt": " ",
										"Userstatus": " ",
										"Planplant": "",
										"Maintroom": " ",
										"Plsectn": " ",
										"Maintloc": "",
										"Breakdown": breakd,
										"Strmlfndate": malfuncstartdate, //malfuncstartdate
										"Endmlfndate": malfuncenddate, //malfuncenddate
										"Strmlfntime": malstarttime1, //malstarttime1
										"Endmlfntime": malendtime1, //malendtime1
										"Unit": " ",
										"Plangroup": "",
										"Maintplant": "",
										"Reportedby": nameNoti,
										"PersonResponsible": " ",
										"NotifType": notif,
										"CreatedBy": "",
										"Notiftime": "000000",
										"NotifDate": today,
										"Abcindic": " ",
										"Sortfield": " ",
										"BusArea": " ",
										"CoArea": " ",
										"Costcenter": " ",
										"WbsElement": " ",
										"Type": " ",
										"Message": " ",
										"LongText": text,
										"ToItems": arrayOfItems,
										"ToCause": arrayOfCause,
										"ToReturn": [{
											"Type": "",
											"Message": " "
										}]

									};

									console.log("posting", postdata);
									this.resulttab = sap.ui.core.Fragment.byId("results", "tab3");
									var that = this;
									var sPath = "/NotificationCreatHeaderSet";
									oModel3.create(sPath, postdata, {
										success: function (oData, oResponse) {
											that.getView().getModel("viewModel").setProperty("/busy", false);

											console.log(oData);
											var tablen = oData.ToReturn.results.length;
											for (var j = 0; j < tablen; j++) {

												var Type = oData.ToReturn.results[j].Type;
												var msg1 = oData.ToReturn.results[0].Message;

												//	console.log("that.msg1", that.msg1);

												// if it a mobile device
												if (sap.ui.Device.system.desktop) {

													var HCPAccount, serverHost, deliveryAddress, oSubscription;

													deliveryAddress = "/Push_notification/" +
														"restnotification/application/com.sap.webide.x8411b485718e4ef78ed9781f49d0b561";
													oSubscription = {
														"alert": msg1,
														//"alert": appContext,
														"data": "Test message sent from Web IDE"
													};
													var payload = JSON.stringify(oSubscription);
													$.ajax({
														url: deliveryAddress,
														type: "POST",
														contentType: "application/json",
														dataType: "json",
														data: payload,
														success: function (data, textStatus, jqxhr) {

														},
														error: function (jqxhr, textStatus, errorThrown) {

														}
													});

												}

												if (Type === "I") {

													Type = "Information";

												} else if (Type === "S") {

													Type = "Success";
													sap.ui.core.Fragment.byId("results", "mail").setVisible(true);
													sap.ui.core.Fragment.byId("results", "pdf").setVisible(true);
													sap.ui.core.Fragment.byId("results", "okay").setVisible(true);
													sap.ui.core.Fragment.byId("results", "cansucc").setVisible(false);

												} else if (Type === "E") {

													Type = "Error";
													sap.ui.core.Fragment.byId("results", "mail").setVisible(false);
													sap.ui.core.Fragment.byId("results", "pdf").setVisible(false);
													sap.ui.core.Fragment.byId("results", "okay").setVisible(false);
													sap.ui.core.Fragment.byId("results", "cansucc").setVisible(true);

												} else if (Type === "W") {

													Type = "Warning";

												}

												var retrun = oData.ToReturn.results[j].Message;

												notnum = retrun.slice(13, 21);
												notifynum = ':	' + notnum;

												var obj = {
													Type2: Type,
													Message: retrun
												};

												put1.push(obj);
												console.log("result", put1);

											} //loop end

											result.open();

											var oTemplate = new sap.m.ColumnListItem({

												cells: [
													new sap.m.Text({
														text: "{Type2}"
													}),
													new sap.m.Text({
														text: "{Message}"
													})
												]
											});

											that.oModelJson = new sap.ui.model.json.JSONModel();
											that.oModelJson.setData({
												tabdata1: put1
											});
											that.resulttab.setModel(that.oModelJson);
											that.resulttab.bindItems("/tabdata1", oTemplate);

										}

									});

								}
							}.bind(this)
						});

				}

			}

		},
		tableok1: function () {
			var that = this;
			that.getView().getModel("viewModel").setProperty("/busy", true);
			var totalattach = that.getView().byId("UploadCollection").getItems().length;
			if (totalattach == '0') {
				/*	sap.m.URLHelper.redirect(
						"https://requestsatuardayfilter1-ba293bd41.dispatcher.us1.hana.ondemand.com/webapp/test/testFLPService.html?hc_reset#BUILD-prototype"
					);*/
				window.location.reload();
			} else {
				that.DMS();
				/*		sap.m.URLHelper.redirect(
							"https://requestsatuardayfilter1-ba293bd41.dispatcher.us1.hana.ondemand.com/webapp/test/testFLPService.html?hc_reset#BUILD-prototype"
						);*/

				window.location.reload();
			}

		},
		cancelfra: function () {
			result.close();
		},
		/*onScanForValue: function (oEvent) {
			if (!this._oScanDialog) {
				this._oScanDialog = new sap.m.Dialog({
					title: "Scan Barcode",
					contentWidth: "640px",
					contentHeight: "480px",
					horizontalScrolling: false,
					verticalScrolling: false,
					stretchOnPhone: true,
					content: [new sap.ui.core.HTML({
						id: this.createId("scanContainer"),
						content: "<div />"
					})],
					endButton: new sap.m.Button({
						text: "Cancel",
						type: "Emphasized",
						press: function (oEvent) {
							this._oScanDialog.close();
						}.bind(this)
					}),
					afterOpen: function () {
						// TODO: Investigate why Quagga.init needs to be called every time...possibly because DOM 
						// element is destroyed each time dialog is closed
						this._initQuagga(this.getView().byId("scanContainer").getDomRef()).done(function () {
							// Initialisation done, start Quagga
							Quagga.start();
						}).fail(function (oError) {
							// Failed to initialise, show message and close dialog...this should not happen as we have
							// already checked for camera device ni /model/models.js and hidden the scan button if none detected
							MessageBox.error(oError.message.length ? oError.message : ("Failed to initialise Quagga with reason code " + oError.name), {
								onClose: function () {
									this._oScanDialog.close();
								}.bind(this)
							});
						}.bind(this));
					}.bind(this),
					afterClose: function () {
						// Dialog closed, stop Quagga
						Quagga.stop();
					}
				});

				this.getView().addDependent(this._oScanDialog);
			}

			this._oScanDialog.open();
		},*/
		onScanForValue: function (oEvent) {
			if (!this._oScanDialog) {
				this._oScanDialog = new sap.m.Dialog({
					title: "Scan Barcode",
					contentWidth: "640px",
					contentHeight: "480px",
					horizontalScrolling: false,
					verticalScrolling: false,
					stretchOnPhone: true,
					content: [new sap.ui.core.HTML({
						// id: this.createId("scanContainer"),
						content: "<div> <video id='scanContainer'></video></div>"
					})],
					endButton: new sap.m.Button({
						text: "Cancel",
						type: "Emphasized",
						press: function (oEvent) {
							this._oScanDialog.close();
						}.bind(this)
					}),
					afterOpen: function () {

						let selectedDeviceId;
						const codeReader = new ZXing.BrowserBarcodeReader()
						console.log('ZXing code reader initialized')
						codeReader.getVideoInputDevices()
							.then((videoInputDevices) => {
								const sourceSelect = document.getElementById('sourceSelect')
								selectedDeviceId = videoInputDevices[0].deviceId
								if (videoInputDevices.length > 1) {
									videoInputDevices.forEach((element) => {
										const sourceOption = document.createElement('option')
										sourceOption.text = element.label
										sourceOption.value = element.deviceId
										sourceSelect.appendChild(sourceOption)
									})

									sourceSelect.onchange = () => {
										selectedDeviceId = sourceSelect.value;
									}

									const sourceSelectPanel = document.getElementById('sourceSelectPanel')
									sourceSelectPanel.style.display = 'block'
								}
								codeReader.decodeOnceFromVideoDevice(selectedDeviceId, 'scanContainer').then((result) => {
									console.log(result);
									console.log(result.text);
									// alert(result);
									var BarCodedata = result.text;
									console.log(BarCodedata);
									this.getView().getModel("oGlobalModel").setProperty("/barCode", BarCodedata);
									this.getView().byId("productInput").setValue(result.text);
									/*	var oModel12 = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
										var sPath = "/EquipPullSet('" + BarCodedata + "')";
										var oCont = this;
										oModel12.read(sPath, {
											success: function (oData, oResponse) {
												console.log("oData", oData);

												var plannergrp = oData.PlannerGroup;
												var plannerdesc = oData.PlnGrpDesc;
												oCont.byId("plannergrp").setValue(plannergrp + " " + plannerdesc);

												var planningplant = oData.PlanningPlant;
												var plantdesc = oData.PlnPlantDesc;
												oCont.byId("plant1212").setValue(planningplant + " " + plantdesc);

												var mainwork = oData.MainWorkCenter + " " + oData.MainWorkCenterDes;
												oCont.byId("workcenter").setValue(mainwork);

												var wrk = oData.PPWorkName + " " + oData.PPWorkcenterDes;
												oCont.byId("workcenter1").setValue(wrk);
												oCont.byId("workcenter1").setEditable(false);

												var plantselection = oData.PlantSection;
												var plantselectiondesc = oData.PlantSecDesc;
												oCont.byId("plantselec").setValue(plantselection + " " + plantselectiondesc);
												oCont.byId("plantselec").setEditable(false);

												var mainplant = oData.MaintPlant;
												oCont.byId("mainplan").setValue(mainplant + " " + plantdesc);
												oCont.byId("mainplan").setEditable(false);

												var room = oData.Room;
												oCont.byId("room").setValue(room);
												oCont.byId("room").setEditable(false);

												var Location = oData.Location;
												var locdesc = oData.LocDesc;
												oCont.byId("location").setValue(Location + " " + locdesc);
												oCont.byId("location").setEditable(false);

											}
										});*/

									//	this.submit();
									// Close dialog
									this._oScanDialog.close();
									/*	var techobj = this.getView().byId("productInput").getValue();
										var techfrst = techobj.split(" ");
										var splitted = techfrst[0];

										var oController = this;
										var table = oController.getView().byId("tabletype");
										var oModel = new ODataModel("/sap/opu/odata/sap/zpm_f4_srv/", true);
										oModelJson = new sap.ui.model.json.JSONModel();
										var sPath = "/NotificationListSet";

										oModel.read(sPath, {
											filters: [new sap.ui.model.Filter("EquipmentNumber", sap.ui.model.FilterOperator.EQ, splitted),
												new sap.ui.model.Filter("Last5Records", sap.ui.model.FilterOperator.EQ, 'X')
											], //"K1-B01-1")],
											success: function (oData, oResponse) {
												// console.log("Function oModel:", oData);	
												oModelJson.setData(oData);
												var oTemplate = new sap.m.ColumnListItem({
													cells: [
														new sap.m.ObjectIdentifier({
															title: "{Notification}"
														}),
														new sap.m.Text({
															text: "{ path: 'createdDate', type: 'sap.ui.model.odata.type.Date', formatOptions: { style: 'medium', pattern: 'dd.MM.yyyy'  } }"
														}),
														new sap.m.Text({
															text: "{NotificationDes}"
														}),

														new sap.m.Text({
															text: "{StatusInd}"
														}),
														new sap.m.Text({
															text: "{ReportedBy}"
														}),
														new sap.m.Text({
															text: "{PriorityText}"
														})
													]
												});
												table.setModel(oModelJson);
												table.bindItems("/results", oTemplate);
											}

										});*/
									codeReader.reset();
									console.log('Reset.')
										// this._oScanDialog.close();
										// document.getElementById('result').textContent = result.text
								}).catch((err) => {
									console.error(err)
										// document.getElementById('result').textContent = err
								})
								console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
							})

					}.bind(this),
					afterClose: function () {
						// Dialog closed, stop Quagga
						// Quagga.stop();
					}
				});

				this.getView().addDependent(this._oScanDialog);
				console.log(this._oScanDialog);
			}

			this._oScanDialog.open();

		},

		_initQuagga: function (oTarget) {
			var oDeferred = jQuery.Deferred();

			// Initialise Quagga plugin - see https://serratus.github.io/quaggaJS/#configobject for details
			Quagga.init({
				inputStream: {
					type: "LiveStream",
					target: oTarget,
					constraints: {
						width: {
							min: 640
						},
						height: {
							min: 480
						},
						facingMode: "environment"
					}
				},
				locator: {
					patchSize: "medium",
					halfSample: true
				},
				numOfWorkers: 2,
				frequency: 10,
				decoder: {
					readers: [
						"code_128_reader",
						"ean_reader",
						"ean_8_reader",
						"code_39_reader",
						"code_39_vin_reader",
						"codabar_reader",
						"upc_reader",
						"upc_e_reader",
						"i2of5_reader",
						"2of5_reader",
						"code_93_reader"
					],
					debug: {
						showCanvas: true,
						showPatches: true,
						showFoundPatches: true,
						showSkeleton: true,
						showLabels: true,
						showPatchLabels: true,
						showRemainingPatchLabels: true,
						boxFromPatches: {
							showTransformed: true,
							showTransformedBox: true,
							showBB: true
						}
					}
				},
				locate: true
			}, function (error) {
				if (error) {
					oDeferred.reject(error);
				} else {
					oDeferred.resolve();
				}
			});

			if (!this._bQuaggaEventHandlersAttached) {
				// Attach event handlers...

				Quagga.onProcessed(function (result) {
					var drawingCtx = Quagga.canvas.ctx.overlay,
						drawingCanvas = Quagga.canvas.dom.overlay;

					if (result) {
						// The following will attempt to draw boxes around detected barcodes
						if (result.boxes) {
							drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
							result.boxes.filter(function (box) {
								return box !== result.box;
							}).forEach(function (box) {
								Quagga.ImageDebug.drawPath(box, {
									x: 0,
									y: 1
								}, drawingCtx, {
									color: "green",
									lineWidth: 2
								});
							});
						}

						if (result.box) {
							Quagga.ImageDebug.drawPath(result.box, {
								x: 0,
								y: 1
							}, drawingCtx, {
								color: "#00F",
								lineWidth: 2
							});
						}

						if (result.codeResult && result.codeResult.code) {
							Quagga.ImageDebug.drawPath(result.line, {
								x: 'x',
								y: 'y'
							}, drawingCtx, {
								color: 'red',
								lineWidth: 3
							});
						}
					}
				}.bind(this));

				Quagga.onDetected(function (result) {
					// Barcode has been detected, value will be in result.codeResult.code. If requierd, validations can be done 
					// on result.codeResult.code to ensure the correct format/type of barcode value has been picked up

					// Set barcode value in input field
					this.getView().byId("productInput").setValue(result.codeResult.code);
					var BarCodedata = result.codeResult.code;
					this.getView().getModel("oGlobalModel").setProperty("/barCode", BarCodedata);

					//	this.submit();
					// Close dialog
					this._oScanDialog.close();

					this.getView().byId("link").setVisible(true);
					this.getView().byId("link1").setVisible(false);
				}.bind(this));

				// Set flag so that event handlers are only attached once...
				this._bQuaggaEventHandlersAttached = true;
			}

			return oDeferred.promise();
		},
		okmap: function () {
			maps.close();

		},

		location: function () {

			/*var cc = sap.ui.core.Fragment.byId("techfragment", "technical1").getValue();

			this.getView().byId("productInput").setValue(cc);*/
			tech.close();

		},
		equip: function () {
			var cc11 = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();

			this.getView().byId("productInput").setValue(cc11);
			tech.close();
		},
		details: function (oEvent) {
			var sQuickviewName = "QuickView1";
			this.mQuickviews = this.mQuickviews || {};
			var oQuickview = this.mQuickviews[sQuickviewName];

			if (!oQuickview) {
				oQuickview = new QuickView1(this.getView());
				this.mQuickviews[sQuickviewName] = oQuickview;

				oQuickview.getControl().setPlacement("PreferredLeftOrFlip");

				// For navigation.
				oQuickview.setRouter(this.oRouter);
			}

			var oSource = oEvent.getSource();

			var details = this.getView().byId("productInput").getValue();

			var SplitTotalFoot = details.split(" ")
			var act_valu = SplitTotalFoot[0];
			console.log("act_valu :", act_valu)
				//var typ1e = this.getView().byId("prio").getValue();
				//	this.startbind();
			var sPath = "/EquipPullSet('" + act_valu + "')";
			console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log("oData", oData);

					oController.byId("plant").setValue(oData.PlanningPlant + ' ' + oData.PlnPlantDesc);
					oController.byId("descri").setValue(oData.Location + ' ' + oData.LocDesc);
					oController.byId("plantgrp").setValue(oData.MainWorkCenter + ' ' + oData.MainWorkCenterDes);
					oController.byId("sales").setValue(oData.ABCIndicator);
					oController.byId("dischanel").setValue(oData.SystemStatus);

					var oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				},
			});

			oQuickview.open(oSource);

		},
		details1: function (oEvent) {
			var sQuickviewName = "QuickView2";
			this.mQuickviews = this.mQuickviews || {};
			var oQuickview = this.mQuickviews[sQuickviewName];

			if (!oQuickview) {
				oQuickview = new QuickView2(this.getView());
				this.mQuickviews[sQuickviewName] = oQuickview;

				oQuickview.getControl().setPlacement("PreferredLeftOrFlip");

				// For navigation.
				oQuickview.setRouter(this.oRouter);
			}

			var oSource = oEvent.getSource();

			var details = this.getView().byId("productInput").getValue();

			var SplitTotalFoot = details.split(" ")
			var act_valu = SplitTotalFoot[0];
			console.log("act_valu :", act_valu)
				//var typ1e = this.getView().byId("prio").getValue();
				//	this.startbind();
			var sPath = "/FunctionalDataPullSet('" + act_valu + "')";
			console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log("oData", oData);

					oController.byId("plant1").setValue(oData.PlanningPlant + ' ' + oData.PlnPlantDesc);
					oController.byId("descri1").setValue(oData.Location + ' ' + oData.LocDesc);
					oController.byId("plantgrp1").setValue(oData.MainWorkCenter + ' ' + oData.MainWorkCenterDes);
					oController.byId("sales1").setValue(oData.ABCIndicator);
					oController.byId("dischanel1").setValue(oData.SystemStatus);

					var oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				},
			});

			oQuickview.open(oSource);

		},

		subscribeForPushNotifications: function (appContext) {

			var HCPAccount, serverHost, deliveryAddress, oSubscription;

			deliveryAddress = "/Push_notification/" + "restnotification/application/com.sap.webide.x8411b485718e4ef78ed9781f49d0b561";
			oSubscription = {
				"alert": appContext,
				"data": "Test message sent from Web IDE"
			};
			var payload = JSON.stringify(oSubscription);
			$.ajax({
				url: deliveryAddress,
				type: "POST",
				contentType: "application/json",
				dataType: "json",
				data: payload,
				success: function (data, textStatus, jqxhr) {

				},
				error: function (jqxhr, textStatus, errorThrown) {

				}
			});

			// if the app context is not null
			/*	if (appContext) {
					// build the delivery address
					serverHost = appContext.registrationContext.serverHost;
					alert(serverHost);
					HCPAccount = serverHost.substring(serverHost.indexOf("-") + 1, serverHost.indexOf("."));
					alert(HCPAccount);
					deliveryAddress = "https://hcpms-" + HCPAccount +
						".hanatrial.ondemand.com/restnotification/registration/" +
						appContext.applicationConnectionId;
					alert(HCPAccount);
					oSubscription = {};

					var d = new Date();
					var t = d.getTime();
					oSubscription.LASTUPDATED = "/Date(" + t + ")/";
					oSubscription.DEVICEID = appContext.applicationConnectionId;
					oSubscription.DELIVERYADDRESS = deliveryAddress;
					oSubscription.TITLE = "Test";
					oSubscription.MOBILEUSER = appContext.registrationContext.user.toUpperCase();
					var oModel = this.getOwnerComponent().getModel();
					// storing the delivery address
					oModel.create("/Subscription", oSubscription, null, this._subscriptionCreateSuccess, this._subscriptionCreateError);
				} else {
					console.log("Application context is null!");
				}*/
		},

		_subscriptionCreateSuccess: function (oData, response) {
			console.log("Successfully subscribed for event");
		},

		_subscriptionCreateError: function (oError) {
			console.log("Failed to subscribe to event");
		},
		closeMap: function () {
			maps.close();
		},
		savevarok: function () {
			var oModelVariant = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

			var variantName = sap.ui.core.Fragment.byId("savevariant", "varname").getValue();
			var variantDes = sap.ui.core.Fragment.byId("savevariant", "var_des").getValue();

			if (variantName === '') {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please enter the variant name", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			} else {
				var that = this;

				that.notifType = that.getView().byId("notifif4").mProperties.selectedKey;
				if (that.notifType === "M1") {
					notifsave = "M1 Maintenance Request";
				} else if (that.notifType === "M2") {
					notifsave = "M2 Malfunction Request";
				} else if (that.notifType === "M3") {
					notifsave = "M3 Preventive Repair";
				} else if (that.notifType === "M4") {
					notifsave = "M4 Shutdown Maintenance";
				} else if (that.notifType === "M5") {
					notifsave = "M5 General Notification";
				}

				that.notifTypeLabel = that.getView().byId("notifTypeLabel").mProperties.text;

				// that.techObj = that.getView().byId("productInput").getValue();
				var cost = sap.ui.core.Fragment.byId("techfragment", "cost").getValue();
				var plant = sap.ui.core.Fragment.byId("techfragment", "main").getValue();
				var fl1 = sap.ui.core.Fragment.byId("techfragment", "functech").getValue();
				var fl2 = sap.ui.core.Fragment.byId("techfragment", "subfunctech").getValue();
				var fl = fl1 + fl2;
				var equipment = sap.ui.core.Fragment.byId("techfragment", "equip").getValue();

				if (cost !== "") {
					that.techObj = "Functional" + " " + cost;
				} else if (plant !== "") {
					that.techObj = "Functional" + " " + plant;
				} else if (fl !== "") {
					that.techObj = "Functional" + " " + fl;
				} else if (equipment !== "") {
					that.techObj = "Equipment" + " " + equipment;
				}

				that.techObjLabel = that.getView().byId("techObjLabel").mProperties.text;

				var prio = that.getView().byId("prio12").mProperties.selectedKey;

				if (prio === "1") {
					priorsave = "Very high";
				} else if (prio === "2") {
					priorsave = "High";
				} else if (prio === "3") {
					priorsave = "Medium";
				} else if (prio === "4") {
					priorsave = "Low";
				}

				that.priorityLabel = that.getView().byId("priorityLabel").mProperties.text;

				that.Description = that.getView().byId("descript").getValue();

				that.descLabel = that.getView().byId("descLabel").mProperties.text;

				that.LongText = that.getView().byId("text").getValue();

				that.LongTextLabel = that.getView().byId("LongTextLabel").mProperties.text;

				that.startDate = that.getView().byId("startdate").getValue();

				that.startDateLabel = that.getView().byId("startDateLabel").mProperties.text;

				that.endDate = that.getView().byId("enddate").getValue();

				that.endDateLabeoGlobalModell = that.getView().byId("endDateLabel").mProperties.text;

				that.report = that.getView().byId("report").getSelectedKey();

				that.reportLabel = that.getView().byId("reportLabel").mProperties.text;

				that.malstartDate = that.getView().byId("malfunstart").getValue();

				that.malstartDateLabel = that.getView().byId("malstartDateLabel").mProperties.text;

				that.malstartTime = that.getView().byId("TP6").getValue();

				that.malstartTimeLabel = that.getView().byId("malstartTimeLabel").mProperties.text;

				that.malendDate = that.getView().byId("malfunend").getValue();

				that.malendDateLabel = that.getView().byId("malendDateLabel").mProperties.text;

				that.malendTime = that.getView().byId("TP7").getValue();

				that.malendTimeLabel = that.getView().byId("malendTimeLabel").mProperties.text;

				that.breakdown = that.getView().byId("lable").mProperties.text;
				that.breakvalue = that.getView().byId("breakdown").mProperties.selected;
				if (that.breakvalue === true) {
					var breakval = "true";
				} else if (that.breakvalue === false) {
					var breakval = "false";
				}

				sap.m.MessageBox.show(
					"Do you want to save the variant ?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// // notify user
							if (oAction == "YES") {
								// var that = this;

								var postdata = {
									"VariantDate": "",
									"VariantTime": "",
									"ModuleName": "PM",
									"ApplicationName": "NOTIFICATION",
									"VariantName": variantName,
									"VariantDescription": variantDes,
									"CreatedBy": that.report,

									"Header2ItemNavi": [{
										"FieldName": that.notifTypeLabel,
										"FieldValue": notifsave
									}, {
										"FieldName": that.techObjLabel,
										"FieldValue": that.techObj
									}, {
										"FieldName": that.priorityLabel,
										"FieldValue": priorsave
									}, {
										"FieldName": that.descLabel,
										"FieldValue": that.Description
									}, {
										"FieldName": that.LongTextLabel,
										"FieldValue": that.LongText
									}, {
										"FieldName": that.startDateLabel,
										"FieldValue": that.startDate
									}, {
										"FieldName": that.endDateLabeoGlobalModell,
										"FieldValue": that.endDate
									}, {
										"FieldName": that.reportLabel,
										"FieldValue": that.report
									}, {
										"FieldName": "Mal Start Date",
										"FieldValue": that.malstartDate
									}, {
										"FieldName": "Mal Start Time",
										"FieldValue": that.malstartTime
									}, {
										"FieldName": "Mal End Date",
										"FieldValue": that.malendDate
									}, {
										"FieldName": "Mal End Time",
										"FieldValue": that.malendTime
									}, , {
										"FieldName": that.breakdown,
										"FieldValue": breakval
									}]
								};
								console.log("hidata", postdata);
								var sPath = "/HeaderSet";
								oModelVariant.create(sPath, postdata, {
									success: function (oData, oResponse) {
										var msg1 = "Variant name '" + variantName + "' saved successfully";
										// alert(msg1);
										console.log(oData);
										MessageToast.show(msg1);
									},
									error: function (oData, oResponse) {
										console.log(oData);
									}
								});
							}
						}
					});
				that.savevariant.close();
			}
		},
		savevariant: function () {
			this.savevariant.open();

			this.report1 = this.getView().byId("report").getSelectedKey();

			this.getView().getModel("oGlobalModel").setProperty("/createdname", this.report1);

			/*var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();
			today = yyyy + mm + dd;
			this.getView().byId("varsavedate").setValue(today);*/
		},
		savevarcancel: function () {
			this.savevariant.close();
		},
		openvariant: function () {
			this.openvariant.open();
			var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
			var sPath = "/VariantF4Set?$filter=ModuleName eq 'PM' and ApplicationName eq 'NOTIFICATION'";
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					this.getView().getModel("oGlobalModel").setProperty("/variantNames", oData.results);
				}.bind(this)
			});
		},
		openvarcancel: function () {
			this.openvariant.close();
		},
		openvarok: function (oEvent) {
			this.clikok = "X";

			var that = this;
			var newValue = sap.ui.core.Fragment.byId("openvariant", "selectvarname").getValue();
			if (newValue === "") {
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				MessageBox.error(
					"Please select the variant name", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			} else {
				var oModel1 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				var oFilter = [new sap.ui.model.Filter("ModuleName", sap.ui.model.FilterOperator.EQ, 'PM'),
					new sap.ui.model.Filter("ApplicationName", sap.ui.model.FilterOperator.EQ, 'NOTIFICATION'),
					new sap.ui.model.Filter("VariantName", sap.ui.model.FilterOperator.EQ, newValue)
				];
				var sPath = "/HeaderSet";
				oModel1.read(sPath, {
					urlParameters: { //format for using expabd odata
						"$expand": "Header2ItemNavi" //Multiple expand odata
					},
					filters: oFilter,
					success: function (oData, oResponse) {
						console.log("test", oData);
						var count = oData.results[0].Header2ItemNavi.results.length;
						for (var i = 0; i < count; i++) {
							var FieldName = oData.results[0].Header2ItemNavi.results[i].FieldName;

							if (FieldName === "Notification Type") {
								var notifopen1 = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								that.getView().byId("notifif4").setValue(notifopen1);
								if (notifopen1 === "M1 Maintenance Request") {
									notifsaveopen = "M1";
									that.getView().byId("notifif4").setSelectedKey(notifsaveopen);
								} else if (notifopen1 === "M2 Malfunction Request") {
									notifsaveopen = "M2";
									that.getView().byId("notifif4").setSelectedKey(notifsaveopen);
								} else if (notifopen1 === "M3 Preventive Repair") {
									notifsaveopen = "M3";
									that.getView().byId("notifif4").setSelectedKey(notifsaveopen);
								} else if (notifopen1 === "M4 Shutdown Maintenance") {
									notifsaveopen = "M4";
									that.getView().byId("notifif4").setSelectedKey(notifsaveopen);
								} else if (notifopen1 === "M5 General Notification") {
									notifsaveopen = "M5";
									that.getView().byId("notifif4").setSelectedKey(notifsaveopen);
								}

							} else if (FieldName === "Technical Object") {
								var fun = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								that.getView().getModel("oGlobalModel").setProperty("/techobjfunequ",fun);
								var str = fun.includes("Functional");
								
								var str1 = fun.includes("Equipment");
								
								if(str === true || str1 === true){
									var ten = fun.split(' ').slice(1).join(' ');
									
									
									that.getView().byId("productInput").setValue(ten);
									
								}
								

								
							} else if (FieldName === "Priority") {
								var prioropen = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								that.getView().byId("prio12").setValue(prioropen);
								if (prioropen === "Very high") {
									priorhigh = "1";
									that.getView().byId("prio12").setSelectedKey(priorhigh);
								} else if (prioropen === "High") {
									priorhigh = "2";
									that.getView().byId("prio12").setSelectedKey(priorhigh);
								} else if (prioropen === "Medium") {
									priorhigh = "3";
									that.getView().byId("prio12").setSelectedKey(priorhigh);
								} else if (prioropen === "Low") {
									priorhigh = "4";
									that.getView().byId("prio12").setSelectedKey(priorhigh);
								}
							} else if (FieldName === "Description") {
								that.getView().byId("descript").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Long Text") {
								that.getView().byId("text").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Start Date") {
								that.getView().byId("startdate").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "End Date") {
								that.getView().byId("enddate").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Reported By") {
								that.getView().byId("report").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Mal Start Date") {
								that.getView().byId("malfunstart").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Mal Start Time") {
								that.getView().byId("TP6").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Mal End Date") {
								that.getView().byId("malfunend").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "Mal End Time") {
								that.getView().byId("TP7").setValue(oData.results[0].Header2ItemNavi.results[i].FieldValue);
							} else if (FieldName === "BreakDown") {
								var noteBreak = oData.results[0].Header2ItemNavi.results[i].FieldValue;
								if (noteBreak === "true") {
									that.getView().byId("breakdown").setSelected(true);
								} else if (noteBreak === "false") {
									that.getView().byId("breakdown").setSelected(false);
								}
							}

						}

					}

				});
				that.openvariant.close();
				sap.ui.core.Fragment.byId("openvariant", "selectvarname").setSelectedKey("");
				that.getView().byId("prio12").setEnabled(true);
				that.getView().byId("descript").setEnabled(true);
				that.getView().byId("text").setEnabled(true);
				that.getView().byId("startdate").setEnabled(true);
				that.getView().byId("enddate").setEnabled(true);
				that.getView().byId("report").setEnabled(true);
				that.getView().byId("breakdown").setEnabled(true);
				that.getView().byId("malfunstart").setEnabled(true);
				that.getView().byId("TP6").setEnabled(true);
				that.getView().byId("malfunend").setEnabled(true);
				that.getView().byId("TP7").setEnabled(true);
				that.getView().byId("ci_fileUploader1").setEnabled(true);
				that.getView().byId("mapRmt").setEnabled(true);
				that.getView().byId("barRmt").setEnabled(true);
				that.getView().byId("linkId").setEnabled(true);
				that.getView().byId("addButton").setEnabled(true);
				that.getView().byId("lable").setVisible(true);
				that.getView().byId("breakdown").setVisible(true);
				that.getView().byId("creat").setEnabled(true);

				that.getView().byId("sav").setEnabled(true);
			}
			this.getView().getModel("oGlobalModel").setProperty("/openvarpost", true);
		},

		onInit: function () {
			this.savevariant = sap.ui.xmlfragment("savevariant",
				"com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.SaveVariant", this);
			this.getView().addDependent(this.savevariant);
			this.openvariant = sap.ui.xmlfragment("openvariant",
				"com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.OpenVariant", this);
			this.getView().addDependent(this.openvariant);

			maps = sap.ui.xmlfragment("maps", "com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.map", this);
			this.getView().addDependent(maps);
			tech = sap.ui.xmlfragment("techfragment", "com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.tech", this);
			this.getView().addDependent(tech);
			loca = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.location", this);
			//	this.loca = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.location", this);
			this.getView().addDependent(loca);
			equip = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.equipment", this);
			this.getView().addDependent(equip);
			table = sap.ui.xmlfragment("tablefragment", "com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.table",
				this);
			this.getView().addDependent(table);
			this.edit = sap.ui.xmlfragment("editTablefragment",
				"com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.editTable",
				this);
			this.getView().addDependent(this.edit);
			result = sap.ui.xmlfragment("results", "com.sap.build.ba293bd41-us_1.mobileRequestMaintenanceV5BNewdash.fragments.Success", this);
			this.getView().addDependent(result);

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			this.F4Values = this.getOwnerComponent().getModel("F4Set");

			var that = this;

			/*// if it a mobile device
			if (!sap.ui.Device.system.desktop) {
				// get the logon context passing a success and an error callbacks
				sap.logon.Core.getContext(
					//success call back
					function (result) {
						// call the function that will store the delivery address for future use
						that.subscribeForPushNotifications(result);
						console.log("Successfully got the app context");

					},
					//error call back
					function () {
						console.log("Failed to get the app context");

					}
				);
			}*/

		}
	});
}, /* bExport= */ true);